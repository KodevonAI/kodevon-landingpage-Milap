import ContentPage from '../components/content/ContentPage'
import ServiceCards from '../components/content/ServiceCards'
import BookingCta from '../components/content/BookingCta'

export default function ServiciosPage() {
  return (
    <ContentPage
      ancho="max-w-5xl"
      etiqueta="Nuestros servicios"
      h1="Servicios de óptica y optometría en Popayán"
      intro="En OpticaMilap hacemos exámenes visuales, formulamos y vendemos gafas, adaptamos lentes de contacto y reparamos monturas. Todo en una misma sede en el barrio Antonio Nariño de Popayán, con más de 30 años de experiencia."
    >
      <ServiceCards titleAs="h2" />
      <BookingCta />
    </ContentPage>
  )
}
