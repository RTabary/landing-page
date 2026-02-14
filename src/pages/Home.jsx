import { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

// Composants Business
import HeroBusiness from '../components/business/HeroBusiness'
import AboutBusiness from '../components/business/AboutBusiness'
import SkillsBusiness from '../components/business/SkillsBusiness'
import ProjectsBusiness from '../components/business/ProjectsBusiness'
import ContactBusiness from '../components/business/ContactBusiness'

function Home({ audience }) {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [audience])

  // Afficher la version business si l'audience est "business"
  const isBusiness = audience === 'business'

  return (
    <>
      {isBusiness ? <HeroBusiness /> : <Hero />}
      {isBusiness ? <AboutBusiness /> : <About />}
      {isBusiness ? <SkillsBusiness /> : <Skills />}
      {isBusiness ? <ProjectsBusiness /> : <Projects />}
      {isBusiness ? <ContactBusiness /> : <Contact />}
    </>
  )
}

export default Home
