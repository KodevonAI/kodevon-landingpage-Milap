import { Link } from 'react-router-dom'
import { FiAward, FiZap, FiHeart, FiArrowRight } from 'react-icons/fi'
import { PHOTOS } from '../../content/site'
import ScrollReveal from '../animations/ScrollReveal'

const pillars = [
  { icon: FiAward, label: 'Atención por optómetra', desc: 'El examen visual lo realiza un profesional' },
  { icon: FiZap, label: 'Tecnología de diagnóstico', desc: 'Equipos de optometría digital' },
  { icon: FiHeart, label: 'Compromiso familiar', desc: 'Más de 30 años cuidando familias en Popayán' },
]

const fachada = PHOTOS[0]

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal direction="left">
            <img
              src={fachada.src}
              alt={fachada.alt}
              width={800}
              height={1422}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover rounded-3xl border border-border shadow-lg"
            />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3 bg-accent-muted px-3 py-1 rounded-full">Quiénes somos</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 mt-3 leading-tight">
                Una óptica de Popayán con{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}>
                  más de 30 años
                </span>
              </h2>
              <p className="text-slate text-sm mb-8 leading-relaxed">
                OpticaMilap es una óptica y consultorio de optometría en el barrio Antonio Nariño de Popayán. Aquí te haces el examen visual, eliges tus gafas o lentes de contacto y reparas tu montura, con atención personalizada para toda la familia.
              </p>

              <ul className="space-y-3 mb-8">
                {pillars.map(({ icon: Icon, label, desc }) => (
                  <li key={label} className="flex items-center gap-4 p-4 rounded-2xl border border-border">
                    <span className="w-10 h-10 rounded-xl bg-accent-muted text-accent flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block font-semibold text-foreground text-sm">{label}</span>
                      <span className="block text-slate text-xs mt-0.5">{desc}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/nosotros" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline">
                Conoce más sobre OpticaMilap <FiArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
