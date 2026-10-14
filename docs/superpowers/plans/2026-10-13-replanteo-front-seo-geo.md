# Replanteo del front para SEO y GEO: plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Pasar el sitio de 4 a 17 páginas prerenderizadas (servicios, guías, nosotros, preguntas frecuentes) generadas desde una única fuente de datos, con schema, sitemap y `llms.txt` derivados de ella.

**Architecture:** El contenido vive en módulos JS planos bajo `src/content/`. `src/seo/routes.js` construye el mapa de rutas y el JSON-LD a partir de esos módulos; React Router, `scripts/prerender.js`, el sitemap y `llms.txt` lo consumen. Un script (`scripts/check.js`) valida `dist/` antes de publicar.

**Tech Stack:** React 19, React Router 7, Vite 8, Tailwind 4, Node 22 (`node --test` para pruebas; sin dependencias nuevas), Cloudflare Pages.

**Spec:** `docs/superpowers/specs/2026-10-13-replanteo-front-seo-geo-design.md`

## Global Constraints

- Sin dependencias nuevas en `package.json`.
- Se mantienen colores, tipografía y estilo de tarjetas; sin efectos nuevos.
- `/servicios`, `/citas` y `/contacto` conservan su URL.
- URLs en minúsculas, con guiones y sin barra final.
- Cada página: título, description y canonical propios y exactamente un H1.
- Título de 60 caracteres como máximo; description de 120 a 160.
- Sin precios en ninguna página.
- Experiencia: "más de 30 años" en todo el sitio.
- Valoración: 4,3 con 12 reseñas; nunca `aggregateRating` en schema.
- No aparecen "+5.000 pacientes" ni "100% garantía".
- Guías firmadas "Revisado por el equipo de optometría de OpticaMilap".
- Datos del negocio no confirmados se escriben como `[CONFIRMAR: qué falta]`; ninguno puede llegar a `dist/`.
- No se copian textos de reseñas de terceros.
- Todo el trabajo va en la rama `replanteo-front`; `main` no cambia hasta la tarea 9.
- Los módulos de `src/content/` y `src/seo/` no importan JSX ni assets: Node debe poder importarlos directamente.

## Review Focus

1. **Slug inexistente** (`/servicios/no-existe`, `/guias/no-existe`): debe mostrar la página 404 con `noindex`, no una plantilla vacía ni un error. Prueba en tarea 2.
2. **`/citas?servicio=<id desconocido>`**: el formulario carga sin selección y sin fallar. Prueba en tarea 4.
3. **`[CONFIRMAR]` fuera del HTML visible** (dentro de JSON-LD, `llms.txt` o un atributo `content`): el check debe detectarlo igual. Prueba en tarea 3.
4. **Lector sin JavaScript** (rastreadores de IA): los enlaces del desplegable "Servicios" y las respuestas de preguntas frecuentes deben estar en el HTML aunque estén plegados. Prueba en tareas 3 y 6.
5. **Título o description fuera de longitud** al redactar: el check falla con la ruta y la longitud. Prueba en tarea 3.

---

## Estructura de archivos

```
src/content/
  site.js          negocio, horario, reseñas, marcas, fotos (sustituye utils/constants.js)
  servicios.js     SERVICIOS, getServicio
  guias.js         GUIAS, getGuia
  faqs.js          FAQS_GENERALES
  validate.js      validateContent
src/seo/routes.js  ROUTES, getRouteMeta, canonicalUrl, breadcrumbsFor, schemasFor, llmsTxt
src/components/content/
  Breadcrumbs.jsx QuickFacts.jsx StepList.jsx PageFaq.jsx RelatedLinks.jsx BookingCta.jsx GuideBlocks.jsx
src/components/sections/
  DatosClave.jsx GuiasDestacadas.jsx (nuevos); Servicios.jsx Hero.jsx FAQ.jsx (modificados)
src/components/layout/
  Navbar.jsx Footer.jsx (modificados); MobileBar.jsx (nuevo)
src/pages/
  ServicioPage.jsx ServiciosPage.jsx GuiaPage.jsx GuiasPage.jsx NosotrosPage.jsx FaqPage.jsx (nuevos o reescritos)
scripts/prerender.js  itera ROUTES
scripts/check.js      checkDist + CLI
tests/                content.test.js routes.test.js check.test.js
```

Se eliminan: `src/utils/constants.js`, `src/components/sections/PorqueElegir.jsx`.

---

### Task 1: Capa de contenido y pruebas

**Files:**
- Create: `src/content/site.js`, `src/content/servicios.js`, `src/content/guias.js`, `src/content/faqs.js`, `src/content/validate.js`, `tests/content.test.js`
- Modify: `package.json` (scripts), todo archivo que importe `utils/constants` (13 archivos; `grep -rl "utils/constants" src`)
- Delete: `src/utils/constants.js`

**Interfaces:**
- Produces:
  - `site.js`: `SITE_URL`, `BUSINESS`, `SCHEDULE`, `GOOGLE_REVIEWS`, `BRANDS`, `PHOTOS` (mismos valores que hoy en `constants.js`; `SITE_URL = 'https://www.opticamilap.com'`).
  - `servicios.js`: `SERVICIOS: Servicio[]`, `getServicio(slug: string): Servicio | undefined`.
  - `guias.js`: `GUIAS: Guia[]`, `getGuia(slug: string): Guia | undefined`.
  - `faqs.js`: `FAQS_GENERALES: { tema: string, preguntas: { pregunta: string, respuesta: string, destacada?: boolean }[] }[]`.
  - `validate.js`: `validateContent(): string[]` (lista de errores; vacía si todo es válido).
  - Tipos `Servicio` y `Guia`: los de la sección 9.1 de la spec. Bloques de guía: `{ tipo: 'parrafo', texto }`, `{ tipo: 'lista', items: string[] }`, `{ tipo: 'tabla', columnas: string[], filas: string[][] }`.
  - Slugs y `citaId` de servicios: `examen-visual`/`examen`, `gafas-y-monturas`/`gafas`, `lentes-de-contacto`/`contacto`, `reparacion-de-gafas`/`reparacion`.
  - Slugs de guías: los 6 de la sección 4 de la spec.

- [ ] **Step 1: Añadir scripts** en `package.json`: `"test": "node --test tests/"`, `"check": "node scripts/check.js"`.

- [ ] **Step 2: Escribir las pruebas que fallan** en `tests/content.test.js`

```js
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
```

- [ ] **Step 3: Ejecutar** `npm test`. Esperado: FALLA por módulos inexistentes.

- [ ] **Step 4: Crear `site.js`** moviendo los valores de `constants.js` (sin `SERVICES`, `FAQS` ni `COLORS`).

- [ ] **Step 5: Crear `servicios.js` y `guias.js`** con todas las entradas y todos los campos de la spec. En esta tarea el texto puede ser breve (se amplía en las tareas 5 y 8), pero cada campo obligatorio debe existir y ser real: reutilizar nombre, descripción, duración y detalles de `SERVICES` en `constants.js`. Servicios con `marcas`: `gafas-y-monturas` → `'monturas'`, `lentes-de-contacto` → `'lentes'`; el resto `null`.

- [ ] **Step 6: Crear `faqs.js`** con las 8 preguntas actuales agrupadas en temas `Citas`, `Servicios y productos`, `Horario y contacto`; marcar 4 como `destacada`.

- [ ] **Step 7: Implementar `validateContent()`.** Reglas: slugs únicos y con formato `^[a-z0-9-]+$`; campos obligatorios no vacíos; `title` ≤ 60 y `description` entre 120 y 160; cada servicio con 3 a 5 `faqs`; cada `guias[]` de un servicio y cada `servicio` de una guía apuntan a un slug existente; `marcas` es `null` o clave de `BRANDS`; `revisado` con formato `AAAA-MM-DD`; ninguna cadena contiene `aggregateRating`. Cada error es una frase con el slug y el campo.

- [ ] **Step 8: Actualizar imports** de `utils/constants` a `content/site` (y `CitaForm.jsx` a `SERVICIOS`, usando `citaId` como valor y `nombre` como etiqueta). Borrar `constants.js`.

- [ ] **Step 9: Ejecutar** `npm test && npm run build`. Esperado: 3 pruebas pasan; build termina con las 4 rutas actuales.

- [ ] **Step 10: Commit** `refactor: move site data into src/content with validation`.

---

### Task 2: Mapa de rutas, migas, schema y llms.txt

**Files:**
- Modify: `src/seo/routes.js`, `src/components/seo/Seo.jsx`
- Create: `tests/routes.test.js`

**Interfaces:**
- Consumes: exports de la tarea 1.
- Produces (todo desde `src/seo/routes.js`):
  - `ROUTES: Record<string, RouteMeta>`, con `RouteMeta = { tipo: 'home'|'indice'|'servicio'|'guia'|'pagina', nombre: string, title: string, description: string, parent?: string, slug?: string }`. Claves: las 17 rutas de la sección 4 de la spec.
  - `NOT_FOUND: { title, description, noindex: true }`
  - `getRouteMeta(pathname: string): RouteMeta | typeof NOT_FOUND` (normaliza una barra final).
  - `canonicalUrl(pathname: string): string`
  - `breadcrumbsFor(pathname: string): { nombre: string, path: string }[]` (desde Inicio hasta la página; `[]` en la home).
  - `schemasFor(pathname: string): object[]`
  - `llmsTxt(): string`

- [ ] **Step 1: Escribir las pruebas que fallan** en `tests/routes.test.js`

```js
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
```

- [ ] **Step 2: Ejecutar** `npm test`. Esperado: FALLAN las pruebas de rutas.

- [ ] **Step 3: Reescribir `routes.js`.** `ROUTES` se construye con las páginas fijas más un `map` sobre `SERVICIOS` y `GUIAS`. Conservar el `Optician` actual (con `hasOfferCatalog` ahora enlazando la URL de cada servicio). `Service`: `name`, `description`, `url`, `provider: {'@id': '<SITE_URL>/#business'}`, `areaServed: 'Popayán'`. `Article`: `headline`, `description`, `dateModified` (= `revisado`), `author` y `publisher` como `{'@id': '<SITE_URL>/#business'}`, `mainEntityOfPage`. Títulos y descriptions de las páginas fijas nuevas (`/guias`, `/nosotros`, `/preguntas-frecuentes`) se redactan aquí cumpliendo las longitudes.

- [ ] **Step 4: Ajustar `Seo.jsx`** para usar `getRouteMeta` con rutas dinámicas (ya lo hace por `pathname`; verificar que un slug inexistente pone `noindex`).

- [ ] **Step 5: Ejecutar** `npm test`. Esperado: todas pasan.

- [ ] **Step 6: Commit** `feat(seo): derive routes, breadcrumbs, schema and llms.txt from content`.

---

### Task 3: Script de comprobación del build

**Files:**
- Create: `scripts/check.js`, `tests/check.test.js`

**Interfaces:**
- Consumes: `ROUTES` de la tarea 2.
- Produces: `checkDist(distDir: string, routes: string[]): string[]` (errores; vacío si pasa). Ejecutado como CLI (`npm run check`) usa `dist/` y `Object.keys(ROUTES)`, imprime cada error y sale con código 1 si hay alguno.
- Convención de archivos: `/` → `index.html`; `/a/b` → `a/b.html`.

- [ ] **Step 1: Escribir las pruebas que fallan** en `tests/check.test.js`. Un helper `sitio(paginas)` crea un directorio temporal con `fs.mkdtempSync` y escribe cada HTML. Página válida de referencia: título de 30 caracteres, description de 130, canonical, un H1, un JSON-LD válido.

```js
test('sitio válido no da errores', () => { assert.deepEqual(checkDist(dir, ['/', '/a/b']), []) })
test('ruta sin HTML', () => { assert.match(errores[0], /\/falta.*no existe/) })
test('dos H1', () => { assert.match(errores[0], /\/.*2 H1/) })
test('título repetido entre páginas', () => { assert.match(errores.join('\n'), /título repetido/) })
test('título de 61 caracteres', () => { assert.match(errores[0], /título.*61/) })
test('description de 100 caracteres', () => { assert.match(errores[0], /description.*100/) })
test('enlace interno roto', () => { assert.match(errores[0], /enlace.*\/no-existe/) })
test('enlace interno con barra final', () => { assert.match(errores[0], /barra final/) })
test('JSON-LD inválido', () => { assert.match(errores[0], /JSON-LD/) })
test('respuesta de FAQPage ausente del HTML visible', () => { assert.match(errores[0], /FAQ.*no visible/) })
test('[CONFIRMAR] en texto visible', () => { assert.match(errores[0], /CONFIRMAR/) })
test('[CONFIRMAR] dentro de JSON-LD', () => { assert.match(errores[0], /CONFIRMAR/) })
test('[CONFIRMAR] en llms.txt', () => { assert.match(errores[0], /llms\.txt.*CONFIRMAR/) })
test('página 404 con noindex y sin canonical es válida', () => { assert.deepEqual(errores, []) })
```

- [ ] **Step 2: Ejecutar** `npm test`. Esperado: FALLAN por `checkDist` inexistente.

- [ ] **Step 3: Implementar `checkDist`.** Análisis con expresiones regulares sobre el HTML (sin dependencias). Enlaces internos: todo `href="/..."` que no apunte a un archivo existente en `dist/` debe ser una ruta de `routes`; se ignoran `#ancla` y `?query`. `[CONFIRMAR` se busca en el HTML completo y en `llms.txt`. Por cada `FAQPage` en el JSON-LD de una página, el texto de cada `acceptedAnswer` debe aparecer también fuera de los `<script>`.

- [ ] **Step 4: Ejecutar** `npm test && npm run build && npm run check`. Esperado: pruebas pasan; el check sobre el build real pasa o lista errores reales que se corrigen aquí.

- [ ] **Step 5: Commit** `test: add dist checker for SEO invariants`.

---

### Task 4: Plantilla de servicio, índice y preselección de cita

**Files:**
- Create: `src/components/content/{Breadcrumbs,QuickFacts,StepList,PageFaq,RelatedLinks,BookingCta}.jsx`, `src/pages/ServicioPage.jsx`
- Modify: `src/pages/ServiciosPage.jsx`, `src/AppRoutes.jsx`, `scripts/prerender.js`, `src/components/sections/CitaForm.jsx`, `tests/check.test.js`

**Interfaces:**
- Consumes: `getServicio`, `getGuia`, `breadcrumbsFor`, `ROUTES`, `schemasFor`, `llmsTxt`.
- Produces:
  - `<Breadcrumbs />` (lee `useLocation`; no renderiza nada en la home).
  - `<QuickFacts datos={[{ etiqueta, valor }]} />`, `<StepList pasos={[{ titulo, texto }]} />`.
  - `<PageFaq preguntas={[{ pregunta, respuesta }]} titulo? />`: respuestas siempre en el DOM (mismo patrón que `sections/FAQ.jsx`).
  - `<RelatedLinks titulo items={[{ to, titulo, resumen }]} />`.
  - `<BookingCta servicio? />`: enlaza a `/citas` o `/citas?servicio=<citaId>` y a WhatsApp.
  - Ruta `/servicios/:slug` → `ServicioPage`; slug inexistente renderiza `NotFoundPage`.
  - `prerender.js` genera un HTML por clave de `ROUTES` con `schemasFor(pathname)`, creando subdirectorios (`dist/servicios/examen-visual.html`).

- [ ] **Step 1: Prueba de preselección** en `tests/content.test.js`

```js
import { servicioDesdeQuery } from '../src/content/servicios.js'
test('preselección de servicio en /citas', () => {
  assert.equal(servicioDesdeQuery('?servicio=examen'), 'examen')
  assert.equal(servicioDesdeQuery('?servicio=inventado'), '')
  assert.equal(servicioDesdeQuery(''), '')
})
```

- [ ] **Step 2: Ejecutar** `npm test`. Esperado: FALLA.

- [ ] **Step 3: Implementar `servicioDesdeQuery(search: string): string`** en `servicios.js` y usarlo en `CitaForm.jsx` como valor inicial del selector (leer `useLocation().search`).

- [ ] **Step 4: Crear los 6 componentes** con las props de Interfaces, usando las clases Tailwind ya presentes en `sections/` (tarjeta: `bg-card rounded-2xl border border-border`; etiqueta: `text-accent ... uppercase`).

- [ ] **Step 5: Crear `ServicioPage.jsx`** con los 11 bloques de la sección 5.1 de la spec, en ese orden. El H1 es `servicio.h1`. Reescribir `ServiciosPage.jsx` como índice (sección 5.3).

- [ ] **Step 6: Registrar rutas** en `AppRoutes.jsx` y hacer que `prerender.js` itere `ROUTES` (sustituye la lista fija y los `breadcrumbSchema`/`faqSchema` sueltos por `schemasFor`). La sitemap sale de `Object.keys(ROUTES)`.

- [ ] **Step 7: Ejecutar** `npm test && npm run build && npm run check`. Esperado: pasan; `dist/servicios/` contiene 4 HTML.

- [ ] **Step 8: Verificar en navegador** (`npm run preview`): `/servicios/examen-visual` muestra migas, ficha y preguntas; el botón de cita abre `/citas` con "Examen visual" seleccionado; `/servicios/no-existe` muestra la 404.

- [ ] **Step 9: Commit** `feat: service pages with breadcrumbs, FAQ and booking preselect`.

---

### Task 5: Contenido de los 4 servicios

**Files:**
- Modify: `src/content/servicios.js`, `src/content/validate.js`, `tests/content.test.js`

**Interfaces:**
- Consumes/Produces: mismo tipo `Servicio`; no cambia ninguna firma.

- [ ] **Step 1: Prueba de extensión**

```js
test('cada servicio tiene entre 500 y 700 palabras', () => {
  for (const s of SERVICIOS) {
    const n = palabrasDe(s)   // helper exportado desde validate.js
    assert.ok(n >= 500 && n <= 700, `${s.slug}: ${n}`)
  }
})
```

- [ ] **Step 2: Ejecutar** `npm test`. Esperado: FALLA con el conteo actual.

- [ ] **Step 3: Implementar `palabrasDe(entrada): number`** en `validate.js` (suma todas las cadenas visibles de la entrada).

- [ ] **Step 4: Redactar los 4 servicios** siguiendo la sección 5.1 y las reglas de la sección 10 de la spec. Cada `resumen` responde en 2 o 3 frases qué es, cuánto dura y cómo se agenda. Datos del negocio no confirmados: `[CONFIRMAR: ...]`.

- [ ] **Step 5: Ejecutar** `npm test && npm run build`. Esperado: pasan. `npm run check` puede fallar solo por `[CONFIRMAR]`.

- [ ] **Step 6: Commit** `content: write the four service pages`.

- [ ] **Step 7: Revisión del cliente.** Entregar la lista de `[CONFIRMAR]` y los 4 textos. Aplicar correcciones y resolver cada marca; repetir el paso 5 hasta que `npm run check` pase. Commit `content: apply client review to services`.

---

### Task 6: Home, navegación, nosotros y preguntas frecuentes

**Files:**
- Create: `src/components/sections/DatosClave.jsx`, `src/components/sections/GuiasDestacadas.jsx`, `src/components/layout/MobileBar.jsx`, `src/pages/NosotrosPage.jsx`, `src/pages/FaqPage.jsx`
- Modify: `src/pages/Home.jsx`, `src/pages/ContactoPage.jsx`, `src/pages/CitasPage.jsx`, `src/components/sections/{Hero,Servicios,FAQ,Productos,QuienesSomos}.jsx`, `src/components/layout/{Navbar,Footer,Layout}.jsx`, `src/AppRoutes.jsx`, `tests/check.test.js`
- Delete: `src/components/sections/PorqueElegir.jsx`

**Interfaces:**
- Consumes: `SERVICIOS`, `GUIAS`, `FAQS_GENERALES`, `BUSINESS`, `SCHEDULE`, `GOOGLE_REVIEWS`, componentes de la tarea 4.
- Produces: rutas `/nosotros` y `/preguntas-frecuentes`; `<MobileBar />` montado en `Layout`.

- [ ] **Step 1: Prueba del check** en `tests/check.test.js`: una página cuyo menú no contiene en el HTML los enlaces a los 4 servicios falla con `/menú.*servicios/`. Añadir a `checkDist` la regla: el HTML de `/` debe contener un `href` a cada ruta de tipo `servicio`.

- [ ] **Step 2: Ejecutar** `npm test`. Esperado: FALLA.

- [ ] **Step 3: Navbar.** Enlaces: Servicios (desplegable con los 4, generado desde `SERVICIOS`), Guías, Nosotros, Contacto, botón "Agendar cita". Los enlaces del desplegable están siempre en el DOM; se ocultan con CSS y se abren con hover, foco y clic; `aria-expanded` en el disparador.

- [ ] **Step 4: Footer.** Columnas: Servicios (4), Guías (6), Contacto y horario.

- [ ] **Step 5: MobileBar.** Barra fija inferior solo bajo `md`, con "Agendar cita" (`/citas`) y "WhatsApp" (`BUSINESS.whatsapp`). `Layout` añade relleno inferior equivalente en móvil.

- [ ] **Step 6: Home** con los 10 bloques de la sección 6 de la spec, en ese orden. Hero: H1 `Óptica en Popayán: exámenes visuales, gafas y lentes de contacto`; "Tu Visión, Nuestra Pasión" como subtítulo; quitar las tarjetas decorativas (`EyeVisual`). `DatosClave`: dirección, horario, teléfono, `4,3 en Google`, `Más de 30 años`. `Servicios`: 4 tarjetas con enlace a su página. `FAQ`: solo las 4 `destacada` y enlace a `/preguntas-frecuentes`. `GuiasDestacadas`: 3 primeras guías y enlace a `/guias`.

- [ ] **Step 7: NosotrosPage, FaqPage, ContactoPage, CitasPage** según la sección 8 de la spec. `FaqPage` agrupa por `tema` con un H2 por tema. Ninguna menciona "+5.000 pacientes" ni "100% garantía"; quitarlos también de `QuienesSomos.jsx`.

- [ ] **Step 8: Ejecutar** `npm test && npm run build && npm run check`. Esperado: pasan.

- [ ] **Step 9: Verificar en navegador** a 1440 px y 390 px: desplegable accesible con teclado; barra móvil no tapa el contenido final ni el footer; home con un solo H1.

- [ ] **Step 10: Commit** `feat: new home, navigation, about and FAQ pages`.

---

### Task 7: Plantilla de guía e índice

**Files:**
- Create: `src/components/content/GuideBlocks.jsx`, `src/pages/GuiaPage.jsx`, `src/pages/GuiasPage.jsx`
- Modify: `src/AppRoutes.jsx`

**Interfaces:**
- Consumes: `GUIAS`, `getGuia`, `getServicio`, componentes de la tarea 4.
- Produces: `<GuideBlocks bloques={Bloque[]} />` (párrafo → `<p>`, lista → `<ul>`, tabla → `<table>` con `<th scope="col">` y contenedor con scroll horizontal); rutas `/guias` y `/guias/:slug`.

- [ ] **Step 1: Crear `GuideBlocks`, `GuiaPage` y `GuiasPage`.** `GuiaPage` sigue la sección 5.2 de la spec: H1 = `guia.h1`; subtítulos de sección como H2; línea de autoría `Revisado por el equipo de optometría de OpticaMilap` con `<time dateTime={guia.revisado}>` en formato largo `es-CO` y `timeZone: 'UTC'`. Slug inexistente → `NotFoundPage`.

- [ ] **Step 2: Registrar rutas** en `AppRoutes.jsx`.

- [ ] **Step 3: Ejecutar** `npm test && npm run build && npm run check`. Esperado: pasan; `dist/guias/` contiene 6 HTML y `dist/guias.html` existe.

- [ ] **Step 4: Verificar en navegador** una guía con tabla a 390 px: la tabla se desplaza sin romper el ancho de página.

- [ ] **Step 5: Commit** `feat: guide pages and index`.

---

### Task 8: Contenido de las 6 guías

**Files:**
- Modify: `src/content/guias.js`, `tests/content.test.js`

- [ ] **Step 1: Prueba de extensión y estructura**

```js
test('cada guía tiene entre 600 y 900 palabras y al menos 3 secciones', () => {
  for (const g of GUIAS) {
    const n = palabrasDe(g)
    assert.ok(n >= 600 && n <= 900, `${g.slug}: ${n}`)
    assert.ok(g.secciones.length >= 3, g.slug)
    assert.ok(g.cuandoConsultar.length > 0, g.slug)
  }
})
```

- [ ] **Step 2: Ejecutar** `npm test`. Esperado: FALLA.

- [ ] **Step 3: Redactar las 6 guías** según las secciones 5.2 y 10 de la spec: `respuesta` contesta en 2 o 3 frases; subtítulos en forma de pregunta; tono informativo, sin diagnosticar ni prometer resultados; `cuandoConsultar` remite a consulta. `gafas-o-lentes-de-contacto` y `fotocromaticos-y-luz-azul` incluyen una tabla comparativa.

- [ ] **Step 4: Ejecutar** `npm test && npm run build && npm run check`. Esperado: pasan.

- [ ] **Step 5: Commit** `content: write the six guides`.

- [ ] **Step 6: Revisión del cliente.** Entregar los 6 textos; aplicar correcciones; repetir el paso 4. Commit `content: apply client review to guides`.

---

### Task 9: Verificación final y despliegue

**Files:**
- Modify: `public/_headers` solo si alguna ruta nueva lo necesita.

- [ ] **Step 1: Ejecutar** `npm test && npm run build && npm run check && npm run lint`. Esperado: pruebas y check pasan; lint sin errores nuevos frente a `main`.

- [ ] **Step 2: Recorrido manual** en `npm run preview`, escritorio y móvil: home, un servicio, una guía, ambos índices, `/nosotros`, `/preguntas-frecuentes`, `/citas?servicio=examen`, `/contacto`, una URL inexistente. Sin errores en consola.

- [ ] **Step 3: Confirmar con el cliente** la lista de marcas (sección 13 de la spec) y corregir `BRANDS` si hace falta.

- [ ] **Step 4: Pedir aprobación al cliente para publicar.** Solo con su visto bueno: fusionar `replanteo-front` en `main` y hacer push.

- [ ] **Step 5: Verificar en producción:** las 17 URLs responden 200; una URL inexistente responde 404; `/sitemap.xml` lista 17 URLs; `/llms.txt` enlaza las 17.

- [ ] **Step 6: Rich Results Test** de Google en la home, un servicio, una guía y `/preguntas-frecuentes`. Esperado: sin errores.

- [ ] **Step 7: Search Console:** el sitemap ya enviado muestra 17 páginas descubiertas; solicitar indexación de la home, `/servicios` y los 4 servicios.
