import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Location from './pages/Location'

export default function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'menu':
        return <Menu />
      case 'location':
        return <Location />
      default:
        return <Home setPage={setPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} setPage={setPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}
