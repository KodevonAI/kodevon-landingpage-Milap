import { FiInstagram, FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { BUSINESS } from '../../utils/constants'
import ScrollReveal from '../animations/ScrollReveal'
import ContactForm from './ContactForm'

const contacts = [
  { icon: FiPhone, label: 'Teléfono', value: BUSINESS.phone, href: `tel:${BUSINESS.phoneRaw}` },
  { icon: FiMail, label: 'Email', value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: BUSINESS.phone, href: BUSINESS.whatsapp },
  { icon: FiInstagram, label: 'Instagram', value: '@opticamilap', href: BUSINESS.instagram },
]

export default function FormContacto({ titleAs = 'h2' }) {
  const Title = titleAs

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Contacto</p>
          <Title className="font-display text-3xl sm:text-4xl font-bold text-dark">
            Hablemos,
            <br />
            <span className="text-primary">¿en qué te ayudamos?</span>
          </Title>
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
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
