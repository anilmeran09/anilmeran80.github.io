import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { education } from '../data/resume'
import { SectionHeader } from './About'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding max-w-6xl mx-auto">
      <SectionHeader label="05. Education" title="Academic Background" />

      <div ref={ref} className="grid md:grid-cols-3 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-colors" />

            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 mb-4">
              {i === 0 ? <GraduationCap size={20} /> : <Award size={20} />}
            </div>

            <p className="text-xs font-mono text-indigo-400 mb-2">{edu.year}</p>
            <h3 className="font-semibold text-white text-sm mb-2 leading-snug">{edu.degree}</h3>
            <p className="text-slate-500 text-xs mb-3 leading-relaxed">{edu.institution}</p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 text-xs font-medium">{edu.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
