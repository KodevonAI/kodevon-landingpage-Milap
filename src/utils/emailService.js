import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjsConfig'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

emailjs.init({ publicKey: emailjsConfig.publicKey })

export async function sendCitaConfirmation(citaData) {
  const { name, email, phone, service, date, time } = citaData
  const formattedDate = format(new Date(date), "EEEE d 'de' MMMM 'de' yyyy", { locale: es })

  return emailjs.send(emailjsConfig.serviceId, emailjsConfig.templates.cita, {
    to_name: name,
    to_email: email,
    phone,
    service,
    date: formattedDate,
    time,
    reply_to: email,
  })
}

export async function sendContactForm(contactData) {
  const { name, email, subject, message, phone } = contactData

  return emailjs.send(emailjsConfig.serviceId, emailjsConfig.templates.contacto, {
    from_name: name,
    from_email: email,
    subject,
    message,
    phone: phone || 'No proporcionado',
    reply_to: email,
  })
}
