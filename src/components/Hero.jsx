import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowDown, FileText, Trophy } from 'lucide-react'
import { LinkedinIcon, InstagramIcon } from './BrandIcons'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 paper-texture bg-[#FAF6EE]">
      {/* Decorative Warm Backdrops */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] pointer-events-none z-0 bg-[radial-gradient(circle_at_top_right,rgba(184,82,51,0.06),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] pointer-events-none z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,82,51,0.04),transparent_50%)]" />

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and Details */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#b85233] bg-[#b85233]/5 border border-[#b85233]/15">
              Welcome to my space
            </span>
            <a
              href="#achievement"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#047857] bg-[#10b981]/10 border border-[#10b981]/30 hover:bg-[#10b981] hover:text-white transition-all shadow-sm group"
            >
              <Trophy className="w-3.5 h-3.5 text-[#10b981] group-hover:text-white" />
              <span>★ 2025 Rising Star @ AskEVA</span>
            </a>
          </motion.div>

          {/* Figma UI same-line big typography: "portfolio" + cursive script overlay */}
          <div className="relative inline-block select-none my-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-[64px] sm:text-[90px] md:text-[120px] font-extrabold leading-none text-[#1C1C1E] tracking-tight font-serif-heading opacity-90"
            >
              portfolio
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, rotate: -6, x: -10 }}
              animate={{ opacity: 1, rotate: -6, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full text-center pointer-events-none"
            >
              <span className="text-[36px] sm:text-[56px] md:text-[76px] font-signature text-[#b85233] drop-shadow-[0_2px_4px_rgba(250,246,238,0.8)] whitespace-nowrap block">
                Dravid Senthilkumar
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]/80 font-serif-heading">
              From logic to seamless digital experiences.
            </h2>
            <p className="text-[#1C1C1E]/60 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed font-outfit">
              Specialized in crafting clean, high-performance web applications using MongoDB, Express.js, React, and Node.js. Passionate about building scalable backends and polished user interfaces.
            </p>
          </motion.div>

          {/* Tech Tag Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-lg"
          >
            {['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redis', 'BullMQ', 'Docker', 'Nginx', 'PM2', 'DigitalOcean'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#fffdfa] border border-[#e6dfd3] text-[#1C1C1E]/70 shadow-[0_2px_5px_rgba(0,0,0,0.01)]">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="Image/Dravid_S_Resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs bg-[#b85233] text-white hover:bg-[#a03e23] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-md shadow-[#b85233]/10"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs bg-[#fffdfa] border border-[#e6dfd3] text-[#1C1C1E] hover:border-[#b85233] hover:bg-[#faf6ee] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-[#b85233]" />
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Image styled in the elegant Arch shape */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-72 sm:w-80 h-96 flex justify-center items-end"
          >
            {/* Orange background decorative arch element */}
            <div className="absolute -left-4 top-10 w-24 h-48 bg-[#b85233] rounded-t-full opacity-90" />
            
            {/* Concentric circle vector styling behind */}
            <div className="absolute -left-12 bottom-6 w-32 h-32 border border-[#b85233]/20 rounded-full flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 border border-[#b85233]/15 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border border-[#b85233]/10 rounded-full" />
              </div>
            </div>

            {/* Custom concentric arches outlines */}
            <div className="absolute right-0 top-1/4 w-28 h-40 border border-[#b85233]/25 rounded-t-full border-b-0 pointer-events-none z-0">
              <div className="absolute inset-2 border border-[#b85233]/15 rounded-t-full border-b-0" />
            </div>

            {/* Elegant Arch Frame containing profile photo */}
            <div className="absolute inset-0 rounded-t-full overflow-hidden border-4 border-[#e6dfd3] bg-[#fffdfa] shadow-[0_8px_30px_rgba(0,0,0,0.03)] z-10">
              <img
                src="Image/developer_cyber_avatar.png"
                alt="Dravid Senthilkumar Avatar"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-103"
              />
            </div>

            {/* Floating Contact Icons Panel */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3.5 px-6 py-3.5 rounded-full bg-[#fffdfa] border border-[#e6dfd3] shadow-lg z-20">
              <a
                href="http://linkedin.com/in/dravid-senthilkumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1C1E]/60 hover:text-[#b85233] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/dravid_senthil?igsh=MW53cG9hdWhsaHZqcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1C1E]/60 hover:text-[#b85233] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="tel:9585759609"
                className="text-[#1C1C1E]/60 hover:text-[#b85233] transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll-down bounce indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce text-[#1C1C1E]/40 hover:text-[#b85233] transition-colors cursor-pointer hidden md:block">
        <a href="#about">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
