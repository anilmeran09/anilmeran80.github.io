import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/resume'
import { SectionHeader } from './About'

const categoryColors = {
  'Languages & Core': 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/25 text-indigo-300',
  'Frameworks & APIs': 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/25 text-cyan-300',
  'Databases': 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/25 text-emerald-300',
  'AI / ML / GenAI': 'from-purple-500/20 to-purple-600/10 border-purple-500/25 text-purple-300',
  'Cloud & DevOps': 'from-orange-500/20 to-orange-600/10 border-orange-500/25 text-orange-300',
  'Background & Queues': 'from-rose-500/20 to-rose-600/10 border-rose-500/25 text-rose-300',
  'Frontend': 'from-sky-500/20 to-sky-600/10 border-sky-500/25 text-sky-300',
  'Other Tools': 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/25 text-yellow-300',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <SectionHeader label="04. Skills" title="Tech Stack" />

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Object.entries(skills).map(([category, items], catIdx) => {
          const colorClass = categoryColors[category] || 'from-slate-500/20 to-slate-600/10 border-slate-500/25 text-slate-300'
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.07 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border bg-gradient-to-r ${colorClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
