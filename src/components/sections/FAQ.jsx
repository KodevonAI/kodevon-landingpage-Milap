import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { FAQS } from '../../utils/constants'
import { useStaggerAnimation } from '../../hooks/useScrollAnimation'
import ScrollReveal from '../animations/ScrollReveal'

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const listRef = useStaggerAnimation({ stagger: 0.08 })

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Preguntas frecuentes</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark">
            Resolvemos tus
            <br />
            <span className="text-primary">dudas</span>
          </h2>
        </ScrollReveal>

        <div ref={listRef} className="space-y-2.5">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? 'border-primary shadow-md' : 'border-gray-100 shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-dark pr-4 text-sm leading-snug">{faq.question}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    open === i ? 'bg-primary text-white' : 'bg-gray-100 text-primary'
                  }`}
                >
                  {open === i ? <FiMinus size={14} /> : <FiPlus size={14} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
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
