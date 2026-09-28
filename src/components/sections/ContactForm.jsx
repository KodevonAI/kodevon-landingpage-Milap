import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '../../utils/validation'
import { sendContactForm } from '../../utils/emailService'
import Button from '../common/Button'
import Toast from '../common/Toast'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus:border-primary text-gray-800 text-sm transition-all bg-white'
const errorClass = 'text-red-500 text-xs mt-1.5'

export default function ContactForm() {
  const [toast, setToast] = useState({ message: '', type: 'success' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data) => {
    try {
      await sendContactForm(data)
      setToast({ message: '¡Mensaje enviado! Te responderemos a la brevedad.', type: 'success' })
      reset()
    } catch {
      setToast({ message: 'No se pudo enviar. Escríbenos por WhatsApp al 316 6085291.', type: 'error' })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
          <input {...register('name')} className={inputClass} placeholder="Tu nombre" />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
          <input {...register('phone')} type="tel" className={inputClass} placeholder="Opcional" />
        </div>
      </div>
      <div className="mt-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
        <input {...register('email')} type="email" className={inputClass} placeholder="tu@email.com" />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>
      <div className="mt-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Asunto *</label>
        <input {...register('subject')} className={inputClass} placeholder="¿Sobre qué nos escribes?" />
        {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
      </div>
      <div className="mt-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje *</label>
        <textarea
          {...register('message')}
          rows={4}
          className={inputClass}
          placeholder="Cuéntanos en qué podemos ayudarte..."
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: toast.type })} />

      <div className="mt-7">
        <Button type="submit" loading={isSubmitting} className="w-full justify-center" size="lg">
          Enviar Mensaje
        </Button>
      </div>
    </form>
  )
}
