import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar({ audience, onAudienceChange }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentAudience = audience ?? 'tech'

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false) // Fermer le menu après navigation
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleAudienceSwitch = (targetAudience) => {
    if (onAudienceChange && targetAudience !== currentAudience) {
      onAudienceChange(targetAudience)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav>
      <div className="container">
        <div className="audience-toggle-group" role="group" aria-label="Choisir un profil">
              <button
                type="button"
                className={`audience-toggle-option ${currentAudience === 'tech' ? 'active' : ''}`}
                aria-pressed={currentAudience === 'tech'}
                onClick={() => handleAudienceSwitch('tech')}
              >
                Tech
              </button>
              <button
                type="button"
                className={`audience-toggle-option ${currentAudience === 'business' ? 'active' : ''}`}
                aria-pressed={currentAudience === 'business'}
                onClick={() => handleAudienceSwitch('business')}
              >
                Business
              </button>
            </div>

        <button
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={isMenuOpen ? 'active' : ''}>
          {isHome ? (
            <>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>À propos</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Compétences</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projets</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </>
          ) : (
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
          )}
          {currentAudience !== 'business' && (
            <li><Link to="/cv" onClick={() => setIsMenuOpen(false)}>CV</Link></li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
