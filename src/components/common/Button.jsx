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
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer'

  const variants = {
    primary:
      'bg-accent text-white hover:bg-[#025d8f] focus-visible:ring-accent shadow-md hover:shadow-lg',
    secondary:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
    accent:
      'bg-accent-light text-white hover:bg-accent focus-visible:ring-accent-light shadow-md hover:shadow-lg',
    ghost: 'bg-white/10 text-white border border-white/30 hover:bg-white/20 focus-visible:ring-white',
    outline: 'bg-white border border-border text-foreground hover:border-accent hover:text-accent focus-visible:ring-accent shadow-sm',
  }

  const sizes = {
    sm: 'px-5 py-2 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

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
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
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
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
    >
      {content}
    </motion.button>
  )
}
