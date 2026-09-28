import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { SERVICES, SCHEDULE } from '../../utils/constants'
import { openWhatsApp } from '../../utils/whatsapp'
import Button from '../common/Button'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus:border-primary text-gray-800 text-sm transition-all bg-white'
const errorClass = 'text-red-500 text-xs mt-1.5'

const pad = (n) => String(n).padStart(2, '0')
const toISODate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

function getMinDate() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  if (d.getDay() === 0) d.setDate(d.getDate() + 1)
  return toISODate(d)
}

function slotsBetween(from, to) {
  const slots = []
  for (let h = from; h < to; h++) slots.push(`${pad(h)}:00`, `${pad(h)}:30`)
  return slots
}

// Horarios de 30 min según el día de la semana (domingo cerrado).
function getSlots(dateStr) {
  if (!dateStr) return []
  const day = new Date(`${dateStr}T12:00:00`).getDay()
  if (day === 0) return []
  if (day === 6) return slotsBetween(SCHEDULE.saturday.open, SCHEDULE.saturday.close)
  const { open, closeAm, openPm, close } = SCHEDULE.weekdays
  return [...slotsBetween(open, closeAm), ...slotsBetween(openPm, close)]
}

export default function CitaForm() {
  const [minDate, setMinDate] = useState('')
  const [date, setDate] = useState('')
  const slots = getSlots(date)
  const isSunday = date && slots.length === 0

  // Se calcula en el cliente: el HTML pre-renderizado no debe fijar la fecha del build.
  useEffect(() => setMinDate(getMinDate()), [])

  const onSubmit = (e) => {
    e.preventDefault()
    if (isSunday) return
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const [y, m, d] = data.date.split('-')
    openWhatsApp([
      'Hola OpticaMilap, quiero agendar una cita.',
      `Nombre: ${data.name}`,
      `Servicio: ${data.service}`,
      `Fecha: ${d}/${m}/${y}`,
      `Hora: ${data.time}`,
      data.message && `Comentario: ${data.message}`,
    ])
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cita-name" className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo *</label>
          <input id="cita-name" name="name" required minLength={3} className={inputClass} placeholder="Tu nombre completo" />
        </div>
        <div>
          <label htmlFor="cita-service" className="block text-sm font-semibold text-gray-700 mb-2">Servicio *</label>
          <select id="cita-service" name="service" required className={inputClass} defaultValue="">
            <option value="" disabled>Selecciona un servicio</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cita-date" className="block text-sm font-semibold text-gray-700 mb-2">Fecha *</label>
          <input
            id="cita-date"
            name="date"
            type="date"
            required
            min={minDate || undefined}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
          {isSunday && <p className={errorClass}>No atendemos los domingos</p>}
        </div>
        <div>
          <label htmlFor="cita-time" className="block text-sm font-semibold text-gray-700 mb-2">Horario *</label>
          <select id="cita-time" name="time" required className={inputClass} disabled={slots.length === 0} defaultValue="">
            <option value="" disabled>
              {!date ? 'Primero selecciona una fecha' : isSunday ? 'Fecha no disponible' : 'Selecciona un horario'}
            </option>
            {slots.map((h) => <option key={h} value={h}>{h}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cita-message" className="block text-sm font-semibold text-gray-700 mb-2">
          Mensaje <span className="text-gray-400 font-normal">(opcional)</span>
        </label>
        <textarea
          id="cita-message"
          name="message"
          rows={3}
          className={inputClass}
          placeholder="Cuéntanos algo más sobre tu consulta..."
        />
      </div>

      <div className="mt-7">
        <Button type="submit" className="w-full justify-center" size="lg">
          <FaWhatsapp size={18} />
          Solicitar cita por WhatsApp
        </Button>
        <p className="text-xs text-gray-400 text-center mt-3">
          Se abrirá WhatsApp con tu solicitud. Te confirmamos disponibilidad por ahí.
        </p>
      </div>
    </form>
  )
}
