import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  href,
  target,
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary shadow-lg hover:shadow-xl',
    secondary:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
    accent:
      'bg-accent text-white hover:bg-[#0e6ea8] focus-visible:ring-accent shadow-lg hover:shadow-xl',
    ghost: 'bg-white/10 text-white border border-white/30 hover:bg-white/20 focus-visible:ring-white',
  }

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled || loading ? 'opacity-60 cursor-not-allowed' : ''} ${className}`

  const content = loading ? (
    <span className="flex items-center gap-2">
      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      {children}
    </span>
  ) : children

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={!disabled ? { scale: 1.03 } : {}}
        whileTap={!disabled ? { scale: 0.97 } : {}}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      whileHover={!disabled && !loading ? { scale: 1.03 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
    >
      {content}
    </motion.button>
  )
}
