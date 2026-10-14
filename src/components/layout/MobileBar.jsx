import { Link } from 'react-router-dom'
import { FiCalendar } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { BUSINESS } from '../../content/site'

// Barra fija inferior en móvil con las dos acciones principales.
export default function MobileBar() {
  return (
    <nav
      aria-label="Acciones rápidas"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-2 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur border-t border-border"
    >
      <Link
        to="/citas"
        className="flex items-center justify-center gap-2 h-11 rounded-xl bg-accent text-white text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <FiCalendar size={16} />
        Agendar cita
      </Link>
      <a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 h-11 rounded-xl bg-green-600 text-white text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
      >
        <FaWhatsapp size={17} />
        WhatsApp
      </a>
    </nav>
  )
}
