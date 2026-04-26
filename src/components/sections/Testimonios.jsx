import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { TESTIMONIOS } from '../../utils/constants'
import ScrollReveal from '../animations/ScrollReveal'

const sorted = [...TESTIMONIOS].sort((a, b) => new Date(b.date) - new Date(a.date))

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {[...Array(5)].map((_, i) => (
        <FiStar key={i} size={14} className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-muted'} />
      ))}
    </div>
  )
}

function Avatar({ name }) {
  return (
    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
      {name[0]}
    </div>
  )
}

export default function Testimonios() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % sorted.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + sorted.length) % sorted.length), [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [paused, next])

  const t = sorted[current]

  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3 bg-accent-muted px-3 py-1 rounded-full">Testimonios</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Lo que dicen nuestros
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}
            >
              pacientes
            </span>
          </h2>
        </ScrollReveal>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-card rounded-3xl p-8 sm:p-10 shadow-sm border border-border"
            >
              {/* Quote mark */}
              <div className="font-display text-6xl text-accent/15 font-bold leading-none mb-2 select-none">"</div>

              <blockquote className="text-foreground text-base sm:text-lg leading-relaxed mb-7 font-sans">
                {t.text}
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Avatar name={t.author} />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.author}</p>
                    <p className="text-slate text-xs">
                      {new Date(t.date).toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <Stars rating={t.rating} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-xl border border-border bg-card flex items-center justify-center text-slate hover:text-accent hover:border-accent transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              aria-label="Testimonio anterior"
            >
              <FiChevronLeft size={18} />
            </button>

            <div className="flex gap-1.5" role="tablist" aria-label="Testimonios">
              {sorted.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer ${
                    i === current ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-muted hover:bg-slate-light'
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-xl border border-border bg-card flex items-center justify-center text-slate hover:text-accent hover:border-accent transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              aria-label="Siguiente testimonio"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
