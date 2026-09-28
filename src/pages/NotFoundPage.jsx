import Button from '../components/common/Button'

export default function NotFoundPage() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Error 404</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Página no encontrada
        </h1>
        <p className="text-slate mb-8">
          La página que buscas no existe o fue movida.
        </p>
        <Button to="/">Volver al inicio</Button>
      </div>
    </section>
  )
}
