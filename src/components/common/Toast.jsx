import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi'

export default function Toast({ message, type = 'success', onClose }) {
  const styles = {
    success: { bg: 'bg-green-50 border-green-200', icon: <FiCheckCircle className="text-green-500 text-xl" />, text: 'text-green-800' },
    error: { bg: 'bg-red-50 border-red-200', icon: <FiXCircle className="text-red-500 text-xl" />, text: 'text-red-800' },
  }
  const s = styles[type]

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`flex items-start gap-3 p-4 rounded-xl border ${s.bg} mt-4`}
          role="alert"
        >
          {s.icon}
          <p className={`flex-1 text-sm font-medium ${s.text}`}>{message}</p>
          {onClose && (
            <button onClick={onClose} className={`${s.text} hover:opacity-70 ml-2`} aria-label="Cerrar">
              <FiX />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
