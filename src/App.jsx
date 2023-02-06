import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Projects from './components/work/Projects'
import Services from './components/service/Services'
import Skills from './components/skill/Skills'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Intro id="intro"/>
        <About id="about"/>
        <Skills id="skill"/>
        <Projects id="project"/>
        <Services id="service"/>
        <Contact id="contact"/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
