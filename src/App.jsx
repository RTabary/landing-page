import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CV from './pages/CV'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
