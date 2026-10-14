import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import Seo from './components/seo/Seo'
import Home from './pages/Home'
import ServiciosPage from './pages/ServiciosPage'
import ServicioPage from './pages/ServicioPage'
import GuiasPage from './pages/GuiasPage'
import GuiaPage from './pages/GuiaPage'
import NosotrosPage from './pages/NosotrosPage'
import FaqPage from './pages/FaqPage'
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
          <Route path="/servicios/:slug" element={<ServicioPage />} />
          <Route path="/guias" element={<GuiasPage />} />
          <Route path="/guias/:slug" element={<GuiaPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/preguntas-frecuentes" element={<FaqPage />} />
          <Route path="/citas" element={<CitasPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}
