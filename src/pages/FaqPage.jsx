import { Link } from 'react-router-dom'
import { FAQS_GENERALES } from '../content/faqs'
import ContentPage, { Bloque } from '../components/content/ContentPage'
import PageFaq from '../components/content/PageFaq'
import BookingCta from '../components/content/BookingCta'

export default function FaqPage() {
  return (
    <ContentPage
      etiqueta="Preguntas frecuentes"
      h1="Preguntas frecuentes sobre OpticaMilap"
      intro="Aquí respondemos lo que más nos preguntan sobre citas, servicios, horario y contacto. Si tu duda es sobre un servicio concreto, en su página encontrarás preguntas más específicas."
    >
      {FAQS_GENERALES.map(({ tema, preguntas }) => (
        <Bloque key={tema} titulo={tema}>
          <PageFaq preguntas={preguntas} />
        </Bloque>
      ))}

      <p className="text-slate text-sm leading-relaxed">
        ¿No encuentras tu respuesta? Revisa nuestros{' '}
        <Link to="/servicios" className="text-accent font-semibold hover:underline">servicios</Link>, lee las{' '}
        <Link to="/guias" className="text-accent font-semibold hover:underline">guías de salud visual</Link> o{' '}
        <Link to="/contacto" className="text-accent font-semibold hover:underline">escríbenos</Link>.
      </p>

      <BookingCta />
    </ContentPage>
  )
}
