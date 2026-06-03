import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-gray-100 selection:bg-[#ff004f] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Structural Blocks */}
      <main>
        {/* Animated Three.js Hero Landing */}
        <Hero />

        {/* Detailed About Dravid */}
        <About />

        {/* Technical Competency Matrix */}
        <Skills />

        {/* Work Timeline & Certifications */}
        <Experience />

        {/* Real-world Ported Applications Showcase */}
        <Projects />

        {/* Interactive Google Sheet Contact Console */}
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  )
}
