import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Thin line at top of viewport that fills as you scroll
export function useScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.set(el, { scaleX: 0, transformOrigin: 'left center' })
    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      })
    })
    return () => ctx.revert()
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
      gsap.to(el, {
        x: (e.clientX - (r.left + r.width / 2)) * strength,
        y: (e.clientY - (r.top + r.height / 2)) * strength,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
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
    const els = container.querySelectorAll('[data-counter]')
    if (!els.length) return
    const ctx = gsap.context(() => {
      els.forEach((el) => {
        const end = parseFloat(el.dataset.counter)
        const prefix = el.dataset.prefix || ''
        const suffix = el.dataset.suffix || ''
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter() {
            const obj = { val: 0 }
            gsap.to(obj, {
              val: end,
              duration: 2,
              ease: 'power2.out',
              onUpdate() { el.textContent = prefix + Math.round(obj.val) + suffix },
              onComplete() { el.textContent = prefix + end + suffix },
            })
          },
        })
      })
    }, container)
    return () => ctx.revert()
  }, [])
  return ref
}

// 3D perspective tilt following mouse, elastic snap-back on leave
export function useTiltEffect() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transformStyle = 'preserve-3d'
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2
      gsap.to(el, {
        rotateY: x * 14,
        rotateX: -y * 10,
        scale: 1.04,
        transformPerspective: 700,
        duration: 0.35,
        ease: 'power2.out',
      })
    }
    const onLeave = () =>
      gsap.to(el, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
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
    const items = [...container.children]
    const ctx = gsap.context(() => {
      items.forEach((el, i) =>
        gsap.set(el, { opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20, scale: 0.88 })
      )
      gsap.to(items, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'back.out(1.5)',
        scrollTrigger: { trigger: container, start: 'top 82%', once: true },
      })
    }, container)
    return () => ctx.revert()
  }, [])
  return ref
}
