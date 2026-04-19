import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiInstagram, FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { contactSchema } from '../../utils/validation'
import { sendContactForm } from '../../utils/emailService'
import { BUSINESS } from '../../utils/constants'
import Button from '../common/Button'
import Toast from '../common/Toast'
import ScrollReveal from '../animations/ScrollReveal'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus:border-primary text-gray-800 text-sm transition-all bg-white'
const errorClass = 'text-red-500 text-xs mt-1.5'

const contacts = [
  { icon: FiPhone, label: 'Teléfono', value: BUSINESS.phone, href: `tel:${BUSINESS.phoneRaw}` },
  { icon: FiMail, label: 'Email', value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: BUSINESS.phone, href: BUSINESS.whatsapp },
  { icon: FiInstagram, label: 'Instagram', value: '@opticamilap', href: BUSINESS.instagram },
]

export default function FormContacto() {
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
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Contacto</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark">
            Hablemos,
            <br />
            <span className="text-primary">¿en qué te ayudamos?</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-lg font-bold text-dark mb-6">Canales de contacto</h3>
              <div className="space-y-4">
                {contacts.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300 shrink-0">
                      <Icon size={19} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{label}</p>
                      <p className="text-dark font-semibold text-sm">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-primary text-white">
                <h4 className="font-bold mb-4 text-sm">Horario de Atención</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Lunes – Viernes</span>
                    <span className="font-medium">8:00–12:00 / 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sábados</span>
                    <span className="font-medium">8:00–13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Domingos</span>
                    <span className="text-white/40 font-medium">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
