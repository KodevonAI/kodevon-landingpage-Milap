import Hero from '../components/sections/Hero'
import DatosClave from '../components/sections/DatosClave'
import Servicios from '../components/sections/Servicios'
import QuienesSomos from '../components/sections/QuienesSomos'
import Galeria from '../components/sections/Galeria'
import Productos from '../components/sections/Productos'
import Testimonios from '../components/sections/Testimonios'
import GuiasDestacadas from '../components/sections/GuiasDestacadas'
import FAQ from '../components/sections/FAQ'
import Ubicacion from '../components/sections/Ubicacion'
import BookingCta from '../components/content/BookingCta'

export default function Home() {
  return (
    <>
      <Hero />
      <DatosClave />
      <Servicios />
      <QuienesSomos />
      <Galeria />
      <Productos />
      <Testimonios />
      <GuiasDestacadas />
      <FAQ />
      <Ubicacion />
      <section className="bg-white pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingCta />
        </div>
      </section>
    </>
  )
}
