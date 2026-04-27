import { useEffect, useRef, useState } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'

export function ShaderBackground({ children }) {
  const containerRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)
    const container = containerRef.current
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }
    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
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
        speed={0.25}
        backgroundColor="#0F172A"
      />
      {/* Secondary overlay — subtle wireframe shimmer */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={['#0F172A', '#38BDF8', '#0369A1', '#0F172A']}
        speed={0.15}
        wireframe="true"
        backgroundColor="transparent"
      />

      {children}
    </div>
  )
}
