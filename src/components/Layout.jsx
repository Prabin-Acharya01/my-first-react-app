import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollManager from './ScrollManager.jsx'

function Layout({ children }) {
  return (
    <div className="layout">
      <ScrollManager />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
