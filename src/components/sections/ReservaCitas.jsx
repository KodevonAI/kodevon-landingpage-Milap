import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format, addDays, getDay } from 'date-fns'
import { citaSchema } from '../../utils/validation'
import { getAvailableHours, createCitaEvent } from '../../utils/googleCalendar'
import { sendCitaConfirmation } from '../../utils/emailService'
import { SERVICES } from '../../utils/constants'
import Button from '../common/Button'
import Toast from '../common/Toast'
import ScrollReveal from '../animations/ScrollReveal'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus:border-primary text-gray-800 text-sm transition-all bg-white'
const errorClass = 'text-red-500 text-xs mt-1.5'

function getMinDate() {
  let d = addDays(new Date(), 1)
  while (getDay(d) === 0) d = addDays(d, 1)
  return format(d, 'yyyy-MM-dd')
}

function isValidDate(dateStr) {
  if (!dateStr) return false
  const d = new Date(dateStr + 'T12:00:00')
  return getDay(d) !== 0
}

export default function ReservaCitas() {
  const [availableHours, setAvailableHours] = useState([])
  const [loadingHours, setLoadingHours] = useState(false)
  const [toast, setToast] = useState({ message: '', type: 'success' })

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(citaSchema) })

  const selectedDate = watch('date')

  useEffect(() => {
    if (!selectedDate) return
    if (!isValidDate(selectedDate)) { setAvailableHours([]); return }
    setLoadingHours(true)
    setAvailableHours([])
    getAvailableHours(new Date(selectedDate + 'T12:00:00'))
      .then(setAvailableHours)
      .finally(() => setLoadingHours(false))
  }, [selectedDate])

  const onSubmit = async (data) => {
    if (!isValidDate(data.date)) {
      setError('date', { message: 'No atendemos los domingos' })
      return
    }
    try {
      await createCitaEvent(data)
      await sendCitaConfirmation(data)
      setToast({ message: '¡Cita confirmada! Revisa tu email para la confirmación.', type: 'success' })
      reset()
    } catch {
      setToast({ message: 'No se pudo agendar la cita. Por favor llámanos al 316 6085291.', type: 'error' })
    }
  }

  return (
    <section id="citas" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Reserva Online</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark mb-4">
            Agenda tu cita
            <br />
            <span className="text-primary">en línea</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Selecciona servicio, fecha y hora. Recibirás confirmación por email. Citas de 30 min.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo *</label>
                <input {...register('name')} className={inputClass} placeholder="Tu nombre completo" />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input {...register('email')} type="email" className={inputClass} placeholder="tu@email.com" />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono *</label>
                <input {...register('phone')} type="tel" className={inputClass} placeholder="3001234567" />
                {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Servicio *</label>
                <select {...register('service')} className={inputClass}>
                  <option value="">Selecciona un servicio</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
                {errors.service && <p className={errorClass}>{errors.service.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha *</label>
                <input {...register('date')} type="date" min={getMinDate()} className={inputClass} />
                {errors.date && <p className={errorClass}>{errors.date.message}</p>}
                {selectedDate && !isValidDate(selectedDate) && (
                  <p className={errorClass}>No atendemos los domingos</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Horario *</label>
                {loadingHours ? (
                  <div className={`${inputClass} flex items-center gap-2 text-gray-400`}>
                    <svg className="animate-spin h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Cargando horarios...
                  </div>
                ) : (
                  <select {...register('time')} className={inputClass} disabled={!selectedDate || !isValidDate(selectedDate)}>
                    <option value="">
                      {!selectedDate ? 'Primero selecciona una fecha'
                        : !isValidDate(selectedDate) ? 'Fecha no disponible'
                        : availableHours.length === 0 ? 'Sin horarios disponibles'
                        : 'Selecciona un horario'}
                    </option>
                    {availableHours.map((h) => <option key={h} value={h}>{h}</option>)}
                  </select>
                )}
                {errors.time && <p className={errorClass}>{errors.time.message}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mensaje <span className="text-gray-400 font-normal">(opcional)</span>
              </label>
              <textarea
                {...register('message')}
                rows={3}
                className={inputClass}
                placeholder="Cuéntanos algo más sobre tu consulta..."
              />
            </div>

            <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: toast.type })} />

            <div className="mt-7">
              <Button type="submit" loading={isSubmitting} className="w-full justify-center" size="lg">
                Confirmar Cita
              </Button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
