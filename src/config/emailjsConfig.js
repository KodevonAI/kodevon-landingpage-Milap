export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templates: {
    cita: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CITA,
    contacto: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
  },
}
