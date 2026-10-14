import { FiPlus } from 'react-icons/fi'

// <details> nativo: las respuestas están siempre en el HTML y abren sin JavaScript.
export default function PageFaq({ preguntas }) {
  return (
    <div className="space-y-2">
      {preguntas.map(({ pregunta, respuesta }) => (
        <details key={pregunta} className="group rounded-2xl border border-border bg-card open:border-accent/30 open:shadow-md transition-shadow">
          <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
            <h3 className="font-semibold text-foreground text-sm leading-snug">{pregunta}</h3>
            <span className="shrink-0 w-7 h-7 rounded-lg bg-muted text-slate flex items-center justify-center transition-transform duration-200 group-open:rotate-45 group-open:bg-accent group-open:text-white">
              <FiPlus size={13} />
            </span>
          </summary>
          <p className="px-6 pb-5 text-slate text-sm leading-relaxed">{respuesta}</p>
        </details>
      ))}
    </div>
  )
}
