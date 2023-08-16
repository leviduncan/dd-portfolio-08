import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'

function Homepage() {
  return (
    <div id="homepage">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Homepage