import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add glassmorphic background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About me', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'My projects', href: '#projects' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#FAF6EE]/80 backdrop-blur-md border-b border-[#E6DFD3] shadow-[0_2px_15px_rgba(0,0,0,0.02)]' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="text-lg md:text-xl font-bold font-serif-heading tracking-wide text-[#1C1C1E] hover:text-[#b85233] transition-colors flex items-center gap-1.5"
        >
          <span>Dravid</span>
          <span className="text-[#b85233]">S.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-[#1C1C1E]/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative py-1 text-[#1C1C1E]/80 hover:text-[#b85233] transition-colors duration-200 group font-outfit"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b85233] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-[#b85233] text-[#b85233] hover:bg-[#b85233] hover:text-white transition-all duration-300 hover:shadow-[0_4px_12px_rgba(184,82,51,0.15)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#fffdfa] border border-[#e6dfd3] text-[#1C1C1E]/80 hover:text-[#b85233] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#FAF6EE]/95 backdrop-blur-lg border-b border-[#E6DFD3] overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 text-sm font-bold tracking-wider uppercase text-[#1C1C1E]/80">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-[#1C1C1E]/80 hover:text-[#b85233] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full font-bold tracking-wider uppercase bg-[#b85233] text-white hover:bg-[#b85233]/90 transition-colors inline-block text-xs"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
