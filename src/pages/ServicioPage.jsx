import { useParams } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import { BRANDS } from '../content/site'
import { getServicio } from '../content/servicios'
import { getGuia } from '../content/guias'
import ContentPage, { Bloque } from '../components/content/ContentPage'
import QuickFacts from '../components/content/QuickFacts'
import StepList from '../components/content/StepList'
import PageFaq from '../components/content/PageFaq'
import RelatedLinks from '../components/content/RelatedLinks'
import BookingCta from '../components/content/BookingCta'
import NotFoundPage from './NotFoundPage'

function CheckList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
          <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent-muted text-accent flex items-center justify-center">
            <FiCheck size={12} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function ServicioPage() {
  const { slug } = useParams()
  const servicio = getServicio(slug)
  if (!servicio) return <NotFoundPage />

  const guias = servicio.guias.map(getGuia).map((guia) => ({
    to: `/guias/${guia.slug}`,
    titulo: guia.h1,
    resumen: guia.tarjeta,
  }))

  return (
    <ContentPage etiqueta="Servicio" h1={servicio.h1} intro={servicio.resumen}>
      <QuickFacts datos={servicio.datos} />

      {servicio.descripcion && (
        <Bloque titulo="¿En qué consiste?">
          <div className="space-y-4">
            {servicio.descripcion.map((parrafo) => (
              <p key={parrafo} className="text-slate text-sm sm:text-base leading-relaxed">{parrafo}</p>
            ))}
          </div>
        </Bloque>
      )}

      <Bloque titulo="¿Qué incluye?">
        <CheckList items={servicio.incluye} />
      </Bloque>

      <Bloque titulo="¿Cómo es el proceso?">
        <StepList pasos={servicio.pasos} />
      </Bloque>

      <Bloque titulo="¿Cuándo te conviene?">
        <CheckList items={servicio.paraQuien} />
      </Bloque>

      {servicio.marcas && (
        <Bloque titulo="Marcas que manejamos">
          <ul className="flex flex-wrap gap-2">
            {BRANDS[servicio.marcas].map((marca) => (
              <li key={marca} className="px-3.5 py-1.5 rounded-full bg-card border border-border text-sm font-medium text-foreground">{marca}</li>
            ))}
          </ul>
        </Bloque>
      )}

      <Bloque titulo={`Preguntas frecuentes sobre ${servicio.nombre.toLowerCase()}`}>
        <PageFaq preguntas={servicio.faqs} />
      </Bloque>

      <Bloque titulo="Guías relacionadas">
        <RelatedLinks items={guias} />
      </Bloque>

      <BookingCta servicio={servicio.citaId} />
    </ContentPage>
  )
}
