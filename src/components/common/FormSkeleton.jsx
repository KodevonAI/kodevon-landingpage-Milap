// Reserva el espacio del formulario mientras carga, para evitar saltos de layout (CLS).
export default function FormSkeleton({ height }) {
  return (
    <div
      className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 animate-pulse"
      style={{ minHeight: height }}
      aria-hidden="true"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <div className="h-4 w-24 bg-gray-100 rounded mb-3" />
            <div className="h-11 bg-gray-50 rounded-xl border border-gray-100" />
          </div>
        ))}
      </div>
    </div>
  )
}
