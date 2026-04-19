# OpticaMilap Web — Contexto del Proyecto

> Archivo de referencia para continuar trabajo entre sesiones. Actualizar cuando cambie arquitectura o diseño.

---

## Descripción del Negocio

**OpticaMilap** — Óptica profesional en Popayán, Cauca, Colombia.

| Campo | Valor |
|---|---|
| Dirección | Cra. 10 #17N-60 Local 1, Antonio Nariño, Popayán, Cauca |
| Teléfono | 316 6085291 |
| Email | optica_milap@hotmail.com |
| WhatsApp | https://wa.me/573166085291 |
| Instagram | https://www.instagram.com/opticamilap/ |
| Website | http://www.opticamilap.com/ |
| Coordenadas | lat: 2.4448, lng: -76.6142 |
| Timezone | America/Bogota |

**Horario de atención:**
- Lun–Vie: 8:00–12:00 / 14:00–18:00
- Sábados: 8:00–13:00
- Domingos: Cerrado

---

## Stack Técnico

| Tecnología | Versión | Notas |
|---|---|---|
| React | 19.x | Con BrowserRouter |
| Vite | 8.x | Bundler rolldown |
| Tailwind CSS | v4.x | Sin `tailwind.config.js` — usa `@theme` en CSS |
| @tailwindcss/vite | 4.x | Plugin de Vite para Tailwind v4 |
| Framer Motion | 12.x | Animaciones de página y scroll reveals |
| GSAP + @gsap/react | 3.x | Stagger animations con ScrollTrigger |
| React Hook Form | 7.x | Formularios |
| @hookform/resolvers | 5.x | Integración Zod + RHF |
| Zod | 4.x | Validación de schemas |
| @react-google-maps/api | 2.x | Google Maps embed |
| @emailjs/browser | 4.x | Envío de emails sin backend |
| date-fns + date-fns-tz | 4.x / 3.x | Manipulación de fechas, timezone Colombia |
| axios | 1.x | HTTP (usado junto con fetch nativo) |
| react-icons | 5.x | Iconos (fi = Feather, fa = Font Awesome) |

---

## Identidad Visual / Design System

### Colores (definidos en `src/index.css` via `@theme`)

```css
--color-primary: #3238A6;        /* Azul corporativo — elemento principal */
--color-primary-dark: #2E338C;   /* Hover de primary */
--color-accent: #117DBF;         /* Azul claro — acentos, eyebrows */
--color-cream: #F2EBC9;          /* Crema — detalles decorativos */
--color-neutral: #F2F2F2;        /* Gris muy claro */
--color-dark: #1a1a2e;           /* Texto principal, footer */
--color-dark-800: #16172a;       /* Fondo footer más oscuro */
```

**Uso de tokens en Tailwind v4:** `bg-primary`, `text-primary`, `border-accent`, etc. (sin configuración extra).

### Tipografías

```css
--font-sans: 'Poppins', sans-serif;           /* Cuerpo, UI */
--font-display: 'Playfair Display', serif;    /* Títulos h1/h2 */
```

Importadas desde Google Fonts en `src/index.css` **antes** del `@import "tailwindcss"` (orden obligatorio en Tailwind v4).

### Principio de diseño actual

- **Todos los fondos de sección: `bg-white`**
- **Los componentes/tarjetas llevan el color corporativo `bg-primary`** con texto blanco
- Navbar flotante glassmorphism (píldora, no full-width)
- Secciones con `py-20`, grids responsivos, `rounded-2xl` / `rounded-3xl` en tarjetas
- Accesibilidad: `focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`

---

## Estructura de Archivos

```
opticamilap-web/
├── index.html                        # lang="es", meta SEO, OG tags
├── package.json
├── vite.config.js
├── .env.local                        # API keys (NO commitear)
│
└── src/
    ├── index.css                     # Tailwind v4 @theme, Google Fonts
    ├── main.jsx                      # Entry point
    ├── App.jsx                       # BrowserRouter > Layout > Home
    │
    ├── pages/
    │   └── Home.jsx                  # Composición de todas las secciones
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.jsx            # Wrapper: Navbar + {children} + Footer
    │   │   ├── Navbar.jsx            # Flotante glassmorphism, scroll-spy
    │   │   └── Footer.jsx            # Dark bg, 3 columnas
    │   │
    │   ├── sections/                 # Orden en Home.jsx:
    │   │   ├── Hero.jsx              # 1. 2-col grid, AnimatedEye, stats
    │   │   ├── QuienesSomos.jsx      # 2. Quiénes somos / nosotros
    │   │   ├── Servicios.jsx         # 3. 4 servicios, cards bg-primary
    │   │   ├── PorqueElegir.jsx      # 4. 6 razones, icon boxes bg-primary
    │   │   ├── Testimonios.jsx       # 5. Carrusel, card bg-primary
    │   │   ├── ReservaCitas.jsx      # 6. Formulario cita + Google Calendar
    │   │   ├── FAQ.jsx               # 7. Accordion preguntas frecuentes
    │   │   ├── FormContacto.jsx      # 8. Formulario contacto + canales
    │   │   └── Ubicacion.jsx         # 9. Google Maps + horario
    │   │
    │   ├── common/
    │   │   ├── Button.jsx            # Variantes: primary, secondary, outline
    │   │   ├── Toast.jsx             # Notificaciones success/error
    │   │   └── Spinner.jsx           # Loading spinner
    │   │
    │   └── animations/
    │       └── ScrollReveal.jsx      # Wrapper con IntersectionObserver + Framer
    │
    ├── hooks/
    │   ├── useScrollAnimation.js     # GSAP stagger (useStaggerAnimation)
    │   ├── useInView.js              # IntersectionObserver hook
    │   └── useMediaQuery.js          # Responsive breakpoints
    │
    ├── utils/
    │   ├── constants.js              # BUSINESS, SCHEDULE, SERVICES, TESTIMONIOS, FAQS, COLORS
    │   ├── googleCalendar.js         # getAvailableHours(), createCitaEvent()
    │   ├── emailService.js           # sendContactForm(), sendCitaConfirmation()
    │   └── validation.js             # citaSchema, contactSchema (Zod)
    │
    └── config/
        ├── googleConfig.js           # googleCalendarConfig, googleMapsConfig
        └── emailjsConfig.js          # emailjs service/template IDs
```

---

## Variables de Entorno (`.env.local`)

Estas variables deben existir localmente para que las integraciones funcionen. **No están en el repositorio.**

```env
VITE_GOOGLE_MAPS_API_KEY=...
VITE_GOOGLE_CALENDAR_API_KEY=...
VITE_CALENDAR_ID=...
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID_CITA=...
VITE_EMAILJS_TEMPLATE_ID_CONTACT=...
VITE_EMAILJS_PUBLIC_KEY=...
```

---

## Secciones — Detalle de Implementación

### `Navbar.jsx`
- Flotante tipo píldora: `fixed top-0 left-0 right-0 z-50 px-4 pt-3`
- Nav element: `max-w-6xl mx-auto rounded-2xl px-5 h-14`
- Sin scroll: `bg-white/30 backdrop-blur-md border border-white/20 shadow-md`
- Con scroll (>40px): `bg-white/80 backdrop-blur-xl shadow-lg border border-white/60`
- Scroll-spy con `IntersectionObserver` (threshold 0.3) → activa `text-primary bg-primary/10`
- Menú móvil: dropdown flotante `bg-white/90 backdrop-blur-xl rounded-2xl` con AnimatePresence

### `Hero.jsx`
- Layout: 2 columnas (`grid-cols-1 lg:grid-cols-2`), fondo blanco
- **Columna izquierda:** eyebrow, h1 "Tu Visión, Nuestra Pasión", subtítulo, 2 CTAs, stats bar (3 cards `bg-primary`)
- **Columna derecha:** componente `AnimatedEye` (264×264 / 320×320 px)
  - Anillo exterior pulsante: `scale [1, 1.08, 1]`, duración 3s
  - Punto orbitando clockwise: `rotate: 360`, duración 8s
  - Punto orbitando counter-clockwise: `rotate: -360`, duración 12s
  - Tarjeta central `w-44 h-44 rounded-3xl bg-primary` rotada 6°
  - Ojo SVG con párpado que parpadea (`scaleY [1, 0.1, 1]`) cada 4s + delay 2s
  - Pupila que se mueve (`cx [40, 43, 40, 37, 40]`), duración 5s
  - Badge "4.9★ Google" flotando hacia arriba (bg-white)
  - Badge "+15 años" flotando hacia abajo (bg-primary)
- Blobs decorativos radiales en baja opacidad (8%, 6%), no interactivos

### `Servicios.jsx`
- 4 servicios: Exámenes Visuales, Venta de Gafas, Lentes de Contacto, Reparaciones
- Cards `bg-primary text-white` con modal de detalles
- Icono `GlassesIcon` es SVG personalizado inline (FiGlasses no existe en react-icons/fi v5)
- `iconMap: { eye: FiEye, glasses: GlassesIcon, contact: FiCircle, tools: FiTool }`

### `ReservaCitas.jsx`
- Sección `id="citas"`, fondo `bg-white`
- Llama `getAvailableHours(date)` al cambiar fecha
- Validación: no domingos (`getDay() !== 0`), fecha no en el pasado
- Schema: `citaSchema` (Zod) — campos: name, email, phone, service, date, time, message?

### `Testimonios.jsx`
- Carrusel manual con 5 testimonios ordenados por fecha descendente
- Card activa: `bg-primary rounded-3xl` con texto blanco
- Avatar: círculo `bg-white` con inicial en `text-primary`

### `FormContacto.jsx`
- Canales de contacto: teléfono, email, WhatsApp, Instagram (icon boxes `bg-primary`)
- Horario panel: `bg-primary text-white`
- Formulario: `bg-white border border-gray-100 rounded-3xl`
- Schema: `contactSchema` (Zod) — campos: name, email, subject, message, phone?

### `Ubicacion.jsx`
- Google Maps via `@react-google-maps/api`
- Tarjeta de dirección: `bg-primary text-white`
- Coordenadas: `{ lat: 2.4448, lng: -76.6142 }`

### `FAQ.jsx`
- 8 preguntas en accordion animado con Framer Motion (`height: 0 → auto`)
- Botón activo: `bg-primary text-white`; inactivo: `bg-gray-100 text-primary`

---

## Integraciones Externas

### Google Calendar (REST API — client-side)
- `getAvailableHours(date)`: GET eventos del día, filtra slots de 30 min ya ocupados
- `createCitaEvent(citaData)`: POST evento al calendario (requiere API key con write scope)
- Slots disponibles: 08:00–12:00 y 14:00–18:00 (L-V), 08:00–13:00 (Sáb)

### EmailJS
- Sin backend. Dos templates: confirmación de cita + formulario de contacto
- Config en `src/config/emailjsConfig.js` (lee de `.env.local`)

### Google Maps
- Mapa embebido con marcador en la tienda
- Config en `src/config/googleConfig.js`

---

## Estado Actual del Proyecto

### Completado ✓
1. **Setup:** React 19 + Vite 8 + Tailwind v4 + todas las dependencias
2. **Diseño sistema:** tokens de color y tipografía via `@theme`
3. **Layout:** Navbar flotante glassmorphism + Footer oscuro
4. **Hero:** 2 columnas + animación `AnimatedEye` con Framer Motion
5. **Secciones:** QuienesSomos, Servicios, PorqueElegir, Testimonios, ReservaCitas, FAQ, FormContacto, Ubicacion
6. **Formularios:** React Hook Form + Zod en citas y contacto
7. **Animaciones:** ScrollReveal, GSAP stagger, Framer Motion en hero/navbar
8. **SEO base:** `index.html` con lang, title, meta description, OG tags
9. **Diseño visual:** fondos blancos, componentes en color corporativo `#3238A6`

### Pendiente ✗
- [ ] Llenar `.env.local` con API keys reales (Google Calendar, Maps, EmailJS)
- [ ] Fase 6: Optimización, Lighthouse score, lazy loading de imágenes
- [ ] Fase 7: Deploy a Hostinger
- [ ] Imágenes reales del negocio (actualmente solo ilustraciones/SVG)
- [ ] Eliminar `useRef` no utilizado en `Hero.jsx` (import sobrante, warning de TS, no afecta build)

---

## Gotchas y Decisiones Técnicas

| Situación | Decisión / Fix |
|---|---|
| Tailwind v4 no usa `tailwind.config.js` | Tokens en bloque `@theme` en `index.css` |
| Google Fonts debe ir ANTES de `@import "tailwindcss"` | Orden crítico en index.css |
| `FiGlasses` no existe en react-icons/fi v5 | SVG personalizado inline `GlassesIcon` |
| Google Calendar write con API key | Requiere calendar público + permisos write o OAuth |
| Formulario de cita valida domingos | `getDay() !== 0` en el validador de fecha |
| `focus:ring-2` deprecated pattern | Usar `focus-visible:ring-2` (accesibilidad) |
| `opacity-8` / `opacity-6` no son clases Tailwind | Usar `style={{ opacity: 0.08 }}` o inline para valores no estándar |

---

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Dev server
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

*Última actualización: 2026-04-19*
