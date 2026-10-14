import { FiEye, FiCircle, FiTool } from 'react-icons/fi'

function GlassesIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M2 15h0M22 15h0M10 15h4" />
      <path d="M2 12c0-1 .6-2 2-2h1M22 12c0-1-.6-2-2-2h-1" />
    </svg>
  )
}

const ICONS = { eye: FiEye, glasses: GlassesIcon, contact: FiCircle, tools: FiTool }

export default function ServiceIcon({ name, size = 20, className = '' }) {
  const Icon = ICONS[name]
  return <Icon size={size} className={className} />
}
