import Breadcrumbs from './Breadcrumbs'

// Marco común de las páginas de contenido: migas, etiqueta, H1 e introducción.
export default function ContentPage({ etiqueta, h1, intro, ancho = 'max-w-3xl', children }) {
  return (
    <article className="pt-32 pb-24 bg-background">
      <div className={`${ancho} mx-auto px-4 sm:px-6 lg:px-8`}>
        <Breadcrumbs />
        <header className="mb-10">
          <p className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-4 bg-accent-muted px-3 py-1 rounded-full">{etiqueta}</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">{h1}</h1>
          {intro && <p className="text-foreground/80 text-base sm:text-lg leading-relaxed mt-5">{intro}</p>}
        </header>
        <div className="space-y-12">{children}</div>
      </div>
    </article>
  )
}

export function Bloque({ titulo, children }) {
  return (
    <section>
      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-5">{titulo}</h2>
      {children}
    </section>
  )
}
