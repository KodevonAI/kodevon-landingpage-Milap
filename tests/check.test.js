import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { checkDist } from '../scripts/check.js'

const TITULO = 'Título de prueba de la página'
const DESC = 'Descripción de prueba suficientemente larga para pasar la comprobación de longitud mínima exigida a cada página del sitio web.'

function pagina({ title = TITULO, description = DESC, canonical = true, robots = 'index, follow', body = '<h1>Uno</h1>', jsonLd = '{"@type":"Thing"}' } = {}) {
  return `<!doctype html><html><head><title>${title}</title>
<meta name="description" content="${description}" />
<meta name="robots" content="${robots}" />
${canonical ? '<link rel="canonical" href="https://example.com/x" />' : ''}
<script type="application/ld+json">${jsonLd}</script>
</head><body><div id="root">${body}</div></body></html>`
}

// Crea un dist temporal: { 'index.html': html, 'a/b.html': html, 'llms.txt': '...' }
function sitio(archivos) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'check-'))
  for (const [archivo, contenido] of Object.entries(archivos)) {
    fs.mkdirSync(path.dirname(path.join(dir, archivo)), { recursive: true })
    fs.writeFileSync(path.join(dir, archivo), contenido)
  }
  return dir
}

const otra = (extra = {}) => pagina({ title: `${TITULO} dos`, description: `${DESC} Dos.`, ...extra })

test('sitio válido no da errores', () => {
  const dir = sitio({ 'index.html': pagina({ body: '<h1>Uno</h1><a href="/a/b">x</a><a href="/#faq">y</a><a href="/a/b?servicio=examen">z</a>' }), 'a/b.html': otra() })
  assert.deepEqual(checkDist(dir, ['/', '/a/b']), [])
})

test('ruta sin HTML', () => {
  const errores = checkDist(sitio({ 'index.html': pagina() }), ['/', '/falta'])
  assert.match(errores[0], /\/falta.*no existe/)
})

test('dos H1', () => {
  const errores = checkDist(sitio({ 'index.html': pagina({ body: '<h1>Uno</h1><h1 class="x">Dos</h1>' }) }), ['/'])
  assert.match(errores[0], /\/.*2 H1/)
})

test('título repetido entre páginas', () => {
  const errores = checkDist(sitio({ 'index.html': pagina(), 'a.html': pagina({ description: `${DESC} Dos.` }) }), ['/', '/a'])
  assert.match(errores.join('\n'), /título repetido/)
})

test('título de 61 caracteres', () => {
  const errores = checkDist(sitio({ 'index.html': pagina({ title: 'x'.repeat(61) }) }), ['/'])
  assert.match(errores[0], /título.*61/)
})

test('description de 100 caracteres', () => {
  const errores = checkDist(sitio({ 'index.html': pagina({ description: 'x'.repeat(100) }) }), ['/'])
  assert.match(errores[0], /description.*100/)
})

test('enlace interno roto', () => {
  const errores = checkDist(sitio({ 'index.html': pagina({ body: '<h1>Uno</h1><a href="/no-existe">x</a>' }) }), ['/'])
  assert.match(errores[0], /enlace.*\/no-existe/)
})

test('enlace interno con barra final', () => {
  const errores = checkDist(sitio({ 'index.html': pagina({ body: '<h1>Uno</h1><a href="/a/">x</a>' }), 'a.html': otra() }), ['/', '/a'])
  assert.match(errores[0], /barra final/)
})

test('enlace a un archivo existente es válido', () => {
  const dir = sitio({ 'index.html': pagina({ body: '<h1>Uno</h1><img src="/fotos/a.webp"><a href="/fotos/a.webp">x</a>' }), 'fotos/a.webp': '' })
  assert.deepEqual(checkDist(dir, ['/']), [])
})

test('JSON-LD inválido', () => {
  const errores = checkDist(sitio({ 'index.html': pagina({ jsonLd: '{"@type":' }) }), ['/'])
  assert.match(errores[0], /JSON-LD/)
})

test('respuesta de FAQPage ausente del HTML visible', () => {
  const jsonLd = JSON.stringify({ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: '¿P?', acceptedAnswer: { '@type': 'Answer', text: 'Respuesta que no está' } }] })
  const errores = checkDist(sitio({ 'index.html': pagina({ jsonLd }) }), ['/'])
  assert.match(errores[0], /FAQ.*no visible/)
})

test('respuesta de FAQPage visible con entidades HTML', () => {
  const jsonLd = JSON.stringify({ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: '¿P?', acceptedAnswer: { '@type': 'Answer', text: 'Sí & "ya"' } }] })
  const dir = sitio({ 'index.html': pagina({ jsonLd, body: '<h1>Uno</h1><p>Sí &amp; &quot;ya&quot;</p>' }) })
  assert.deepEqual(checkDist(dir, ['/']), [])
})

test('[CONFIRMAR] en texto visible', () => {
  const errores = checkDist(sitio({ 'index.html': pagina({ body: '<h1>Uno</h1><p>[CONFIRMAR: plazo]</p>' }) }), ['/'])
  assert.match(errores[0], /CONFIRMAR/)
})

test('[CONFIRMAR] dentro de JSON-LD', () => {
  const errores = checkDist(sitio({ 'index.html': pagina({ jsonLd: '{"@type":"Thing","name":"[CONFIRMAR: x]"}' }) }), ['/'])
  assert.match(errores[0], /CONFIRMAR/)
})

test('[CONFIRMAR] en llms.txt', () => {
  const errores = checkDist(sitio({ 'index.html': pagina(), 'llms.txt': 'Plazo: [CONFIRMAR: plazo]' }), ['/'])
  assert.match(errores[0], /llms\.txt.*CONFIRMAR/)
})

test('página 404 con noindex y sin canonical es válida', () => {
  const dir = sitio({ '404.html': pagina({ robots: 'noindex, follow', canonical: false, description: 'Corta.' }) })
  assert.deepEqual(checkDist(dir, ['/404']), [])
})

test('la home debe enlazar en su HTML cada página de servicio', () => {
  const dir = sitio({ 'index.html': pagina(), 'servicios/a.html': otra() })
  const errores = checkDist(dir, ['/', '/servicios/a'])
  assert.match(errores[0], /menú.*servicios\/a/)
})

test('home con enlaces a los servicios es válida', () => {
  const dir = sitio({ 'index.html': pagina({ body: '<h1>Uno</h1><a class="x" href="/servicios/a">A</a>' }), 'servicios/a.html': otra() })
  assert.deepEqual(checkDist(dir, ['/', '/servicios/a']), [])
})
