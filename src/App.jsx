import './styles/App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

import useScrollEffects from './hooks/useScrollEffects'

function App() {
  useScrollEffects()

  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App