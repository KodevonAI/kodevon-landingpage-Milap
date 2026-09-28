// Genera HTML estático por ruta a partir del build SSR, para que buscadores y
// redes sociales reciban contenido y metadatos sin ejecutar JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const { ROUTES, NOT_FOUND, SITE_URL, canonicalUrl, localBusinessSchema, faqSchema } =
  await import(pathToFileURL(path.join(ssrDir, 'seo.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

function headFor(pathname, meta) {
  const url = canonicalUrl(pathname)
  const title = escapeAttr(meta.title)
  const description = escapeAttr(meta.description)
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow'}" />`,
    meta.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
  ].filter(Boolean).join('\n    ')
}

function page(pathname, meta, outFile) {
  const schemas = [localBusinessSchema, ...(meta.faq ? [faqSchema] : [])]
  const html = template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headFor(pathname, meta))
    .replace('<!--schema-->', schemas.map(jsonLd).join('\n    '))
    .replace('<!--app-html-->', render(pathname))
  fs.writeFileSync(path.join(dist, outFile), html)
  console.log(`prerendered ${pathname} -> ${outFile}`)
}

for (const [pathname, meta] of Object.entries(ROUTES)) {
  page(pathname, meta, pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`)
}
page('/404', NOT_FOUND, '404.html')

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(ROUTES).map((p) => `  <url>
    <loc>${canonicalUrl(p)}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml written (${SITE_URL})`)

fs.rmSync(ssrDir, { recursive: true, force: true })
