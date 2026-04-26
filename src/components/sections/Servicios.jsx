import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEye, FiCircle, FiTool, FiX, FiClock, FiCheck, FiArrowRight } from 'react-icons/fi'
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

const CARD_ACCENT = ['#0369A1', '#0F172A', '#0EA5E9', '#334155']
const CARD_ACCENT_LIGHT = ['#E0F2FE', '#F1F5F9', '#E0F9FF', '#F8FAFC']

function ServiceCard({ service, index, onClick }) {
  const Icon = iconMap[service.icon]
  const isFeatured = index === 0
  const accent = CARD_ACCENT[index]
  const accentLight = CARD_ACCENT_LIGHT[index]

  if (isFeatured) {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        className="col-span-1 sm:col-span-2 bg-primary rounded-2xl p-7 cursor-pointer group flex flex-col sm:flex-row gap-6 items-start sm:items-center shadow-lg"
        style={{ boxShadow: '0 8px 32px rgba(15,23,42,0.18)' }}
      >
        <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
          <Icon size={24} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold text-accent-light bg-accent/20 rounded-full px-2.5 py-0.5 uppercase tracking-wide">Servicio Principal</span>
          </div>
          <h3 className="font-display font-bold text-white text-lg mb-1.5 leading-snug">{service.name}</h3>
          <p className="text-white/65 text-sm leading-relaxed line-clamp-2">{service.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5 text-xs text-white/50 font-medium">
              <FiClock size={11} />
              <span>{service.duration}</span>
            </div>
            <span className="text-accent-light text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Ver detalles <FiArrowRight size={12} />
            </span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="bg-card rounded-2xl p-6 cursor-pointer group flex flex-col border border-border hover:border-transparent hover:shadow-xl transition-all duration-200"
      style={{ '--hover-shadow': `0 8px 24px ${accent}20` }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0"
        style={{ background: accentLight }}
      >
        <Icon size={20} style={{ color: accent }} />
      </div>
      <h3 className="font-display font-bold text-foreground mb-2 text-sm leading-snug">{service.name}</h3>
      <p className="text-slate text-xs leading-relaxed line-clamp-3 flex-1">{service.description}</p>
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-light font-medium">
          <FiClock size={11} />
          <span>{service.duration}</span>
        </div>
        <span className="text-xs font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all" style={{ color: accent }}>
          Ver más <FiArrowRight size={11} />
        </span>
      </div>
    </motion.div>
  )
}

export default function Servicios() {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()
  const gridRef = useStaggerAnimation({ stagger: 0.1 })

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3 bg-accent-muted px-3 py-1 rounded-full">Nuestros Servicios</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Todo lo que necesitas para
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}
            >
              tu salud visual
            </span>
          </h2>
        </ScrollReveal>

        {/* Bento grid: first card is 2-wide featured, rest are 1x1 */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => setSelected(service)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl p-8 max-w-md w-full shadow-2xl border border-border"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center">
                  {(() => { const Icon = iconMap[selected.icon]; return <Icon size={22} className="text-accent" /> })()}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-slate hover:text-foreground p-1.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors cursor-pointer"
                  aria-label="Cerrar"
                >
                  <FiX size={20} />
                </button>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{selected.name}</h3>
              <div className="flex items-center gap-1.5 text-xs text-accent font-semibold mb-4 bg-accent-muted px-2.5 py-1 rounded-full w-fit">
                <FiClock size={11} /><span>{selected.duration}</span>
              </div>
              <p className="text-slate mb-5 leading-relaxed text-sm">{selected.description}</p>
              <ul className="space-y-2 mb-7">
                {selected.details.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-sm text-slate">
                    <span className="w-5 h-5 rounded-full bg-accent-muted flex items-center justify-center shrink-0">
                      <FiCheck size={11} className="text-accent" />
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
                <FiArrowRight size={15} />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
