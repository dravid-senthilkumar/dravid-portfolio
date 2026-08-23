import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { LinkedinIcon, InstagramIcon } from './BrandIcons'
import confetti from 'canvas-confetti'

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    Message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.Name || !formData.Message) return

    // Construct formatted message string for WhatsApp
    const formattedMessage = `Hi Dravid,\n\nMy name is ${formData.Name}.\n\n${formData.Message}`
    const whatsappUrl = `https://wa.me/919585759609?text=${encodeURIComponent(formattedMessage)}`
    
    // Celebrate with festive confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#25D366', '#b85233', '#1c1c1e']
    })

    // Open WhatsApp in a new tab directly
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="py-24 bg-[#FAF6EE] relative paper-texture">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(184,82,51,0.02),transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-5xl mx-auto items-center">
          {/* Left Column: Hand-drawn bubble and info items */}
          <div className="lg:col-span-5 space-y-10 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Hand-drawn SVG Speech Bubble */}
              <div className="flex justify-center lg:justify-start">
                <svg viewBox="0 0 160 110" className="w-48 h-auto text-[#1C1C1E]" fill="none" stroke="currentColor">
                  <path 
                    d="M10,40 C10,18 35,10 80,10 C125,10 150,18 150,40 C150,62 125,70 80,70 C70,70 58,74 50,82 C48,84 47,85 48,80 C49,76 51,73 50,70 C20,70 10,62 10,40 Z" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <line x1="28" y1="4" x2="31" y2="8" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="40" y1="3" x2="40" y2="7" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="52" y1="4" x2="49" y2="8" strokeWidth="2.5" strokeLinecap="round" />
                  
                  <text 
                    x="80" 
                    y="38" 
                    textAnchor="middle" 
                    fill="currentColor" 
                    fontSize="16" 
                    fontWeight="900" 
                    fontFamily="Outfit, sans-serif" 
                    letterSpacing="1"
                  >
                    LET'S
                  </text>
                  <text 
                    x="80" 
                    y="55" 
                    textAnchor="middle" 
                    fill="currentColor" 
                    fontSize="16" 
                    fontWeight="900" 
                    fontFamily="Outfit, sans-serif" 
                    letterSpacing="1"
                  >
                    TALK
                  </text>
                </svg>
              </div>

              {/* Informative description */}
              <div className="p-5 rounded-2xl bg-[#b85233]/5 border border-[#b85233]/15 text-[#1C1C1E]/70 text-xs sm:text-sm font-semibold">
                Have a question or want to work together? Fill out the quick message enquiry below to chat directly with me on WhatsApp!
              </div>

              {/* Direct Info list */}
              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#e6dfd3] bg-[#fffdfa] flex items-center justify-center text-[#b85233]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#1C1C1E]/50 font-bold uppercase tracking-wide">Email Address</span>
                    <a href="mailto:dravidsenthil9@gmail.com" className="text-sm font-bold text-[#1C1C1E] hover:text-[#b85233] transition-colors">
                      dravidsenthil9@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#e6dfd3] bg-[#fffdfa] flex items-center justify-center text-[#25D366]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#1C1C1E]/50 font-bold uppercase tracking-wide">Direct WhatsApp & Call</span>
                    <a href="https://wa.me/919585759609" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#1C1C1E] hover:text-[#25D366] transition-colors">
                      +91 9585759609
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#e6dfd3] bg-[#fffdfa] flex items-center justify-center text-[#b85233]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#1C1C1E]/50 font-bold uppercase tracking-wide">Current Location</span>
                    <span className="text-sm font-bold text-[#1C1C1E]">
                      Hosur, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Flat Social Icons */}
            <div className="pt-6 lg:pt-0">
              <span className="block text-[10px] text-[#1C1C1E]/50 font-bold uppercase tracking-wider mb-4">Connect with me</span>
              <div className="flex items-center gap-3">
                <a
                  href="http://linkedin.com/in/dravid-senthilkumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#e6dfd3] bg-[#fffdfa] flex items-center justify-center text-[#1C1C1E]/60 hover:text-[#b85233] hover:border-[#b85233]/40 transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/dravid_senthil?igsh=MW53cG9hdWhsaHZqcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#e6dfd3] bg-[#fffdfa] flex items-center justify-center text-[#1C1C1E]/60 hover:text-[#b85233] hover:border-[#b85233]/40 transition-all duration-300"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] shadow-[0_4px_25px_rgba(0,0,0,0.015)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e6dfd3]/60">
                <div className="p-2.5 rounded-2xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1E] font-serif-heading">Direct WhatsApp Enquiry</h3>
                  <p className="text-xs text-[#1C1C1E]/50 font-outfit">Send a pre-filled enquiry straight to +91 9585759609</p>
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="space-y-1.5">
                  <label htmlFor="Name" className="text-[10px] font-bold uppercase tracking-wider text-[#1C1C1E]/50">
                    Full Name <span className="text-[#b85233]">*</span>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#faf6ee]/50 border border-[#e6dfd3] text-[#1C1C1E] placeholder-[#1C1C1E]/30 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-colors duration-200 text-sm font-outfit"
                  />
                </div>



                <div className="space-y-1.5">
                  <label htmlFor="Message" className="text-[10px] font-bold uppercase tracking-wider text-[#1C1C1E]/50">
                    Subject & Message <span className="text-[#b85233]">*</span>
                  </label>
                  <textarea
                    name="Message"
                    id="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Hi Dravid, I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#faf6ee]/50 border border-[#e6dfd3] text-[#1C1C1E] placeholder-[#1C1C1E]/30 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-colors duration-200 text-sm font-outfit resize-none"
                  />
                </div>

                {/* Direct WhatsApp Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all duration-300 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2.5 hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Send WhatsApp Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
