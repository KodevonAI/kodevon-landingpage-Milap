import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import logo from '../../assets/logo.webp'
import { useScrollProgress } from '../../hooks/useGSAPAnimations'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const progressRef = useScrollProgress()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Only use dark/transparent mode on home page while not scrolled past hero
  const onHero = isHome && !scrolled

  return (
    <>
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px]"
        style={{
          background: 'linear-gradient(90deg, #0369A1, #0EA5E9, #38BDF8)',
          transformOrigin: 'left center',
        }}
      />

      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-5 pt-4"
      >
        <nav
          className="max-w-5xl mx-auto rounded-2xl px-5 h-13 flex items-center justify-between transition-all duration-400"
          style={
            onHero
              ? {
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                }
              : {
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px rgba(15,23,42,0.08)',
                }
          }
        >
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg cursor-pointer"
            aria-label="Ir al inicio"
          >
            <img src={logo} alt="OpticaMilap logo" className="h-7 w-auto" />
            <span
              className="font-display font-bold text-sm hidden sm:block tracking-tight transition-colors duration-300"
              style={{ color: onHero ? 'rgba(255,255,255,0.90)' : '#0F172A' }}
            >
              OpticaMilap
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer ${
                      isActive
                        ? onHero
                          ? 'text-white font-semibold bg-white/15'
                          : 'text-accent font-semibold bg-accent/8'
                        : onHero
                          ? 'text-white/65 hover:text-white hover:bg-white/10'
                          : 'text-slate hover:text-foreground hover:bg-muted'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => navigate('/citas')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={
                onHero
                  ? {
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.25)',
                      color: '#ffffff',
                    }
                  : {
                      background: '#0369A1',
                      border: '1px solid #0369A1',
                      color: '#ffffff',
                      boxShadow: '0 2px 8px rgba(3,105,161,0.3)',
                    }
              }
            >
              Agendar Cita
              <FiArrowRight size={13} />
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors cursor-pointer"
            style={{ color: onHero ? 'rgba(255,255,255,0.85)' : '#0F172A' }}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="max-w-5xl mx-auto mt-2 rounded-2xl overflow-hidden"
              style={{
                background: onHero ? 'rgba(15,23,42,0.85)' : 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(20px)',
                border: onHero ? '1px solid rgba(255,255,255,0.12)' : '1px solid #E2E8F0',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            >
              <ul className="px-3 py-3 space-y-0.5">
                {links.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          isActive
                            ? 'text-accent bg-accent/10 font-semibold'
                            : onHero
                              ? 'text-white/75 hover:text-white hover:bg-white/10'
                              : 'text-foreground hover:bg-muted hover:text-accent'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2 pb-1 px-1">
                  <button
                    onClick={() => { setOpen(false); navigate('/citas') }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-white text-sm font-semibold cursor-pointer hover:bg-[#025d8f] transition-colors"
                  >
                    Agendar Cita <FiArrowRight size={14} />
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
