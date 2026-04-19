import { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'
import { FiMapPin, FiExternalLink } from 'react-icons/fi'
import { googleMapsConfig } from '../../config/googleConfig'
import { BUSINESS } from '../../utils/constants'
import ScrollReveal from '../animations/ScrollReveal'

const mapStyles = [
  { featureType: 'all', elementType: 'geometry.fill', stylers: [{ color: '#f5f5f5' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#e8e8e8' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c9d8e8' }] },
  { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
]

const MAP_HEIGHT = 460

export default function Ubicacion() {
  const [infoOpen, setInfoOpen] = useState(false)

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: googleMapsConfig.apiKey || '',
  })

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
              {loadError ? (
                <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center gap-3">
                  <FiMapPin size={32} className="text-primary" />
                  <p className="text-gray-500 text-sm text-center px-8">
                    No se pudo cargar el mapa.{' '}
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      Ver en Google Maps
                    </a>
                  </p>
                </div>
              ) : !isLoaded ? (
                <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                  <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                </div>
              ) : (
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '100%' }}
                  center={googleMapsConfig.location}
                  zoom={16}
                  options={{ styles: mapStyles, disableDefaultUI: true, zoomControl: true }}
                >
                  <Marker position={googleMapsConfig.location} title="OpticaMilap" onClick={() => setInfoOpen(true)} />
                  {infoOpen && (
                    <InfoWindow position={googleMapsConfig.location} onCloseClick={() => setInfoOpen(false)}>
                      <div className="p-1">
                        <p className="font-bold text-primary text-sm">OpticaMilap</p>
                        <p className="text-xs text-gray-600 mt-0.5">{BUSINESS.address}</p>
                        <p className="text-xs text-gray-600">{BUSINESS.phone}</p>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              )}
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
