import test from 'node:test'
import assert from 'node:assert/strict'
import { SERVICIOS, getServicio } from '../src/content/servicios.js'
import { GUIAS, getGuia } from '../src/content/guias.js'
import { FAQS_GENERALES } from '../src/content/faqs.js'
import { validateContent } from '../src/content/validate.js'

test('hay 4 servicios y 6 guías con los slugs de la spec', () => {
  assert.deepEqual(SERVICIOS.map((s) => s.slug), [
    'examen-visual', 'gafas-y-monturas', 'lentes-de-contacto', 'reparacion-de-gafas',
  ])
  assert.equal(GUIAS.length, 6)
  assert.equal(getServicio('examen-visual').citaId, 'examen')
  assert.equal(getGuia('lentes-progresivos').servicio, 'gafas-y-monturas')
  assert.equal(getServicio('no-existe'), undefined)
})

test('el contenido es válido', () => {
  assert.deepEqual(validateContent(), [])
})

test('hay exactamente 4 preguntas generales destacadas', () => {
  const destacadas = FAQS_GENERALES.flatMap((t) => t.preguntas).filter((p) => p.destacada)
  assert.equal(destacadas.length, 4)
})

test('preselección de servicio en /citas', async () => {
  const { servicioDesdeQuery } = await import('../src/content/servicios.js')
  assert.equal(servicioDesdeQuery('?servicio=examen'), 'examen')
  assert.equal(servicioDesdeQuery('?servicio=inventado'), '')
  assert.equal(servicioDesdeQuery(''), '')
})

test('cada servicio tiene entre 500 y 700 palabras', async () => {
  const { palabrasDe } = await import('../src/content/validate.js')
  for (const s of SERVICIOS) {
    const n = palabrasDe(s)
    assert.ok(n >= 500 && n <= 700, `${s.slug}: ${n}`)
  }
})

test('cada guía tiene entre 600 y 900 palabras y al menos 3 secciones', async () => {
  const { palabrasDe } = await import('../src/content/validate.js')
  for (const g of GUIAS) {
    const n = palabrasDe(g)
    assert.ok(n >= 600 && n <= 900, `${g.slug}: ${n}`)
    assert.ok(g.secciones.length >= 3, g.slug)
    assert.ok(g.cuandoConsultar.length > 0, g.slug)
  }
})

test('las guías comparativas incluyen una tabla', () => {
  for (const slug of ['gafas-o-lentes-de-contacto', 'fotocromaticos-y-luz-azul']) {
    const bloques = getGuia(slug).secciones.flatMap((s) => s.bloques)
    assert.ok(bloques.some((b) => b.tipo === 'tabla'), slug)
  }
})
