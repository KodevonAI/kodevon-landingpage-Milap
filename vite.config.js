import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Librerías estables en chunks propios: cambian poco entre deploys y
// el navegador las reutiliza desde caché.
const VENDOR_CHUNKS = {
  'vendor-react': ['react', 'react-dom', 'scheduler', 'react-router', 'react-router-dom'],
  'vendor-motion': ['framer-motion', 'motion-dom', 'motion-utils'],
  'vendor-gsap': ['gsap', '@gsap/react'],
}

function vendorChunk(id) {
  const match = id.match(/node_modules\/((?:@[^/]+\/)?[^/]+)/)
  if (!match) return
  return Object.keys(VENDOR_CHUNKS).find((chunk) => VENDOR_CHUNKS[chunk].includes(match[1]))
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Build SSR usado solo por scripts/prerender.js para generar HTML estático por ruta.
  build: isSsrBuild
    ? {
        outDir: 'dist-ssr',
        rollupOptions: {
          input: {
            'entry-server': 'src/entry-server.jsx',
            seo: 'src/seo/routes.js',
          },
        },
      }
    : {
        rollupOptions: {
          output: { manualChunks: vendorChunk },
        },
      },
}))
