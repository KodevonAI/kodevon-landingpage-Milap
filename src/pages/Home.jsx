import Hero from '../components/sections/Hero'
import QuienesSomos from '../components/sections/QuienesSomos'
import Servicios from '../components/sections/Servicios'
import PorqueElegir from '../components/sections/PorqueElegir'
import Productos from '../components/sections/Productos'
import CTABanner from '../components/sections/CTABanner'
import Testimonios from '../components/sections/Testimonios'
import FAQ from '../components/sections/FAQ'
import FormContacto from '../components/sections/FormContacto'
import Ubicacion from '../components/sections/Ubicacion'

export default function Home() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <Servicios />
      <PorqueElegir />
      <Productos />
      <CTABanner />
      <Testimonios />
      <FAQ />
      <FormContacto />
      <Ubicacion />
    </>
  )
}
