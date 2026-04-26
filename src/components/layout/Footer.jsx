import { Link } from 'react-router-dom'
import { FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { BUSINESS } from '../../utils/constants'
import logo from '../../assets/logo.webp'

const quickLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Agendar Cita', to: '/citas' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary">
      {/* Top divider accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="OpticaMilap logo" className="h-9 w-auto" />
              <span className="font-display font-bold text-base text-white tracking-tight">OpticaMilap</span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Tu salud visual es nuestra prioridad. Atención profesional y personalizada en Popayán, Cauca, desde 2010.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de OpticaMilap"
                className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <FiInstagram size={17} />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de OpticaMilap"
                className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-white/60 hover:bg-green-600 hover:text-white transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 font-display">Navegación</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/50 hover:text-accent-light transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 font-display">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <FiMapPin className="text-accent-light mt-0.5 shrink-0" size={14} />
                <span className="text-white/50 leading-snug">{BUSINESS.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <FiPhone className="text-accent-light shrink-0" size={14} />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="text-white/50 hover:text-accent-light transition-colors duration-150">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <FiMail className="text-accent-light shrink-0" size={14} />
                <a href={`mailto:${BUSINESS.email}`} className="text-white/50 hover:text-accent-light transition-colors duration-150 break-all">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-[11px] text-white/30 font-medium uppercase tracking-wide">Horario</p>
              <p className="text-xs text-white/50 mt-1">Lun–Vie: 8am–12pm / 2pm–6pm</p>
              <p className="text-xs text-white/50">Sáb: 8am–1pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {year} OpticaMilap. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">Popayán, Cauca · Colombia</p>
        </div>
      </div>
    </footer>
  )
}
