import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav>
      <div className="container">
        <ul>
          {isHome ? (
            <>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>À propos</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Compétences</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projets</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </>
          ) : (
            <li><Link to="/">Accueil</Link></li>
          )}
          <li><Link to="/cv">CV</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
