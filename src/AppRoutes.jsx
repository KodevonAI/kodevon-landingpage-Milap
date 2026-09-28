import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import Seo from './components/seo/Seo'
import Home from './pages/Home'
import ServiciosPage from './pages/ServiciosPage'
import CitasPage from './pages/CitasPage'
import ContactoPage from './pages/ContactoPage'
import NotFoundPage from './pages/NotFoundPage'

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/citas" element={<CitasPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}
