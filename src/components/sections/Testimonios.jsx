import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { TESTIMONIOS } from '../../utils/constants'
import ScrollReveal from '../animations/ScrollReveal'

const sorted = [...TESTIMONIOS].sort((a, b) => new Date(b.date) - new Date(a.date))

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5 justify-center" aria-label={`${rating} de 5 estrellas`}>
      {[...Array(5)].map((_, i) => (
        <FiStar key={i} size={18} className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-primary/20'} />
      ))}
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
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Testimonios</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark">
            Lo que dicen nuestros
            <br />
            <span className="text-primary">pacientes</span>
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
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="bg-primary rounded-3xl p-8 sm:p-12 text-center shadow-xl"
            >
              <Stars rating={t.rating} />
              <blockquote className="text-white/90 text-lg sm:text-xl leading-relaxed mt-6 mb-8 italic font-display">
                "{t.text}"
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary font-bold text-xl shadow">
                  {t.author[0]}
                </div>
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-white/50 text-xs">
                  {new Date(t.date).toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Testimonio anterior"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonios">
              {sorted.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    i === current ? 'w-6 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-primary/20 hover:bg-primary/50'
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Siguiente testimonio"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
