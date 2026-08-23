import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Server, Database } from 'lucide-react'

// SVG logos configured to render with native colors
function SocketIOLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#010101]" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.138c4.342 0 7.862 3.52 7.862 7.862 0 4.342-3.52 7.862-7.862 7.862-4.342 0-7.862-3.52-7.862-7.862 0-4.342 3.52-7.862 7.862-7.862zm0 2.213L7.71 13.918h3.314v3.729L16.29 10.96h-3.314V6.351z"/>
    </svg>
  )
}

function RedisLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#d82c20]" fill="currentColor">
      <path d="M12 0L2.4 4.8v14.4L12 24l9.6-4.8V4.8L12 0zm7.2 16.8l-7.2 3.6-7.2-3.6V7.2l7.2-3.6 7.2 3.6v9.6zM7.2 9.6h9.6v2.4H7.2V9.6zm0 4.8h9.6v2.4H7.2v-2.4z"/>
    </svg>
  )
}

function BullMQLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#FF5200]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      <circle cx="12" cy="9.5" r="2.5" fill="currentColor" className="text-[#FF5200]" />
    </svg>
  )
}

function DockerLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#2496ed]" fill="currentColor">
      <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.737 0h2.119v-2.006h-2.119v2.006zm-2.737 0h2.12v-2.006h-2.12v2.006zm-2.737 0h2.119v-2.006H5.772v2.006zm2.737-2.738h2.119V6.334h-2.119v2.006zm-2.737 0h2.12V6.334h-2.12v2.006zm5.474 0h2.119V6.334h-2.119v2.006zm2.737 0h2.119V6.334h-2.119v2.006zM5.772 8.34h2.119V6.334H5.772v2.006zm14.053 2.738c-.01 1.643-.53 3.195-1.5 4.542-1.393 1.93-3.535 3.136-5.834 3.324-2.827.23-5.59-1.282-6.726-3.864-.476-1.07-.638-2.222-.505-3.385l-.013-.017H19.8c.017.433.025.917.025 1.4zm2.146-2.585l.08.012c-.08-.035-.16-.062-.24-.08a1.36 1.36 0 01.16.068zM2.385 11.078H4.5v-2.006H2.385v2.006z"/>
    </svg>
  )
}

function NginxLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#009639]" fill="currentColor">
      <path d="M12 0L1.7 6v12L12 24l10.3-6V6L12 0zm8.3 16.8L12 21.6 3.7 16.8V7.2L12 2.4l8.3 4.8v9.6zM8.3 7.2v9.6h2.4L13.7 11V16.8h2V7.2h-2.4L10.3 13V7.2h-2z"/>
    </svg>
  )
}

function PM2Logo() {
  return (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#2B82F6]" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
    </svg>
  )
}

function DigitalOceanLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#0080FF]" fill="currentColor">
      <path d="M12.012 0C5.394 0 0 5.394 0 12.012c0 5.485 3.69 10.116 8.755 11.533l.035-2.923c-3.414-1.066-5.918-4.24-5.918-7.986 0-4.636 3.77-8.406 8.407-8.406 4.636 0 8.406 3.77 8.406 8.406 0 3.018-1.6 5.666-4.012 7.15l1.642 2.457c3.486-2.222 5.795-6.071 5.795-10.46C23.11 5.394 17.702 0 12.012 0zm-1.066 14.59v2.107H8.84v-2.108h2.106zm4.212 0v2.107h-2.107v-2.108h2.107zM12 9.278v2.107H9.892V9.278H12z"/>
    </svg>
  )
}

export default function Skills() {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'All Stack', icon: null },
    { id: 'frontend', name: 'Frontend', icon: <Code2 className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'database', name: 'Database / DevOps', icon: <Database className="w-4 h-4" /> }
  ]

  const skillsList = [
    {
      name: "JavaScript",
      logo: "Image/js.logos.png",
      category: "frontend",
      level: "90%",
      detail: "ES6+, Async/Await, Array Methods, DOM Manipulation"
    },
    {
      name: "React.js",
      logo: "Image/rect.updated.png",
      category: "frontend",
      level: "85%",
      detail: "Hooks, Context API, Redux/State, Component Lifecycle"
    },
    {
      name: "Node.js",
      logo: "Image/nodejs.logo.png",
      category: "backend",
      level: "80%",
      detail: "Event Loop, Stream/Buffer, File System, Package Management"
    },
    {
      name: "Express.js",
      logo: "Image/express.logo.png",
      category: "backend",
      level: "85%",
      detail: "Routing, Middlewares, MVC Architecture, Error Handling"
    },
    {
      name: "Socket.io",
      logo: <SocketIOLogo />,
      category: "backend",
      level: "85%",
      detail: "Real-time communication, room clusters, Redis adapters"
    },
    {
      name: "BullMQ",
      logo: <BullMQLogo />,
      category: "backend",
      level: "75%",
      detail: "Redis background job execution, rate-limiting queues"
    },
    {
      name: "MongoDB",
      logo: "Image/mongodb.logo.png",
      category: "database",
      level: "80%",
      detail: "Mongoose ODM, Aggregations, Indexing, CRUD optimization"
    },
    {
      name: "Redis",
      logo: <RedisLogo />,
      category: "database",
      level: "80%",
      detail: "In-memory key-value caching, Pub/Sub message broker"
    },
    {
      name: "Docker",
      logo: <DockerLogo />,
      category: "database",
      level: "80%",
      detail: "VPS Containerization, Docker Compose orchestration"
    },
    {
      name: "Nginx",
      logo: <NginxLogo />,
      category: "database",
      level: "80%",
      detail: "Reverse proxy, load balancing, SSL termination configurations"
    },
    {
      name: "PM2",
      logo: <PM2Logo />,
      category: "database",
      level: "85%",
      detail: "Production process management, clustering, auto-restarts, log monitoring"
    },
    {
      name: "DigitalOcean",
      logo: <DigitalOceanLogo />,
      category: "database",
      level: "80%",
      detail: "VPS hosting, firewall configurations, managed databases, live deployments"
    }
  ]

  const filteredSkills = filter === 'all' 
    ? skillsList 
    : skillsList.filter(skill => skill.category === filter)

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#E6DFD3] relative paper-texture overflow-hidden scroll-mt-20">
      {/* Decorative concentric arches outlines at the right edge to match Figma */}
      <div className="absolute right-0 bottom-0 w-36 h-60 border-2 border-[#b85233]/20 rounded-t-full border-r-0 pointer-events-none z-0">
         <div className="absolute inset-2 border border-[#b85233]/15 rounded-t-full border-r-0" />
         <div className="absolute inset-4 border border-[#b85233]/10 rounded-t-full border-r-0" />
      </div>

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
            Design tools & Tech Stack
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-[#b85233] mx-auto mt-4 rounded-full"
          />
          <p className="text-[#1C1C1E]/60 mt-6 text-sm leading-relaxed font-outfit">
            The design tools and development competencies I rely on to turn logic and imagination into beautiful, scalable web systems.
          </p>
        </div>

        {/* Filter Tab System */}
        <div className="flex flex-wrap justify-center gap-3.5 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#b85233] text-white shadow-md shadow-[#b85233]/10'
                  : 'bg-[#fffdfa] text-[#1C1C1E]/70 border border-[#e6dfd3] hover:border-[#b85233]/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={skill.name}
                className="group relative rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] p-6 flex flex-col justify-between hover:border-[#b85233]/40 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#faf6ee] border border-[#e6dfd3] p-3.5 mx-auto mb-4 group-hover:scale-103 transition-transform duration-300">
                    {typeof skill.logo === 'string' ? (
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      skill.logo
                    )}
                  </div>

                  <h3 className="text-sm font-extrabold text-center text-[#1C1C1E] font-serif-heading group-hover:text-[#b85233] transition-colors">{skill.name}</h3>
                  <p className="text-[#1C1C1E]/50 text-center text-[11px] font-outfit mt-2">
                    {skill.detail}
                  </p>
                </div>

                <div className="w-full mt-6">
                  <div className="h-1 w-full bg-[#faf6ee] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-[#b85233] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
