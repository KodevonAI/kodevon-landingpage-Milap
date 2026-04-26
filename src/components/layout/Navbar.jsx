import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Button from '../common/Button'
import logo from '../../assets/logo.webp'
import { useScrollProgress } from '../../hooks/useGSAPAnimations'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Reservar Cita', to: '/citas' },
  { label: 'Contacto', to: '/contacto' },
]

const navLinkClass = ({ isActive }) =>
  `px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
    isActive
      ? 'text-accent bg-accent/8 font-semibold'
      : 'text-slate hover:text-foreground hover:bg-muted'
  }`

const mobileNavLinkClass = ({ isActive }) =>
  `block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
    isActive ? 'text-accent bg-accent/8 font-semibold' : 'text-foreground hover:bg-muted hover:text-accent'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const progressRef = useScrollProgress()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-accent via-accent-light to-accent"
        style={{ transformOrigin: 'left center' }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-3"
      >
        <nav
          className={`max-w-5xl mx-auto rounded-2xl px-5 h-14 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-border'
              : 'bg-white/50 backdrop-blur-md border border-white/40 shadow-sm'
          }`}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
            aria-label="Ir al inicio"
          >
            <img src={logo} alt="OpticaMilap logo" className="h-8 w-auto" />
            <span className="font-display font-bold text-sm text-primary hidden sm:block tracking-tight">
              OpticaMilap
            </span>
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
            className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="max-w-5xl mx-auto mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border overflow-hidden"
            >
              <ul className="px-3 py-3 space-y-0.5">
                {links.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink to={to} end={to === '/'} onClick={() => setOpen(false)} className={mobileNavLinkClass}>
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2 pb-1 px-1">
                  <Button onClick={() => { setOpen(false); navigate('/citas') }} className="w-full justify-center">
                    Agendar Cita
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
