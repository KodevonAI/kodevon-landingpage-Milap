import { Link } from 'react-router-dom'
import { FiExternalLink } from 'react-icons/fi'
import { BUSINESS, BRANDS, GOOGLE_REVIEWS, PHOTOS } from '../content/site'
import { SERVICIOS } from '../content/servicios'
import ContentPage, { Bloque } from '../components/content/ContentPage'
import BookingCta from '../components/content/BookingCta'

const RATING = GOOGLE_REVIEWS.rating.toLocaleString('es-CO')

const diferenciales = [
  { titulo: 'Todo en una sede', texto: 'Examen visual, gafas, lentes de contacto y reparación de monturas en el mismo lugar, sin ir de un sitio a otro.' },
  { titulo: 'Te atiende un optómetra', texto: 'El examen visual lo realiza un profesional, con equipos de optometría digital, y te explica el resultado con claridad.' },
  { titulo: 'Arreglos el mismo día', texto: 'Los ajustes y reparaciones simples, como tornillos o plaquetas, se hacen mientras esperas.' },
  { titulo: 'Citas por WhatsApp', texto: 'Eliges servicio, fecha y hora en línea y te confirmamos por WhatsApp, sin llamadas ni filas.' },
]

const parrafo = 'text-slate text-sm sm:text-base leading-relaxed'

export default function NosotrosPage() {
  return (
    <ContentPage
      etiqueta="Quiénes somos"
      h1="Sobre OpticaMilap, óptica en Popayán con más de 30 años"
      intro="OpticaMilap es una óptica y consultorio de optometría en el barrio Antonio Nariño de Popayán, Cauca. Llevamos más de 30 años ayudando a las familias de la ciudad a ver mejor, con atención cercana y sin afán."
    >
      <Bloque titulo="Qué hacemos">
        <div className="space-y-4">
          <p className={parrafo}>
            Nuestro trabajo empieza por entender cómo usas la vista: qué haces durante el día, qué te incomoda y qué esperas de tus gafas o lentes. A partir de ahí hacemos el examen visual, te recomendamos la corrección adecuada y te acompañamos hasta que te sientas cómodo con ella.
          </p>
          <p className={parrafo}>Estos son nuestros servicios:</p>
          <ul className="space-y-2">
            {SERVICIOS.map((servicio) => (
              <li key={servicio.slug} className={parrafo}>
                <Link to={`/servicios/${servicio.slug}`} className="text-accent font-semibold hover:underline">{servicio.nombre}</Link>
                {': '}{servicio.tarjeta}
              </li>
            ))}
          </ul>
        </div>
      </Bloque>

      <Bloque titulo="Qué nos diferencia">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {diferenciales.map(({ titulo, texto }) => (
            <li key={titulo} className="bg-card rounded-2xl border border-border p-5">
              <h3 className="font-display font-bold text-foreground text-sm">{titulo}</h3>
              <p className="text-slate text-sm leading-relaxed mt-1.5">{texto}</p>
            </li>
          ))}
        </ul>
      </Bloque>

      <Bloque titulo="Nuestra sede">
        <p className={`${parrafo} mb-5`}>
          Estamos en {BUSINESS.address}. Atendemos de lunes a viernes de 8:00 a 12:00 y de 14:00 a 18:00, y los sábados de 8:00 a 13:00.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PHOTOS.map(({ src, alt }) => (
            <img key={src} src={src} alt={alt} width={800} height={1422} loading="lazy" decoding="async" className="w-full aspect-[3/4] object-cover rounded-2xl border border-border" />
          ))}
        </div>
      </Bloque>

      <Bloque titulo="Marcas que manejamos">
        <dl className="space-y-4">
          {[['Monturas', BRANDS.monturas], ['Lentes', BRANDS.lentes], ['Accesorios', BRANDS.accesorios]].map(([grupo, marcas]) => (
            <div key={grupo}>
              <dt className="text-accent font-semibold text-[11px] tracking-widest uppercase mb-2">{grupo}</dt>
              <dd className="flex flex-wrap gap-2">
                {marcas.map((marca) => (
                  <span key={marca} className="px-3.5 py-1.5 rounded-full bg-card border border-border text-sm font-medium text-foreground">{marca}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Bloque>

      <Bloque titulo="Lo que opinan nuestros pacientes">
        <p className={parrafo}>
          OpticaMilap tiene una valoración de {RATING} sobre 5 en Google, con {GOOGLE_REVIEWS.count} reseñas ({GOOGLE_REVIEWS.checked}).{' '}
          <a href={GOOGLE_REVIEWS.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent font-semibold hover:underline">
            Leer las reseñas en Google <FiExternalLink size={13} />
          </a>
        </p>
      </Bloque>

      <BookingCta />
    </ContentPage>
  )
}
