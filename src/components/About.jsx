import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, Zap, Code, ShieldCheck } from 'lucide-react'

export default function About() {
  const highlights = [
    "Modern React.js for high-fidelity interactive user interfaces",
    "Scalable backends with Node.js, Express.js & Microservices",
    "Real-time pipelines with Socket.io, Redis & BullMQ job queues",
    "DevOps orchestration using Docker & Nginx reverse proxies",
    "Database administration with MongoDB (NoSQL) & caching tiers",
    "Cloud infrastructure deployments on DigitalOcean Cloud Droplets"
  ]

  const cards = [
    {
      icon: <Code className="w-6 h-6 text-[#b85233]" />,
      title: "Frontend Crafting",
      desc: "Creating high-fidelity, fluid, and responsive user interfaces with React and Tailwind CSS."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#b85233]" />,
      title: "Scalable Backends",
      desc: "Architecting reliable servers, RESTful API endpoints, and authentication schemas in Node.js."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#b85233]" />,
      title: "Clean Databases",
      desc: "Designing clean database schemas and handling complex CRUD architectures in MongoDB."
    }
  ]

  return (
    <section id="about" className="py-24 bg-[#FAF6EE] border-b border-[#E6DFD3] relative paper-texture">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#b85233]/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#b85233]/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Profile Photo in Arch Frame with Concentric circles backdrops */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-72 sm:w-80 h-[400px] flex justify-center items-end"
            >
              {/* Concentric lines background vector overlay */}
              <div className="absolute -left-8 top-16 w-36 h-36 border border-[#b85233]/25 rounded-full flex items-center justify-center pointer-events-none">
                <div className="w-28 h-28 border border-[#b85233]/15 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 border border-[#b85233]/10 rounded-full" />
                </div>
              </div>

              {/* Offset decorative terracotta shape */}
              <div className="absolute left-6 top-6 w-20 h-40 bg-[#b85233] rounded-t-full opacity-80" />

              {/* Arch Top Frame */}
              <div className="absolute inset-0 rounded-t-full overflow-hidden border-4 border-[#e6dfd3] bg-[#fffdfa] shadow-[0_8px_25px_rgba(0,0,0,0.02)] z-10">
                <img
                  src="Image/dravid_about1.jpg"
                  alt="Dravid Senthilkumar profile picture"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#fffdfa] border border-[#e6dfd3] shadow-lg z-20">
                <div className="p-2 rounded-xl bg-[#b85233]/10 text-[#b85233]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#1C1C1E]/50 font-bold uppercase tracking-wider">Developer Level</div>
                  <div className="text-xs font-extrabold text-[#1C1C1E]">Full Stack MERN</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Text & Capabilities */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#b85233] font-serif-heading">
                About me
              </h2>
              
              <div className="space-y-4 text-[#1C1C1E]/70 leading-relaxed font-outfit text-sm sm:text-base">
                <p>
                  Hello! I'm <strong className="text-[#b85233] font-bold">Dravid Senthilkumar</strong>, a creative and detail-oriented <strong className="text-[#1C1C1E] font-bold">MERN Full Stack Developer</strong> from Hosur, Tamil Nadu, India. I specialize in building robust and highly scalable backend APIs and high-fidelity, fluid frontend interfaces.
                </p>
                <p>
                  I enjoy engineering modern, clean web systems that balance visual elegance and robust architectural performance. I work extensively across Docker containerization, reverse proxy routing, task processing pipelines, and Cloud infrastructure deployments to make applications production-ready.
                </p>
              </div>
            </motion.div>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
            >
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b85233] shrink-0 mt-1" />
                  <span className="text-[#1C1C1E]/80 text-xs sm:text-sm font-semibold">{highlight}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Core Pillars Cards (Three Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#fffdfa] border border-[#e6dfd3] hover:border-[#b85233]/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#faf6ee] border border-[#e6dfd3] flex items-center justify-center mb-6 group-hover:bg-[#b85233]/5 transition-colors">
                {card.icon}
              </div>
              <h4 className="text-lg font-extrabold text-[#1C1C1E] mb-3 font-serif-heading">{card.title}</h4>
              <p className="text-[#1C1C1E]/60 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
