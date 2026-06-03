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
    "Cloud infrastructure deployments on DigitalOcean Droplets"
  ]

  const cards = [
    {
      icon: <Code className="w-6 h-6 text-[#ff004f]" />,
      title: "Frontend Crafting",
      desc: "Creating high-fidelity, fluid, and responsive user interfaces with React and Tailwind CSS."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#e7aa03]" />,
      title: "Scalable Backends",
      desc: "Architecting reliable servers, RESTful API endpoints, and authentication schemas in Node.js."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
      title: "Clean Databases",
      desc: "Designing clean database schemas and handling complex CRUD architectures in MongoDB."
    }
  ]

  return (
    <section id="about" className="py-24 bg-[#0a0a0c] border-b border-gray-900 relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#ff004f]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#e7aa03]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight font-outfit"
          >
            About <span className="text-[#ff004f]">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-[#ff004f] mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Profile Photo */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-sm"
            >
              {/* Decorative Frame border */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#ff004f]/30 to-[#e7aa03]/30 blur-md pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl bg-[#ff004f]/10 border border-[#ff004f]/20 -rotate-3" />

              <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-[#16161a]">
                <img
                  src="Image/dravid_about1.jpg"
                  alt="Dravid Senthilkumar profile picture"
                  className="w-full h-auto object-cover max-h-[420px] transition-transform duration-500 hover:scale-103"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-5 -right-5 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#141418] border border-gray-800 shadow-2xl">
                <div className="p-2 rounded-lg bg-[#ff004f]/10 text-[#ff004f]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Developer Level</div>
                  <div className="text-sm font-bold text-white">Full Stack MERN</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Text & Capabilities */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-200">
                🚀 MERN Full Stack Developer | Engineering Scalable Distributed Architectures
              </h3>
              <p className="text-gray-400 leading-relaxed font-outfit">
                As a MERN Full Stack Developer, I specialize in crafting real-time, event-driven web applications. Beyond building high-performance frontend interfaces in React.js, I engineer distributed microservices, background job queue processors using Redis & BullMQ, virtualized environments using Docker, reverse-proxied load balancers with Nginx, and deploy live infrastructure securely on DigitalOcean Cloud Droplets.
              </p>
              <p className="text-gray-400 leading-relaxed font-outfit">
                📌 I’m actively seeking opportunities to collaborate, design resilient software systems, and contribute to production-grade applications. Let’s connect and engineer something amazing together.
              </p>
            </motion.div>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#e7aa03] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Core Pillars Cards (Three Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#141418] border border-gray-900 hover:border-[#ff004f]/40 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-5 group-hover:bg-[#ff004f]/10 transition-colors">
                {card.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
