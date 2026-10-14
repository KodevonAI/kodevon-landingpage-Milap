import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { GUIAS } from '../../content/guias'
import RelatedLinks from '../content/RelatedLinks'
import SectionHeading from './SectionHeading'

const destacadas = GUIAS.slice(0, 3).map((guia) => ({
  to: `/guias/${guia.slug}`,
  titulo: guia.h1,
  resumen: guia.tarjeta,
}))

export default function GuiasDestacadas() {
  return (
    <section id="guias" className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading etiqueta="Guías" titulo="Respuestas claras sobre" destacado="tu salud visual">
          Lo que más nos preguntan en consulta, explicado sin tecnicismos por el equipo de OpticaMilap.
        </SectionHeading>
        <RelatedLinks items={destacadas} columnas="sm:grid-cols-3" />
        <p className="text-center mt-8">
          <Link to="/guias" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline">
            Ver todas las guías <FiArrowRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  )
}
