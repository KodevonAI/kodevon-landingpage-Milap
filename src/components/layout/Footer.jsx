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
    <footer className="bg-dark text-gray-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="OpticaMilap logo" className="h-10 w-auto" />
              <span className="font-bold text-lg text-white font-display">OpticaMilap</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Tu salud visual es nuestra prioridad. Atención profesional y personalizada en Popayán, Cauca.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de OpticaMilap"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de OpticaMilap"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <FiMapPin className="text-accent mt-0.5 shrink-0" size={16} />
                <span className="text-gray-400">{BUSINESS.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FiPhone className="text-accent shrink-0" size={16} />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="text-gray-400 hover:text-white transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FiMail className="text-accent shrink-0" size={16} />
                <a href={`mailto:${BUSINESS.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
          © {year} OpticaMilap. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
