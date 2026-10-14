import { Link, useLocation } from 'react-router-dom'
import { breadcrumbsFor } from '../../seo/routes'

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const migas = breadcrumbsFor(pathname)
  if (!migas.length) return null

  return (
    <nav aria-label="Migas de pan" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate">
        {migas.map(({ nombre, path }, i) => {
          const actual = i === migas.length - 1
          return (
            <li key={path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" className="text-slate-light">›</span>}
              {actual ? (
                <span aria-current="page" className="text-foreground font-medium">{nombre}</span>
              ) : (
                <Link to={path} className="hover:text-accent transition-colors">{nombre}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
