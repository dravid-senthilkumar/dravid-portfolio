import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import AwardShowcase from './components/AwardShowcase'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF6EE] text-[#1C1C1E] selection:bg-[#b85233] selection:text-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Structural Blocks */}
      <main>
        {/* Animated Hero Landing */}
        <Hero />

        {/* Detailed About Dravid */}
        <About />

        {/* Technical Competency Matrix */}
        <Skills />

        {/* Work Timeline & Certifications */}
        <Experience />

        {/* Official Recognition & Rising Star Showcase */}
        <AwardShowcase />

        {/* Real-world Ported Applications Showcase */}
        <Projects />

        {/* Interactive Contact Console */}
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  )
}


