import { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'
import { FiMapPin } from 'react-icons/fi'
import { googleMapsConfig } from '../../config/googleConfig'
import { BUSINESS } from '../../utils/constants'

const mapStyles = [
  { featureType: 'all', elementType: 'geometry.fill', stylers: [{ color: '#f5f5f5' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#e8e8e8' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c9d8e8' }] },
  { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
]

export default function UbicacionMap({ mapsUrl }) {
  const [infoOpen, setInfoOpen] = useState(false)

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: googleMapsConfig.apiKey || '',
  })

  if (loadError) {
    return (
      <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center gap-3">
        <FiMapPin size={32} className="text-primary" />
        <p className="text-gray-500 text-sm text-center px-8">
          No se pudo cargar el mapa.{' '}
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
            Ver en Google Maps
          </a>
        </p>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full bg-gray-50 flex items-center justify-center">
        <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
      </div>
    )
  }

  return (
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
  )
}
