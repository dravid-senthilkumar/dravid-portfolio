import React from 'react'
import { PhoneCall, ArrowUp } from 'lucide-react'
import { LinkedinIcon, InstagramIcon } from './BrandIcons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-[#070709] border-t border-gray-900 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand branding */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-md font-bold text-white hover:text-[#ff004f] transition-colors">
            Dravid <span className="text-[#ff004f]">Senthilkumar</span>
          </a>
          <p className="text-xs text-gray-500 mt-2 font-mono">
            MERN Full Stack Developer | Software Developer
          </p>
        </div>

        {/* Center Side: Copyright */}
        <p className="text-xs text-gray-500 text-center font-mono">
          Copyright &copy; {currentYear} - Developed by Dravid Senthilkumar
        </p>

        {/* Right Side: Back to Top and Social Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="http://linkedin.com/in/dravid-senthilkumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ff004f] transition-all duration-300"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/dravid_senthil?igsh=MW53cG9hdWhsaHZqcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ff004f] transition-all duration-300"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={handleScrollTop}
            className="w-9 h-9 rounded-xl bg-[#ff004f]/10 border border-[#ff004f]/20 flex items-center justify-center text-[#ff004f] hover:bg-[#ff004f] hover:text-white hover:scale-105 transition-all duration-300 shadow-md"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
