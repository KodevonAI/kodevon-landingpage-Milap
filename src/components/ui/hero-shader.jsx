import { useEffect, useRef, useState } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'

// Gradiente desenfocado: no necesita resolución retina. Limitar píxeles
// reduce mucho el trabajo de GPU en móviles y pantallas grandes.
const SHADER_QUALITY = { minPixelRatio: 1, maxPixelCount: 1280 * 720 }

export function ShaderBackground({ children }) {
  const containerRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  // Anima solo mientras el hero está en pantalla y el usuario no pidió menos movimiento.
  useEffect(() => {
    const container = containerRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!container || reducedMotion.matches) return

    const observer = new IntersectionObserver(([entry]) => setAnimate(entry.isIntersecting))
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen w-full relative overflow-hidden">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.04
                      0 0 1 0 0.08
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Primary mesh gradient — OpticaMilap navy/blue palette */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={['#0F172A', '#0369A1', '#0EA5E9', '#1E3A5F', '#082F49']}
        speed={animate ? 0.25 : 0}
        {...SHADER_QUALITY}
        backgroundColor="#0F172A"
      />
      {/* Secondary overlay — subtle wireframe shimmer */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={['#0F172A', '#38BDF8', '#0369A1', '#0F172A']}
        speed={animate ? 0.15 : 0}
        {...SHADER_QUALITY}
        wireframe="true"
        backgroundColor="transparent"
      />

      {children}
    </div>
  )
}
