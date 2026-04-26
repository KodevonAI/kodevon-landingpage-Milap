import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { FAQS } from '../../utils/constants'
import { useStaggerAnimation } from '../../hooks/useScrollAnimation'
import ScrollReveal from '../animations/ScrollReveal'

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const listRef = useStaggerAnimation({ stagger: 0.07 })

  return (
    <section id="faq" className="py-24 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3 bg-accent-muted px-3 py-1 rounded-full">Preguntas frecuentes</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Resolvemos tus
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}
            >
              dudas
            </span>
          </h2>
        </ScrollReveal>

        <div ref={listRef} className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                open === i
                  ? 'border-accent/30 shadow-md bg-accent-muted/40'
                  : 'border-border bg-background hover:border-accent/20'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset cursor-pointer"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-foreground pr-4 text-sm leading-snug">{faq.question}</span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    open === i ? 'bg-accent text-white rotate-0' : 'bg-muted text-slate'
                  }`}
                >
                  {open === i ? <FiMinus size={13} /> : <FiPlus size={13} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
