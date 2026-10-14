import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useStaggerAnimation } from '../../hooks/useScrollAnimation'
import ServiceCards from '../content/ServiceCards'
import SectionHeading from './SectionHeading'

export default function Servicios() {
  const gridRef = useStaggerAnimation({ stagger: 0.1 })

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading etiqueta="Nuestros servicios" titulo="Todo lo que necesitas para" destacado="tu salud visual">
          Examen visual, gafas formuladas, lentes de contacto y reparación de monturas en una misma sede de Popayán.
        </SectionHeading>
        <ServiceCards innerRef={gridRef} />
        <p className="text-center mt-8">
          <Link to="/servicios" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline">
            Ver todos los servicios <FiArrowRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  )
}
