import React, { useState, useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowDown, FileText } from 'lucide-react'
import { LinkedinIcon, InstagramIcon } from './BrandIcons'

// Custom-coded particle system that drifts and rotates according to mouse movement
function ParticleGalaxy() {
  const ref = useRef()
  const [positions] = useState(() => {
    const count = 1800
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Create a gorgeous spiral galaxy distribution
      const theta = Math.random() * Math.PI * 2
      const spiralSpread = 0.5
      const arm = (i % 3) * ((Math.PI * 2) / 3) // 3-armed spiral
      const angle = theta * 2.5 + arm
      const r = Math.pow(Math.random(), 2.5) * 5 + 0.5 // concentated near center

      // Add noise to give thickness to the arms
      const x = r * Math.cos(angle) + (Math.random() - 0.5) * spiralSpread
      const y = (Math.random() - 0.5) * spiralSpread * 0.6
      const z = r * Math.sin(angle) + (Math.random() - 0.5) * spiralSpread

      arr[i * 3] = x
      arr[i * 3 + 1] = y
      arr[i * 3 + 2] = z
    }
    return arr
  })

  useFrame((state) => {
    const { clock, mouse } = state
    if (ref.current) {
      // Continuous slow rotation
      ref.current.rotation.y = clock.getElapsedTime() * 0.03
      // Interactive drift with mouse
      ref.current.rotation.x = state.mouse.y * 0.2
      ref.current.rotation.z = state.mouse.x * 0.1
    }
  })

  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          color="#ff004f"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions.map((v, i) => (i % 3 === 1 ? v * 1.2 : v * 0.9)), 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          color="#e7aa03"
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </points>
    </group>
  )
}

export default function Hero() {
  const [roleText, setRoleText] = useState('')
  const roles = ['MERN Full Stack Developer', 'Software Developer', 'JavaScript Specialist']
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timer

    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      }, 50)
    } else {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      }, 100)
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000) // Stay on completed text
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex(prev => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Three.js Background Canvas */}
      <div className="absolute inset-0 z-0 bg-[#070709]">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Suspense fallback={null}>
            <ParticleGalaxy />
          </Suspense>
        </Canvas>
      </div>

      {/* Decorative Radial Gradients for premium styling */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-1 bg-[radial-gradient(ellipse_at_center,rgba(255,0,79,0.08),transparent_50%)] bg-[radial-gradient(ellipse_at_top_right,rgba(231,170,3,0.06),transparent_50%)]" />

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and Details */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#ff004f] bg-[#ff004f]/10 border border-[#ff004f]/20">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-outfit"
          >
            Hi, I'm <br className="sm:hidden" />
            <span className="text-[#ff004f]">Dravid Senthilkumar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-semibold text-gray-300 font-lusitana flex items-center justify-center lg:justify-start gap-2 h-10"
          >
            <span>I build</span>
            <span className="text-[#e7aa03] border-r-2 border-[#e7aa03] pr-1.5 animate-pulse">
              {roleText}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed font-outfit"
          >
            Specialized in crafting clean, high-performance web applications using MongoDB, Express.js, React, and Node.js. Passionate about building seamless user experiences with polished micro-interactions.
          </motion.p>

          {/* Tag Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-lg"
          >
            {['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redis', 'BullMQ', 'Microservices', 'Docker', 'Nginx', 'DigitalOcean', 'REST APIs', 'Git'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs rounded-md bg-[#16161a] border border-gray-800 text-gray-400 font-mono">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="Image/Dravid_S_Resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-[#ff004f] text-white hover:bg-[#ff004f]/90 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 shadow-lg shadow-[#ff004f]/25"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-[#18181c] border border-gray-800 text-white hover:border-[#ff004f]/40 hover:bg-[#1f1f25] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Image / Developer Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-72 sm:w-80 h-72 sm:h-80"
          >
            {/* Pulsing glow background rings */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#ff004f] to-[#e7aa03] opacity-20 blur-2xl animate-pulse-slow" />
            <div className="absolute inset-[-4px] rounded-3xl bg-gradient-to-tr from-[#ff004f] to-[#e7aa03] opacity-40 blur-sm" />

            {/* Profile Frame */}
            <div className="absolute inset-0 rounded-3xl bg-[#141418] overflow-hidden border-2 border-gray-800 flex items-center justify-center">
              <img
                src="Image/developer_cyber_avatar.png"
                alt="Dravid Senthilkumar Developer Illustration"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Contact Icons Panel */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#141418]/90 backdrop-blur-md border border-gray-800 shadow-2xl">
              <a
                href="http://linkedin.com/in/dravid-senthilkumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff004f] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/dravid_senthil?igsh=MW53cG9hdWhsaHZqcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff004f] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="tel:9585759609"
                className="text-gray-400 hover:text-[#ff004f] transition-colors"
                title="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bounce-down arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow text-gray-500 hover:text-[#ff004f] transition-colors cursor-pointer hidden md:block">
        <a href="#about">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}
