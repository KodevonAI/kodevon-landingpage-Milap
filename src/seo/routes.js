import { SITE_URL, BUSINESS, BRANDS, GOOGLE_REVIEWS, PHOTOS } from '../content/site.js'
import { SERVICIOS, getServicio } from '../content/servicios.js'
import { GUIAS, getGuia } from '../content/guias.js'
import { FAQS_GENERALES } from '../content/faqs.js'

export { SITE_URL }
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`

const BUSINESS_ID = `${SITE_URL}/#business`

// Mapa de rutas del sitio. Las páginas de servicio y de guía salen de src/content;
// lo usan React Router, <Seo />, scripts/prerender.js, el sitemap y llms.txt.
export const ROUTES = {
  '/': {
    tipo: 'home',
    nombre: 'Inicio',
    title: 'Óptica en Popayán | Exámenes Visuales y Gafas — OpticaMilap',
    description: 'Óptica en Popayán con más de 30 años de experiencia: exámenes visuales, gafas, lentes de contacto y reparaciones. Agenda tu cita online. Tel: 316 6085291.',
  },
  '/servicios': {
    tipo: 'indice',
    nombre: 'Servicios',
    parent: '/',
    title: 'Servicios de Optometría en Popayán — OpticaMilap',
    description: 'Exámenes visuales completos, venta de gafas, lentes de contacto y reparación de monturas en Popayán, Cauca. Conoce nuestros servicios y tiempos de atención.',
  },
  ...Object.fromEntries(SERVICIOS.map((servicio) => [`/servicios/${servicio.slug}`, {
    tipo: 'servicio',
    nombre: servicio.nombre,
    parent: '/servicios',
    slug: servicio.slug,
    title: servicio.title,
    description: servicio.description,
  }])),
  '/guias': {
    tipo: 'indice',
    nombre: 'Guías',
    parent: '/',
    title: 'Guías de Salud Visual — OpticaMilap Popayán',
    description: 'Guías claras sobre salud visual: cada cuánto revisarte, gafas o lentes de contacto, lentes progresivos y cuidado de tus gafas. Por OpticaMilap.',
  },
  ...Object.fromEntries(GUIAS.map((guia) => [`/guias/${guia.slug}`, {
    tipo: 'guia',
    nombre: guia.h1,
    parent: '/guias',
    slug: guia.slug,
    title: guia.title,
    description: guia.description,
  }])),
  '/nosotros': {
    tipo: 'pagina',
    nombre: 'Nosotros',
    parent: '/',
    title: 'Sobre OpticaMilap | Óptica en Popayán con +30 Años',
    description: 'Conoce OpticaMilap: más de 30 años cuidando la salud visual en Popayán. Nuestra sede en Antonio Nariño, las marcas que manejamos y cómo trabajamos.',
  },
  '/preguntas-frecuentes': {
    tipo: 'pagina',
    nombre: 'Preguntas frecuentes',
    parent: '/',
    title: 'Preguntas Frecuentes — OpticaMilap Popayán',
    description: 'Respuestas a las preguntas más comunes sobre OpticaMilap: citas, duración del examen visual, reparaciones, medios de pago, horario y contacto.',
  },
  '/citas': {
    tipo: 'pagina',
    nombre: 'Agendar cita',
    parent: '/',
    title: 'Agenda tu Examen Visual en Popayán — OpticaMilap',
    description: 'Reserva online tu cita de examen visual, adaptación de lentes de contacto o asesoría de gafas en OpticaMilap, Popayán. Elige fecha y hora en minutos.',
  },
  '/contacto': {
    tipo: 'pagina',
    nombre: 'Contacto',
    parent: '/',
    title: 'Contacto y Ubicación — OpticaMilap Popayán',
    description: 'Visítanos en Cra. 10 #17N-60 Local 1, Antonio Nariño, Popayán. Llámanos al 316 6085291, escríbenos por WhatsApp o envíanos un mensaje.',
  },
}

export const NOT_FOUND = {
  title: 'Página no encontrada — OpticaMilap',
  description: 'La página que buscas no existe. Vuelve al inicio de OpticaMilap, óptica en Popayán.',
  noindex: true,
}

const normalizar = (pathname) => (pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname)

export function getRouteMeta(pathname) {
  return ROUTES[normalizar(pathname)] ?? NOT_FOUND
}

export function canonicalUrl(pathname) {
  const path = normalizar(pathname)
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

// Camino desde Inicio hasta la página; vacío en la home y en rutas desconocidas.
export function breadcrumbsFor(pathname) {
  const path = normalizar(pathname)
  if (path === '/' || !ROUTES[path]) return []
  const migas = []
  for (let actual = path; actual; actual = ROUTES[actual].parent) {
    migas.unshift({ nombre: ROUTES[actual].nombre, path: actual })
  }
  return migas
}

const horario = [
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '12:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '14:00', closes: '18:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
]

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Optician',
  '@id': BUSINESS_ID,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  image: [OG_IMAGE, ...PHOTOS.map((photo) => `${SITE_URL}${photo.src}`)],
  logo: `${SITE_URL}/favicon.webp`,
  telephone: `+57${BUSINESS.phoneRaw}`,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cra. 10 #17N-60 Local 1, Antonio Nariño',
    addressLocality: 'Popayán',
    addressRegion: 'Cauca',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.location.lat,
    longitude: BUSINESS.location.lng,
  },
  openingHoursSpecification: horario,
  sameAs: [BUSINESS.instagram, BUSINESS.googleMaps],
  areaServed: { '@type': 'City', name: 'Popayán' },
  hasMap: BUSINESS.googleMaps,
  currenciesAccepted: 'COP',
  knowsLanguage: 'es',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+57${BUSINESS.phoneRaw}`,
    contactType: 'customer service',
    availableLanguage: 'Spanish',
    url: BUSINESS.whatsapp,
  },
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Agendar cita',
    target: `${SITE_URL}/citas`,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de óptica y optometría',
    itemListElement: SERVICIOS.map((servicio) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: servicio.nombre,
        description: servicio.resumen,
        url: canonicalUrl(`/servicios/${servicio.slug}`),
        areaServed: 'Popayán',
      },
    })),
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  inLanguage: 'es-CO',
  publisher: { '@id': BUSINESS_ID },
}

function breadcrumbSchema(pathname) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbsFor(pathname).map(({ nombre, path }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: nombre,
      item: canonicalUrl(path),
    })),
  }
}

function faqSchema(preguntas) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: preguntas.map(({ pregunta, respuesta }) => ({
      '@type': 'Question',
      name: pregunta,
      acceptedAnswer: { '@type': 'Answer', text: respuesta },
    })),
  }
}

function serviceSchema(servicio, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: servicio.nombre,
    description: servicio.resumen,
    url,
    provider: { '@id': BUSINESS_ID },
    areaServed: 'Popayán',
  }
}

function articleSchema(guia, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guia.h1,
    description: guia.description,
    inLanguage: 'es-CO',
    dateModified: guia.revisado,
    author: { '@id': BUSINESS_ID },
    publisher: { '@id': BUSINESS_ID },
    mainEntityOfPage: url,
  }
}

// JSON-LD de una página. Cada FAQPage lleva solo las preguntas visibles en ella.
export function schemasFor(pathname) {
  const path = normalizar(pathname)
  const meta = ROUTES[path]
  if (!meta) return [localBusinessSchema]
  if (meta.tipo === 'home') return [localBusinessSchema, webSiteSchema]

  const schemas = [localBusinessSchema, breadcrumbSchema(path)]
  const url = canonicalUrl(path)
  if (meta.tipo === 'servicio') {
    const servicio = getServicio(meta.slug)
    schemas.push(serviceSchema(servicio, url), faqSchema(servicio.faqs))
  }
  if (meta.tipo === 'guia') schemas.push(articleSchema(getGuia(meta.slug), url))
  if (path === '/preguntas-frecuentes') {
    schemas.push(faqSchema(FAQS_GENERALES.flatMap((tema) => tema.preguntas)))
  }
  return schemas
}

// Contenido de /llms.txt: datos del negocio en Markdown plano para motores de IA.
export function llmsTxt() {
  const enlace = (path, texto) => `- [${ROUTES[path].nombre}](${canonicalUrl(path)}): ${texto}`
  const paginas = Object.entries(ROUTES).filter(([, meta]) => meta.tipo !== 'servicio' && meta.tipo !== 'guia')

  return `# ${BUSINESS.name}

> Óptica en Popayán, Cauca (Colombia): exámenes visuales, venta de gafas, lentes de contacto y reparación de monturas. Las citas se agendan en línea y se confirman por WhatsApp.

## Datos del negocio

- Nombre: ${BUSINESS.name}
- Tipo: Óptica y consultorio de optometría
- Dirección: ${BUSINESS.address}, Colombia
- Teléfono y WhatsApp: +57 ${BUSINESS.phone}
- Email: ${BUSINESS.email}
- Instagram: ${BUSINESS.instagram}
- Ficha en Google Maps: ${BUSINESS.googleMaps}
- Valoración en Google: ${GOOGLE_REVIEWS.rating} de 5 con ${GOOGLE_REVIEWS.count} reseñas (${GOOGLE_REVIEWS.checked})
- Experiencia: más de 30 años
- Horario: lunes a viernes de 8:00 a 12:00 y de 14:00 a 18:00; sábados de 8:00 a 13:00; domingos cerrado
- Zona horaria: ${BUSINESS.timezone}

## Servicios

${SERVICIOS.map((s) => enlace(`/servicios/${s.slug}`, `${s.resumen} Incluye: ${s.incluye.join(', ')}.`)).join('\n')}

## Marcas

- Monturas: ${BRANDS.monturas.join(', ')}
- Lentes: ${BRANDS.lentes.join(', ')}
- Accesorios: ${BRANDS.accesorios.join(', ')}

## Guías

${GUIAS.map((g) => enlace(`/guias/${g.slug}`, g.respuesta)).join('\n')}

## Páginas

${paginas.map(([path, meta]) => enlace(path, meta.description)).join('\n')}

## Preguntas frecuentes

${FAQS_GENERALES.flatMap((tema) => tema.preguntas).map((f) => `### ${f.pregunta}\n\n${f.respuesta}`).join('\n\n')}
`
}
