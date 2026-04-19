import { useNavigate } from 'react-router-dom'
import { FiAward, FiZap, FiHeart } from 'react-icons/fi'
import { motion } from 'framer-motion'
import ScrollReveal from '../animations/ScrollReveal'
import Button from '../common/Button'
import { useCounterAnimation } from '../../hooks/useGSAPAnimations'

const pillars = [
  { icon: FiAward, label: 'Certificados', desc: 'Optómetras con amplia experiencia' },
  { icon: FiZap, label: 'Tecnología', desc: 'Equipos de diagnóstico modernos' },
  { icon: FiHeart, label: 'Compromiso', desc: 'Más de 15 años cuidando familias' },
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
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: visual card + animated stats */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-accent flex flex-col items-center justify-center shadow-2xl relative">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <div className="relative z-10 text-center px-8">
                  <svg viewBox="0 0 120 80" fill="none" className="w-32 h-24 mx-auto mb-4" stroke="white" strokeWidth="1.5">
                    <path d="M5 40 C20 15, 50 5, 60 5 C70 5, 100 15, 115 40 C100 65, 70 75, 60 75 C50 75, 20 65, 5 40Z" />
                    <circle cx="60" cy="40" r="16" fill="white" fillOpacity="0.2" />
                    <circle cx="60" cy="40" r="9" fill="white" fillOpacity="0.6" />
                    <circle cx="63" cy="37" r="3" fill="white" />
                  </svg>
                  <p className="text-white font-display font-bold text-2xl">Desde 2010</p>
                  <p className="text-white/70 text-sm mt-1">cuidando tu visión en Popayán</p>
                </div>
              </div>

              {/* Stats grid with counter animation */}
              <div ref={counterRef} className="grid grid-cols-3 gap-3 mt-4">
                {stats.map(({ value, label, sub, counter, prefix, suffix }) => (
                  <div key={label} className="bg-neutral rounded-2xl p-4 text-center">
                    <p
                      className="text-2xl font-bold text-primary"
                      data-counter={counter}
                      data-prefix={prefix || undefined}
                      data-suffix={suffix || undefined}
                    >
                      {value}
                    </p>
                    <p className="text-xs font-semibold text-dark mt-0.5">{label}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: title + icon pillars + CTA */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Quiénes Somos</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark mb-3 leading-tight">
                Especialistas en
                <br />
                <span className="text-primary">Salud Visual</span>
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Tu óptica de confianza en Popayán — profesionales, tecnología moderna y atención para toda la familia.
              </p>

              <div className="space-y-3 mb-8">
                {pillars.map(({ icon: Icon, label, desc }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:bg-primary-dark transition-colors">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm">{label}</p>
                      <p className="text-gray-400 text-xs">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button onClick={() => navigate('/citas')}>Agenda tu Cita</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
