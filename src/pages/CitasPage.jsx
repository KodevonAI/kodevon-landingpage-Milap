import ReservaCitas from '../components/sections/ReservaCitas'

const bloques = [
  {
    titulo: 'Qué llevar a tu cita',
    items: [
      'Tus gafas o lentes de contacto actuales.',
      'Tu última fórmula, si la tienes.',
      'El nombre de los medicamentos que tomas.',
    ],
  },
  {
    titulo: 'Cómo confirmamos',
    items: [
      'Al enviar el formulario se abre WhatsApp con tu solicitud ya escrita.',
      'Te respondemos por ese mismo chat para confirmar fecha y hora.',
      'Si necesitas cambiar la cita, escríbenos por WhatsApp.',
    ],
  },
]

export default function CitasPage() {
  return (
    <>
      <ReservaCitas titleAs="h1" />
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bloques.map(({ titulo, items }) => (
            <div key={titulo} className="bg-background rounded-2xl border border-border p-6">
              <h2 className="font-display font-bold text-foreground text-base mb-3">{titulo}</h2>
              <ul className="space-y-2 text-sm text-slate leading-relaxed list-disc pl-5">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
