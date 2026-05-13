import ThreeScene from './components/ThreeScene'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#050816', minHeight: '100vh' }}>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Fixed 3D canvas — always behind content */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <ThreeScene />
      </div>

      {/* Scrollable content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />

          {/* Sections with subtle backdrop so stars peek through */}
          <div style={{ background: 'rgba(5,8,22,0.88)', backdropFilter: 'blur(2px)' }}>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
