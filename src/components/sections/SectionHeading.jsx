import ScrollReveal from '../animations/ScrollReveal'

// Encabezado común de las secciones de la home: etiqueta, título en dos líneas y texto.
export default function SectionHeading({ etiqueta, titulo, destacado, children }) {
  return (
    <ScrollReveal direction="up" className="text-center mb-12">
      <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3 bg-accent-muted px-3 py-1 rounded-full">{etiqueta}</span>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
        {titulo}
        <br />
        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #0369A1, #0EA5E9)' }}>
          {destacado}
        </span>
      </h2>
      {children && <p className="text-slate text-sm mt-4 max-w-xl mx-auto leading-relaxed">{children}</p>}
    </ScrollReveal>
  )
}
