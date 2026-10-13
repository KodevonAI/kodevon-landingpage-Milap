export const EASE_OUT = 'cubic-bezier(0.165, 0.84, 0.44, 1)'
export const EASE_BACK = 'cubic-bezier(0.34, 1.45, 0.64, 1)'

// Anima la entrada de `items` cuando `trigger` entra en el viewport.
// Lo que ya está visible al cargar se deja tal cual: el HTML pre-renderizado
// se pinta sin esperar a JS (mejor LCP) y sin parpadeo al hidratar.
// `from` es un objeto de estilos o una función (índice) => estilos.
export function revealOnScroll(trigger, items, options = {}) {
  const { from, duration = 0.6, delay = 0, stagger = 0, easing = EASE_OUT, start = 0.85 } = options
  const els = [...items]
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!els.length || reducedMotion || trigger.getBoundingClientRect().top < window.innerHeight * start) {
    return () => {}
  }

  const fromFor = (i) => (typeof from === 'function' ? from(i) : from)
  const clear = (el, i) => Object.keys(fromFor(i)).forEach((prop) => { el.style[prop] = '' })
  els.forEach((el, i) => Object.assign(el.style, fromFor(i)))

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      els.forEach((el, i) => {
        clear(el, i)
        el.animate([fromFor(i), { opacity: 1, transform: 'none' }], {
          duration: duration * 1000,
          delay: (delay + i * stagger) * 1000,
          easing,
          fill: 'backwards',
        })
      })
    },
    { rootMargin: `0px 0px -${Math.round((1 - start) * 100)}% 0px` },
  )
  observer.observe(trigger)

  return () => {
    observer.disconnect()
    els.forEach(clear)
  }
}
