import { lazy } from 'react'
import { FiMapPin, FiExternalLink } from 'react-icons/fi'
import { BUSINESS } from '../../utils/constants'
import Deferred from '../common/Deferred'
import ScrollReveal from '../animations/ScrollReveal'

const UbicacionMap = lazy(() => import('./UbicacionMap'))

function MapPlaceholder() {
  return (
    <div className="w-full h-full bg-gray-50 flex items-center justify-center" aria-hidden="true">
      <FiMapPin size={32} className="text-primary/40" />
    </div>
  )
}

const MAP_HEIGHT = 460

export default function Ubicacion() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`

  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Ubicación</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark">
            Encuéntranos en
            <br />
            <span className="text-primary">Popayán</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100" style={{ height: MAP_HEIGHT }}>
              <Deferred className="h-full" fallback={<MapPlaceholder />}>
                <UbicacionMap mapsUrl={mapsUrl} />
              </Deferred>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="flex flex-col gap-4 h-full">
              <div className="bg-primary rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-white" size={17} />
                  </div>
                  <h3 className="font-bold text-white text-sm">Dirección</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{BUSINESS.address}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
                <h3 className="font-bold text-dark text-sm mb-4">Horario de atención</h3>
                <div className="space-y-2.5 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Lun – Vie</span>
                    <span className="font-semibold text-primary">8:00–12:00 / 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="font-semibold text-primary">8:00–13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="text-red-400 font-medium">Cerrado</span>
                  </div>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white rounded-2xl font-semibold text-sm hover:bg-primary-dark transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <FiExternalLink size={16} />
                Ver en Google Maps
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
