import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import { LinkedinIcon, InstagramIcon } from './BrandIcons'
import confetti from 'canvas-confetti'

export default function Contact() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwWaCoLfb3Ca5MrU4Wv9svERt81lk79cTiYnZMinifA4JGXfd_eViBo3UCjVfEnvqo_/exec'

  const [formData, setFormData] = useState({
    Name: '',
    Mobile: '',
    Email: '',
    Intent: 'Hiring',
    Message: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.Name || !formData.Email || !formData.Message) {
      setStatusMsg("Please fill in all required fields.")
      setSuccess(false)
      return
    }

    setLoading(true)
    setStatusMsg("")
    
    const data = new FormData()
    data.append('Name', formData.Name)
    data.append('Mobile', formData.Mobile)
    data.append('Email', formData.Email)
    data.append('Intent', formData.Intent)
    
    const finalMessage = `[Intent: ${formData.Intent}]\n\n${formData.Message}`
    data.append('Message', finalMessage)

    fetch(scriptURL, { method: 'POST', body: data })
      .then(response => {
        setLoading(false)
        setSuccess(true)
        setStatusMsg("Message sent successfully!")
        
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#b85233', '#1c1c1e', '#ffffff']
        })

        setFormData({
          Name: '',
          Mobile: '',
          Email: '',
          Intent: 'Hiring',
          Message: ''
        })

        setTimeout(() => {
          setStatusMsg("")
          setSuccess(false)
        }, 5000)
      })
      .catch(error => {
        setLoading(false)
        setSuccess(false)
        setStatusMsg("An error occurred. Please try again.")
        console.error('Error!', error.message)
      })
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
              {/* Hand-drawn SVG Speech Bubble to match Figma */}
              <div className="flex justify-center lg:justify-start">
                <svg viewBox="0 0 160 110" className="w-48 h-auto text-[#1C1C1E]" fill="none" stroke="currentColor">
                  {/* Speech bubble path */}
                  <path 
                    d="M10,40 C10,18 35,10 80,10 C125,10 150,18 150,40 C150,62 125,70 80,70 C70,70 58,74 50,82 C48,84 47,85 48,80 C49,76 51,73 50,70 C20,70 10,62 10,40 Z" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  {/* Little highlight lines above */}
                  <line x1="28" y1="4" x2="31" y2="8" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="40" y1="3" x2="40" y2="7" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="52" y1="4" x2="49" y2="8" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* TEXT */}
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

              {/* Informative description matching figma container styling */}
              <div className="p-5 rounded-2xl bg-[#b85233]/5 border border-[#b85233]/15 text-[#1C1C1E]/70 text-xs sm:text-sm font-semibold">
                Have a question or want to work together? Get in touch—I'd love to hear from you.
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
                  <div className="w-11 h-11 rounded-full border border-[#e6dfd3] bg-[#fffdfa] flex items-center justify-center text-[#b85233]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#1C1C1E]/50 font-bold uppercase tracking-wide">Phone Number</span>
                    <a href="tel:9585759609" className="text-sm font-bold text-[#1C1C1E] hover:text-[#b85233] transition-colors">
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

          {/* Right Column: Google Sheet Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] shadow-[0_4px_25px_rgba(0,0,0,0.015)]">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#faf6ee]/50 border border-[#e6dfd3] text-[#1C1C1E] placeholder-[#1C1C1E]/30 focus:outline-none focus:border-[#b85233] focus:ring-1 focus:ring-[#b85233] transition-colors duration-200 text-sm font-outfit"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="Mobile" className="text-[10px] font-bold uppercase tracking-wider text-[#1C1C1E]/50">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="Mobile"
                    id="Mobile"
                    value={formData.Mobile}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-[#faf6ee]/50 border border-[#e6dfd3] text-[#1C1C1E] placeholder-[#1C1C1E]/30 focus:outline-none focus:border-[#b85233] focus:ring-1 focus:ring-[#b85233] transition-colors duration-200 text-sm font-outfit"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="Email" className="text-[10px] font-bold uppercase tracking-wider text-[#1C1C1E]/50">
                    Email Address <span className="text-[#b85233]">*</span>
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                    placeholder="johndoe@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#faf6ee]/50 border border-[#e6dfd3] text-[#1C1C1E] placeholder-[#1C1C1E]/30 focus:outline-none focus:border-[#b85233] focus:ring-1 focus:ring-[#b85233] transition-colors duration-200 text-sm font-outfit"
                  />
                </div>

                {/* Intent Select Badges */}
                <div className="space-y-2.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#1C1C1E]/50">
                    Purpose of Contact / Intent <span className="text-[#b85233]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 'Hiring', label: '💼 Hiring' },
                      { id: 'Collaboration', label: '🤝 Collaborate' },
                      { id: 'Project', label: '🚀 Freelance' },
                      { id: 'General', label: '❓ General' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, Intent: item.id }))}
                        className={`py-2.5 px-2 rounded-xl text-[11px] font-bold border transition-all duration-300 ${
                          formData.Intent === item.id
                            ? 'bg-[#b85233] text-white border-[#b85233] shadow-md shadow-[#b85233]/15'
                            : 'bg-[#faf6ee]/50 text-[#1C1C1E]/60 border-[#e6dfd3] hover:text-[#1C1C1E]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
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
                    placeholder="Let's build a MERN stack application..."
                    className="w-full px-4 py-3 rounded-xl bg-[#faf6ee]/50 border border-[#e6dfd3] text-[#1C1C1E] placeholder-[#1C1C1E]/30 focus:outline-none focus:border-[#b85233] focus:ring-1 focus:ring-[#b85233] transition-colors duration-200 text-sm font-outfit resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-[#b85233] text-white hover:bg-[#a03e23] transition-all duration-300 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status messages */}
                {statusMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-xs font-mono p-3 rounded-xl border ${
                      success 
                        ? 'text-green-600 bg-green-50 border-green-200' 
                        : 'text-red-600 bg-red-50 border-red-200'
                    }`}
                  >
                    {statusMsg}
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
