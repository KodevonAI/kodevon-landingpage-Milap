import { PHOTOS } from '../../content/site'
import { useStaggerAnimation } from '../../hooks/useScrollAnimation'
import ScrollReveal from '../animations/ScrollReveal'

export default function Galeria() {
  const gridRef = useStaggerAnimation({ stagger: 0.08, duration: 0.5 })

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3 bg-accent-muted px-3 py-1 rounded-full">Nuestra sede</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Conoce nuestra óptica
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}
            >
              en Popayán
            </span>
          </h2>
        </ScrollReveal>

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PHOTOS.map(({ src, alt }) => (
            <img
              key={src}
              src={src}
              alt={alt}
              width={800}
              height={1422}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[3/4] object-cover rounded-2xl border border-border shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
