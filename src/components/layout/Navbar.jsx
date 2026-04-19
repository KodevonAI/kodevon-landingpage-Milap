import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Button from '../common/Button'
import logo from '../../assets/logo.webp'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Reservar Cita', to: '/citas' },
  { label: 'Contacto', to: '/contacto' },
]

const navLinkClass = ({ isActive }) =>
  `px-3 py-1.5 rounded-lg text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
    isActive ? 'text-primary bg-primary/10' : 'text-gray-600 hover:text-primary hover:bg-primary/5'
  }`

const mobileNavLinkClass = ({ isActive }) =>
  `block w-full text-left px-4 py-2.5 rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
    isActive ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-primary/8 hover:text-primary'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-3"
    >
      <nav
        className={`max-w-5xl mx-auto rounded-2xl px-5 h-14 flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/60'
            : 'bg-white/30 backdrop-blur-md border border-white/20 shadow-md'
        }`}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          aria-label="Ir al inicio"
        >
          <img src={logo} alt="OpticaMilap logo" className="h-9 w-auto" />
        </button>

        <ul className="hidden md:flex items-center gap-0.5">
          {links.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={navLinkClass}>{label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button onClick={() => navigate('/citas')} size="sm">Agendar Cita</Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="max-w-5xl mx-auto mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60 overflow-hidden"
          >
            <ul className="px-4 py-3 space-y-1">
              {links.map(({ label, to }) => (
                <li key={to}>
                  <NavLink to={to} end={to === '/'} onClick={() => setOpen(false)} className={mobileNavLinkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2 pb-1">
                <Button onClick={() => { setOpen(false); navigate('/citas') }} className="w-full justify-center">
                  Agendar Cita
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
