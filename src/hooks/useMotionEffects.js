import { useEffect, useRef } from 'react'
import { revealOnScroll, EASE_OUT, EASE_BACK } from './reveal'

// Thin line at top of viewport that fills as you scroll
export function useScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transformOrigin = 'left center'
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      el.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`
    }
    const onScroll = () => { frame ||= requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return ref
}

// Elastic magnetic pull toward cursor — element snaps back on leave
export function useMagneticEffect(strength = 0.35) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      // El rect ya incluye el desplazamiento actual: se resta para no acumularlo.
      const m = new DOMMatrixReadOnly(getComputedStyle(el).transform)
      const x = (e.clientX - (r.left - m.m41 + r.width / 2)) * strength
      const y = (e.clientY - (r.top - m.m42 + r.height / 2)) * strength
      el.style.transition = `transform 0.3s ${EASE_OUT}`
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    const onLeave = () => {
      el.style.transition = `transform 0.7s ${EASE_BACK}`
      el.style.transform = ''
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return ref
}

// Animate elements with data-counter attribute counting up on scroll
export function useCounterAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const container = ref.current
    if (!container) return
    const els = [...container.querySelectorAll('[data-counter]')]
    if (!els.length) return
    const frames = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.filter((entry) => entry.isIntersecting).forEach(({ target: el }) => {
          observer.unobserve(el)
          const end = parseFloat(el.dataset.counter)
          const prefix = el.dataset.prefix || ''
          const suffix = el.dataset.suffix || ''
          const startTime = performance.now()
          const tick = (now) => {
            const t = Math.min((now - startTime) / 2000, 1)
            el.textContent = prefix + Math.round(end * (1 - (1 - t) ** 2)) + suffix
            if (t < 1) frames.add(requestAnimationFrame(tick))
          }
          frames.add(requestAnimationFrame(tick))
        })
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      frames.forEach(cancelAnimationFrame)
    }
  }, [])
  return ref
}

// Grid entrance: odd items fly from left, even from right, staggered
export function useAlternatingEntrance() {
  const ref = useRef(null)
  useEffect(() => {
    const container = ref.current
    if (!container) return
    return revealOnScroll(container, container.children, {
      from: (i) => ({ opacity: '0', transform: `translate(${i % 2 === 0 ? -60 : 60}px, 20px) scale(0.88)` }),
      duration: 0.7,
      stagger: 0.1,
      easing: EASE_BACK,
      start: 0.82,
    })
  }, [])
  return ref
}
