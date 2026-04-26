import { useNavigate } from 'react-router-dom'
import { FiAward, FiZap, FiHeart, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import ScrollReveal from '../animations/ScrollReveal'
import Button from '../common/Button'
import { useCounterAnimation } from '../../hooks/useGSAPAnimations'

const pillars = [
  { icon: FiAward, label: 'Profesionales Certificados', desc: 'Optómetras con amplia experiencia', accent: '#0369A1', bg: '#E0F2FE' },
  { icon: FiZap, label: 'Tecnología de Diagnóstico', desc: 'Equipos de última generación', accent: '#0F172A', bg: '#F1F5F9' },
  { icon: FiHeart, label: 'Compromiso Familiar', desc: 'Más de 15 años cuidando familias', accent: '#0369A1', bg: '#E0F2FE' },
]

const stats = [
  { value: '+15', label: 'Años', sub: 'de experiencia', counter: 15, prefix: '+', suffix: '' },
  { value: '+5K', label: 'Pacientes', sub: 'atendidos', counter: 5, prefix: '+', suffix: 'K' },
  { value: '100%', label: 'Garantía', sub: 'en productos', counter: 100, prefix: '', suffix: '%' },
]

export default function QuienesSomos() {
  const navigate = useNavigate()
  const counterRef = useCounterAnimation()

  return (
    <section id="nosotros" className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: bento visual + stats */}
          <ScrollReveal direction="left">
            <div className="space-y-3">
              {/* Main visual card */}
              <div className="rounded-2xl overflow-hidden bg-primary relative flex items-center justify-center min-h-[200px] p-8"
                style={{ boxShadow: '0 16px 48px rgba(15,23,42,0.22)' }}>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.5) 1px, transparent 0)',
                    backgroundSize: '22px 22px',
                  }}
                />
                <div className="relative z-10 text-center">
                  <svg viewBox="0 0 120 80" fill="none" className="w-32 h-24 mx-auto mb-4">
                    <defs>
                      <radialGradient id="qs-iris" cx="50%" cy="40%" r="50%">
                        <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.95" />
                        <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#0369A1" stopOpacity="0.9" />
                      </radialGradient>
                      <radialGradient id="qs-pupil" cx="38%" cy="35%" r="60%">
                        <stop offset="0%" stopColor="#1E3A5F" />
                        <stop offset="100%" stopColor="#060F1E" />
                      </radialGradient>
                      <filter id="qs-glow">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                    </defs>
                    {/* Outer eyelid stroke with glow */}
                    <path
                      d="M5 40 C20 14, 48 4, 60 4 C72 4, 100 14, 115 40 C100 66, 72 76, 60 76 C48 76, 20 66, 5 40Z"
                      fill="white" fillOpacity="0.07"
                      stroke="white" strokeWidth="1.4" strokeOpacity="0.5"
                      filter="url(#qs-glow)"
                    />
                    {/* Iris */}
                    <circle cx="60" cy="40" r="18" fill="url(#qs-iris)" />
                    {/* Limbal ring */}
                    <circle cx="60" cy="40" r="18" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.2" />
                    {/* Pupil */}
                    <circle cx="60" cy="40" r="9.5" fill="url(#qs-pupil)" />
                    {/* Main catchlight */}
                    <circle cx="54" cy="34" r="4" fill="white" fillOpacity="0.8" />
                    {/* Small secondary catchlight */}
                    <circle cx="67" cy="45" r="1.8" fill="white" fillOpacity="0.35" />
                    {/* Subtle iris detail lines */}
                    <circle cx="60" cy="40" r="13.5" fill="none" stroke="white" strokeWidth="0.4" strokeOpacity="0.15" />
                  </svg>
                  <p className="text-white font-display font-bold text-2xl tracking-tight">Desde 1995</p>
                  <p className="text-white/50 text-sm mt-1">cuidando tu visión en Popayán</p>
                </div>
              </div>

              {/* Stats bento row */}
              <div ref={counterRef} className="grid grid-cols-3 gap-3">
                {stats.map(({ value, label, sub, counter, prefix, suffix }) => (
                  <div key={label} className="bg-background rounded-2xl p-4 text-center border border-border">
                    <p
                      className="font-display text-2xl font-bold text-accent"
                      data-counter={counter}
                      data-prefix={prefix || undefined}
                      data-suffix={suffix || undefined}
                    >
                      {value}
                    </p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{label}</p>
                    <p className="text-[11px] text-slate-light">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: copy + pillars + CTA */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3 bg-accent-muted px-3 py-1 rounded-full">Quiénes Somos</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 mt-3 leading-tight">
                Especialistas en
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}
                >
                  Salud Visual
                </span>
              </h2>
              <p className="text-slate text-sm mb-8 leading-relaxed">
                Tu óptica de confianza en Popayán — profesionales certificados, tecnología moderna y atención personalizada para toda la familia.
              </p>

              <div className="space-y-3 mb-8">
                {pillars.map(({ icon: Icon, label, desc, accent, bg }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-transparent hover:shadow-md transition-all duration-200 group cursor-default"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                      style={{ background: bg }}
                    >
                      <Icon size={18} style={{ color: accent }} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{label}</p>
                      <p className="text-slate text-xs mt-0.5">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button onClick={() => navigate('/citas')}>
                Agenda tu Cita
                <FiArrowRight size={15} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
