import { useState } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import PreviousWork from './components/PreviousWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Hero />
      <Projects />
      <Credentials />
      <PreviousWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
