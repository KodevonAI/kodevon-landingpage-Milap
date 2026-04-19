import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import ServiciosPage from './pages/ServiciosPage'
import CitasPage from './pages/CitasPage'
import ContactoPage from './pages/ContactoPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/citas" element={<CitasPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
