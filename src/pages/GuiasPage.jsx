import { GUIAS } from '../content/guias'
import ContentPage from '../components/content/ContentPage'
import RelatedLinks from '../components/content/RelatedLinks'
import BookingCta from '../components/content/BookingCta'

const guias = GUIAS.map((guia) => ({ to: `/guias/${guia.slug}`, titulo: guia.h1, resumen: guia.tarjeta }))

export default function GuiasPage() {
  return (
    <ContentPage
      ancho="max-w-5xl"
      etiqueta="Guías"
      h1="Guías de salud visual"
      intro="Respuestas claras a las dudas que más escuchamos en consulta: cada cuánto revisarte, cómo elegir entre gafas y lentes de contacto, qué son los lentes progresivos y cómo cuidar tus gafas. Las escribe y revisa el equipo de optometría de OpticaMilap, en Popayán."
    >
      <RelatedLinks items={guias} columnas="sm:grid-cols-2 lg:grid-cols-3" />
      <BookingCta />
    </ContentPage>
  )
}
