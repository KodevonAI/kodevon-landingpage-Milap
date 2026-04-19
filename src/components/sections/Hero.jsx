import { useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import gsap from 'gsap'
import Button from '../common/Button'
import { useMagneticEffect, useCounterAnimation } from '../../hooks/useGSAPAnimations'

const STATS = [
  { value: '+15', label: 'Años de experiencia', counter: 15, prefix: '+', suffix: '' },
  { value: '+5K', label: 'Pacientes atendidos', counter: 5, prefix: '+', suffix: 'K' },
  { value: '4.9★', label: 'Calificación Google', counter: null },
]

// Ambient drifting particles in hero background
function FloatingParticles() {
  const containerRef = useRef(null)
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        size: 2 + (i % 5),
        color: ['#3238A6', '#117DBF', '#E8A838'][i % 3],
      })),
    []
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const els = container.querySelectorAll('.fp')

    const randomize = (el) =>
      gsap.set(el, {
        left: `${Math.random() * 100}%`,
        top: `${40 + Math.random() * 60}%`,
        opacity: 0.08 + Math.random() * 0.28,
        y: 0,
        x: 0,
      })

    els.forEach((el) => {
      randomize(el)
      gsap.to(el, {
        y: -(130 + Math.random() * 200),
        x: (Math.random() - 0.5) * 120,
        opacity: 0,
        duration: 5 + Math.random() * 7,
        ease: 'power1.inOut',
        repeat: -1,
        delay: Math.random() * 6,
        onRepeat() { randomize(el) },
      })
    })

    return () => gsap.killTweensOf(els)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(({ id, size, color }) => (
        <div
          key={id}
          className="fp absolute rounded-full"
          style={{ width: size, height: size, background: color, opacity: 0 }}
        />
      ))}
    </div>
  )
}

function AnimatedEye() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80">
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/20"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" />
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-primary shadow-2xl flex flex-col items-center justify-center"
        style={{ rotate: '6deg' }}
      >
        <motion.div
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 80 50" fill="none" className="w-20 h-14" stroke="white" strokeWidth="2">
            <path d="M4 25 C15 8, 35 2, 40 2 C45 2, 65 8, 76 25 C65 42, 45 48, 40 48 C35 48, 15 42, 4 25Z" />
            <circle cx="40" cy="25" r="10" fill="white" fillOpacity="0.2" />
            <circle cx="40" cy="25" r="6" fill="white" fillOpacity="0.7" />
            <motion.circle
              cx="40" cy="25" r="3"
              fill="#F2EBC9"
              stroke="none"
              animate={{ cx: [40, 43, 40, 37, 40] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
        <p className="text-white/70 text-xs mt-2 tracking-wider font-medium">OpticaMilap</p>
      </motion.div>

      <motion.div
        className="absolute top-4 right-4 bg-white rounded-xl px-3 py-1.5 shadow-lg border border-gray-100"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-primary font-bold text-sm">4.9 ★</p>
        <p className="text-gray-400 text-xs">Google</p>
      </motion.div>
      <motion.div
        className="absolute bottom-6 left-2 bg-primary rounded-xl px-3 py-1.5 shadow-lg"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <p className="text-white font-bold text-sm">+15 años</p>
        <p className="text-white/60 text-xs">experiencia</p>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const navigate = useNavigate()
  const magnetRef = useMagneticEffect(0.4)
  const statsRef = useCounterAnimation()

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #3238A6, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-6"
          style={{ background: 'radial-gradient(circle, #117DBF, transparent 70%)' }}
        />
      </div>

      {/* Ambient floating particles */}
      <FloatingParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-semibold text-sm tracking-widest uppercase mb-4"
            >
              Óptica Profesional · Popayán, Cauca
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight"
            >
              Tu Visión,
              <br />
              <span className="text-primary">Nuestra Pasión</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg text-gray-500 mb-10 leading-relaxed max-w-md"
            >
              Exámenes visuales, gafas y lentes de contacto con tecnología
              moderna y más de 15 años cuidando tu salud visual.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Magnetic wrapper around primary CTA */}
              <div ref={magnetRef} className="inline-block">
                <Button onClick={() => navigate('/citas')} size="lg">Agenda tu Cita</Button>
              </div>
              <Button
                variant="secondary"
                onClick={() => document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
              >
                Conocer Más
              </Button>
            </motion.div>

            {/* Stats with counter animation */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-sm"
            >
              {STATS.map(({ value, label, counter, prefix, suffix }) => (
                <div key={label} className="text-center bg-primary rounded-2xl p-4 shadow-md">
                  <p
                    className="text-xl font-bold text-white"
                    data-counter={counter ?? undefined}
                    data-prefix={prefix || undefined}
                    data-suffix={suffix || undefined}
                  >
                    {value}
                  </p>
                  <p className="text-xs text-white/70 mt-0.5 leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: animated eye */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <AnimatedEye />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-1.5"
        >
          <span className="text-gray-300 text-xs tracking-widest uppercase">Desliza</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiChevronDown className="text-gray-300" size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
