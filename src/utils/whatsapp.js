import { BUSINESS } from './constants'

// Abre WhatsApp (app o web) con el mensaje ya escrito para la óptica.
export function openWhatsApp(lines) {
  const text = lines.filter(Boolean).join('\n')
  window.open(`${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
}
