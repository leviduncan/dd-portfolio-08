import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'
import CursorFollower from '../components/utils/Follower'

function Homepage() {
  return (
    <div id="homepage">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <CursorFollower />
    </div>
  )
}

export default Homepage