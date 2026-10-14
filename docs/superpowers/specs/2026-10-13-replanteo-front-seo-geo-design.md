# Replanteo del front de OpticaMilap para SEO y GEO

Fecha: 2026-10-13
Estado: pendiente de revisión

## 1. Objetivo

Conseguir más citas agendadas desde Google y desde asistentes de IA para
búsquedas locales como "óptica en Popayán" o "examen visual Popayán".

Éxito significa:

- cada servicio y cada duda frecuente tiene una página propia que puede
  posicionar por su búsqueda;
- un buscador o un asistente de IA puede citar el negocio con datos
  correctos (qué hace, dónde, horario, cómo agendar);
- el sitio pasa de 4 páginas a 17 sin romper ninguna URL ya indexada.

## 2. Alcance

Dentro:

- nueva arquitectura de páginas (centro y ramas);
- contenido nuevo para servicios, guías, nosotros y preguntas frecuentes;
- home reordenada y navegación nueva;
- schema, sitemap y `llms.txt` generados desde los mismos datos;
- script de comprobación del build.

Fuera:

- rediseño visual: se mantienen colores, tipografía y estilo de tarjetas;
- cambio de stack: se mantienen React, Vite, Tailwind y Cloudflare Pages;
- precios: no se publican;
- páginas por barrio o municipio;
- blog con fechas y publicación periódica;
- cambios al flujo de citas por WhatsApp.

## 3. Decisiones ya tomadas

| Tema | Decisión |
|---|---|
| Alcance | Estructura y contenido; misma identidad visual y stack |
| Contenido | Lo redacta Claude y lo corrige el cliente |
| Guías | 6 artículos atemporales, sin blog |
| Estructura | Centro y ramas (`/servicios/...`, `/guias/...`) |
| Firma de guías | "Equipo de OpticaMilap" |
| Experiencia | "Más de 30 años" en todo el sitio |
| Reseñas | Valoración real de Google (4,3 con 12 reseñas), sin estrellas en schema |
| "+5.000 pacientes" y "100% garantía" | Se quitan: no están confirmados |
| Barra fija en móvil | Se incluye |

## 4. Mapa del sitio

### Servicios

| URL | Búsqueda objetivo |
|---|---|
| `/servicios` | servicios de optometría Popayán |
| `/servicios/examen-visual` | examen visual Popayán, optómetra Popayán |
| `/servicios/gafas-y-monturas` | gafas formuladas Popayán, monturas Popayán |
| `/servicios/lentes-de-contacto` | lentes de contacto Popayán |
| `/servicios/reparacion-de-gafas` | reparación de gafas Popayán |

### Guías

| URL | Duda que responde | Servicio relacionado |
|---|---|---|
| `/guias` | índice | — |
| `/guias/cada-cuanto-examen-visual` | ¿Cada cuánto hacerse un examen visual? | examen visual |
| `/guias/gafas-o-lentes-de-contacto` | ¿Gafas o lentes de contacto? | lentes de contacto |
| `/guias/lentes-progresivos` | Qué son y cómo adaptarse | gafas y monturas |
| `/guias/fotocromaticos-y-luz-azul` | ¿Valen la pena? | gafas y monturas |
| `/guias/como-cuidar-tus-gafas` | Limpieza y cuidado | reparación de gafas |
| `/guias/senales-de-que-tu-hijo-necesita-gafas` | Visión infantil | examen visual |

### Resto

| URL | Función |
|---|---|
| `/` | Qué es, dónde, accesos a servicios, valoración, fotos, cita |
| `/nosotros` | Historia, fotos del local, diferenciales, marcas |
| `/preguntas-frecuentes` | Todas las preguntas generales |
| `/citas` | Formulario de cita por WhatsApp |
| `/contacto` | Formulario, mapa y horario |

Total: 17 páginas indexables más la 404.

Reglas:

- `/servicios`, `/citas` y `/contacto` conservan su URL.
- URLs en minúsculas, con guiones y sin barra final.
- Cada página tiene título, description, canonical y un único H1 propios.

## 5. Plantillas

Regla común: respuesta primero, detalle después. El primer párrafo de
cada página debe poder citarse solo.

### 5.1 Servicio

1. Migas de pan: Inicio › Servicios › nombre.
2. H1 con servicio y ciudad, por ejemplo "Examen visual en Popayán".
3. Resumen de 2 o 3 frases: qué es, cuánto dura y cómo se agenda.
4. Ficha de datos rápidos: duración, dónde, horario y cómo agendar.
5. Qué incluye: lista concreta.
6. Cómo es el proceso: pasos numerados.
7. Para quién o cuándo conviene.
8. Marcas, solo en gafas y monturas y en lentes de contacto.
9. Preguntas frecuentes del servicio: de 3 a 5, distintas de las generales.
10. Guías relacionadas: 1 o 2 enlaces.
11. Bloque de cita: botón a `/citas` con el servicio preseleccionado y WhatsApp.

Extensión: de 500 a 700 palabras.

### 5.2 Guía

1. Migas de pan: Inicio › Guías › título.
2. H1 igual a la pregunta tal como se busca.
3. Respuesta corta de 2 o 3 frases.
4. Desarrollo con subtítulos en forma de pregunta; tablas o listas al
   comparar opciones.
5. Cuándo consultar a un optómetra.
6. Autoría: "Revisado por el equipo de optometría de OpticaMilap" y
   fecha de revisión.
7. Servicio relacionado y bloque de cita.

Extensión: de 600 a 900 palabras. Tono informativo; no diagnostica ni
promete resultados, y remite a consulta.

### 5.3 Índice (`/servicios`, `/guias`)

H1, párrafo introductorio y una tarjeta por página hija con título,
resumen de una línea y enlace.

### 5.4 Componentes compartidos

En `src/components/content/`:

| Componente | Función |
|---|---|
| `Breadcrumbs` | Migas de pan visibles |
| `QuickFacts` | Ficha de datos rápidos |
| `StepList` | Pasos numerados |
| `PageFaq` | Preguntas de la página, con respuestas siempre en el DOM |
| `RelatedLinks` | Enlaces a guías o servicios relacionados |
| `BookingCta` | Bloque de cita y WhatsApp |

Reutilizan los estilos actuales. No añaden efectos nuevos.

## 6. Home

| # | Bloque | Cambio |
|---|---|---|
| 1 | Hero | H1 grande: "Óptica en Popayán: exámenes visuales, gafas y lentes de contacto". "Tu Visión, Nuestra Pasión" pasa a subtítulo |
| 2 | Datos clave | Nuevo: dirección, horario, teléfono, 4,3 en Google, más de 30 años |
| 3 | Servicios | 4 tarjetas que enlazan a su página |
| 4 | Nosotros | Resumen y enlace a `/nosotros` |
| 5 | Fotos del local | Se mantiene |
| 6 | Marcas | Se mantiene, más compacta |
| 7 | Reseñas de Google | Se mantiene |
| 8 | Guías destacadas | Nuevo: 3 tarjetas y "ver todas" |
| 9 | Preguntas frecuentes | 4 principales y enlace a `/preguntas-frecuentes` |
| 10 | Ubicación y cita | Mapa, horario y botón de cita |

Salen de la home:

- "Por qué elegirnos": pasa a `/nosotros`, reescrito con hechos concretos.
- Formulario de contacto: queda solo en `/contacto`.
- Tarjetas decorativas del hero ("+5.000 pacientes", avatares).

## 7. Navegación

- Menú: Servicios (desplegable con los 4), Guías, Nosotros, Contacto y
  botón "Agendar cita".
- Footer: columnas con todos los servicios, todas las guías, contacto y
  horario, de modo que cada página enlace a las demás.
- Móvil: barra fija inferior con "Agendar cita" y "WhatsApp".

## 8. Otras páginas

- `/nosotros`: historia (más de 30 años), fotos, diferenciales con
  hechos, marcas y valoración en Google.
- `/citas`: mismo formulario; añade "qué llevar a tu cita" y "cómo
  confirmamos"; acepta `?servicio=<id>` para preseleccionar.
- `/contacto`: formulario, mapa y horario; sin preguntas frecuentes.
- `/preguntas-frecuentes`: preguntas generales agrupadas por tema.

## 9. Arquitectura

### 9.1 Fuente única de datos

```
src/content/
  site.js        negocio, horario, marcas, fotos, reseñas
  servicios.js   4 entradas
  guias.js       6 entradas
  faqs.js        preguntas generales
```

`site.js` sustituye a `src/utils/constants.js`. Las preguntas de cada
servicio viven en su entrada de `servicios.js`.

Forma de una entrada de servicio:

```js
{
  slug: 'examen-visual',
  citaId: 'examen',            // id que usa el formulario de citas
  nombre: 'Examen visual',
  title: '...',                // <title>
  description: '...',          // meta description
  h1: 'Examen visual en Popayán',
  resumen: '...',
  datos: [{ etiqueta: 'Duración', valor: '30 a 45 minutos' }],
  incluye: ['...'],
  pasos: [{ titulo: '...', texto: '...' }],
  paraQuien: ['...'],
  marcas: null,                // o clave de BRANDS
  faqs: [{ pregunta: '...', respuesta: '...' }],
  guias: ['cada-cuanto-examen-visual'],
}
```

Forma de una entrada de guía:

```js
{
  slug: 'cada-cuanto-examen-visual',
  title: '...',
  description: '...',
  h1: '¿Cada cuánto hay que hacerse un examen visual?',
  respuesta: '...',
  secciones: [{ titulo: '...', bloques: [/* párrafo, lista o tabla */] }],
  cuandoConsultar: '...',
  revisado: '2026-10-13',
  servicio: 'examen-visual',
}
```

### 9.2 Salidas derivadas

| Salida | Origen |
|---|---|
| Rutas de React | Se generan recorriendo servicios y guías |
| HTML prerenderizado | `scripts/prerender.js` itera todas las rutas |
| Título, description, canonical | Campos de cada entrada |
| `sitemap.xml` | Todas las rutas indexables |
| JSON-LD | Según el tipo de página |
| `llms.txt` | Resumen del negocio y enlace a cada página |

`src/seo/routes.js` deja de listar rutas a mano y construye el mapa de
rutas a partir de `src/content/`.

### 9.3 Schema

| Página | Schema |
|---|---|
| Todas | `Optician` y `BreadcrumbList` (salvo la home) |
| Home | `WebSite` |
| Servicio | `Service` (proveedor: el negocio; zona: Popayán) y `FAQPage` propia |
| Guía | `Article` (autor y editor: OpticaMilap; fecha de revisión) |
| `/preguntas-frecuentes` | `FAQPage` general |

Cada `FAQPage` incluye solo las preguntas visibles en esa página. No se
marca `aggregateRating`.

### 9.4 Código

- `src/pages/`: una página por plantilla (`ServicioPage`, `GuiaPage`,
  `ServiciosIndexPage`, `GuiasIndexPage`, `NosotrosPage`, `FaqPage`),
  más las existentes.
- `src/components/sections/`: bloques de la home.
- `src/components/content/`: componentes compartidos.
- Se eliminan `PorqueElegir` y, de la home, `FormContacto`. `Servicios`
  se reduce a tarjetas con enlace.

## 10. Reglas de contenido

- No se inventan datos del negocio. Equipos, nombres, plazos y garantías
  se marcan `[CONFIRMAR]` hasta que el cliente responda.
- El contenido de salud es general y prudente; cada guía remite a
  consulta.
- No se copian textos de reseñas de terceros.
- Las marcas publicadas son las ya presentes en el sitio; el cliente
  debe confirmar la lista antes del despliegue.

## 11. Verificación

`npm run check` se ejecuta sobre `dist/` y falla si:

- una ruta no genera HTML;
- a una página le falta título, description o canonical, o no tiene
  exactamente un H1;
- un título o una description se repite entre páginas;
- un enlace interno apunta a una ruta inexistente;
- un bloque JSON-LD no es JSON válido;
- queda un `[CONFIRMAR]` en el HTML.

Además:

- prueba manual en navegador, en escritorio y móvil, de cada plantilla;
- Rich Results Test de Google en una página de cada tipo;
- comprobación de que el formulario de citas preselecciona el servicio.

## 12. Orden de entrega

1. Datos, plantillas, rutas, prerender y script de comprobación.
2. Contenido de los 4 servicios; revisión del cliente.
3. Home, navegación, `/nosotros` y `/preguntas-frecuentes`.
4. Las 6 guías; revisión del cliente.
5. Despliegue, envío del sitemap y solicitud de indexación.

El trabajo se hace en la rama `replanteo-front`. `main`, que es lo que
despliega Cloudflare Pages, no cambia hasta el paso 5.

## 13. Pendiente de confirmar por el cliente

- Lista de marcas que realmente se venden.
- Datos marcados `[CONFIRMAR]` que aparezcan al redactar.
