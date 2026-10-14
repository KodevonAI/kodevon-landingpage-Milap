import { useParams } from 'react-router-dom'
import { getGuia } from '../content/guias'
import { getServicio } from '../content/servicios'
import ContentPage, { Bloque } from '../components/content/ContentPage'
import GuideBlocks from '../components/content/GuideBlocks'
import RelatedLinks from '../components/content/RelatedLinks'
import BookingCta from '../components/content/BookingCta'
import NotFoundPage from './NotFoundPage'

const fechaLarga = (iso) =>
  new Date(iso).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default function GuiaPage() {
  const { slug } = useParams()
  const guia = getGuia(slug)
  if (!guia) return <NotFoundPage />

  const servicio = getServicio(guia.servicio)

  return (
    <ContentPage etiqueta="Guía de salud visual" h1={guia.h1} intro={guia.respuesta}>
      {guia.secciones.map(({ titulo, bloques }) => (
        <Bloque key={titulo} titulo={titulo}>
          <GuideBlocks bloques={bloques} />
        </Bloque>
      ))}

      <Bloque titulo="¿Cuándo consultar a un optómetra?">
        <p className="text-slate text-sm sm:text-base leading-relaxed">{guia.cuandoConsultar}</p>
      </Bloque>

      <p className="text-xs text-slate-light border-t border-border pt-5">
        Revisado por el equipo de optometría de OpticaMilap el <time dateTime={guia.revisado}>{fechaLarga(guia.revisado)}</time>.
        Esta guía es informativa y no reemplaza una consulta profesional.
      </p>

      <Bloque titulo="Servicio relacionado">
        <RelatedLinks items={[{ to: `/servicios/${servicio.slug}`, titulo: servicio.h1, resumen: servicio.tarjeta }]} />
      </Bloque>

      <BookingCta servicio={servicio.citaId} />
    </ContentPage>
  )
}
