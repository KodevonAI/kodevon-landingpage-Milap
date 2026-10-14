import { FiArrowRight, FiStar, FiClock, FiAward } from 'react-icons/fi'
import Button from '../common/Button'
import { useMagneticEffect } from '../../hooks/useMotionEffects'
import { ShaderBackground } from '../ui/hero-shader'
import { GOOGLE_REVIEWS } from '../../content/site'

const RATING = GOOGLE_REVIEWS.rating.toLocaleString('es-CO')

const confianza = [
  { icon: FiAward, label: 'Más de 30 años' },
  { icon: FiStar, label: `${RATING} en Google` },
  { icon: FiClock, label: 'Lun–Sáb · Citas' },
]

export default function Hero() {
  const magnetRef = useMagneticEffect(0.4)

  return (
    <ShaderBackground>
      {/* Top spacer for fixed navbar */}
      <div className="pt-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex items-center min-h-[calc(100vh-80px)]">
        <div className="max-w-2xl">
          <p
            className="hero-in inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border border-white/15"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', color: '#7DD3FC' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            Tu visión, nuestra pasión
          </p>

          <h1 className="hero-in [animation-delay:0.1s] font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white mb-5 leading-[1.15] tracking-tight">
            Óptica en Popayán:{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #38BDF8, #7DD3FC)' }}>
              exámenes visuales, gafas y lentes de contacto
            </span>
          </h1>

          <p className="hero-in [animation-delay:0.2s] text-base leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
            OpticaMilap es tu óptica en el barrio Antonio Nariño: examen visual con optómetra, gafas formuladas,
            lentes de contacto y reparación de monturas, con más de 30 años cuidando la salud visual de Popayán.
          </p>

          <div className="hero-in [animation-delay:0.3s] flex flex-col items-start sm:flex-row gap-3">
            <div ref={magnetRef} className="inline-block">
              <Button to="/citas" size="lg">
                Agenda tu cita
                <FiArrowRight size={16} />
              </Button>
            </div>
            <Button to="/servicios" variant="ghost" size="lg">
              Ver servicios
            </Button>
          </div>

          <ul className="hero-in [animation-delay:0.4s] mt-10 flex items-center gap-x-6 gap-y-3 flex-wrap">
            {confianza.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Icon size={13} className="text-[#38BDF8]" />
                </span>
                <span className="text-white/70 font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ShaderBackground>
  )
}
