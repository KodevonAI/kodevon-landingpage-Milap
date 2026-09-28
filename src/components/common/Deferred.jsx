import { Suspense, useEffect, useRef, useState } from 'react'

// Monta `children` solo en el cliente y cuando el bloque se acerca al viewport.
// Pensado para envolver componentes React.lazy con dependencias pesadas
// (formularios, mapas) sin que entren en el bundle inicial ni en el prerender.
export default function Deferred({ children, fallback = null, rootMargin = '400px', className }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  if (!visible) return <div ref={ref} className={className}>{fallback}</div>
  return <Suspense fallback={fallback}>{children}</Suspense>
}
