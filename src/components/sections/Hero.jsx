import { useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiStar, FiClock, FiAward } from 'react-icons/fi'
import gsap from 'gsap'
import Button from '../common/Button'
import { useMagneticEffect } from '../../hooks/useGSAPAnimations'

function FloatingParticles() {
  const containerRef = useRef(null)
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        size: 3 + (i % 4),
        color: ['#0369A1', '#0EA5E9', '#CBD5E1'][i % 3],
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
        top: `${30 + Math.random() * 70}%`,
        opacity: 0.06 + Math.random() * 0.18,
        y: 0,
        x: 0,
      })

    els.forEach((el) => {
      randomize(el)
      gsap.to(el, {
        y: -(100 + Math.random() * 180),
        x: (Math.random() - 0.5) * 80,
        opacity: 0,
        duration: 6 + Math.random() * 8,
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

function EyeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Bento grid of cards */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        {/* Large top card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="col-span-2 bg-primary rounded-2xl p-5 flex items-center gap-4 shadow-xl"
        >
          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #38BDF8 100%)' }}>
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
              <defs>
                <radialGradient id="iris" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="#E0F9FF" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#7DD3FC" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0369A1" stopOpacity="0.9" />
                </radialGradient>
                <radialGradient id="pupil" cx="40%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#1E3A5F" />
                  <stop offset="100%" stopColor="#0A1628" />
                </radialGradient>
              </defs>
              {/* Eyelid shape */}
              <path d="M6 24 C12 13, 20 9, 24 9 C28 9, 36 13, 42 24 C36 35, 28 39, 24 39 C20 39, 12 35, 6 24Z"
                fill="white" fillOpacity="0.12" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" />
              {/* Iris */}
              <circle cx="24" cy="24" r="9.5" fill="url(#iris)" />
              {/* Limbal ring */}
              <circle cx="24" cy="24" r="9.5" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.25" />
              {/* Pupil */}
              <circle cx="24" cy="24" r="5" fill="url(#pupil)" />
              {/* Catchlight highlights */}
              <circle cx="21" cy="21" r="2" fill="white" fillOpacity="0.75" />
              <circle cx="27.5" cy="26.5" r="0.9" fill="white" fillOpacity="0.4" />
            </svg>
          </div>
          <div>
            <p className="text-white font-display font-bold text-base leading-tight">Examen Visual</p>
            <p className="text-white/60 text-xs mt-0.5">Completo · 30-45 min</p>
          </div>
        </motion.div>

        {/* Rating card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-4 shadow-lg border border-border flex flex-col items-center justify-center"
        >
          <div className="flex gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} size={10} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="font-display font-bold text-lg text-primary">4.9</p>
          <p className="text-slate text-[10px] font-medium">Google</p>
        </motion.div>

        {/* Experience card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="bg-accent rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center"
        >
          <p className="font-display font-bold text-xl text-white">+15</p>
          <p className="text-white/70 text-[10px] font-medium text-center leading-tight">años de<br/>experiencia</p>
        </motion.div>

        {/* Bottom patients card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="col-span-2 bg-neutral rounded-2xl px-5 py-3.5 flex items-center justify-between border border-border"
        >
          <div>
            <p className="font-display font-bold text-primary text-lg">+5,000</p>
            <p className="text-slate text-xs">pacientes atendidos</p>
          </div>
          <div className="flex -space-x-2">
            {['M','C','A','L'].map((letter, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white text-[10px] font-bold border-2 border-white"
                style={{ opacity: 1 - i * 0.15 }}
              >
                {letter}
              </div>
            ))}
            <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-slate text-[10px] font-bold border-2 border-white">
              +
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function Hero() {
  const navigate = useNavigate()
  const magnetRef = useMagneticEffect(0.4)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #CBD5E1 1px, transparent 0)`,
          backgroundSize: '32px 32px',
          opacity: 0.35,
        }}
      />

      {/* Top-right gradient blob */}
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E0F2FE 0%, transparent 70%)', opacity: 0.7 }}
      />

      <FloatingParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent-muted text-accent rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border border-accent/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Óptica Profesional · Popayán, Cauca
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground mb-5 leading-[1.15] tracking-tight"
            >
              Tu Visión,
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}
              >
                Nuestra Pasión
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="text-base text-slate leading-relaxed mb-8 max-w-md"
            >
              Exámenes visuales, gafas y lentes de contacto con tecnología
              moderna y más de 15 años cuidando tu salud visual en Popayán.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div ref={magnetRef} className="inline-block">
                <Button onClick={() => navigate('/citas')} size="lg">
                  Agenda tu Cita
                  <FiArrowRight size={16} />
                </Button>
              </div>
              <Button
                variant="outline"
                onClick={() => document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
              >
                Conocer Más
              </Button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-2 text-sm text-slate">
                <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center">
                  <FiAward size={15} className="text-accent" />
                </div>
                <span className="font-medium text-foreground">Certificados</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <div className="flex items-center gap-2 text-sm text-slate">
                <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center">
                  <FiStar size={15} className="text-accent fill-accent" />
                </div>
                <span><span className="font-semibold text-foreground">4.9</span> en Google</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <div className="flex items-center gap-2 text-sm text-slate">
                <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center">
                  <FiClock size={15} className="text-accent" />
                </div>
                <span><span className="font-semibold text-foreground">Lun–Sáb</span> · Citas disponibles</span>
              </div>
            </motion.div>
          </div>

          {/* Right: bento visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end h-72 lg:h-auto"
          >
            <EyeVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
