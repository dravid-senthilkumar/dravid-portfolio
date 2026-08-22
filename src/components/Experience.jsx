import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "AskEVA",
      type: "Full-time",
      period: "Oct 2025 - Present",
      duration: "8 mos",
      location: "Hosur, Tamil Nadu, India (On-site)",
      skills: ["JavaScript", "React.js", "Node.js", "Express.js", "Socket.io", "Redis", "BullMQ", "Microservices", "Docker", "Nginx", "DigitalOcean Cloud", "RESTful APIs"],
      points: [
        "Architecting modern MERN solutions and migrating legacy systems to a highly scalable Microservices design.",
        "Implementing event-driven, real-time bi-directional features using Socket.io cluster networks and Redis Pub/Sub adapters.",
        "Building high-throughput background processing queues using BullMQ to handle delayed events asynchronously.",
        "Orchestrating microservices within Docker container networks and configuring Nginx reverse proxy load balancers.",
        "Deploying and managing production environments, managed databases, and firewall routes securely on DigitalOcean Cloud."
      ]
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
      degree: "Bachelor of Engineering - BE",
      institution: "Hindusthan College of Engineering and Technology",
      period: "Jul 2020 - May 2024",
      skills: ["Control Systems", "Digital Circuits", "Automation", "Analytical Problem Solving"],
      points: [
        "Studied engineering core fundamentals, industrial instrumentation, and automated control logic.",
        "Graduated with a stellar academic rating of 8.47 CGPA."
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-[#FAF6EE] border-b border-[#E6DFD3] relative paper-texture">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#b85233]/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#b85233]/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-20">
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
            A chronological timeline of my work experience as a developer and specialized technical training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Work Experience Timeline - 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-[#b85233]/5 text-[#b85233] border border-[#b85233]/10">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-[#1C1C1E]">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-[#e6dfd3] ml-4 pl-8 space-y-12">
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
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#fffdfa] border-2 border-[#e6dfd3] flex items-center justify-center group-hover:border-[#b85233] transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#d6cdbc] group-hover:bg-[#b85233] transition-colors duration-300" />
                  </div>

                  <div className="p-6 md:p-8 rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] space-y-4 hover:border-[#b85233]/30 hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-bold text-[#1C1C1E] group-hover:text-[#b85233] transition-colors duration-200 font-serif-heading">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-semibold text-[#1C1C1E]/70 mt-1 block">
                          {exp.company} <span className="text-[#b85233] font-bold text-[10px] px-2 py-0.5 rounded-full bg-[#b85233]/5 border border-[#b85233]/15 ml-2 uppercase tracking-wide">{exp.type}</span>
                        </span>
                      </div>
                      <div className="flex flex-col items-end text-[11px] text-[#1C1C1E]/50 font-mono gap-1">
                        <span className="flex items-center gap-1 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-[#b85233]" />
                          {exp.period}
                        </span>
                        <span>({exp.duration})</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[#1C1C1E]/50 font-semibold font-outfit">
                      <MapPin className="w-4 h-4 text-[#b85233]" />
                      {exp.location}
                    </div>

                    {/* Key Details list */}
                    <ul className="list-disc pl-5 text-[#1C1C1E]/70 text-xs sm:text-sm space-y-2 leading-relaxed font-outfit">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#faf6ee] border border-[#e6dfd3] text-[#1C1C1E]/60">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline - 5 cols */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-[#b85233]/5 text-[#b85233] border border-[#b85233]/10">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-[#1C1C1E]">Education & Training</h3>
            </div>

            <div className="relative border-l-2 border-[#e6dfd3] ml-4 pl-8 space-y-12">
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
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#fffdfa] border-2 border-[#e6dfd3] flex items-center justify-center group-hover:border-[#b85233] transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#d6cdbc] group-hover:bg-[#b85233] transition-colors duration-300" />
                  </div>

                  <div className="p-6 md:p-8 rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] space-y-4 hover:border-[#b85233]/30 hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="text-base font-bold text-[#1C1C1E] group-hover:text-[#b85233] transition-colors duration-200 font-serif-heading">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-semibold text-[#1C1C1E]/70 mt-1 block">
                          {edu.institution}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#1C1C1E]/50 font-semibold font-mono flex items-center gap-1 mt-1">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
