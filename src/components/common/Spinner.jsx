export default function Spinner({ size = 'md', color = '#3238A6' }) {
  const sizes = { sm: 'h-4 w-4', md: 'h-8 w-8', lg: 'h-12 w-12' }
  return (
    <svg
      className={`animate-spin ${sizes[size]}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Cargando..."
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke={color} strokeWidth="4" />
      <path className="opacity-75" fill={color} d="M4 12a8 8 0 018-8v8z" />
    </svg>
  )
}
