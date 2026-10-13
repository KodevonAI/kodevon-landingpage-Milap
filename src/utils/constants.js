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

export const SERVICES = [
  {
    id: 'examen',
    name: 'Exámenes Visuales Completos',
    description: 'Evaluación completa de tu salud visual con tecnología moderna. Detectamos problemas de refracción, presión intraocular y estado general del ojo.',
    duration: '30-45 minutos',
    icon: 'eye',
    details: ['Optometría digital', 'Presión intraocular', 'Fondo de ojo', 'Diagnóstico personalizado'],
  },
  {
    id: 'gafas',
    name: 'Venta de Gafas',
    description: 'Amplio catálogo de monturas y lentes de todas las marcas y estilos. Encontrarás la opción perfecta para tu estilo y necesidades visuales.',
    duration: 'Inmediato',
    icon: 'glasses',
    details: ['Marcas nacionales e internacionales', 'Lentes progresivos', 'Lentes fotocromáticos', 'Asesoría personalizada'],
  },
  {
    id: 'contacto',
    name: 'Lentes de Contacto',
    description: 'Todos los tipos de lentes de contacto: diarios, quincenales, mensuales. Adaptación y seguimiento profesional.',
    duration: '20-30 minutos',
    icon: 'contact',
    details: ['Lentes diarios', 'Lentes mensuales', 'Lentes tóricos', 'Adaptación incluida'],
  },
  {
    id: 'reparacion',
    name: 'Reparaciones y Mantenimiento',
    description: 'Reparamos tus gafas con garantía. Cambio de tornillos, soldadura, ajuste de monturas y cambio de lentes.',
    duration: '15-60 minutos',
    icon: 'tools',
    details: ['Soldadura de monturas', 'Cambio de tornillos', 'Ajuste de puentes', 'Garantía en reparación'],
  },
]

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

export const FAQS = [
  {
    question: '¿Cómo puedo agendar una cita?',
    answer: 'Puedes agendar tu cita directamente en nuestra página web usando el formulario de reserva, que te lleva a WhatsApp con tu solicitud, o llamarnos al 316 6085291. También puedes escribirnos por WhatsApp.',
  },
  {
    question: '¿Cuál es el costo del examen visual?',
    answer: 'El costo del examen visual varía según el tipo de evaluación. Te invitamos a contactarnos para informarte sobre nuestros precios actuales y posibles promociones.',
  },
  {
    question: '¿Aceptan seguros médicos?',
    answer: 'Actualmente trabajamos con pagos directos. Te recomendamos verificar con tu aseguradora si pueden reembolsarte el servicio con nuestra factura.',
  },
  {
    question: '¿Cuánto tiempo dura una cita de examen visual?',
    answer: 'El examen visual completo tiene una duración aproximada de 30 a 45 minutos. Si vas a hacer la adaptación de lentes de contacto, puede tomar un poco más.',
  },
  {
    question: '¿Venden marcas internacionales de gafas?',
    answer: 'Sí, contamos con una amplia selección de marcas nacionales e internacionales para todos los presupuestos y estilos.',
  },
  {
    question: '¿Hacen reparaciones de urgencia?',
    answer: 'Sí, atendemos reparaciones de urgencia según disponibilidad. Las reparaciones simples como cambio de tornillos o ajustes se realizan el mismo día.',
  },
  {
    question: '¿Cuál es el horario de atención?',
    answer: 'Atendemos lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM. Los sábados de 8:00 AM a 1:00 PM. Domingos cerrado.',
  },
  {
    question: '¿Cómo puedo contactarlos para consultas rápidas?',
    answer: 'Puedes contactarnos por WhatsApp al 316 6085291, por email a optica_milap@hotmail.com o por Instagram @opticamilap. Respondemos a la mayor brevedad posible.',
  },
]

export const COLORS = {
  primary: '#3238A6',
  primaryDark: '#2E338C',
  accentBlue: '#117DBF',
  cream: '#F2EBC9',
  neutral: '#F2F2F2',
}
