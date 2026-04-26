import { FiAward, FiCpu, FiHeart, FiShield, FiClock, FiMapPin } from 'react-icons/fi'
import { useAlternatingEntrance } from '../../hooks/useGSAPAnimations'
import ScrollReveal from '../animations/ScrollReveal'

const reasons = [
  { icon: FiAward, title: 'Profesionales Certificados', text: 'Optómetras con amplia experiencia y certificación para brindarte el mejor diagnóstico.', accent: '#0369A1', bg: '#E0F2FE' },
  { icon: FiCpu, title: 'Tecnología Moderna', text: 'Equipos de última generación para exámenes precisos y resultados confiables.', accent: '#0F172A', bg: '#F1F5F9' },
  { icon: FiHeart, title: 'Atención Personalizada', text: 'Cada paciente es único. Te escuchamos y adaptamos el tratamiento a tus necesidades.', accent: '#0369A1', bg: '#E0F2FE' },
  { icon: FiShield, title: 'Garantía en Productos', text: 'Todos nuestros productos cuentan con garantía. Tu satisfacción es nuestra prioridad.', accent: '#0F172A', bg: '#F1F5F9' },
  { icon: FiClock, title: 'Horarios Flexibles', text: 'Atendemos de lunes a sábado con horarios pensados para adaptarse a tu rutina.', accent: '#0369A1', bg: '#E0F2FE' },
  { icon: FiMapPin, title: 'Ubicación Accesible', text: 'Ubicados en el corazón de Popayán, fácil acceso en transporte público o privado.', accent: '#0F172A', bg: '#F1F5F9' },
]

function ReasonCard({ icon: Icon, title, text, accent, bg }) {
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border hover:border-transparent hover:shadow-lg transition-all duration-200 cursor-default">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{ background: bg }}
      >
        <Icon size={20} style={{ color: accent }} />
      </div>
      <div>
        <h3 className="font-display font-bold text-foreground mb-1.5 text-sm">{title}</h3>
        <p className="text-slate text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

export default function PorqueElegir() {
  const gridRef = useAlternatingEntrance()

  return (
    <section id="porque-elegir" className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(3,105,161,0.3) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <span className="inline-block text-accent-light font-semibold text-xs tracking-widest uppercase mb-3 bg-white/10 px-3 py-1 rounded-full border border-white/15">¿Por qué elegirnos?</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">
            Razones para confiar en
            <br />
            <span className="text-accent-light">OpticaMilap</span>
          </h2>
          <p className="text-white/50 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Más de 15 años siendo la óptica de referencia en Popayán
          </p>
        </ScrollReveal>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  )
}
