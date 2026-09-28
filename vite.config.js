import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

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
    : {},
}))
