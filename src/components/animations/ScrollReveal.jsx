import { useEffect, useRef } from 'react'
import { revealOnScroll } from '../../hooks/reveal'

const OFFSETS = {
  up: 'translateY(50px)',
  down: 'translateY(-50px)',
  left: 'translateX(-50px)',
  right: 'translateX(50px)',
  fade: 'none',
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    return revealOnScroll(el, [el], {
      from: { opacity: '0', transform: OFFSETS[direction] || OFFSETS.up },
      duration,
      delay,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      start: 0.9,
    })
  }, [direction, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
