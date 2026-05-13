import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Calendar } from 'lucide-react'
import { experiences } from '../data/resume'
import SectionHeader from './SectionHeader'

const THEMES = [
  { accent: '#915EFF', glow: 'rgba(145,94,255,0.25)', dot: ['#915EFF', '#6d28d9'] },
  { accent: '#00D4FF', glow: 'rgba(0,212,255,0.25)', dot: ['#00D4FF', '#0284c7'] },
  { accent: '#FF6B6B', glow: 'rgba(255,107,107,0.25)', dot: ['#FF6B6B', '#dc2626'] },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience">
      <div className="section-wrap">
        <SectionHeader number="02" subtitle="Work History" title="Experience" />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-7 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #915EFF88, #00D4FF44, transparent)' }} />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <ExpCard key={exp.company} exp={exp} idx={i} inView={inView} theme={THEMES[i % THEMES.length]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpCard({ exp, idx, inView, theme }) {
  const [open, setOpen] = useState(idx === 0)
  const projects = exp.project ? [exp.project] : (exp.projects || [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: idx * 0.15 }}
      className="relative pl-14 md:pl-20"
    >
      {/* Dot */}
      <div
        className="absolute left-3 md:left-5 top-5 w-5 h-5 rounded-full z-10 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${theme.dot[0]}, ${theme.dot[1]})`,
          boxShadow: `0 0 16px ${theme.dot[0]}cc`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white/40" />
      </div>

      <motion.div
        whileHover={{ scale: 1.005 }}
        className="glass-card shine overflow-hidden"
        style={{ borderColor: `${theme.accent}20` }}
      >
        {/* Header */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-white/[0.015] transition-colors"
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="text-lg font-extrabold text-white">{exp.company}</h3>
              {idx === 0 && (
                <span className="text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wider uppercase"
                  style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.35)', color: '#4ade80' }}>
                  Current
                </span>
              )}
            </div>
            <p className="font-semibold text-sm mb-3" style={{ color: theme.accent }}>{exp.role}</p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                <Calendar size={11} /> {exp.period}
              </span>
              <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                <MapPin size={11} /> {exp.location}
              </span>
            </div>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-slate-500 flex-shrink-0 mt-1">
            <ChevronDown size={18} />
          </motion.div>
        </button>

        {/* Body */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t pt-5 space-y-6" style={{ borderColor: `${theme.accent}18` }}>
                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 text-xs" style={{ color: theme.accent }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Projects */}
                {projects.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                      {projects.length === 1 ? 'Key Project' : 'Projects'}
                    </p>
                    <div className="grid gap-3">
                      {projects.map((p) => (
                        <div key={p.name} className="rounded-xl p-4 border"
                          style={{ background: `${theme.accent}0a`, borderColor: `${theme.accent}18` }}>
                          <h4 className="font-bold text-sm mb-2" style={{ color: theme.accent }}>{p.name}</h4>
                          <p className="text-slate-400 text-xs leading-relaxed mb-3">{p.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {p.stack.split(', ').map((tech) => (
                              <span key={tech} className="tag text-[10px]"
                                style={{ background: `${theme.accent}12`, border: `1px solid ${theme.accent}25`, color: theme.accent }}>
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
      </motion.div>
    </motion.div>
  )
}
