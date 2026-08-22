import React from 'react'
import { ArrowUp } from 'lucide-react'
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
    <footer className="bg-[#FAF6EE] border-t border-[#E6DFD3] py-12 relative overflow-hidden paper-texture">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand branding */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-md font-bold font-serif-heading text-[#1C1C1E] hover:text-[#b85233] transition-colors">
            Dravid <span className="text-[#b85233]">S.</span>
          </a>
          <p className="text-xs text-[#1C1C1E]/50 mt-1 font-outfit font-semibold">
            MERN Full Stack Developer | Software Developer
          </p>
        </div>

        {/* Center Side: Copyright */}
        <p className="text-xs text-[#1C1C1E]/50 text-center font-mono">
          Copyright &copy; {currentYear} - Developed by Dravid Senthilkumar
        </p>

        {/* Right Side: Back to Top and Social Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="http://linkedin.com/in/dravid-senthilkumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#e6dfd3] bg-[#fffdfa] flex items-center justify-center text-[#1C1C1E]/60 hover:text-[#b85233] hover:border-[#b85233]/40 transition-all duration-300"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/dravid_senthil?igsh=MW53cG9hdWhsaHZqcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#e6dfd3] bg-[#fffdfa] flex items-center justify-center text-[#1C1C1E]/60 hover:text-[#b85233] hover:border-[#b85233]/40 transition-all duration-300"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={handleScrollTop}
            className="w-9 h-9 rounded-full bg-[#b85233]/5 border border-[#b85233]/15 flex items-center justify-center text-[#b85233] hover:bg-[#b85233] hover:text-white hover:scale-103 transition-all duration-300 shadow-sm"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
