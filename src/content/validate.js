import { BRANDS } from './site.js'
import { SERVICIOS, getServicio } from './servicios.js'
import { GUIAS, getGuia } from './guias.js'
import { FAQS_GENERALES } from './faqs.js'

const SLUG = /^[a-z0-9-]+$/
const FECHA = /^\d{4}-\d{2}-\d{2}$/
const CAMPOS_SERVICIO = ['citaId', 'icono', 'nombre', 'duracion', 'title', 'description', 'h1', 'tarjeta', 'resumen', 'descripcion', 'datos', 'incluye', 'pasos', 'paraQuien', 'faqs', 'guias']
const CAMPOS_GUIA = ['title', 'description', 'h1', 'tarjeta', 'respuesta', 'secciones', 'cuandoConsultar', 'revisado', 'servicio']

// Todas las cadenas de una entrada, sin importar la profundidad.
function cadenasDe(valor) {
  if (typeof valor === 'string') return [valor]
  if (Array.isArray(valor)) return valor.flatMap(cadenasDe)
  if (valor && typeof valor === 'object') return Object.values(valor).flatMap(cadenasDe)
  return []
}

// Campos que no se muestran como texto de la página.
const NO_VISIBLES = ['slug', 'citaId', 'icono', 'marcas', 'guias', 'title', 'description', 'tarjeta', 'revisado', 'servicio', 'tipo']

// Palabras del texto visible de un servicio o una guía.
export function palabrasDe(entrada) {
  const visible = (valor) => {
    if (Array.isArray(valor)) return valor.flatMap(visible)
    if (valor && typeof valor === 'object') {
      return Object.entries(valor).filter(([campo]) => !NO_VISIBLES.includes(campo)).flatMap(([, v]) => visible(v))
    }
    return typeof valor === 'string' ? [valor] : []
  }
  return visible(entrada).join(' ').split(/\s+/).filter(Boolean).length
}

const vacio = (valor) => valor == null || valor === '' || (Array.isArray(valor) && valor.length === 0)

function validarMeta(id, { title, description }) {
  const errores = []
  if (title && title.length > 60) errores.push(`${id}: title tiene ${title.length} caracteres (máximo 60)`)
  if (description && (description.length < 120 || description.length > 160)) {
    errores.push(`${id}: description tiene ${description.length} caracteres (de 120 a 160)`)
  }
  return errores
}

function validarEntradas(tipo, entradas, campos) {
  const errores = []
  const vistos = new Set()
  for (const entrada of entradas) {
    const id = `${tipo} ${entrada.slug}`
    if (!SLUG.test(entrada.slug ?? '')) errores.push(`${id}: slug inválido`)
    if (vistos.has(entrada.slug)) errores.push(`${id}: slug repetido`)
    vistos.add(entrada.slug)
    for (const campo of campos) {
      if (vacio(entrada[campo])) errores.push(`${id}: falta ${campo}`)
    }
    errores.push(...validarMeta(id, entrada))
    if (cadenasDe(entrada).some((texto) => texto.includes('aggregateRating'))) {
      errores.push(`${id}: no se permite aggregateRating`)
    }
  }
  return errores
}

// Lista de errores del contenido; vacía si todo es válido.
export function validateContent() {
  const errores = [
    ...validarEntradas('servicio', SERVICIOS, CAMPOS_SERVICIO),
    ...validarEntradas('guía', GUIAS, CAMPOS_GUIA),
  ]

  for (const servicio of SERVICIOS) {
    const id = `servicio ${servicio.slug}`
    const faqs = servicio.faqs?.length ?? 0
    if (faqs < 3 || faqs > 5) errores.push(`${id}: tiene ${faqs} faqs (de 3 a 5)`)
    for (const slug of servicio.guias ?? []) {
      if (!getGuia(slug)) errores.push(`${id}: guía inexistente ${slug}`)
    }
    if (servicio.marcas !== null && !(servicio.marcas in BRANDS)) {
      errores.push(`${id}: marcas desconocidas ${servicio.marcas}`)
    }
  }

  for (const guia of GUIAS) {
    const id = `guía ${guia.slug}`
    if (!getServicio(guia.servicio)) errores.push(`${id}: servicio inexistente ${guia.servicio}`)
    if (!FECHA.test(guia.revisado ?? '')) errores.push(`${id}: revisado debe ser AAAA-MM-DD`)
  }

  for (const { tema, preguntas } of FAQS_GENERALES) {
    if (vacio(tema) || vacio(preguntas)) errores.push(`faqs: tema incompleto ${tema}`)
    for (const { pregunta, respuesta } of preguntas ?? []) {
      if (vacio(pregunta) || vacio(respuesta)) errores.push(`faqs ${tema}: pregunta incompleta`)
    }
  }

  return errores
}
