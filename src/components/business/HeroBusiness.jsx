function HeroBusiness() {
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
          <h1>Développeur Web Freelance à Lille</h1>
          <p className="subtitle">Je transforme vos idées en solutions web sur mesure</p>
          <p className="tagline">
            Site internet, application métier, automatisation - Sans jargon technique, avec un accompagnement complet
          </p>
          <div className="cta-buttons">
            <a
              href="#solutions"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}
            >
              Découvrir mes solutions
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Parlons de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBusiness
