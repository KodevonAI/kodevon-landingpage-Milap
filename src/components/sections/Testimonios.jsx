import { FiStar, FiExternalLink, FiEdit3 } from 'react-icons/fi'
import { GOOGLE_REVIEWS } from '../../utils/constants'
import ScrollReveal from '../animations/ScrollReveal'

const { rating, count, fiveStar, checked, url, writeUrl } = GOOGLE_REVIEWS
const ratingLabel = rating.toLocaleString('es-CO')

// Valoración real de la ficha de Google del negocio, con enlace a las reseñas originales.
export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3 bg-accent-muted px-3 py-1 rounded-full">Reseñas</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Lo que dicen nuestros
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}
            >
              pacientes en Google
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="bg-card rounded-3xl p-8 sm:p-10 shadow-sm border border-border text-center">
            <p className="font-display text-6xl font-bold text-foreground leading-none">{ratingLabel}</p>
            <div className="flex justify-center gap-1 mt-4" role="img" aria-label={`${ratingLabel} de 5 estrellas`}>
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={22} className={i < Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-muted'} />
              ))}
            </div>
            <p className="text-foreground text-base sm:text-lg mt-5">
              OpticaMilap tiene una valoración de {ratingLabel} sobre 5 en Google, con {count} reseñas de pacientes.
            </p>
            <p className="text-slate text-sm mt-2">
              {fiveStar} de las {count} reseñas son de 5 estrellas. Datos de Google Maps, {checked}.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <FiExternalLink size={15} />
                Leer las reseñas en Google
              </a>
              <a
                href={writeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:border-accent hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FiEdit3 size={15} />
                Escribir una reseña
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
