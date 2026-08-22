import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ShoppingBag, MessageSquare, Flame } from 'lucide-react'
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
      icon: <ShoppingBag className="w-5 h-5 text-[#b85233]" />
    },
    {
      title: "Romato Food-Order App",
      description: "An elegant food-ordering application that catalogs nearby restaurants and menu items, featuring real-time search, cart management, and seamless responsive checkouts.",
      image: "Image/rom.png",
      tech: ["React.js", "JavaScript", "Bootstrap 5", "HTML5", "CSS3"],
      liveLink: "https://romato-food-delivery.netlify.app/",
      githubLink: "https://github.com/dravid-senthilkumar/romato-food-delivery",
      featured: false,
      icon: <Flame className="w-5 h-5 text-[#b85233]" />
    },
    {
      title: "Zitter Social Platform",
      description: "A fast micro-blogging and social networking application where users can share short text updates, follow accounts, post links, and browse curated feed threads.",
      image: "Image/zit-blog.png",
      tech: ["React.js", "JavaScript", "CSS3", "Git", "Framer Motion"],
      liveLink: "https://zitter-social-network.netlify.app/",
      githubLink: "https://github.com/dravid-senthilkumar/zitter-social-network",
      featured: false,
      icon: <MessageSquare className="w-5 h-5 text-[#b85233]" />
    }
  ]

  return (
    <section id="projects" className="py-24 bg-[#FAF6EE] border-b border-[#E6DFD3] relative paper-texture">
      {/* Decorative SVG curves to replicate Figma concentric lines */}
      <div className="absolute top-12 right-0 w-48 h-48 border border-[#b85233]/15 rounded-full pointer-events-none z-0 flex items-center justify-center">
        <div className="w-36 h-36 border border-[#b85233]/10 rounded-full" />
      </div>

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
            My Strongest Works
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-[#b85233] mx-auto mt-4 rounded-full"
          />
          <p className="text-[#1C1C1E]/60 mt-6 text-sm leading-relaxed font-outfit">
            Real-world full-stack MERN and client-side applications that showcase responsive layouts, complex API integrations, and premium state management.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={project.title}
              className={`rounded-3xl border bg-[#fffdfa] overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-lg ${
                project.featured 
                  ? 'border-[#b85233]/50 hover:border-[#b85233]' 
                  : 'border-[#e6dfd3] hover:border-[#b85233]/40'
              }`}
            >
              {/* Card Banner Image */}
              <div className="relative overflow-hidden aspect-video bg-[#faf6ee] border-b border-[#e6dfd3]">
                <img 
                  src={project.image} 
                  alt={`${project.title} mockup`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#b85233] text-white shadow-sm">
                    Featured MERN App
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#faf6ee] border border-[#e6dfd3]">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#1C1C1E] group-hover:text-[#b85233] transition-colors font-serif-heading">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-[#1C1C1E]/70 text-xs sm:text-sm leading-relaxed font-outfit">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tech stack badging */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-[#faf6ee] border border-[#e6dfd3] text-[#1C1C1E]/60">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center gap-4 pt-3.5 border-t border-[#e6dfd3]/60">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b85233] hover:text-[#b85233]/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Go Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1C1C1E]/60 hover:text-[#b85233] transition-colors"
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
