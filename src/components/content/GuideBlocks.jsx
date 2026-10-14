// Renderiza los bloques de una sección de guía: párrafo, lista o tabla.
export default function GuideBlocks({ bloques }) {
  return (
    <div className="space-y-4">
      {bloques.map((bloque, i) => {
        if (bloque.tipo === 'lista') {
          return (
            <ul key={i} className="space-y-2 list-disc pl-5 text-slate text-sm sm:text-base leading-relaxed">
              {bloque.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )
        }
        if (bloque.tipo === 'tabla') {
          return (
            <div key={i} className="overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full min-w-[480px] text-sm text-left">
                <thead>
                  <tr className="bg-accent-muted/60">
                    {bloque.columnas.map((columna) => (
                      <th key={columna} scope="col" className="px-4 py-3 font-display font-bold text-foreground">{columna}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bloque.filas.map((fila) => (
                    <tr key={fila[0]} className="border-t border-border">
                      {fila.map((celda, j) => (
                        j === 0
                          ? <th key={j} scope="row" className="px-4 py-3 font-semibold text-foreground align-top">{celda}</th>
                          : <td key={j} className="px-4 py-3 text-slate leading-relaxed align-top">{celda}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        return <p key={i} className="text-slate text-sm sm:text-base leading-relaxed">{bloque.texto}</p>
      })}
    </div>
  )
}
