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
      skills: ["JavaScript", "React.js", "Node.js", "Express.js", "Socket.io", "Redis", "BullMQ", "Microservices", "Docker", "Nginx", "DigitalOcean Cloud", "RESTful APIs", "State Management"],
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
      degree: "Bachelor of Engineering - BE, Electronics and Instrumentation Engineering",
      institution: "Hindusthan College of Engineering and Technology",
      period: "Jul 2020 - May 2024",
      skills: ["Control Systems", "Digital Circuits", "Automation", "Analytical Problem Solving"],
      points: [
        "Studied engineering core fundamentals, industrial instrumentation, and automated control logic.",
        "Graduated with a stellar academic rating of 8.47 CGPA.",
        "Applied logical and analytical methodologies to design hardware-software process automations."
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-[#0a0a0c] border-b border-gray-900 relative">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#ff004f]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#e7aa03]/5 blur-3xl pointer-events-none" />

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
            Professional <span className="text-[#ff004f]">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-[#ff004f] mx-auto mt-4 rounded-full"
          />
          <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">
            A chronological timeline of my work experience as a developer and specialized technical training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Work Experience Timeline - 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[#ff004f]/10 text-[#ff004f]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-gray-800 ml-4 pl-8 space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="relative group"
                >
                  {/* Glowing Indicator Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#141418] border-2 border-gray-800 flex items-center justify-center group-hover:border-[#ff004f] transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-[#ff004f] transition-colors duration-300" />
                  </div>

                  <div className="glass-card p-6 md:p-8 space-y-4 hover:border-[#ff004f]/35 hover:shadow-2xl hover:shadow-[#ff004f]/5">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#ff004f] transition-colors duration-200">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold text-gray-300 mt-1 block">
                          {exp.company} <span className="text-[#ff004f]/70 font-mono text-xs px-2 py-0.5 rounded-full bg-[#ff004f]/5 border border-[#ff004f]/10 ml-2">{exp.type}</span>
                        </span>
                      </div>
                      <div className="flex flex-col items-end text-xs text-gray-500 font-mono gap-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span>({exp.duration})</span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      {exp.location}
                    </div>

                    {/* Key Details bullet list */}
                    <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1.5 leading-relaxed font-outfit">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>

                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((s) => (
                        <span key={s} className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-gray-900 border border-gray-800 text-gray-400">
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
              <div className="p-2.5 rounded-xl bg-[#e7aa03]/10 text-[#e7aa03]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education & Training</h3>
            </div>

            <div className="relative border-l-2 border-gray-800 ml-4 pl-8 space-y-12">
              {education.map((edu, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  key={idx}
                  className="relative group"
                >
                  {/* Glowing Indicator Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#141418] border-2 border-gray-800 flex items-center justify-center group-hover:border-[#e7aa03] transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-[#e7aa03] transition-colors duration-300" />
                  </div>

                  <div className="glass-card p-6 md:p-8 space-y-4 hover:border-[#e7aa03]/35 hover:shadow-2xl hover:shadow-[#e7aa03]/5">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-[#e7aa03] transition-colors duration-200">
                          {edu.degree}
                        </h4>
                        <span className="text-sm font-semibold text-gray-300 mt-1 block">
                          {edu.institution}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 font-mono flex items-center gap-1 mt-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>
                    </div>

                    <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1.5 leading-relaxed font-outfit">
                      {edu.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.skills.map((s) => (
                        <span key={s} className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-gray-900 border border-gray-800 text-gray-400">
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
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#e7aa03] hover:text-white transition-all px-3 py-1.5 rounded-lg bg-[#e7aa03]/10 border border-[#e7aa03]/25 hover:bg-[#e7aa03]/20 shadow-md shadow-[#e7aa03]/5 hover:shadow-lg hover:shadow-[#e7aa03]/10"
                        >
                          <Award className="w-3.5 h-3.5" />
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
