export default function StepList({ pasos }) {
  return (
    <ol className="space-y-3">
      {pasos.map(({ titulo, texto }, i) => (
        <li key={titulo} className="flex gap-4 bg-card rounded-2xl border border-border p-5">
          <span className="shrink-0 w-8 h-8 rounded-xl bg-accent-muted text-accent font-display font-bold text-sm flex items-center justify-center">
            {i + 1}
          </span>
          <div>
            <h3 className="font-display font-bold text-foreground text-sm">{titulo}</h3>
            <p className="text-slate text-sm leading-relaxed mt-1">{texto}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
