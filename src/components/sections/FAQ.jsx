import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { FAQS_GENERALES } from '../../content/faqs'
import PageFaq from '../content/PageFaq'
import SectionHeading from './SectionHeading'

const destacadas = FAQS_GENERALES.flatMap((tema) => tema.preguntas).filter((pregunta) => pregunta.destacada)

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading etiqueta="Preguntas frecuentes" titulo="Resolvemos tus" destacado="dudas" />
        <PageFaq preguntas={destacadas} />
        <p className="text-center mt-8">
          <Link to="/preguntas-frecuentes" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline">
            Ver todas las preguntas <FiArrowRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  )
}
