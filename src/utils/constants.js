export const BUSINESS = {
  name: 'OpticaMilap',
  address: 'Cra. 10 #17N-60 Local 1, Antonio Nariño, Popayán, Cauca',
  phone: '316 6085291',
  phoneRaw: '3166085291',
  email: 'optica_milap@hotmail.com',
  website: 'http://www.opticamilap.com/',
  instagram: 'https://www.instagram.com/opticamilap/',
  whatsapp: 'https://wa.me/573166085291',
  location: { lat: 2.4448, lng: -76.6142 },
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

export const TESTIMONIOS = [
  {
    author: 'María González',
    rating: 5,
    date: '2026-03-15',
    text: 'Excelente atención, el personal es muy profesional y amable. Me realizaron el examen visual completo y quedé muy satisfecha con el resultado. ¡Totalmente recomendados!',
  },
  {
    author: 'Carlos Martínez',
    rating: 5,
    date: '2026-02-28',
    text: 'Muy buena atención y precios justos. Las gafas que me hicieron quedaron perfectas. El optómetra explica todo con detalle y se nota su experiencia.',
  },
  {
    author: 'Ana Rodríguez',
    rating: 5,
    date: '2026-01-20',
    text: 'Llevo años siendo clienta de OpticaMilap y siempre recibo un servicio de primera. Los lentes de contacto que me recomendaron son perfectos para mi trabajo.',
  },
  {
    author: 'Luis Fernández',
    rating: 5,
    date: '2025-12-10',
    text: 'Me repararon las gafas en menos de una hora y a muy buen precio. El trato fue excelente desde el primer momento. Los recomiendo ampliamente.',
  },
  {
    author: 'Sandra López',
    rating: 5,
    date: '2025-11-05',
    text: 'Agendé mi cita por la web y fue muy fácil. La atención fue puntual y el examen visual muy completo. Salí con mis gafas nuevas el mismo día.',
  },
]

export const FAQS = [
  {
    question: '¿Cómo puedo agendar una cita?',
    answer: 'Puedes agendar tu cita directamente en nuestra página web usando el formulario de reserva, o llamarnos al 316 6085291. También puedes escribirnos por WhatsApp.',
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
