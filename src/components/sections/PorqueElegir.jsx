import { useRef } from 'react'
import { FiAward, FiCpu, FiHeart, FiShield, FiClock, FiMapPin } from 'react-icons/fi'
import gsap from 'gsap'
import { useAlternatingEntrance } from '../../hooks/useGSAPAnimations'
import ScrollReveal from '../animations/ScrollReveal'

const reasons = [
  { icon: FiAward, title: 'Profesionales Certificados', text: 'Optómetras con amplia experiencia y certificación para brindarte el mejor diagnóstico.' },
  { icon: FiCpu, title: 'Tecnología Moderna', text: 'Equipos de última generación para exámenes precisos y resultados confiables.' },
  { icon: FiHeart, title: 'Atención Personalizada', text: 'Cada paciente es único. Te escuchamos y adaptamos el tratamiento a tus necesidades.' },
  { icon: FiShield, title: 'Garantía en Productos', text: 'Todos nuestros productos cuentan con garantía. Tu satisfacción es nuestra prioridad.' },
  { icon: FiClock, title: 'Horarios Flexibles', text: 'Atendemos de lunes a sábado con horarios pensados para adaptarse a tu rutina.' },
  { icon: FiMapPin, title: 'Ubicación Accesible', text: 'Ubicados en el corazón de Popayán, fácil acceso en transporte público o privado.' },
]

// Card with GSAP icon bounce on hover
function ReasonCard({ icon: Icon, title, text }) {
  const iconRef = useRef(null)

  const handleEnter = () => {
    gsap.to(iconRef.current, {
      y: -6,
      scale: 1.15,
      duration: 0.25,
      ease: 'back.out(2)',
    })
  }

  const handleLeave = () => {
    gsap.to(iconRef.current, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
    })
  }

  return (
    <div
      className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-default"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        ref={iconRef}
        className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:bg-primary-dark transition-colors duration-300"
      >
        <Icon size={21} className="text-white" />
      </div>
      <div>
        <h3 className="font-bold text-dark mb-1.5 text-sm">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

export default function PorqueElegir() {
  const gridRef = useAlternatingEntrance()

  return (
    <section id="porque-elegir" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">¿Por qué elegirnos?</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark">
            Razones para confiar en
            <br />
            <span className="text-primary">OpticaMilap</span>
          </h2>
        </ScrollReveal>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  )
}
