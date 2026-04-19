import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEye, FiCircle, FiTool, FiX, FiClock, FiCheck } from 'react-icons/fi'
import gsap from 'gsap'
import { useStaggerAnimation } from '../../hooks/useScrollAnimation'
import { SERVICES } from '../../utils/constants'
import Button from '../common/Button'
import ScrollReveal from '../animations/ScrollReveal'

function GlassesIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M2 15h0M22 15h0M10 15h4" />
      <path d="M2 12c0-1 .6-2 2-2h1M22 12c0-1-.6-2-2-2h-1" />
    </svg>
  )
}

const iconMap = { eye: FiEye, glasses: GlassesIcon, contact: FiCircle, tools: FiTool }

// 3D tilt card — replaces framer-motion whileHover for service cards
function TiltCard({ children, className, onClick }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transformStyle = 'preserve-3d'
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2
      gsap.to(el, {
        rotateY: x * 14,
        rotateX: -y * 10,
        scale: 1.04,
        boxShadow: '0 25px 50px rgba(50,56,166,0.25)',
        transformPerspective: 700,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    const onLeave = () =>
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)',
      })
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])
  return (
    <div ref={ref} className={className} onClick={onClick}>
      {children}
    </div>
  )
}

export default function Servicios() {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()
  const gridRef = useStaggerAnimation({ stagger: 0.12 })

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Nuestros Servicios</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark">
            Todo lo que necesitas para
            <br />
            <span className="text-primary">tu salud visual</span>
          </h2>
        </ScrollReveal>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <TiltCard
                key={service.id}
                onClick={() => setSelected(service)}
                className="bg-primary rounded-2xl p-7 cursor-pointer group shadow-md flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5 group-hover:bg-white/25 transition-colors duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2 text-base leading-tight">{service.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3 flex-1">{service.description}</p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/15">
                  <div className="flex items-center gap-1.5 text-xs text-white/60 font-medium">
                    <FiClock size={12} />
                    <span>{service.duration}</span>
                  </div>
                  <span className="text-white/80 text-xs font-semibold group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    Ver más →
                  </span>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  {(() => { const Icon = iconMap[selected.icon]; return <Icon size={24} className="text-white" /> })()}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Cerrar"
                >
                  <FiX size={22} />
                </button>
              </div>
              <h3 className="font-display text-xl font-bold text-dark mb-2">{selected.name}</h3>
              <div className="flex items-center gap-1.5 text-xs text-accent font-medium mb-4">
                <FiClock size={12} /><span>{selected.duration}</span>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm">{selected.description}</p>
              <ul className="space-y-2 mb-7">
                {selected.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <FiCheck size={11} className="text-white" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full justify-center"
                onClick={() => { setSelected(null); navigate('/citas') }}
              >
                Agendar Cita
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
