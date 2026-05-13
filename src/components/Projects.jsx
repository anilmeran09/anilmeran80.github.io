import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '../data/resume'
import { SectionHeader } from './About'
import { ExternalLink } from 'lucide-react'

function collectAllProjects() {
  const all = []
  for (const exp of experiences) {
    if (exp.project) {
      all.push({ ...exp.project, company: exp.company, role: exp.role })
    }
    if (exp.projects) {
      for (const p of exp.projects) {
        all.push({ ...p, company: exp.company, role: exp.role })
      }
    }
  }
  return all
}

const projectColors = [
  'from-indigo-600/20 to-purple-600/10 border-indigo-500/20',
  'from-cyan-600/20 to-blue-600/10 border-cyan-500/20',
  'from-emerald-600/20 to-teal-600/10 border-emerald-500/20',
  'from-purple-600/20 to-pink-600/10 border-purple-500/20',
  'from-orange-600/20 to-red-600/10 border-orange-500/20',
  'from-sky-600/20 to-indigo-600/10 border-sky-500/20',
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const allProjects = collectAllProjects()

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <SectionHeader label="03. Projects" title="What I've Built" />

      <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {allProjects.map((project, i) => (
          <motion.div
            key={`${project.company}-${project.name}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`glass rounded-2xl p-6 border bg-gradient-to-br ${projectColors[i % projectColors.length]} flex flex-col group hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300`}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <p className="text-xs font-mono text-indigo-400/70 mb-1">{project.company}</p>
                <h3 className="font-bold text-white text-sm leading-snug">{project.name}</h3>
              </div>
              <ExternalLink size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0 mt-0.5" />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.split(', ').slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/[0.05] border border-white/10 text-slate-400"
                >
                  {tech}
                </span>
              ))}
              {project.stack.split(', ').length > 6 && (
                <span className="text-xs text-slate-600 self-center pl-1">
                  +{project.stack.split(', ').length - 6} more
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
