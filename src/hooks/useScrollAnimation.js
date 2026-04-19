import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(config = {}) {
  const ref = useRef(null)
  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    start = 'top 85%',
  } = config

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.set(el, from)
    const anim = gsap.to(el, {
      ...to,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
    })

    return () => {
      anim.kill()
    }
  }, [])

  return ref
}

export function useStaggerAnimation(config = {}) {
  const ref = useRef(null)
  const {
    selector = ':scope > *',
    from = { opacity: 0, y: 40 },
    duration = 0.6,
    stagger = 0.15,
    ease = 'power3.out',
    start = 'top 85%',
  } = config

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = container.querySelectorAll(selector)
    if (!items.length) return

    gsap.set(items, from)
    const anim = gsap.to(items, {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: container,
        start,
        once: true,
      },
    })

    return () => {
      anim.kill()
    }
  }, [])

  return ref
}
