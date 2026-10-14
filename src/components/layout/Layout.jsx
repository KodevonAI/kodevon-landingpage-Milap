import Navbar from './Navbar'
import Footer from './Footer'
import MobileBar from './MobileBar'

export default function Layout({ children }) {
  return (
    // pb-16 en móvil deja sitio a la barra fija inferior.
    <div className="flex flex-col min-h-screen overflow-x-hidden pb-16 md:pb-0">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBar />
    </div>
  )
}
