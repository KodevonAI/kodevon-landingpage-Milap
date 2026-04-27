import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { BUSINESS } from '../../utils/constants'
import Button from '../common/Button'

export default function CTABanner() {
  const navigate = useNavigate()

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0F172A 0%, #0369A1 60%, #0EA5E9 100%)' }}
        >
          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Glow orbs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-16 -left-8 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(3,105,161,0.4) 0%, transparent 70%)' }} />

          <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text */}
            <div className="text-center lg:text-left">
              <p className="text-accent-light font-semibold text-xs tracking-widest uppercase mb-2 opacity-80">
                No lo pongas en espera
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Tu salud visual
                <br />
                <span className="text-accent-light">importa hoy.</span>
              </h2>
              <p className="text-white/55 text-sm mt-3 max-w-sm leading-relaxed">
                Agenda tu examen visual con nuestros especialistas certificados. Atención de lunes a sábado en Popayán.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
              <Button
                size="lg"
                onClick={() => navigate('/citas')}
                className="bg-white text-accent hover:bg-accent-muted border-0 shadow-lg whitespace-nowrap"
              >
                Agenda tu Cita
                <FiArrowRight size={16} />
              </Button>
              <div className="flex gap-3">
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escribir por WhatsApp"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <FaWhatsapp size={17} />
                  WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  aria-label={`Llamar al ${BUSINESS.phone}`}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors duration-150 cursor-pointer shrink-0"
                >
                  <FiPhone size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
