import test from 'node:test'
import assert from 'node:assert/strict'
import { ROUTES, NOT_FOUND, getRouteMeta, canonicalUrl, breadcrumbsFor, schemasFor, llmsTxt } from '../src/seo/routes.js'

const tipos = (p) => schemasFor(p).map((s) => s['@type'])

test('hay 17 rutas con título y description únicos', () => {
  const metas = Object.values(ROUTES)
  assert.equal(metas.length, 17)
  assert.equal(new Set(metas.map((m) => m.title)).size, 17)
  assert.equal(new Set(metas.map((m) => m.description)).size, 17)
})

test('las URLs existentes se conservan', () => {
  for (const p of ['/', '/servicios', '/citas', '/contacto']) assert.ok(ROUTES[p], p)
})

test('slug inexistente y barra final', () => {
  assert.equal(getRouteMeta('/servicios/no-existe'), NOT_FOUND)
  assert.equal(getRouteMeta('/guias/no-existe'), NOT_FOUND)
  assert.equal(getRouteMeta('/servicios/examen-visual/'), ROUTES['/servicios/examen-visual'])
  assert.equal(canonicalUrl('/servicios/examen-visual'), 'https://www.opticamilap.com/servicios/examen-visual')
})

test('migas de pan', () => {
  assert.deepEqual(breadcrumbsFor('/'), [])
  assert.deepEqual(breadcrumbsFor('/servicios/examen-visual').map((b) => b.path), ['/', '/servicios', '/servicios/examen-visual'])
})

test('schema por tipo de página', () => {
  assert.deepEqual(tipos('/'), ['Optician', 'WebSite'])
  assert.deepEqual(tipos('/servicios/examen-visual'), ['Optician', 'BreadcrumbList', 'Service', 'FAQPage'])
  assert.deepEqual(tipos('/guias/lentes-progresivos'), ['Optician', 'BreadcrumbList', 'Article'])
  assert.deepEqual(tipos('/preguntas-frecuentes'), ['Optician', 'BreadcrumbList', 'FAQPage'])
  assert.deepEqual(tipos('/contacto'), ['Optician', 'BreadcrumbList'])
  assert.ok(!JSON.stringify(Object.keys(ROUTES).map(schemasFor)).includes('aggregateRating'))
})

test('FAQPage de un servicio lleva solo sus preguntas', () => {
  const faq = schemasFor('/servicios/examen-visual').find((s) => s['@type'] === 'FAQPage')
  assert.ok(faq.mainEntity.length >= 3 && faq.mainEntity.length <= 5)
})

test('llms.txt enlaza todas las páginas', () => {
  const txt = llmsTxt()
  for (const p of Object.keys(ROUTES)) assert.ok(txt.includes(canonicalUrl(p)), p)
})

test('las páginas fijas cumplen la longitud de título y description', () => {
  for (const [path, meta] of Object.entries(ROUTES)) {
    assert.ok(meta.title.length <= 60, `${path}: title ${meta.title.length}`)
    assert.ok(meta.description.length >= 120 && meta.description.length <= 160, `${path}: description ${meta.description.length}`)
  }
})
