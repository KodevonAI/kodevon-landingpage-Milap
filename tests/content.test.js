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
