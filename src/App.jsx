import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
        <Services/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
