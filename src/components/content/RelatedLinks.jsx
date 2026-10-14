import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function RelatedLinks({ items, columnas = 'sm:grid-cols-2' }) {
  return (
    <ul className={`grid grid-cols-1 ${columnas} gap-3`}>
      {items.map(({ to, titulo, resumen }) => (
        <li key={to}>
          <Link
            to={to}
            className="group flex flex-col h-full bg-card rounded-2xl border border-border p-5 hover:border-accent/40 hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="font-display font-bold text-foreground text-sm leading-snug">{titulo}</span>
            <span className="text-slate text-xs leading-relaxed mt-1.5 flex-1">{resumen}</span>
            <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold mt-3">
              Leer más <FiArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
