import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollManager from './ScrollManager.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import Cursor from './Cursor.jsx'
import FloatingBackToWork from './FloatingBackToWork.jsx'

function Layout({ children }) {
  return (
    <div className="layout">
      <ScrollManager />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingBackToWork />
    </div>
  )
}

export default Layout
