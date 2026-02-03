"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan-400 text-lg mb-4">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent glow-text">
                Crystal Pittman
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-300 mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              I build exceptional web applications that combine beautiful design with powerful functionality. 
              11 years of experience turning ideas into production-ready solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 glow-border"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'].map((tech) => (
              <div key={tech} className="text-slate-500 hover:text-cyan-400 transition-colors cursor-default">
                <p className="text-sm font-mono">{tech}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </motion.div>
      </motion.a>
    </section>
  )
}
