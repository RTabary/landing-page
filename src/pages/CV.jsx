import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function CV({ audience }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Expériences professionnelles
  const experiences = [
    {
      title: 'Expert Technique & API Governance',
      company: 'Decathlon',
      location: 'Lille',
      period: 'Mai 2020 - Nov 2025',
      description: 'Industrialisation de la gestion des standards APIs REST et de la documentation pour un SI comprenant plus de 1000 APIs et des milliers de développeurs.',
      achievements: [
        'Développement d\'une plateforme de gouvernance (React/NestJS) avec wizard de création d\'APIs standardisé',
        'Moteur d\'audit & qualité fullstack avec intégration Stoplight Spectral + IA',
        'Déploiement d\'un portail de documentation centralisé (Hugo, K8s, Nginx, GCP)',
        'Contribution à l\'Internal Developer Platform (IDP) - v1 (Backstage) et v2 (custom)',
        'Impact : +300% de respect des standards internes'
      ],
      technologies: ['TypeScript', 'NestJS', 'React', 'Gravitee', 'Spotify Backstage', 'Kubernetes', 'OAuth2', 'Stoplight Spectral', 'GitHub Actions', 'IA']
    },
    {
      title: 'API Manager | Formateur API',
      company: 'Decathlon',
      location: 'Lille',
      period: 'Août 2018 - Mai 2020',
      description: 'Accélération de l\'adoption de la solution d\'API Management Gravitee.',
      achievements: [
        'Formation et onboarding de plus de 200 développeurs',
        'Centaines d\'interventions de consulting technique (équipes SAP, SaaS externes)',
        'Définition et application des normes d\'utilisation des APIs',
        'Conception complète des supports de formation et animation des sessions'
      ],
      technologies: ['Gravitee', 'API Management', 'REST Standards', 'Pédagogie']
    },
    {
      title: 'Développeur Backend',
      company: 'Golden Eyes - Kiss the bride',
      location: 'Lille',
      period: 'Juil 2015 - Juil 2018',
      description: 'Architecture et développement d\'une plateforme d\'accès standardisée pour résoudre les connexions multiples et la gestion des contrats de données.',
      achievements: [
        'Conception d\'une API REST Symfony 3 centralisée pour CRM et outils tiers',
        'Interopérabilité entre SGBD hétérogènes (Oracle/PostgreSQL/MySQL)',
        'Support technique et débogage des procédures marketing critiques',
        'Maintenance de scripts PL/SQL et refonte de l\'intranet Symfony 2'
      ],
      technologies: ['Symfony', 'PHP', 'Oracle', 'PostgreSQL', 'MySQL', 'PL/SQL', 'REST API']
    }
  ]

  // Formation
  const education = [
    {
      degree: 'Bachelor Communication',
      school: 'ISEFAC Lille',
      period: '2013 - 2014',
      description: 'Formation en communication et pédagogie'
    },
    {
      degree: 'BTS IRIS (Informatique et Réseaux)',
      school: 'Lycée Jean Rostand',
      period: '2011 - 2013',
      description: 'Formation technique en développement et infrastructure'
    }
  ]

  // Compétences techniques détaillées
  const technicalSkills = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'SQL (PL/SQL)', 'Python'],
      level: 95
    },
    {
      category: 'Backend',
      skills: ['NestJS', 'Express', 'Node.js', 'Symfony'],
      level: 95
    },
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'Angular', 'HTML/CSS'],
      level: 85
    },
    {
      category: 'API Management',
      skills: ['Gravitee.io', 'REST Architecture', 'OpenAPI', 'Swagger', 'Stoplight Spectral'],
      level: 95
    },
    {
      category: 'Platform Engineering',
      skills: ['Spotify Backstage', 'Internal Developer Platform', 'Developer Experience'],
      level: 85
    },
    {
      category: 'Data',
      skills: ['PostgreSQL', 'Oracle', 'MongoDB', 'PL/SQL'],
      level: 85
    },
    {
      category: 'DevOps',
      skills: ['Kubernetes', 'Docker', 'CI/CD', 'Git', 'GitHub Actions', 'Nginx'],
      level: 85
    },
    {
      category: 'Quality & Testing',
      skills: ['Jest', 'Vitest', 'Nx (monorepo)', 'Audit Tools'],
      level: 85
    }
  ]

  // Soft Skills
  const softSkills = [
    {
      icon: '🎓',
      title: 'Pédagogie',
      description: 'Formation de 200+ développeurs, conception de supports et animation de sessions'
    },
    {
      icon: '🤝',
      title: 'Esprit d\'équipe',
      description: '7+ années chez Decathlon, intégration durable et collaboration transverse'
    },
    {
      icon: '🎯',
      title: 'Fiabilité',
      description: 'Gestion proactive des missions, respect des engagements et des délais'
    },
    {
      icon: '🔄',
      title: 'Adaptabilité',
      description: 'Expertise dans des environnements hétérogènes (SAP, SaaS, stacks diverses)'
    }
  ]

  // Langues
  const languages = [
    { name: 'Français', level: 'Natif' },
    { name: 'Anglais', level: 'B2 - Indépendant' }
  ]

  if (audience === 'business') {
    return <Navigate to="/" replace />
  }

  return (
    <div className="cv-page">
      {/* Hero CV */}
      <section className="cv-hero visible">
        <div
          className="cv-hero-content"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <h1>Curriculum Vitae</h1>
          <p className="cv-subtitle">Romain Tabary • Développeur Full-stack Senior Freelance & Expert API Management</p>
          <p className="cv-tagline">10+ ans d'expérience | TypeScript Ecosystem | API Governance</p>
          <div className="cv-contact-brief">
            <span>📍 Lille</span>
            <span>✉ tabaryr@gmail.com</span>
            <span>📞 07 60 39 75 31</span>
          </div>
          <div className="cv-company-info">
            <span>🏢 TARS SASU • SIRET: 904 527 868 00023</span>
          </div>
        </div>
      </section>

      {/* Synthèse du profil */}
      <section className="cv-section profile-summary">
        <div className="container">
          <h2 className="section-title">Profil</h2>
          <div className="profile-content">
            <p>
              Expert technique cumulant plus de 10 ans d'expérience, spécialisé dans le <strong>Développement Fullstack</strong> (écosystème TypeScript) et la <strong>Gouvernance d'API</strong>.
            </p>
            <p>
              Mon expertise couvre l'intégralité du cycle de vie logiciel : de la conception d'architectures web robustes (NestJS/React) à l'industrialisation des processus de qualité, en passant par l'amélioration de la Developer Experience.
            </p>
            <p>
              J'ai évolué plus de 7 ans dans un contexte à forte échelle (Decathlon), contribuant à l'outillage critique (IDP, API Management) utilisé par des centaines de développeurs.
            </p>
          </div>
        </div>
      </section>

      {/* Expériences Professionnelles */}
      <section className="cv-section experiences">
        <div className="container">
          <h2 className="section-title">Expériences Professionnelles</h2>
          <div className="cv-timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="cv-card parallax-card"
                style={{
                  transform: `translateY(${(scrollY - 600 - (index * 100)) * 0.03}px)`
                }}
              >
                <div className="cv-card-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company} • {exp.location}</h4>
                  </div>
                  <span className="cv-period">{exp.period}</span>
                </div>
                <p className="cv-description">{exp.description}</p>
                {exp.achievements && (
                  <ul className="cv-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
                <div className="cv-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences Techniques */}
      <section className="cv-section skills-detailed">
        <div className="container">
          <h2 className="section-title">Compétences Techniques</h2>
          <div className="skills-detailed-grid">
            {technicalSkills.map((skillGroup, index) => (
              <div
                key={index}
                className="skill-detailed-card parallax-card"
                style={{
                  transform: `translateY(${(scrollY - 2200 - (index * 50)) * 0.03}px)`
                }}
              >
                <h3>{skillGroup.category}</h3>
                <div className="skill-list">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="cv-section soft-skills">
        <div className="container">
          <h2 className="section-title">Savoir-Être</h2>
          <div className="cv-grid soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="cv-card parallax-card soft-skill-card"
                style={{
                  transform: `translateY(${(scrollY - 3200 - (index * 50)) * 0.03}px)`
                }}
              >
                <div className="cv-card-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p className="cv-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="cv-section education">
        <div className="container">
          <h2 className="section-title">Formation</h2>
          <div className="cv-grid">
            {education.map((edu, index) => (
              <div
                key={index}
                className="cv-card parallax-card"
                style={{
                  transform: `translateY(${(scrollY - 3800 - (index * 50)) * 0.03}px)`
                }}
              >
                <div className="cv-card-icon">🎓</div>
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <span className="cv-period">{edu.period}</span>
                <p className="cv-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Langues */}
      <section className="cv-section languages">
        <div className="container">
          <h2 className="section-title">Langues</h2>
          <div className="cv-grid languages-grid">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="cv-card parallax-card language-card"
                style={{
                  transform: `translateY(${(scrollY - 4200 - (index * 50)) * 0.03}px)`
                }}
              >
                <div className="cv-card-icon">🌍</div>
                <h3>{lang.name}</h3>
                <p className="language-level">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Download */}
      <section className="cv-cta">
        <div className="container">
          <div
            className="cta-content"
            style={{ transform: `translateY(${(scrollY - 4600) * 0.05}px)` }}
          >
            <h2>Intéressé par mon profil ?</h2>
            <p>Téléchargez mon CV complet ou contactez-moi directement</p>
            <div className="cta-buttons">
              <a href="/DOSSIER_DE_COMPETENCES_ROMAIN_TABARY.pdf" className="btn btn-primary" download>
                📄 Télécharger le dossier complet
              </a>
              <a href="mailto:tabaryr@gmail.com" className="btn btn-secondary">
                ✉️ Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CV
