import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, Award, Trophy, Sparkles, ArrowRight } from 'lucide-react'

// Helper function to dynamically compute duration between month-year dates (or Present)
function calculateDuration(periodStr) {
  if (!periodStr) return ''
  const parts = periodStr.split(' - ').map(s => s.trim())
  if (parts.length !== 2) return ''

  const monthsMap = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  }

  const parseDate = (str) => {
    if (str.toLowerCase() === 'present') return new Date()
    const [m, y] = str.split(' ')
    const monthIndex = monthsMap[m.toLowerCase().substring(0, 3)] ?? 0
    const yearNum = parseInt(y, 10)
    return new Date(yearNum, monthIndex, 1)
  }

  const start = parseDate(parts[0])
  const end = parseDate(parts[1])

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth() + 1

  if (months < 0) {
    years -= 1
    months += 12
  }

  const yearString = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : ''
  const monthString = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : ''

  if (yearString && monthString) return `${yearString} ${monthString}`
  return yearString || monthString || '1 mo'
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience')

  const experiences = [
    {
      role: "Software Developer",
      company: "AskEVA",
      type: "Full-time",
      period: "Oct 2025 - Present",
      duration: "8 mos",
      location: "Hosur, Tamil Nadu, India (On-site)",
      skills: ["JavaScript", "React.js", "Node.js", "Express.js", "Socket.io", "Redis", "BullMQ", "Microservices", "Docker", "Nginx", "PM2", "DigitalOcean Cloud", "RESTful APIs"],
      points: [
        "Architecting modern MERN solutions and migrating legacy systems to a highly scalable Microservices design.",
        "Implementing event-driven, real-time bi-directional features using Socket.io cluster networks and Redis Pub/Sub adapters.",
        "Building high-throughput background processing queues using BullMQ to handle delayed events asynchronously.",
        "Orchestrating microservices within Docker container networks and configuring Nginx reverse proxy load balancers.",
        "Deploying and managing production environments, managed databases, and firewall routes securely on DigitalOcean Cloud."
      ],
      award: {
        title: "Rising Star of the Year 2025",
        team: "Development Team",
        quote: "Your efforts make a difference! Thank you for being part of the journey",
        image: "Image/askeva_achievement.jpeg"
      }
    },
    {
      role: "MERN Stack Developer Trainee",
      company: "Clarisco Solutions Pvt Ltd",
      type: "Trainee",
      period: "May 2025 - Aug 2025",
      duration: "4 mos",
      location: "Madurai, Tamil Nadu, India (On-site)",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Git", "CSS Grid"],
      points: [
        "Received rigorous hands-on training on the full MERN application life-cycle.",
        "Created complex full stack practice applications integrating MongoDB schema validation.",
        "Practiced professional Git workflows, pull requests, and peer code reviews.",
        "Learned database design patterns, Express routers, and asynchronous route handling."
      ]
    }
  ]

  const education = [
    {
      degree: "MERN Stack Development Cert.",
      institution: "FITA Academy",
      period: "Sep 2024 - Feb 2025",
      skills: ["Node.js", "Express.js", "MongoDB", "React.js", "REST APIs", "Modern Javascript"],
      certLink: "https://drive.google.com/file/d/1hxi_Ts_tGA5uwM9KHGD9w9EoCPBRx5wN/view",
      points: [
        "Comprehensive training in modern JavaScript paradigms (ES6+), asynchronous handling.",
        "Built full-stack applications including Glitch Fashion, an online clothing brand platform.",
        "Deep dove into relational and non-relational database architectures."
      ]
    },
    {
      degree: "Bachelor of Engineering - BE (EIE)",
      institution: "Hindusthan College of Engineering and Technology",
      period: "Jul 2020 - May 2024",
      skills: ["Digital Circuits", "Control Systems", "C", "C++", "Analytical Problem Solving"],
      points: [
        "Studied Digital Circuits, Control Systems, and Software Development (C, C++).",
        "Graduated with a stellar academic rating of 8.47 CGPA."
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#E6DFD3] relative paper-texture overflow-hidden scroll-mt-20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#b85233]/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#b85233]/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold font-serif-heading text-[#b85233]"
          >
            Professional Journey
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-[#b85233] mx-auto mt-4 rounded-full"
          />
          <p className="text-[#1C1C1E]/60 mt-6 text-sm leading-relaxed font-outfit">
            Toggle between my professional work experience and academic certifications.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center gap-4 mb-16 relative z-20">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 border transition-all duration-300 ${activeTab === 'experience'
              ? 'bg-[#b85233] text-white border-[#b85233] shadow-md shadow-[#b85233]/15'
              : 'bg-[#fffdfa] text-[#1C1C1E]/60 border-[#e6dfd3] hover:border-[#b85233]/40'
              }`}
          >
            <Briefcase className="w-4 h-4" />
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 border transition-all duration-300 ${activeTab === 'education'
              ? 'bg-[#b85233] text-white border-[#b85233] shadow-md shadow-[#b85233]/15'
              : 'bg-[#fffdfa] text-[#1C1C1E]/60 border-[#e6dfd3] hover:border-[#b85233]/40'
              }`}
          >
            <GraduationCap className="w-4 h-4" />
            Education & Certs
          </button>
        </div>

        {/* Dynamic Timeline Content Container */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 sm:space-y-12 relative border-l-2 border-[#e6dfd3] ml-2.5 sm:ml-4 pl-5 sm:pl-8"
              >
                {experiences.map((exp, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    key={idx}
                    className="relative group"
                  >
                    {/* Indicator Dot */}
                    <div className="absolute -left-[30px] sm:-left-[41px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#fffdfa] border-2 border-[#e6dfd3] flex items-center justify-center group-hover:border-[#b85233] transition-colors duration-300">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#d6cdbc] group-hover:bg-[#b85233] transition-colors duration-300" />
                    </div>

                    <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] space-y-3 sm:space-y-4 hover:border-[#b85233]/30 hover:shadow-lg transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-[#1C1C1E] group-hover:text-[#b85233] transition-colors duration-200 font-serif-heading">
                            {exp.role}
                          </h4>
                          <span className="text-xs font-semibold text-[#1C1C1E]/70 mt-1 block">
                            {exp.company} <span className="text-[#b85233] font-bold text-[10px] px-2 py-0.5 rounded-full bg-[#b85233]/5 border border-[#b85233]/15 ml-1.5 uppercase tracking-wide">{exp.type}</span>
                          </span>
                        </div>
                        <div className="flex flex-col items-start sm:items-end text-[11px] text-[#1C1C1E] font-bold font-mono gap-0.5 sm:gap-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#b85233]" />
                            {exp.period}
                          </span>
                          <span className="text-[#1C1C1E]">({calculateDuration(exp.period)})</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-[#1C1C1E]/50 font-semibold font-outfit">
                        <MapPin className="w-4 h-4 text-[#b85233]" />
                        {exp.location}
                      </div>

                      {/* Key Details list */}
                      <ul className="list-disc pl-4 sm:pl-5 text-[#1C1C1E]/70 text-xs sm:text-sm space-y-1.5 sm:space-y-2 leading-relaxed font-outfit">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                        {exp.skills.map((s) => (
                          <span key={s} className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-semibold bg-[#faf6ee] border border-[#e6dfd3] text-[#1C1C1E]/60">
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Award Highlight Banner */}
                      {exp.award && (
                        <div className="mt-3 sm:mt-4 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#faf6ee] border border-[#e6dfd3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 group/award hover:border-[#10b981]/50 transition-colors duration-300">
                          <div className="flex items-center gap-2.5 sm:gap-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#10b981]/10 text-[#047857] flex items-center justify-center shrink-0">
                              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 sm:gap-2">
                                <span className="text-xs font-bold text-[#1C1C1E] font-serif-heading">
                                  Awarded {exp.award.title}
                                </span>
                              </div>
                              <p className="text-[10px] sm:text-[11px] text-[#1C1C1E]/60 font-outfit italic mt-0.5">
                                "{exp.award.quote}"
                              </p>
                            </div>
                          </div>

                          <a
                            href="#achievement"
                            className="shrink-0 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#fffdfa] border border-[#e6dfd3] text-[#047857] hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-all flex items-center gap-1 shadow-sm self-end sm:self-auto"
                          >
                            <span>View Story</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 sm:space-y-12 relative border-l-2 border-[#e6dfd3] ml-2.5 sm:ml-4 pl-5 sm:pl-8"
              >
                {education.map((edu, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    key={idx}
                    className="relative group"
                  >
                    {/* Indicator Dot */}
                    <div className="absolute -left-[30px] sm:-left-[41px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#fffdfa] border-2 border-[#e6dfd3] flex items-center justify-center group-hover:border-[#b85233] transition-colors duration-300">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#d6cdbc] group-hover:bg-[#b85233] transition-colors duration-300" />
                    </div>

                    <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] space-y-3 sm:space-y-4 hover:border-[#b85233]/30 hover:shadow-lg transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h4 className="text-xl font-bold text-[#1C1C1E] group-hover:text-[#b85233] transition-colors duration-200 font-serif-heading">
                            {edu.degree}
                          </h4>
                          <span className="text-xs font-semibold text-[#1C1C1E]/70 mt-1 block">
                            {edu.institution}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#1C1C1E] font-bold font-mono flex items-center gap-1 mt-1">
                          <Calendar className="w-3.5 h-3.5 text-[#b85233]" />
                          {edu.period}
                        </div>
                      </div>

                      <ul className="list-disc pl-5 text-[#1C1C1E]/70 text-xs sm:text-sm space-y-2 leading-relaxed font-outfit">
                        {edu.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {edu.skills.map((s) => (
                          <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#faf6ee] border border-[#e6dfd3] text-[#1C1C1E]/60">
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Verification Link */}
                      {edu.certLink && (
                        <div className="pt-2 flex">
                          <a
                            href={edu.certLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#b85233]/5 border border-[#b85233]/25 text-[#b85233] hover:bg-[#b85233] hover:text-white hover:shadow-md transition-all duration-300"
                          >
                            <Award className="w-4 h-4" />
                            Verify Certificate
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
