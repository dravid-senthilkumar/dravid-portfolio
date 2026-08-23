import React, { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Trophy, Sparkles, Award, CheckCircle2, Rocket, Cpu, Maximize2, X, PartyPopper } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function AwardShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeStoryTab, setActiveStoryTab] = useState('overview')
  const [cheersCount, setCheersCount] = useState(42)
  const [hasCheered, setHasCheered] = useState(false)

  // 3D Tilt Motion Values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Multi-stage confetti celebration
  const triggerConfetti = (e) => {
    if (e) e.stopPropagation()
    if (!hasCheered) {
      setCheersCount(prev => prev + 1)
      setHasCheered(true)
    }

    const count = 150
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#059669', '#10b981', '#b85233', '#f59e0b', '#ffffff']
    }

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      })
    }

    fire(0.25, { spread: 26, startVelocity: 45 })
    fire(0.2, { spread: 60 })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
  }

  const storyTabs = [
    {
      id: 'overview',
      label: 'The Story',
      icon: <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      title: 'A Memorable Team Milestone',
      description: 'How this award came to be during my journey at AskEVA.',
      points: [
        'Recognized with the "Rising Star of the Year 2025" within the AskEVA Development Team.',
        'Inscribed with: "Your efforts make a difference! Thank you for being part of the journey."',
        'A super encouraging milestone that showed me the value of diving deep, asking questions, and taking real ownership.'
      ]
    },
    {
      id: 'work',
      label: 'What I Built',
      icon: <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      title: 'Key Things I Worked On',
      description: 'Hands-on engineering challenges I tackled every day.',
      points: [
        'Built background task queues with BullMQ and Redis to process delayed jobs asynchronously.',
        'Implemented bi-directional real-time communication using Socket.io clusters and Redis pub/sub.',
        'Helped migrate backend services toward containerized Docker setups with Nginx reverse proxies.',
        'Wrote clean REST APIs, database schemas, and kept production environments healthy.'
      ]
    },
    {
      id: 'learnings',
      label: 'My Takeaways',
      icon: <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      title: 'How I Approach My Work',
      description: 'My personal mindset when building products and collaborating with teams.',
      points: [
        'Ownership mindset: Treating every feature as my own responsibility from concept to production.',
        'Always curious: Eager to learn new tools, debug tricky bottlenecks, and improve system architecture.',
        'Team-first attitude: Being reliable, communicating clearly, and helping teammates whenever needed.'
      ]
    }
  ]

  const activeTabContent = storyTabs.find(t => t.id === activeStoryTab) || storyTabs[0]

  return (
    <section id="achievement" className="py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#E6DFD3] relative paper-texture overflow-hidden scroll-mt-20">
      {/* Subtle warm backdrop glow */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#10b981]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#b85233]/4 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-5xl">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#047857] bg-[#10b981]/10 border border-[#10b981]/20 mb-3 sm:mb-4"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10b981]" />
            Personal Milestone
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-extrabold font-serif-heading text-[#1C1C1E]"
          >
            Rising Star Award <span className="text-[#047857] font-signature font-normal text-3xl sm:text-5xl block sm:inline sm:ml-2 mt-1 sm:mt-0">2025</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-[#10b981] mx-auto mt-3 sm:mt-4 rounded-full"
          />

          <p className="text-[#1C1C1E]/70 mt-3 sm:mt-5 text-xs sm:text-sm leading-relaxed font-outfit px-2">
            A proud recognition from my time working with the development team at AskEVA.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
          
          {/* Left Column: Interactive 3D Trophy Card */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div
              className="relative w-full max-w-[280px] xs:max-w-[320px] cursor-pointer group"
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchEnd={handleMouseLeave}
              onClick={() => setIsModalOpen(true)}
            >
              {/* 3D Motion Container */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="relative rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 bg-[#fffdfa] border border-[#e6dfd3] shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-hidden group-hover:border-[#10b981]/50 group-hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)] transition-all duration-300"
              >
                {/* Dynamic holographic reflection overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay hidden sm:block"
                  style={{
                    background: useTransform(
                      [glareX, glareY],
                      ([gx, gy]) => `radial-gradient(circle 240px at ${gx} ${gy}, rgba(255,255,255,0.9), transparent 70%)`
                    )
                  }}
                />

                {/* Trophy Photo */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] bg-[#faf6ee] border border-[#e6dfd3] flex items-center justify-center">
                  <img
                    src="Image/askeva_achievement.jpeg"
                    alt="AskEVA Rising Star 2025 Trophy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Dark bottom gradient for legible quote */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/85 via-[#1C1C1E]/20 to-transparent pointer-events-none" />

                  {/* Inscription quote overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white z-10">
                    <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#34d399] flex items-center gap-1 mb-0.5 sm:mb-1">
                      <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> AskEVA Development Team
                    </div>
                    <p className="text-[11px] sm:text-xs font-serif-heading italic leading-tight sm:leading-snug text-white/95">
                      "Your efforts make a difference! Thank you for being part of the journey"
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-[#e6dfd3] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1C1C1E] flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10b981]" /> Dravid S.
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#047857] font-semibold">
                    Software Developer
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Quick interactive buttons */}
            <div className="mt-4 sm:mt-5 flex items-center gap-2.5 sm:gap-3 w-full max-w-[280px] xs:max-w-[320px]">
              <button
                onClick={triggerConfetti}
                className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm transition-all cursor-pointer hover:scale-102"
              >
                <PartyPopper className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Cheers 🎉 {cheersCount > 0 && `(${cheersCount})`}
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-full bg-[#fffdfa] border border-[#e6dfd3] hover:border-[#10b981] text-[#1C1C1E] font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-[#faf6ee] transition-all cursor-pointer"
                title="View full trophy photo"
              >
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10b981]" />
                Photo
              </button>
            </div>
          </div>

          {/* Right Column: Personal Story & Highlights */}
          <div className="md:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Friendly quote card */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] shadow-[0_4px_20px_rgba(0,0,0,0.015)] relative">
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-[#10b981]/10 text-[#047857] shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#1C1C1E] font-serif-heading">
                    Gratitude & Growth at AskEVA
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1C1C1E]/75 leading-relaxed font-outfit">
                    Joining the AskEVA engineering team has been an incredible experience. From day one, I jumped into building real-time systems, scaling our background queue workers, and collaborating closely with our developers to ship reliable features.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {storyTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStoryTab(tab.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all duration-200 cursor-pointer ${
                    activeStoryTab === tab.id
                      ? 'bg-[#1C1C1E] text-white border-[#1C1C1E] shadow-sm'
                      : 'bg-[#fffdfa] text-[#1C1C1E]/70 border-[#e6dfd3] hover:border-[#10b981]/40'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab details card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTabContent.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] shadow-sm space-y-3 sm:space-y-4"
              >
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#1C1C1E] font-serif-heading">
                    {activeTabContent.title}
                  </h4>
                  <p className="text-xs text-[#1C1C1E]/60 font-outfit mt-0.5">
                    {activeTabContent.description}
                  </p>
                </div>

                <ul className="space-y-2 sm:space-y-2.5 pt-1">
                  {activeTabContent.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#1C1C1E]/80 font-outfit leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-lg w-full bg-[#fffdfa] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e6dfd3] shadow-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-[#FAF6EE] hover:bg-[#e6dfd3] text-[#1C1C1E] flex items-center justify-center transition-colors cursor-pointer border border-[#e6dfd3]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Photo */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-[#1C1C1E] max-h-[50vh] sm:max-h-[60vh] flex items-center justify-center">
                <img
                  src="Image/askeva_achievement.jpeg"
                  alt="AskEVA Rising Star Award 2025"
                  className="w-full h-auto object-contain max-h-[48vh] sm:max-h-[55vh]"
                />
              </div>

              {/* Caption */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs pt-1">
                <div>
                  <div className="font-bold text-[#1C1C1E] font-serif-heading text-xs sm:text-sm">
                    AskEVA Rising Star of the Year 2025
                  </div>
                  <div className="text-[#1C1C1E]/60 text-[11px] sm:text-xs font-outfit">
                    Awarded to Dravid S. &bull; Development Team
                  </div>
                </div>

                <button
                  onClick={triggerConfetti}
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                >
                  <PartyPopper className="w-3.5 h-3.5" />
                  Cheers 🎉
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}


