function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero visible">
      <div className="container">
        <div className="hero-content">
          <h1>Romain Tabary</h1>
          <p className="subtitle">Développeur Fullstack Freelance • API Whisperer</p>
          <p className="tagline">« Je code pas mal, mais je debug encore mieux »</p>
          <div className="cta-buttons">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
