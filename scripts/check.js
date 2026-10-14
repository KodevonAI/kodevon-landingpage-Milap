// Comprueba las invariantes SEO del build en dist/. Uso: npm run build && npm run check
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ENTIDADES = { '&amp;': '&', '&quot;': '"', '&#x27;': "'", '&#39;': "'", '&lt;': '<', '&gt;': '>', '&nbsp;': ' ' }
const decodificar = (texto) => texto.replace(/&(?:amp|quot|#x27|#39|lt|gt|nbsp);/g, (entidad) => ENTIDADES[entidad])
const compactar = (texto) => texto.replace(/\s+/g, ' ').trim()

const archivoDe = (ruta) => (ruta === '/' ? 'index.html' : `${ruta.slice(1)}.html`)

function atributo(html, patron) {
  const etiqueta = html.match(patron)?.[0]
  return etiqueta?.match(/(?:content|href)="([^"]*)"/)?.[1]
}

// Texto que ve un lector: sin <script>, <style> ni etiquetas.
function textoVisible(html) {
  const cuerpo = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')
  return compactar(decodificar(cuerpo))
}

function bloquesJsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1])
}

function erroresDePagina(ruta, html, distDir, rutas) {
  const errores = []
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html)

  const titulo = decodificar(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '')
  const description = decodificar(atributo(html, /<meta name="description"[^>]*>/) ?? '')
  if (!titulo) errores.push(`${ruta}: falta el título`)
  if (!description) errores.push(`${ruta}: falta la description`)
  if (!noindex) {
    if (titulo.length > 60) errores.push(`${ruta}: título de ${titulo.length} caracteres (máximo 60)`)
    if (description && (description.length < 120 || description.length > 160)) {
      errores.push(`${ruta}: description de ${description.length} caracteres (de 120 a 160)`)
    }
    if (!atributo(html, /<link rel="canonical"[^>]*>/)) errores.push(`${ruta}: falta el canonical`)
  }

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length
  if (h1 !== 1) errores.push(`${ruta}: tiene ${h1} H1 (debe tener 1)`)

  const visible = textoVisible(html)
  for (const bloque of bloquesJsonLd(html)) {
    let datos
    try {
      datos = JSON.parse(bloque)
    } catch {
      errores.push(`${ruta}: JSON-LD inválido`)
      continue
    }
    if (datos['@type'] !== 'FAQPage') continue
    for (const pregunta of datos.mainEntity ?? []) {
      const respuesta = compactar(pregunta.acceptedAnswer?.text ?? '')
      if (!visible.includes(respuesta)) errores.push(`${ruta}: respuesta de FAQ no visible en la página: "${pregunta.name}"`)
    }
  }

  for (const [, href] of html.matchAll(/<a\s[^>]*href="(\/[^"]*)"/g)) {
    const destino = href.split(/[?#]/)[0]
    if (destino.length > 1 && destino.endsWith('/')) {
      errores.push(`${ruta}: enlace con barra final ${href}`)
    } else if (!rutas.includes(destino) && !fs.existsSync(path.join(distDir, destino))) {
      errores.push(`${ruta}: enlace interno roto ${href}`)
    }
  }

  if (html.includes('[CONFIRMAR')) errores.push(`${ruta}: queda un [CONFIRMAR] sin resolver`)

  return { errores, titulo, description, noindex }
}

// Devuelve la lista de errores del build; vacía si todo está bien.
export function checkDist(distDir, rutas) {
  const errores = []
  const titulos = new Map()
  const descriptions = new Map()

  for (const ruta of rutas) {
    const archivo = path.join(distDir, archivoDe(ruta))
    if (!fs.existsSync(archivo)) {
      errores.push(`${ruta}: no existe ${archivoDe(ruta)}`)
      continue
    }
    const pagina = erroresDePagina(ruta, fs.readFileSync(archivo, 'utf-8'), distDir, rutas)
    errores.push(...pagina.errores)
    if (pagina.noindex) continue
    for (const [vistos, valor, nombre] of [[titulos, pagina.titulo, 'título'], [descriptions, pagina.description, 'description']]) {
      if (vistos.has(valor)) errores.push(`${ruta}: ${nombre} repetido con ${vistos.get(valor)}`)
      else vistos.set(valor, ruta)
    }
  }

  // Sin JavaScript, el menú de la home debe seguir enlazando cada servicio.
  const home = path.join(distDir, 'index.html')
  if (rutas.includes('/') && fs.existsSync(home)) {
    const html = fs.readFileSync(home, 'utf-8')
    for (const ruta of rutas.filter((r) => r.startsWith('/servicios/'))) {
      if (!html.includes(`href="${ruta}"`)) errores.push(`/: el menú no enlaza ${ruta}`)
    }
  }

  const llms = path.join(distDir, 'llms.txt')
  if (fs.existsSync(llms) && fs.readFileSync(llms, 'utf-8').includes('[CONFIRMAR')) {
    errores.push('llms.txt: queda un [CONFIRMAR] sin resolver')
  }

  return errores
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
  const { ROUTES } = await import(pathToFileURL(path.join(root, 'src/seo/routes.js')).href)
  const errores = checkDist(path.join(root, 'dist'), [...Object.keys(ROUTES), '/404'])
  for (const error of errores) console.error(`✖ ${error}`)
  console.log(errores.length ? `\n${errores.length} errores` : `check: ${Object.keys(ROUTES).length} páginas correctas`)
  process.exit(errores.length ? 1 : 0)
}
