import { useEffect, useRef } from 'react'
import { revealOnScroll } from './reveal'

// Entrada escalonada de los hijos del contenedor al hacer scroll.
export function useStaggerAnimation({ selector = ':scope > *', duration = 0.6, stagger = 0.15 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    return revealOnScroll(container, container.querySelectorAll(selector), {
      from: { opacity: '0', transform: 'translateY(40px)' },
      duration,
      stagger,
    })
  }, [selector, duration, stagger])

  return ref
}
