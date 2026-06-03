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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#070709]/80 backdrop-blur-md border-b border-gray-900 shadow-lg' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="text-lg md:text-xl font-bold font-outfit tracking-wide text-white hover:text-[#ff004f] transition-colors flex items-center gap-1.5"
        >
          <span>Dravid</span>
          <span className="text-[#ff004f]">Senthilkumar</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-semibold tracking-wider uppercase text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative py-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff004f] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="#contact"
            className="px-5 py-2 rounded-xl text-sm font-semibold border border-[#ff004f] text-[#ff004f] hover:bg-[#ff004f] hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,79,0.3)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-colors"
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
            className="lg:hidden bg-[#0b0b0d]/95 backdrop-blur-lg border-b border-gray-900 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 text-base font-semibold tracking-wider uppercase text-gray-300">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-300 hover:text-[#ff004f] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-xl font-semibold bg-[#ff004f] text-white hover:bg-[#ff004f]/90 transition-colors inline-block"
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
