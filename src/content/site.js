export const SITE_URL = 'https://www.opticamilap.com'

export const BUSINESS = {
  name: 'OpticaMilap',
  address: 'Cra. 10 #17N-60 Local 1, Antonio Nariño, Popayán, Cauca',
  phone: '316 6085291',
  phoneRaw: '3166085291',
  email: 'optica_milap@hotmail.com',
  website: 'https://www.opticamilap.com/',
  instagram: 'https://www.instagram.com/opticamilap/',
  whatsapp: 'https://wa.me/573166085291',
  location: { lat: 2.4560497, lng: -76.5982267 },
  googleMaps: 'https://www.google.com/maps?cid=3925784338551329299',
  timezone: 'America/Bogota',
}

export const SCHEDULE = {
  weekdays: { open: 8, closeAm: 12, openPm: 14, close: 18 },
  saturday: { open: 8, close: 13 },
}

// Datos reales de la ficha de Google Maps del negocio (consultados en octubre de 2026).
// No se actualizan solos: revisar la ficha y ajustar aquí cuando cambien.
export const GOOGLE_REVIEWS = {
  rating: 4.3,
  count: 12,
  fiveStar: 10,
  checked: 'octubre de 2026',
  url: 'https://www.google.com/maps?cid=3925784338551329299',
  writeUrl: 'https://search.google.com/local/writereview?placeid=ChIJFRuz1skDMI4RE9IkZA4wezY',
}

export const BRANDS = {
  monturas: ['Ray-Ban', 'Oakley', 'Carrera', 'Silhouette', 'Guess', 'Polo'],
  lentes: ['Essilor', 'Zeiss', 'Hoya', 'Crizal', 'Transitions', 'CooperVision'],
  accesorios: ['Hilco', 'Casco', 'Optiplast', 'Silhouette', 'ICU', 'Croakies'],
}

// Fotos del local subidas por el negocio a su ficha de Google.
export const PHOTOS = [
  { src: '/fotos/fachada-optica-milap-popayan.webp', alt: 'Fachada de Óptica Milap en la Carrera 10 #17N-60, Popayán' },
  { src: '/fotos/exhibicion-monturas-optica-milap.webp', alt: 'Exhibición de monturas en Óptica Milap, Popayán' },
  { src: '/fotos/vitrina-gafas-optica-milap.webp', alt: 'Vitrina de gafas de sol y monturas en Óptica Milap' },
  { src: '/fotos/sala-atencion-optica-milap.webp', alt: 'Sala de atención y asesoría de Óptica Milap' },
]
