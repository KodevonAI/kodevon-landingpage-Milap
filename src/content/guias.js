// Guías atemporales. Bloques de sección: { tipo: 'parrafo', texto },
// { tipo: 'lista', items }, { tipo: 'tabla', columnas, filas }.
export const GUIAS = [
  {
    slug: 'cada-cuanto-examen-visual',
    title: '¿Cada cuánto hacerse un examen visual? — OpticaMilap',
    description: 'Cada cuánto conviene hacerse un examen visual según la edad y qué señales indican que no debes esperar a la próxima revisión. Guía de OpticaMilap.',
    h1: '¿Cada cuánto hay que hacerse un examen visual?',
    tarjeta: 'La frecuencia recomendada según tu edad y las señales para no esperar.',
    respuesta: 'Como regla general, conviene hacerse un examen visual una vez al año. Niños, mayores de 60 años, personas con diabetes y usuarios de lentes de contacto pueden necesitar revisiones más frecuentes, según lo indique el optómetra.',
    secciones: [
      { titulo: '¿Por qué una vez al año?', bloques: [{ tipo: 'parrafo', texto: 'La fórmula cambia de forma gradual y muchas alteraciones del ojo no dan síntomas al principio. La revisión anual permite detectarlas a tiempo.' }] },
    ],
    cuandoConsultar: 'Consulta antes de tu revisión anual si notas visión borrosa, dolor de cabeza frecuente, visión doble o cualquier cambio repentino en la vista.',
    revisado: '2026-10-13',
    servicio: 'examen-visual',
  },
  {
    slug: 'gafas-o-lentes-de-contacto',
    title: '¿Gafas o lentes de contacto? Cómo elegir — OpticaMilap',
    description: 'Gafas o lentes de contacto: ventajas, límites y cuidados de cada opción para elegir según tu fórmula, tu rutina y tu comodidad. Guía de OpticaMilap.',
    h1: '¿Gafas o lentes de contacto? Cómo elegir',
    tarjeta: 'Ventajas, límites y cuidados de cada opción para decidir con criterio.',
    respuesta: 'No hay una opción mejor para todos: las gafas son más simples de usar y cuidar, y los lentes de contacto dan un campo visual completo y más libertad de movimiento. Muchas personas combinan ambas según la actividad.',
    secciones: [
      { titulo: '¿Qué ventajas tiene cada opción?', bloques: [{ tipo: 'parrafo', texto: 'Las gafas no tocan el ojo y casi no requieren mantenimiento. Los lentes de contacto no se empañan ni limitan la visión lateral, pero exigen higiene constante.' }] },
    ],
    cuandoConsultar: 'Antes de usar lentes de contacto necesitas una adaptación con un optómetra: no todos los ojos toleran todos los lentes.',
    revisado: '2026-10-13',
    servicio: 'lentes-de-contacto',
  },
  {
    slug: 'lentes-progresivos',
    title: 'Lentes progresivos: qué son y cómo adaptarse — OpticaMilap',
    description: 'Qué son los lentes progresivos, para quién sirven y cómo adaptarse a ellos en las primeras semanas. Guía práctica del equipo de OpticaMilap.',
    h1: 'Lentes progresivos: qué son y cómo adaptarse',
    tarjeta: 'Para quién sirven y cómo acostumbrarse a ellos en las primeras semanas.',
    respuesta: 'Los lentes progresivos corrigen la visión de lejos, intermedia y de cerca en un mismo lente, sin línea visible. Suelen recomendarse a partir de los 40 años, cuando aparece la presbicia, y la adaptación normalmente toma de unos días a un par de semanas.',
    secciones: [
      { titulo: '¿Cómo funcionan?', bloques: [{ tipo: 'parrafo', texto: 'La graduación cambia de forma gradual de arriba hacia abajo: la parte superior es para lejos, la central para distancias intermedias y la inferior para leer.' }] },
    ],
    cuandoConsultar: 'Si después de dos o tres semanas de uso constante sigues con mareo o visión incómoda, vuelve a la óptica para revisar el centrado y la fórmula.',
    revisado: '2026-10-13',
    servicio: 'gafas-y-monturas',
  },
  {
    slug: 'fotocromaticos-y-luz-azul',
    title: 'Fotocromáticos y filtro de luz azul: ¿valen la pena?',
    description: 'Lentes fotocromáticos y filtro de luz azul: qué hace cada uno, qué no hace y en qué casos conviene pedirlos. Guía del equipo de OpticaMilap.',
    h1: 'Lentes fotocromáticos y filtro de luz azul: ¿valen la pena?',
    tarjeta: 'Qué hace cada tratamiento, qué no hace y cuándo conviene pedirlo.',
    respuesta: 'Los lentes fotocromáticos valen la pena si entras y sales de exteriores con frecuencia, porque se oscurecen con el sol y se aclaran bajo techo. El filtro de luz azul puede hacer más cómodo el uso de pantallas, pero no sustituye los descansos ni una fórmula bien ajustada.',
    secciones: [
      { titulo: '¿Qué hace un lente fotocromático?', bloques: [{ tipo: 'parrafo', texto: 'Reacciona a la radiación ultravioleta: se oscurece al aire libre y vuelve a aclararse en interiores.' }] },
    ],
    cuandoConsultar: 'Si tienes fatiga visual frecuente frente a pantallas, hazte un examen visual: muchas veces la causa es una fórmula desactualizada.',
    revisado: '2026-10-13',
    servicio: 'gafas-y-monturas',
  },
  {
    slug: 'como-cuidar-tus-gafas',
    title: 'Cómo limpiar y cuidar tus gafas — OpticaMilap',
    description: 'Cómo limpiar y cuidar tus gafas para que duren más: qué usar, qué evitar y cuándo conviene llevarlas a ajustar o reparar. Guía de OpticaMilap.',
    h1: '¿Cómo limpiar y cuidar tus gafas?',
    tarjeta: 'Qué usar, qué evitar y cuándo llevarlas a ajustar o reparar.',
    respuesta: 'Limpia tus gafas con agua, una gota de jabón neutro y un paño de microfibra limpio. Evita la ropa, el papel y los productos con alcohol o amoníaco, y guárdalas siempre en su estuche.',
    secciones: [
      { titulo: '¿Cómo se limpian paso a paso?', bloques: [{ tipo: 'lista', items: ['Enjuaga los lentes con agua.', 'Frota suavemente con una gota de jabón neutro.', 'Enjuaga de nuevo y seca con un paño de microfibra limpio.'] }] },
    ],
    cuandoConsultar: 'Lleva tus gafas a la óptica si quedan torcidas, flojas o con un tornillo suelto: forzarlas en casa suele empeorar el daño.',
    revisado: '2026-10-13',
    servicio: 'reparacion-de-gafas',
  },
  {
    slug: 'senales-de-que-tu-hijo-necesita-gafas',
    title: 'Señales de que tu hijo necesita gafas — OpticaMilap',
    description: 'Señales de que un niño puede necesitar gafas: en casa, en el colegio y frente a pantallas, y a qué edad conviene hacer el primer examen visual.',
    h1: '¿Cómo saber si tu hijo necesita gafas?',
    tarjeta: 'Las señales en casa y en el colegio, y cuándo hacer el primer examen.',
    respuesta: 'Un niño puede necesitar gafas si se acerca mucho a los libros o pantallas, entrecierra los ojos, se queja de dolor de cabeza o baja su rendimiento escolar. La única forma de confirmarlo es un examen visual.',
    secciones: [
      { titulo: '¿Qué señales se ven en casa?', bloques: [{ tipo: 'lista', items: ['Se acerca demasiado al televisor o al cuaderno.', 'Entrecierra los ojos o inclina la cabeza para mirar.', 'Se frota los ojos con frecuencia.'] }] },
    ],
    cuandoConsultar: 'Agenda un examen visual si notas cualquiera de estas señales o si tu hijo nunca se ha hecho una revisión.',
    revisado: '2026-10-13',
    servicio: 'examen-visual',
  },
]

export function getGuia(slug) {
  return GUIAS.find((guia) => guia.slug === slug)
}
