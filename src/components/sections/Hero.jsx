import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiStar, FiClock, FiAward } from 'react-icons/fi'
import Button from '../common/Button'
import { useMagneticEffect } from '../../hooks/useGSAPAnimations'
import { ShaderBackground } from '../ui/hero-shader'

function EyeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">

        {/* Examen card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="col-span-2 rounded-2xl p-5 flex items-center gap-4 shadow-xl border border-white/10"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
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
              <path d="M6 24 C12 13, 20 9, 24 9 C28 9, 36 13, 42 24 C36 35, 28 39, 24 39 C20 39, 12 35, 6 24Z"
                fill="white" fillOpacity="0.12" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" />
              <circle cx="24" cy="24" r="9.5" fill="url(#iris)" />
              <circle cx="24" cy="24" r="9.5" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.25" />
              <circle cx="24" cy="24" r="5" fill="url(#pupil)" />
              <circle cx="21" cy="21" r="2" fill="white" fillOpacity="0.75" />
              <circle cx="27.5" cy="26.5" r="0.9" fill="white" fillOpacity="0.4" />
            </svg>
          </div>
          <div>
            <p className="text-white font-display font-bold text-base leading-tight">Examen Visual</p>
            <p className="text-white/55 text-xs mt-0.5">Completo · 30-45 min</p>
          </div>
        </motion.div>

        {/* Rating card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl p-4 shadow-lg border border-white/15 flex flex-col items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)' }}
        >
          <div className="flex gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} size={10} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="font-display font-bold text-lg text-white">4.9</p>
          <p className="text-white/50 text-[10px] font-medium">Google</p>
        </motion.div>

        {/* Experience card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center border border-[#0EA5E9]/40"
          style={{ background: 'rgba(3,105,161,0.45)', backdropFilter: 'blur(10px)' }}
        >
          <p className="font-display font-bold text-xl text-white">+30</p>
          <p className="text-white/65 text-[10px] font-medium text-center leading-tight">años de<br/>experiencia</p>
        </motion.div>

        {/* Patients card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="col-span-2 rounded-2xl px-5 py-3.5 flex items-center justify-between border border-white/10"
          style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' }}
        >
          <div>
            <p className="font-display font-bold text-white text-lg">+5,000</p>
            <p className="text-white/50 text-xs">pacientes atendidos</p>
          </div>
          <div className="flex -space-x-2">
            {['M','C','A','L'].map((letter, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white text-[10px] font-bold border-2 border-white/20"
                style={{ opacity: 1 - i * 0.15 }}
              >
                {letter}
              </div>
            ))}
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-[10px] font-bold border-2 border-white/20">
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
    <ShaderBackground>
      {/* Top spacer for fixed navbar */}
      <div className="pt-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex items-center min-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">

          {/* Left: text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border border-white/15"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', color: '#7DD3FC' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              Óptica Profesional · Popayán, Cauca
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white mb-5 leading-[1.15] tracking-tight"
            >
              Tu Visión,
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #38BDF8, #7DD3FC)' }}
              >
                Nuestra Pasión
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Exámenes visuales, gafas y lentes de contacto con tecnología
              moderna y más de 30 años cuidando tu salud visual en Popayán.
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
              <button
                onClick={() => document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
              >
                Conocer Más
              </button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 flex-wrap"
            >
              {[
                { icon: FiAward, label: 'Certificados' },
                { icon: FiStar, label: '4.9 en Google' },
                { icon: FiClock, label: 'Lun–Sáb · Citas' },
              ].map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  {i > 0 && <div className="w-px h-4 bg-white/15 -ml-2 mr-2" />}
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <Icon size={13} className="text-[#38BDF8]" />
                  </div>
                  <span className="text-white/70 font-medium">{label}</span>
                </div>
              ))}
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
    </ShaderBackground>
  )
}
