// Ficha de datos rápidos: lo primero que busca una persona (y un asistente de IA).
export default function QuickFacts({ datos }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {datos.map(({ etiqueta, valor }) => (
        <div key={etiqueta} className="bg-card rounded-2xl border border-border p-4">
          <dt className="text-accent font-semibold text-[11px] tracking-widest uppercase">{etiqueta}</dt>
          <dd className="text-foreground font-semibold text-sm mt-1.5 leading-snug">{valor}</dd>
        </div>
      ))}
    </dl>
  )
}
