import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Layers, ShoppingBag, MessageSquare, Flame } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

export default function Projects() {
  const projectList = [
    {
      title: "GLITCH Fashion App",
      description: "A premium online clothing storefront and shopping platform. Built as a full-stack MERN application, it lets users purchase stylish, durable apparel with robust JWT session security.",
      image: "Image/glitch cover landscape.png",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      liveLink: "https://glitch-ecommerce.vercel.app/",
      githubLink: "https://github.com/dravid-senthilkumar/glitch-ecommerce",
      featured: true,
      icon: <ShoppingBag className="w-5 h-5 text-[#ff004f]" />
    },
    {
      title: "Romato Food-Order App",
      description: "An elegant food-ordering application that catalogs nearby restaurants and menu items, featuring real-time search, cart management, and seamless responsive checkouts.",
      image: "Image/rom.png",
      tech: ["React.js", "JavaScript", "Bootstrap 5", "HTML5", "CSS3"],
      liveLink: "https://romato-food-delivery.netlify.app/",
      githubLink: "https://github.com/dravid-senthilkumar/romato-food-delivery",
      featured: false,
      icon: <Flame className="w-5 h-5 text-[#e7aa03]" />
    },
    {
      title: "Zitter Social Platform",
      description: "A fast micro-blogging and social networking application where users can share short text updates, follow accounts, post links, and browse curated feed threads.",
      image: "Image/zit-blog.png",
      tech: ["React.js", "JavaScript", "CSS3", "Git", "Framer Motion"],
      liveLink: "https://zitter-social-network.netlify.app/",
      githubLink: "https://github.com/dravid-senthilkumar/zitter-social-network",
      featured: false,
      icon: <MessageSquare className="w-5 h-5 text-blue-400" />
    }
  ]

  return (
    <section id="projects" className="py-24 bg-[#070709] border-b border-gray-900 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#ff004f]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#e7aa03]/5 blur-3xl pointer-events-none" />

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
            My Strongest <span className="text-[#ff004f]">Works</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-[#ff004f] mx-auto mt-4 rounded-full"
          />
          <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">
            Real-world full-stack MERN and client-side applications that showcase responsive layouts, complex API integrations, and premium state management.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={project.title}
              className={`rounded-2xl border bg-[#141418] hover:shadow-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
                project.featured 
                  ? 'border-[#ff004f]/40 hover:border-[#ff004f] shadow-lg shadow-[#ff004f]/5' 
                  : 'border-gray-900 hover:border-gray-800'
              }`}
            >
              {/* Card Banner Image */}
              <div className="relative overflow-hidden aspect-video bg-gray-900 border-b border-gray-900">
                <img 
                  src={project.image} 
                  alt={`${project.title} mockup`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-[#ff004f] text-white flex items-center gap-1 shadow-md">
                    Featured MERN App
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gray-900 border border-gray-800">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ff004f] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed font-outfit">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tech stack badging */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-gray-900 border border-gray-800 text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-900/60">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-[#ff004f] hover:text-[#ff004f]/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Go Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Github Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
