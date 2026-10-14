import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi'
import { BUSINESS } from '../../content/site'

// Lo que más pregunta la gente (y los asistentes de IA), justo debajo del hero.
// Cada dato tiene un valor corto y una segunda línea, para que las tres columnas queden parejas.
const datos = [
  { icon: FiMapPin, etiqueta: 'Dirección', valor: 'Cra. 10 #17N-60', detalle: 'Local 1 · Antonio Nariño, Popayán', href: BUSINESS.googleMaps },
  { icon: FiClock, etiqueta: 'Horario', valor: 'Lun–Vie 8–12 · 2–6', detalle: 'Sábados 8–1 · Domingos cerrado' },
  { icon: FiPhone, etiqueta: 'Teléfono', valor: BUSINESS.phone, detalle: 'Llamadas y WhatsApp', href: `tel:+57${BUSINESS.phoneRaw}` },
]

const valorClass = 'block font-display font-bold text-foreground text-lg leading-snug'

export default function DatosClave() {
  return (
    <section aria-label="Datos clave de OpticaMilap" className="bg-background pt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 md:grid-cols-3 bg-card rounded-3xl border border-border shadow-sm divide-y md:divide-y-0 md:divide-x divide-border overflow-hidden">
          {datos.map(({ icon: Icon, etiqueta, valor, detalle, href }) => {
            const externo = href?.startsWith('http')
            return (
              <div key={etiqueta} className="flex items-center gap-4 px-6 py-7 lg:px-8">
                <span className="shrink-0 w-12 h-12 rounded-2xl bg-accent-muted text-accent flex items-center justify-center">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <dt className="text-[11px] font-semibold tracking-widest uppercase text-slate-light">{etiqueta}</dt>
                  <dd className="mt-1">
                    {href ? (
                      <a
                        href={href}
                        target={externo ? '_blank' : undefined}
                        rel={externo ? 'noopener noreferrer' : undefined}
                        className={`${valorClass} hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded`}
                      >
                        {valor}
                      </a>
                    ) : (
                      <span className={valorClass}>{valor}</span>
                    )}
                    <span className="block text-slate text-xs mt-0.5">{detalle}</span>
                  </dd>
                </div>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
