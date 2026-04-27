import { motion } from 'framer-motion'
import ScrollReveal from '../animations/ScrollReveal'

const categories = [
  {
    id: 'monturas',
    label: 'Monturas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="6" cy="15" r="4" />
        <circle cx="18" cy="15" r="4" />
        <path d="M2 15h0M22 15h0M10 15h4" />
        <path d="M2 12c0-1 .6-2 2-2h1M22 12c0-1-.6-2-2-2h-1" />
      </svg>
    ),
    description: 'Amplio catálogo de monturas para todos los estilos y presupuestos.',
    accent: '#0369A1',
    bg: '#E0F2FE',
    brands: ['Ray-Ban', 'Oakley', 'Carrera', 'Silhouette', 'Guess', 'Polo'],
  },
  {
    id: 'lentes',
    label: 'Lentes Ópticos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="3" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="21" />
      </svg>
    ),
    description: 'Lentes progresivos, fotocromáticos, antirreflejos y de contacto.',
    accent: '#0F172A',
    bg: '#F1F5F9',
    brands: ['Essilor', 'Zeiss', 'Hoya', 'Crizal', 'Transitions', 'CooperVision'],
  },
  {
    id: 'accesorios',
    label: 'Accesorios',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    description: 'Estuches, paños microfibra, soluciones limpiadoras y cordones.',
    accent: '#0369A1',
    bg: '#E0F2FE',
    brands: ['Hilco', 'Casco', 'Optiplast', 'Silhouette', 'ICU', 'Croakies'],
  },
]

function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
    >
      {/* Card header */}
      <div className="p-6 pb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{ background: category.bg, color: category.accent }}
        >
          {category.icon}
        </div>
        <h3 className="font-display font-bold text-foreground text-base mb-1">{category.label}</h3>
        <p className="text-slate text-sm leading-relaxed">{category.description}</p>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-border" />

      {/* Brands */}
      <div className="p-6 pt-4 flex-1">
        <p className="text-[11px] font-semibold text-slate-light uppercase tracking-widest mb-3">Marcas disponibles</p>
        <div className="flex flex-wrap gap-2">
          {category.brands.map((brand) => (
            <span
              key={brand}
              className="text-xs font-medium px-2.5 py-1 rounded-lg border border-border text-slate"
              style={{ background: category.bg }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Productos() {
  return (
    <section id="productos" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3 bg-accent-muted px-3 py-1 rounded-full">
            Nuestros Productos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Encuentra lo que
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}
            >
              tu visión necesita
            </span>
          </h2>
          <p className="text-slate text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Trabajamos con las mejores marcas nacionales e internacionales para ofrecerte calidad y estilo.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-slate-light mt-8"
        >
          Catálogo en constante actualización · Consulta disponibilidad en tienda
        </motion.p>
      </div>
    </section>
  )
}
