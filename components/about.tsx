"use client"

import { motion } from 'framer-motion'
import { Code2, Zap, Users, Award } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: '11+ Years',
      description: 'Professional Experience'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: '850+ Projects',
      description: 'Successfully Delivered'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '100% Satisfaction',
      description: 'Client Satisfaction Rate'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Enterprise',
      description: 'Grade Solutions'
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-1">
               <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src="\image0 (2).jpeg" 
                    alt="Crystal Pittman" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with over 11 years of experience building web applications 
                that make a difference. I specialize in creating scalable, user-friendly solutions using modern 
                technologies.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My recent work includes developing a nationwide marketplace platform serving 1,000+ locations, 
                implementing complex search algorithms, and integrating secure payment systems. I thrive on 
                solving challenging problems and turning complex requirements into elegant solutions.
              </p>
              <p className="text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, and staying up-to-date with the latest industry trends.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-500/40 transition-all"
                  >
                    <div className="text-cyan-400 mb-2">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}