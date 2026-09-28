import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteMeta, canonicalUrl } from '../../seo/routes'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/)
    el.setAttribute(key, name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

// Mantiene title/description/canonical/OG sincronizados al navegar en el cliente.
// El HTML inicial de cada ruta ya trae estos valores desde scripts/prerender.js.
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getRouteMeta(pathname)
    const url = canonicalUrl(pathname)
    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[name="robots"]', 'content', meta.noindex ? 'noindex, follow' : 'index, follow')
    if (meta.noindex) document.head.querySelector('link[rel="canonical"]')?.remove()
    else setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', url)
  }, [pathname])

  return null
}
