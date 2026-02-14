import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import CV from './pages/CV'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AudienceSelector from './components/AudienceSelector'

function App() {
  const [audience, setAudience] = useState(null)
  const [showSelector, setShowSelector] = useState(true)

  // Charger le choix depuis localStorage au montage
  useEffect(() => {
    const savedAudience = localStorage.getItem('audience')
    if (savedAudience) {
      setAudience(savedAudience)
      setShowSelector(false)
    }
  }, [])

  const handleSelectAudience = (audienceType) => {
    setAudience(audienceType)
    localStorage.setItem('audience', audienceType)
    setShowSelector(false)
  }

  // Afficher le sélecteur d'audience si aucun choix n'a été fait
  if (showSelector && !audience) {
    return <AudienceSelector onSelectAudience={handleSelectAudience} />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home audience={audience} />} />
        <Route path="/cv" element={<CV audience={audience} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
