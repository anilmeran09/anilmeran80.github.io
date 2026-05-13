import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, MapPin, Calendar, ExternalLink } from 'lucide-react'
import { experiences } from '../data/resume'
import { SectionHeader } from './About'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <SectionHeader label="02. Experience" title="Work History" />

      <div ref={ref} className="relative">
        {/* vertical line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/30 to-transparent" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <ExpCard key={exp.company} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpCard({ exp, index, inView }) {
  const [expanded, setExpanded] = useState(index === 0)

  const projects = exp.project ? [exp.project] : (exp.projects || [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-12 md:pl-16"
    >
      {/* dot */}
      <div className="absolute left-2 md:left-4 top-2 timeline-dot" />

      <div className="glass rounded-2xl overflow-hidden">
        {/* header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors"
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="text-lg font-bold text-white">{exp.company}</h3>
              {index === 0 && (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-medium">
                  Current
                </span>
              )}
            </div>
            <p className="text-indigo-400 font-medium text-sm mb-2">{exp.role}</p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                <Calendar size={12} />
                {exp.period}
              </span>
              <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                <MapPin size={12} />
                {exp.location}
              </span>
            </div>
          </div>
          <div className="text-slate-500 mt-1 flex-shrink-0">
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-white/5 pt-4">
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="text-indigo-400 mt-1.5 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {projects.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                      {projects.length === 1 ? 'Key Project' : 'Projects'}
                    </p>
                    <div className="grid gap-3">
                      {projects.map((p) => (
                        <div key={p.name} className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h4 className="font-semibold text-white text-sm">{p.name}</h4>
                            <ExternalLink size={14} className="text-slate-600 flex-shrink-0 mt-0.5" />
                          </div>
                          <p className="text-slate-400 text-xs leading-relaxed mb-3">{p.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {p.stack.split(', ').map((tech) => (
                              <span key={tech} className="skill-tag text-xs px-2 py-0.5">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
