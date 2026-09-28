import { BUSINESS, FAQS } from '../utils/constants'

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
    title: 'Servicios de Optometría en Popayán — OpticaMilap',
    description: 'Exámenes visuales completos, venta de gafas, lentes de contacto y reparación de monturas en Popayán, Cauca. Conoce nuestros servicios y tiempos de atención.',
  },
  '/citas': {
    title: 'Agenda tu Examen Visual en Popayán — OpticaMilap',
    description: 'Reserva online tu cita de examen visual, adaptación de lentes de contacto o asesoría de gafas en OpticaMilap, Popayán. Elige fecha y hora en minutos.',
  },
  '/contacto': {
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
  image: OG_IMAGE,
  logo: `${SITE_URL}/favicon.webp`,
  telephone: '+57 316 6085291',
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
  sameAs: [BUSINESS.instagram],
  areaServed: { '@type': 'City', name: 'Popayán' },
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
