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
      {
        titulo: '¿Por qué conviene revisarse una vez al año?',
        bloques: [
          { tipo: 'parrafo', texto: 'La fórmula cambia poco a poco, y el cerebro se adapta tan bien que es fácil acostumbrarse a ver mal sin darse cuenta. Además, varias alteraciones del ojo avanzan sin dolor ni síntomas en sus primeras etapas. Una revisión anual permite ajustar la corrección a tiempo y detectar señales que conviene estudiar antes de que afecten la visión.' },
          { tipo: 'parrafo', texto: 'El examen visual no solo sirve para cambiar de gafas: también es una oportunidad para revisar la presión intraocular y el fondo de ojo, y para comentar molestias como ardor, resequedad o cansancio frente a pantallas.' },
        ],
      },
      {
        titulo: '¿Cada cuánto según la edad?',
        bloques: [
          { tipo: 'parrafo', texto: 'La frecuencia exacta la define el optómetra según tu caso, pero estas pautas generales sirven de orientación:' },
          { tipo: 'tabla', columnas: ['Etapa', 'Frecuencia orientativa', 'Por qué'], filas: [['Niños y adolescentes', 'Una vez al año', 'La visión cambia rápido con el crecimiento y afecta el aprendizaje.'], ['Adultos de 18 a 39 años', 'Cada uno o dos años', 'La fórmula suele ser más estable si no hay síntomas.'], ['Adultos de 40 a 59 años', 'Una vez al año', 'Aparece la presbicia y aumenta el riesgo de otras alteraciones.'], ['Mayores de 60 años', 'Una vez al año o según indicación', 'Son más frecuentes las cataratas y otros cambios del ojo.']] },
        ],
      },
      {
        titulo: '¿Quiénes necesitan revisiones más frecuentes?',
        bloques: [
          { tipo: 'parrafo', texto: 'Algunas personas deben revisarse con más frecuencia, incluso si sienten que ven bien:' },
          { tipo: 'lista', items: ['Personas con diabetes o hipertensión.', 'Usuarios de lentes de contacto.', 'Quienes tienen fórmulas altas o que han cambiado mucho en poco tiempo.', 'Personas con antecedentes familiares de glaucoma u otras enfermedades oculares.', 'Quienes trabajan muchas horas frente a pantallas y tienen molestias frecuentes.'] },
        ],
      },
      {
        titulo: '¿Qué señales indican que no debes esperar?',
        bloques: [
          { tipo: 'parrafo', texto: 'Hay síntomas que justifican adelantar la revisión, sin importar cuándo fue la última:' },
          { tipo: 'lista', items: ['Visión borrosa de lejos o de cerca.', 'Dolor de cabeza frecuente, sobre todo al final del día.', 'Necesidad de entrecerrar los ojos o de alejar el celular para leer.', 'Dificultad para ver de noche o molestia con las luces al conducir.', 'Ojos rojos, ardor o sensación de arenilla que no mejora.'] },
        ],
      },
      {
        titulo: '¿Qué pasa si no me reviso?',
        bloques: [
          { tipo: 'parrafo', texto: 'Usar una fórmula desactualizada no suele dañar el ojo, pero sí produce cansancio, dolor de cabeza y menor rendimiento al leer, estudiar o conducir. El riesgo mayor es dejar pasar una alteración que habría sido más fácil de manejar si se hubiera detectado antes.' },
          { tipo: 'parrafo', texto: 'En niños, un problema visual sin corregir puede confundirse con falta de atención o bajo rendimiento escolar, por eso en ellos la revisión periódica es especialmente importante.' },
        ],
      },
      {
        titulo: '¿Qué incluye un examen visual completo?',
        bloques: [
          { tipo: 'parrafo', texto: 'Un examen visual completo va más allá de leer letras en una pantalla. Suele incluir una conversación sobre tus síntomas y antecedentes, la medición de la agudeza visual de lejos y de cerca, la determinación de la fórmula, la medición de la presión intraocular y la revisión del fondo de ojo.' },
          { tipo: 'parrafo', texto: 'Normalmente toma entre 30 y 45 minutos, no duele y no requiere preparación. Lleva tus gafas o lentes de contacto actuales y tu última fórmula: comparar el resultado con el anterior ayuda a saber cuánto ha cambiado tu visión y con qué rapidez.' },
        ],
      },
    ],
    cuandoConsultar: 'Agenda un examen visual si hace más de un año que no te revisas o si reconoces alguna de las señales anteriores. Si presentas pérdida repentina de visión, destellos de luz, dolor intenso o visión doble de aparición súbita, busca atención de urgencias: son síntomas que no deben esperar a una cita.',
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
      {
        titulo: '¿En qué se diferencian?',
        bloques: [
          { tipo: 'parrafo', texto: 'Las gafas corrigen la visión con un lente situado a poca distancia del ojo; los lentes de contacto lo hacen apoyados sobre su superficie. Esa diferencia explica casi todo lo demás: el campo visual, la comodidad, los cuidados y el tipo de actividades en que cada opción funciona mejor.' },
          { tipo: 'tabla', columnas: ['Aspecto', 'Gafas', 'Lentes de contacto'], filas: [['Campo visual', 'Limitado por la montura', 'Completo, incluida la visión lateral'], ['Cuidados', 'Limpieza sencilla', 'Higiene diaria y reemplazo periódico'], ['Deporte y movimiento', 'Pueden moverse, empañarse o golpearse', 'Se mantienen estables y no se empañan'], ['Contacto con el ojo', 'Ninguno', 'Directo: requieren adaptación profesional'], ['Uso prolongado', 'Sin límite de horas', 'Con un máximo diario recomendado'], ['Aprendizaje', 'Inmediato', 'Requiere práctica para ponerlos y quitarlos']] },
        ],
      },
      {
        titulo: '¿Cuándo convienen más las gafas?',
        bloques: [
          { tipo: 'parrafo', texto: 'Las gafas son la opción más simple: se ponen y se quitan en un segundo, casi no requieren mantenimiento y no tocan el ojo. Suelen ser la mejor elección en estos casos:' },
          { tipo: 'lista', items: ['Pasas muchas horas frente a pantallas y notas resequedad ocular.', 'Prefieres no tener una rutina diaria de limpieza.', 'Tienes alergias o los ojos sensibles.', 'Usas lentes progresivos y ya te adaptaste a ellos.', 'Quieres una opción práctica para estar en casa o al final del día.'] },
        ],
      },
      {
        titulo: '¿Cuándo convienen más los lentes de contacto?',
        bloques: [
          { tipo: 'parrafo', texto: 'Los lentes de contacto destacan cuando la montura estorba o cuando buscas una visión más natural:' },
          { tipo: 'lista', items: ['Haces deporte o actividades con mucho movimiento.', 'Las gafas se te empañan con frecuencia, por ejemplo al usar tapabocas o al cocinar.', 'Tienes una fórmula alta y los lentes de las gafas resultan gruesos o pesados.', 'Hay mucha diferencia de fórmula entre un ojo y el otro.', 'Prefieres no usar gafas en ciertas ocasiones.'] },
          { tipo: 'parrafo', texto: 'Existen lentes diarios, que se desechan al final del día, y lentes quincenales o mensuales, que se limpian y se guardan cada noche. También hay lentes tóricos para astigmatismo.' },
        ],
      },
      {
        titulo: '¿Se pueden combinar las dos opciones?',
        bloques: [
          { tipo: 'parrafo', texto: 'Sí, y es lo más habitual. Muchas personas usan lentes de contacto para trabajar, hacer deporte o salir, y gafas en casa o para descansar los ojos. Incluso quien usa lentes de contacto a diario debería tener unas gafas con la fórmula al día, para los momentos en que el ojo necesita descanso o no es posible usar los lentes.' },
        ],
      },
      {
        titulo: '¿Qué cuidados exigen los lentes de contacto?',
        bloques: [
          { tipo: 'parrafo', texto: 'Bien adaptados y bien cuidados, los lentes de contacto son seguros. La mayoría de los problemas aparecen por descuidos en la higiene o por usarlos más tiempo del recomendado:' },
          { tipo: 'lista', items: ['Lávate y sécate las manos antes de tocarlos.', 'Usa solo la solución indicada; nunca agua de la llave ni saliva.', 'Respeta el tiempo de reemplazo de cada lente.', 'No duermas con ellos, salvo indicación expresa del optómetra.', 'Quítatelos si sientes dolor, enrojecimiento o visión borrosa.'] },
        ],
      },
      {
        titulo: '¿Cómo es la adaptación de lentes de contacto?',
        bloques: [
          { tipo: 'parrafo', texto: 'La adaptación es una cita corta en la que el optómetra revisa tu fórmula y la superficie del ojo, prueba un lente y comprueba que quede cómodo y que veas bien con él. También aprendes a ponerlos, quitarlos y limpiarlos, y recibes indicaciones sobre cuántas horas al día puedes usarlos.' },
          { tipo: 'parrafo', texto: 'Los primeros días es normal notar el lente. Esa sensación disminuye con el uso; si no desaparece, o si aparece enrojecimiento, conviene volver a control para probar otro tipo de lente.' },
        ],
      },
    ],
    cuandoConsultar: 'Antes de usar lentes de contacto necesitas una cita de adaptación: la fórmula no es la misma que la de las gafas y no todos los ojos toleran todos los lentes. Si ya los usas y notas enrojecimiento, dolor, lagrimeo o visión borrosa, retíralos y consulta lo antes posible.',
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
      {
        titulo: '¿Cómo funcionan los lentes progresivos?',
        bloques: [
          { tipo: 'parrafo', texto: 'En un lente progresivo la graduación cambia de forma gradual de arriba hacia abajo. La parte superior está pensada para ver de lejos, la zona central para distancias intermedias, como la pantalla del computador, y la parte inferior para leer.' },
          { tipo: 'parrafo', texto: 'A diferencia de los bifocales, no tienen una línea visible ni un salto brusco de imagen: el cambio entre distancias es continuo. A cambio, los bordes laterales del lente tienen zonas de visión menos nítida, y por eso hace falta un periodo de adaptación.' },
        ],
      },
      {
        titulo: '¿Para quién están indicados?',
        bloques: [
          { tipo: 'parrafo', texto: 'Suelen recomendarse cuando aparece la presbicia, o vista cansada, que es la dificultad para enfocar de cerca y que normalmente se nota a partir de los 40 años. Son útiles si:' },
          { tipo: 'lista', items: ['Empezaste a alejar el celular o los libros para poder leer.', 'Usas gafas para lejos y ahora necesitas otras para cerca.', 'Cambias de distancia constantemente: conducir, mirar el computador, leer.', 'No quieres ponerte y quitarte las gafas todo el día.'] },
        ],
      },
      {
        titulo: '¿Qué alternativas hay?',
        bloques: [
          { tipo: 'tabla', columnas: ['Opción', 'Ventaja', 'Limitación'], filas: [['Progresivos', 'Un solo par para todas las distancias', 'Requieren adaptación'], ['Bifocales', 'Zonas de lejos y cerca bien definidas', 'Línea visible y sin distancia intermedia'], ['Dos pares separados', 'Visión amplia en cada distancia', 'Hay que alternar las gafas'], ['Lentes ocupacionales', 'Cómodos para computador y lectura', 'No sirven para ver de lejos']] },
          { tipo: 'parrafo', texto: 'La mejor opción depende de tu fórmula y de lo que haces durante el día; por eso conviene explicarle al optómetra cómo es tu rutina.' },
        ],
      },
      {
        titulo: '¿Cómo adaptarse más rápido?',
        bloques: [
          { tipo: 'parrafo', texto: 'La mayoría de las personas se adapta en unos días; a otras les toma un par de semanas. Estos hábitos ayudan:' },
          { tipo: 'lista', items: ['Úsalos todo el día desde el principio, sin alternarlos con tus gafas anteriores.', 'Mueve la cabeza hacia lo que quieres ver, no solo los ojos.', 'Para leer, baja la mirada y mantén la cabeza derecha.', 'Ten cuidado al bajar escaleras los primeros días: mira hacia abajo inclinando la cabeza.', 'Evita conducir con ellos hasta sentirte seguro.'] },
        ],
      },
      {
        titulo: '¿Por qué a veces cuesta adaptarse?',
        bloques: [
          { tipo: 'parrafo', texto: 'Cuando la adaptación se alarga, casi siempre hay una causa concreta: la montura quedó floja o torcida, los lentes no están bien centrados frente a los ojos, o la fórmula necesita un ajuste. También influye el tamaño de la montura, porque una muy pequeña deja poco espacio para la zona de lectura.' },
          { tipo: 'parrafo', texto: 'Por eso las medidas que se toman al encargar los lentes son tan importantes como la fórmula, y por eso vale la pena volver a la óptica si algo no se siente bien en lugar de dejar de usarlos.' },
        ],
      },
      {
        titulo: '¿Qué influye en la calidad de un lente progresivo?',
        bloques: [
          { tipo: 'parrafo', texto: 'No todos los lentes progresivos son iguales. Entre un diseño y otro cambia la amplitud de las zonas de visión nítida y la suavidad de la transición entre distancias, lo que se nota sobre todo en la lectura y frente al computador.' },
          { tipo: 'parrafo', texto: 'También cuentan los tratamientos: el antirreflejo mejora la nitidez y reduce los reflejos al conducir de noche, y el fotocromático evita cambiar de gafas al salir. Al elegir, explica cuántas horas pasas frente a pantallas, si conduces a diario y qué tan seguido lees, para que la recomendación se ajuste a tu rutina.' },
        ],
      },
    ],
    cuandoConsultar: 'Si después de dos o tres semanas de uso constante sigues con mareo, visión borrosa o incomodidad, vuelve a la óptica para revisar el ajuste de la montura, el centrado de los lentes y la fórmula. No es normal tener que forzar la postura para ver bien.',
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
      {
        titulo: '¿Qué hace un lente fotocromático?',
        bloques: [
          { tipo: 'parrafo', texto: 'Un lente fotocromático reacciona a la radiación ultravioleta: se oscurece al aire libre y vuelve a aclararse en interiores. Así funciona como gafa transparente bajo techo y como gafa de sol en la calle, sin cambiar de par.' },
          { tipo: 'parrafo', texto: 'Conviene saber dos cosas. Primero, el cambio no es instantáneo: tarda unos momentos en oscurecerse y algo más en aclararse. Segundo, dentro del carro muchos se oscurecen poco, porque el parabrisas bloquea parte de la radiación ultravioleta que los activa.' },
        ],
      },
      {
        titulo: '¿Qué hace el filtro de luz azul?',
        bloques: [
          { tipo: 'parrafo', texto: 'El filtro de luz azul es un tratamiento que reduce parte de la luz azul que emiten las pantallas y la iluminación LED. Algunas personas notan la imagen más descansada y con menos reflejos al usarlo.' },
          { tipo: 'parrafo', texto: 'Lo que no hace es corregir la causa más común de la fatiga visual frente a pantallas, que suele estar en parpadear menos, mantener la vista fija a la misma distancia durante horas o usar una fórmula desactualizada. Tampoco reemplaza la protección ultravioleta de unas gafas de sol.' },
        ],
      },
      {
        titulo: '¿En qué se diferencian?',
        bloques: [
          { tipo: 'tabla', columnas: ['Aspecto', 'Fotocromático', 'Filtro de luz azul'], filas: [['Para qué sirve', 'Adaptarse a los cambios de luz', 'Mayor comodidad frente a pantallas'], ['Dónde se nota', 'Al salir a exteriores', 'En interiores, con pantallas y luz LED'], ['Aspecto del lente', 'Cambia de claro a oscuro', 'Transparente, a veces con un reflejo leve'], ['Limitación', 'Poco efecto dentro del carro', 'No sustituye descansos ni la fórmula correcta']] },
          { tipo: 'parrafo', texto: 'No son excluyentes: un mismo lente puede llevar los dos, además de antirreflejo.' },
        ],
      },
      {
        titulo: '¿Cuándo valen la pena?',
        bloques: [
          { tipo: 'parrafo', texto: 'Los fotocromáticos suelen compensar si:' },
          { tipo: 'lista', items: ['Entras y sales de exteriores varias veces al día.', 'Te molesta la luz intensa pero no quieres cargar dos pares de gafas.', 'Trabajas al aire libre parte de la jornada.'] },
          { tipo: 'parrafo', texto: 'El filtro de luz azul puede tener sentido si:' },
          { tipo: 'lista', items: ['Pasas muchas horas seguidas frente al computador o al celular.', 'Notas reflejos molestos de las pantallas o de la iluminación.', 'Ya tienes la fórmula al día y aun así terminas con la vista cansada.'] },
        ],
      },
      {
        titulo: '¿Qué más ayuda con la fatiga frente a pantallas?',
        bloques: [
          { tipo: 'parrafo', texto: 'Ningún tratamiento del lente sustituye los buenos hábitos. Estos tienen más efecto que cualquier filtro:' },
          { tipo: 'lista', items: ['Cada 20 minutos, mira algo lejano durante unos 20 segundos.', 'Parpadea de forma consciente; frente a la pantalla se parpadea menos.', 'Sitúa la pantalla un poco por debajo de la altura de los ojos y a un brazo de distancia.', 'Evita los reflejos de ventanas o lámparas sobre la pantalla.', 'Mantén tu fórmula actualizada.'] },
        ],
      },
      {
        titulo: '¿Y el tratamiento antirreflejo?',
        bloques: [
          { tipo: 'parrafo', texto: 'El antirreflejo suele confundirse con el filtro de luz azul, pero cumple otra función: reduce los reflejos sobre la superficie del lente. Con él se ve más nítido, molestan menos las luces de los carros al conducir de noche y los demás pueden verte los ojos a través del lente en lugar de un reflejo.' },
          { tipo: 'parrafo', texto: 'Es el tratamiento con el beneficio más evidente para la mayoría de las personas, y puede combinarse con el fotocromático y con el filtro de luz azul en un mismo lente. Requiere algo más de cuidado al limpiarlo: nada de alcohol ni de paños ásperos.' },
        ],
      },
    ],
    cuandoConsultar: 'Si tienes fatiga visual frecuente, dolor de cabeza o visión borrosa al final del día, hazte un examen visual antes de elegir tratamientos: muchas veces la causa es una fórmula desactualizada o una pequeña corrección que nunca se había formulado.',
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
      {
        titulo: '¿Cómo se limpian las gafas paso a paso?',
        bloques: [
          { tipo: 'parrafo', texto: 'La forma más segura de limpiarlas es con agua y jabón neutro, porque arrastra el polvo antes de frotar:' },
          { tipo: 'lista', items: ['Lávate las manos para no pasar grasa a los lentes.', 'Enjuaga las gafas con agua tibia, nunca caliente.', 'Pon una gota de jabón líquido neutro en cada lente y frota suavemente con los dedos, incluidas las plaquetas y las varillas.', 'Enjuaga bien hasta retirar todo el jabón.', 'Seca con un paño de microfibra limpio, sin presionar.'] },
          { tipo: 'parrafo', texto: 'Si estás fuera de casa, usa un líquido limpiador para lentes y tu paño de microfibra. Limpiar en seco es lo que más raya, porque el polvo actúa como lija.' },
        ],
      },
      {
        titulo: '¿Qué no se debe usar?',
        bloques: [
          { tipo: 'tabla', columnas: ['Evita', 'Por qué'], filas: [['La camisa o el saco', 'Acumulan polvo y fibras que rayan el lente'], ['Servilletas y papel higiénico', 'Son abrasivos y dejan pelusa'], ['Alcohol, vinagre o limpiavidrios', 'Dañan los tratamientos del lente, como el antirreflejo'], ['Agua caliente', 'Puede deformar la montura y afectar los tratamientos'], ['Saliva o aliento', 'No limpian: reparten la grasa por el lente']] },
        ],
      },
      {
        titulo: '¿Cómo guardarlas y manipularlas?',
        bloques: [
          { tipo: 'parrafo', texto: 'Buena parte de los daños ocurren cuando las gafas no están puestas. Estas costumbres alargan su vida:' },
          { tipo: 'lista', items: ['Guárdalas siempre en su estuche rígido.', 'Nunca las apoyes con los lentes hacia abajo.', 'Quítatelas con las dos manos para no abrir ni torcer las varillas.', 'No las lleves sobre la cabeza: la montura se deforma y se afloja.', 'No las dejes dentro del carro al sol; el calor daña lentes y monturas.', 'Lava el paño de microfibra con frecuencia, sin suavizante.'] },
        ],
      },
      {
        titulo: '¿Cada cuánto conviene ajustarlas?',
        bloques: [
          { tipo: 'parrafo', texto: 'Con el uso, los tornillos se aflojan y la montura pierde su forma. Unas gafas que resbalan o quedan inclinadas no solo incomodan: también cambian la posición del lente frente al ojo, y eso afecta la visión, sobre todo en lentes progresivos.' },
          { tipo: 'parrafo', texto: 'Lo recomendable es hacerles un ajuste cuando notes que resbalan, que aprietan detrás de las orejas, que dejan marcas en la nariz o que una varilla abre más que la otra. Es un arreglo rápido que suele hacerse mientras esperas.' },
        ],
      },
      {
        titulo: '¿Qué hacer si se dañan?',
        bloques: [
          { tipo: 'parrafo', texto: 'Si se suelta un tornillo, se cae una plaqueta o se parte la montura, guarda todas las piezas y lleva las gafas en su estuche. Evita el pegamento instantáneo y la cinta: manchan el lente, endurecen las bisagras y pueden hacer imposible una reparación que era sencilla.' },
          { tipo: 'parrafo', texto: 'Tampoco intentes enderezar una montura metálica con las manos o con pinzas: es fácil partirla. Muchas roturas tienen arreglo con soldadura o con un cambio de pieza.' },
        ],
      },
      {
        titulo: '¿Cuándo es mejor cambiar los lentes?',
        bloques: [
          { tipo: 'parrafo', texto: 'Los rayones no se pueden pulir sin alterar el lente. Si están en la zona central y molestan al ver, o si el tratamiento antirreflejo empezó a desprenderse, lo indicado es cambiar los lentes. Si la montura está en buen estado, a menudo puede conservarse.' },
        ],
      },
      {
        titulo: '¿Cómo cuidar las gafas de los niños?',
        bloques: [
          { tipo: 'parrafo', texto: 'Las gafas de un niño sufren más: caídas, juegos y morrales. Ayuda elegir una montura flexible y de su talla, enseñarle a quitárselas con las dos manos y a guardarlas en el estuche, y revisar el ajuste con más frecuencia, porque la montura se deforma rápido y el niño crece.' },
        ],
      },
    ],
    cuandoConsultar: 'Lleva tus gafas a la óptica si quedan torcidas, flojas, con un tornillo o una plaqueta sueltos, o si los lentes tienen rayones que molestan al ver. Y si notas que ves peor aunque las gafas estén en buen estado, pide un examen visual: puede que la fórmula haya cambiado.',
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
      {
        titulo: '¿Por qué los niños no suelen avisar?',
        bloques: [
          { tipo: 'parrafo', texto: 'Un niño que siempre ha visto borroso no sabe que los demás ven distinto: para él, esa es la visión normal. Por eso rara vez se queja, y son los padres y los profesores quienes suelen notar los primeros indicios en su comportamiento.' },
          { tipo: 'parrafo', texto: 'Detectarlo a tiempo importa, porque buena parte de lo que un niño aprende le llega por la vista, y porque algunos problemas visuales responden mejor cuando se corrigen pronto.' },
        ],
      },
      {
        titulo: '¿Qué señales se ven en casa?',
        bloques: [
          { tipo: 'lista', items: ['Se acerca demasiado al televisor, a la tableta o al cuaderno.', 'Entrecierra los ojos o inclina la cabeza para mirar.', 'Se tapa o cierra un ojo para ver mejor.', 'Se frota los ojos con frecuencia, aunque no tenga sueño.', 'Se queja de dolor de cabeza o de ojos cansados, sobre todo por la tarde.', 'Tropieza o calcula mal las distancias más de lo esperable para su edad.', 'Un ojo parece desviarse hacia adentro o hacia afuera, aunque sea a ratos.'] },
        ],
      },
      {
        titulo: '¿Qué señales aparecen en el colegio?',
        bloques: [
          { tipo: 'lista', items: ['No alcanza a ver bien el tablero o pide sentarse adelante.', 'Copia con errores o más despacio que sus compañeros.', 'Pierde el renglón al leer o sigue el texto con el dedo.', 'Evita leer, dibujar o hacer tareas que exigen ver de cerca.', 'Baja su rendimiento o le cuesta mantener la atención sin una causa clara.'] },
          { tipo: 'parrafo', texto: 'Ninguna de estas señales confirma por sí sola un problema visual, pero varias juntas, o una que se repite, justifican una revisión.' },
        ],
      },
      {
        titulo: '¿Cuáles son los problemas visuales más comunes en niños?',
        bloques: [
          { tipo: 'tabla', columnas: ['Problema', 'Cómo suele notarse'], filas: [['Miopía', 'Ve bien de cerca y borroso de lejos: no distingue el tablero.'], ['Hipermetropía', 'Se cansa al leer; puede tener dolor de cabeza o rechazar las tareas de cerca.'], ['Astigmatismo', 'Visión borrosa o distorsionada a cualquier distancia; entrecierra los ojos.'], ['Ojo perezoso', 'Un ojo ve peor que el otro; a menudo no da señales visibles.'], ['Estrabismo', 'Los ojos no miran en la misma dirección.']] },
        ],
      },
      {
        titulo: '¿A qué edad hacer el primer examen visual?',
        bloques: [
          { tipo: 'parrafo', texto: 'Lo aconsejable es que todo niño tenga una revisión visual antes de empezar la etapa escolar, y después una vez al año, aunque no haya señales. Si en la familia hay fórmulas altas, estrabismo u ojo perezoso, conviene consultar antes.' },
          { tipo: 'parrafo', texto: 'El examen se adapta a la edad: no hace falta que el niño sepa leer para evaluar su visión, y las pruebas no duelen.' },
        ],
      },
      {
        titulo: '¿Cómo ayudar a que se acostumbre a las gafas?',
        bloques: [
          { tipo: 'lista', items: ['Deja que participe en la elección de la montura.', 'Comprueba que le queden cómodas y no resbalen; pide un ajuste si hace falta.', 'Empieza por los momentos en que más las necesita y aumenta el tiempo de uso.', 'Avisa a sus profesores para que le recuerden usarlas.', 'Enséñale a guardarlas en el estuche y a limpiarlas.'] },
        ],
      },
      {
        titulo: '¿Influyen las pantallas?',
        bloques: [
          { tipo: 'parrafo', texto: 'Pasar muchas horas mirando de cerca, con poca actividad al aire libre, se relaciona con una mayor aparición de miopía en la infancia. Limitar el tiempo de pantalla, hacer pausas y favorecer el juego en exteriores son hábitos sencillos que ayudan a cuidar su visión.' },
        ],
      },
    ],
    cuandoConsultar: 'Agenda un examen visual si reconoces varias de estas señales, si tu hijo nunca se ha revisado o si va a empezar el colegio. Si notas que un ojo se desvía, una pupila con reflejo blanco o una pérdida repentina de visión, consulta sin demora.',
    revisado: '2026-10-13',
    servicio: 'examen-visual',
  },
]

export function getGuia(slug) {
  return GUIAS.find((guia) => guia.slug === slug)
}
