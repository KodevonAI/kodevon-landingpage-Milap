import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock } from 'react-icons/fi'
import { SERVICIOS } from '../../content/servicios'
import ServiceIcon from './ServiceIcon'

// Tarjetas de los servicios, cada una enlazada a su página. `titleAs` es el nivel del título.
export default function ServiceCards({ titleAs: Title = 'h3', innerRef }) {
  return (
    <ul ref={innerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {SERVICIOS.map((servicio) => (
        <li key={servicio.slug}>
          <Link
            to={`/servicios/${servicio.slug}`}
            className="group flex flex-col h-full bg-card rounded-2xl border border-border p-6 hover:border-accent/40 hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="w-11 h-11 rounded-xl bg-accent-muted text-accent flex items-center justify-center mb-4">
              <ServiceIcon name={servicio.icono} />
            </span>
            <Title className="font-display font-bold text-foreground text-lg">{servicio.nombre}</Title>
            <p className="text-slate text-sm leading-relaxed mt-2 flex-1">{servicio.tarjeta}</p>
            <span className="flex items-center justify-between mt-5 pt-4 border-t border-border text-xs">
              <span className="flex items-center gap-1.5 text-slate-light"><FiClock size={12} />{servicio.duracion}</span>
              <span className="inline-flex items-center gap-1 text-accent font-semibold">
                Ver servicio <FiArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
