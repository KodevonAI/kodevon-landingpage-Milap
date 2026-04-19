import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.1 })

  const directions = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  }

  const variant = directions[direction] || directions.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variant}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
