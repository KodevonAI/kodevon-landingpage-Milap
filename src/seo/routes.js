import { BUSINESS, BRANDS, FAQS, GOOGLE_REVIEWS, PHOTOS, SERVICES } from '../utils/constants'

export const SITE_URL = 'https://www.opticamilap.com'
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`

// Metadatos por ruta. Los usa <Seo /> en el cliente y scripts/prerender.js en el build.
export const ROUTES = {
  '/': {
    title: 'Óptica en Popayán | Exámenes Visuales y Gafas — OpticaMilap',
    description: 'Óptica en Popayán con más de 30 años de experiencia: exámenes visuales, gafas, lentes de contacto y reparaciones. Agenda tu cita online. Tel: 316 6085291.',
    faq: true,
  },
  '/servicios': {
    name: 'Servicios',
    title: 'Servicios de Optometría en Popayán — OpticaMilap',
    description: 'Exámenes visuales completos, venta de gafas, lentes de contacto y reparación de monturas en Popayán, Cauca. Conoce nuestros servicios y tiempos de atención.',
  },
  '/citas': {
    name: 'Agendar cita',
    title: 'Agenda tu Examen Visual en Popayán — OpticaMilap',
    description: 'Reserva online tu cita de examen visual, adaptación de lentes de contacto o asesoría de gafas en OpticaMilap, Popayán. Elige fecha y hora en minutos.',
  },
  '/contacto': {
    name: 'Contacto',
    title: 'Contacto y Ubicación — OpticaMilap Popayán',
    description: 'Visítanos en Cra. 10 #17N-60 Local 1, Antonio Nariño, Popayán. Llámanos al 316 6085291, escríbenos por WhatsApp o envíanos un mensaje.',
    faq: true,
  },
}

export const NOT_FOUND = {
  title: 'Página no encontrada — OpticaMilap',
  description: 'La página que buscas no existe. Vuelve al inicio de OpticaMilap, óptica en Popayán.',
  noindex: true,
}

export function getRouteMeta(pathname) {
  return ROUTES[pathname] ?? NOT_FOUND
}

export function canonicalUrl(pathname) {
  return pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Optician',
  '@id': `${SITE_URL}/#business`,
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
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '12:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '14:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
  ],
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
    itemListElement: SERVICES.map(({ name, description }) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, description, areaServed: 'Popayán' },
    })),
  },
}

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  inLanguage: 'es-CO',
  publisher: { '@id': `${SITE_URL}/#business` },
}

export function breadcrumbSchema(pathname) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: ROUTES[pathname].name, item: canonicalUrl(pathname) },
    ],
  }
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

// Contenido de /llms.txt: datos del negocio en Markdown plano para motores de IA.
export function llmsTxt() {
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

${SERVICES.map((s) => `- ${s.name} (${s.duration}): ${s.description} Incluye: ${s.details.join(', ')}.`).join('\n')}

## Marcas

- Monturas: ${BRANDS.monturas.join(', ')}
- Lentes: ${BRANDS.lentes.join(', ')}
- Accesorios: ${BRANDS.accesorios.join(', ')}

## Páginas

${Object.entries(ROUTES).map(([p, m]) => `- [${m.title}](${canonicalUrl(p)}): ${m.description}`).join('\n')}

## Preguntas frecuentes

${FAQS.map((f) => `### ${f.question}\n\n${f.answer}`).join('\n\n')}
`
}
