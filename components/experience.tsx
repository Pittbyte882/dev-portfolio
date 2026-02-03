"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface Experience {
  id: string
  company: string
  position: string
  description: string
  start_date: string
  end_date?: string
  location?: string
}

export function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    fetchExperiences()
  }, [])

  const fetchExperiences = async () => {
    const { data } = await supabase
      .from('experience')
      .select('*')
      .order('start_date', { ascending: false })

    if (data) setExperiences(data)
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
                  } md:w-1/2`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-auto md:right-[-1.75rem] top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950" 
                       style={index % 2 !== 0 ? { left: '-1.75rem', right: 'auto' } : {}} />

                  {/* Content Card */}
                  <div className="ml-16 md:ml-0 bg-slate-900/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <Briefcase className="h-5 w-5" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : 'Present'}
                      </span>
                      {exp.location && <span>• {exp.location}</span>}
                    </div>
                    <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}