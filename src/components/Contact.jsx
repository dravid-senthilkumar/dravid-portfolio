import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader2, MessageSquareCode, PhoneCall } from 'lucide-react'
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
    
    // Construct standard FormData object
    const data = new FormData()
    data.append('Name', formData.Name)
    data.append('Mobile', formData.Mobile)
    data.append('Email', formData.Email)
    data.append('Intent', formData.Intent)
    
    // Failsafe: append intent to standard Message column so it always shows up in the Google Sheet
    const finalMessage = `[Intent: ${formData.Intent}]\n\n${formData.Message}`
    data.append('Message', finalMessage)

    fetch(scriptURL, { method: 'POST', body: data })
      .then(response => {
        setLoading(false)
        setSuccess(true)
        setStatusMsg("Message sent successfully!")
        
        // Trigger celebratory confetti burst!
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#ff004f', '#e7aa03', '#ffffff']
        })

        // Reset fields
        setFormData({
          Name: '',
          Mobile: '',
          Email: '',
          Intent: 'Hiring',
          Message: ''
        })

        // Clear status msg after 5s
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
    <section id="contact" className="py-24 bg-[#0a0a0c] relative">
      {/* Decorative Radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(255,0,79,0.02),transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight font-outfit"
          >
            Get In <span className="text-[#ff004f]">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-[#ff004f] mx-auto mt-4 rounded-full"
          />
          <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">
            Interested in collaborating, hiring, or discussing full-stack projects? Drop a message here and let's coordinate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Details & Social Handles */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <MessageSquareCode className="w-6 h-6 text-[#ff004f]" />
                Let's Discuss Detail
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-outfit">
                Whether you have a specific opening, a technical query, or simply want to connect, feel free to reach out. I typically respond within 24 hours.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-[#ff004f]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-mono">Email Address</span>
                    <a href="mailto:dravidsenthil9@gmail.com" className="text-sm font-semibold text-gray-200 hover:text-[#ff004f] transition-colors">
                      dravidsenthil9@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-[#ff004f]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-mono">Phone Number</span>
                    <a href="tel:9585759609" className="text-sm font-semibold text-gray-200 hover:text-[#ff004f] transition-colors">
                      +91 9585759609
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-[#ff004f]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-mono">Current Location</span>
                    <span className="text-sm font-semibold text-gray-200">
                      Hosur, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Social Handles */}
            <div className="pt-8 lg:pt-0">
              <span className="block text-xs text-gray-500 font-mono uppercase tracking-wider mb-4">Connect with me on</span>
              <div className="flex items-center gap-3">
                <a
                  href="http://linkedin.com/in/dravid-senthilkumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5]/15 hover:border-[#0077b5] transition-all duration-300"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/dravid_senthil?igsh=MW53cG9hdWhsaHZqcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#e1306c]/15 hover:border-[#e1306c] transition-all duration-300"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/+919585759609?text=Hi Dravid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#25d366]/15 hover:border-[#25d366] transition-all duration-300"
                >
                  <PhoneCall className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Sheet Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 hover:border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="Name" className="text-xs font-mono font-semibold uppercase text-gray-400">
                    Full Name <span className="text-[#ff004f]">*</span>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f12] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff004f] focus:ring-1 focus:ring-[#ff004f] transition-colors duration-200 text-sm font-outfit"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="Mobile" className="text-xs font-mono font-semibold uppercase text-gray-400">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="Mobile"
                    id="Mobile"
                    value={formData.Mobile}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f12] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff004f] focus:ring-1 focus:ring-[#ff004f] transition-colors duration-200 text-sm font-outfit"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="Email" className="text-xs font-mono font-semibold uppercase text-gray-400">
                    Email Address <span className="text-[#ff004f]">*</span>
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                    placeholder="johndoe@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f12] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff004f] focus:ring-1 focus:ring-[#ff004f] transition-colors duration-200 text-sm font-outfit"
                  />
                </div>

                {/* Intent Select Badges */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-semibold uppercase text-gray-400">
                    Purpose of Contact / Intent <span className="text-[#ff004f]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 'Hiring', label: '💼 Hiring', color: '#ff004f' },
                      { id: 'Collaboration', label: '🤝 Collaborate', color: '#e7aa03' },
                      { id: 'Project', label: '🚀 Freelance', color: '#38bdf8' },
                      { id: 'General', label: '❓ General', color: '#a78bfa' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, Intent: item.id }))}
                        className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                          formData.Intent === item.id
                            ? 'bg-gray-900 text-white shadow-md'
                            : 'bg-[#0f0f12] text-gray-500 border-gray-800 hover:text-gray-300'
                        }`}
                        style={{
                          borderColor: formData.Intent === item.id ? item.color : '',
                          boxShadow: formData.Intent === item.id ? `${item.color}15 0px 4px 12px` : ''
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="Message" className="text-xs font-mono font-semibold uppercase text-gray-400">
                    Subject & Message <span className="text-[#ff004f]">*</span>
                  </label>
                  <textarea
                    name="Message"
                    id="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Let's build a MERN stack application..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f12] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff004f] focus:ring-1 focus:ring-[#ff004f] transition-colors duration-200 text-sm font-outfit resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#ff004f] text-white hover:bg-[#ff004f]/90 transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none text-sm"
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
                    className={`text-center text-xs font-mono p-3 rounded-lg border ${
                      success 
                        ? 'text-green-400 bg-green-500/5 border-green-500/10' 
                        : 'text-red-400 bg-red-500/5 border-red-500/10'
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
