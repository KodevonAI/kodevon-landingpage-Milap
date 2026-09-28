import { FaWhatsapp } from 'react-icons/fa'
import { openWhatsApp } from '../../utils/whatsapp'
import Button from '../common/Button'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus:border-primary text-gray-800 text-sm transition-all bg-white'

export default function ContactForm() {
  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    openWhatsApp([
      `Hola OpticaMilap, soy ${data.name}.`,
      data.subject && `Asunto: ${data.subject}`,
      data.message,
    ])
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
        <input id="contact-name" name="name" required minLength={3} className={inputClass} placeholder="Tu nombre" />
      </div>
      <div className="mt-5">
        <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
        <input id="contact-subject" name="subject" className={inputClass} placeholder="¿Sobre qué nos escribes?" />
      </div>
      <div className="mt-5">
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">Mensaje *</label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={4}
          className={inputClass}
          placeholder="Cuéntanos en qué podemos ayudarte..."
        />
      </div>

      <div className="mt-7">
        <Button type="submit" className="w-full justify-center" size="lg">
          <FaWhatsapp size={18} />
          Enviar por WhatsApp
        </Button>
      </div>
    </form>
  )
}
