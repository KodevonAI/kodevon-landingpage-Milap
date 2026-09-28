import ScrollReveal from '../animations/ScrollReveal'
import CitaForm from './CitaForm'

export default function ReservaCitas({ titleAs = 'h2' }) {
  const Title = titleAs

  return (
    <section id="citas" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Reserva Online</p>
          <Title className="font-display text-3xl sm:text-4xl font-bold text-dark mb-4">
            Agenda tu cita
            <br />
            <span className="text-primary">en línea</span>
          </Title>
          <p className="text-gray-500 text-sm">
            Elige servicio, fecha y hora, y envíanos tu solicitud por WhatsApp. Te confirmamos la cita por ahí.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <CitaForm />
        </ScrollReveal>
      </div>
    </section>
  )
}
