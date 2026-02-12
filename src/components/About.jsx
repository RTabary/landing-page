function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">À propos</h2>
        <div className="about-content">
          <p>
            Expert technique avec plus de 10 ans d'expérience dans l'écosystème TypeScript/JavaScript.
            Spécialisé dans le développement fullstack et la gouvernance d'API, j'ai contribué pendant 7 ans
            chez Decathlon à des outils critiques utilisés par des centaines de développeurs. 🐰
          </p>
          <p>
            De la conception d'architectures web robustes (<strong>NestJS/React</strong>) à l'industrialisation
            des processus de qualité, en passant par l'amélioration de la Developer Experience avec des
            <strong> Internal Developer Platforms</strong>, je couvre l'intégralité du cycle de vie logiciel.
          </p>
          <p>
            Mon expertise <strong>API Management avec Gravitee.io</strong> m'a permis de former plus de 200 développeurs
            et de créer des outils d'audit automatisés qui ont augmenté de 300% le respect des standards internes.
          </p>
          <div className="tech-stack">
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">NestJS</span>
            <span className="tech-badge">React</span>
            <span className="tech-badge">Gravitee.io</span>
            <span className="tech-badge">Kubernetes</span>
            <span className="tech-badge">Spotify Backstage</span>
            <span className="tech-badge">PostgreSQL</span>
            <span className="tech-badge">GitHub Actions</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
