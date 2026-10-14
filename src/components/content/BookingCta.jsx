import { FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { BUSINESS } from '../../content/site'
import Button from '../common/Button'

// `servicio` es el citaId que preselecciona el formulario de /citas.
export default function BookingCta({ servicio, titulo = 'Agenda tu cita en OpticaMilap' }) {
  return (
    <aside
      className="rounded-3xl p-8 sm:p-10 text-center"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #0369A1 60%, #0EA5E9 100%)' }}
    >
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">{titulo}</h2>
      <p className="text-white/70 text-sm mt-3 max-w-md mx-auto leading-relaxed">
        Elige servicio, fecha y hora en línea. Te confirmamos por WhatsApp. Estamos en {BUSINESS.address}.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
        <Button to={servicio ? `/citas?servicio=${servicio}` : '/citas'} size="lg">
          Agendar cita
          <FiArrowRight size={16} />
        </Button>
        <Button href={BUSINESS.whatsapp} target="_blank" variant="ghost" size="lg">
          <FaWhatsapp size={17} />
          Escribir por WhatsApp
        </Button>
      </div>
    </aside>
  )
}
