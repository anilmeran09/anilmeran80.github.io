import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '../data/resume'
import SectionHeader from './SectionHeader'
import { ExternalLink, Folder } from 'lucide-react'

function allProjects() {
  const out = []
  for (const exp of experiences) {
    if (exp.project) out.push({ ...exp.project, company: exp.company })
    if (exp.projects) exp.projects.forEach(p => out.push({ ...p, company: exp.company }))
  }
  return out
}

const PALETTES = [
  { accent: '#915EFF', glow: 'rgba(145,94,255,0.35)', bar: 'from-[#915EFF] to-[#6d28d9]' },
  { accent: '#00D4FF', glow: 'rgba(0,212,255,0.35)',  bar: 'from-[#00D4FF] to-[#0284c7]' },
  { accent: '#FF6B6B', glow: 'rgba(255,107,107,0.35)', bar: 'from-[#FF6B6B] to-[#dc2626]' },
  { accent: '#FFD93D', glow: 'rgba(255,217,61,0.35)',  bar: 'from-[#FFD93D] to-[#ca8a04]' },
  { accent: '#6EE7B7', glow: 'rgba(110,231,183,0.35)', bar: 'from-[#6EE7B7] to-[#059669]' },
  { accent: '#F9A8D4', glow: 'rgba(249,168,212,0.35)', bar: 'from-[#F9A8D4] to-[#be185d]' },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const projects = allProjects()

  return (
    <section id="projects">
      <div className="section-wrap">
        <SectionHeader number="03" subtitle="What I've Built" title="Projects" />

        <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((proj, i) => {
            const pal = PALETTES[i % PALETTES.length]
            const techs = proj.stack.split(', ')
            return (
              <motion.div
                key={`${proj.company}-${proj.name}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -10, scale: 1.025 }}
                className="glass-card shine relative overflow-hidden flex flex-col group"
                style={{ borderColor: `${pal.accent}22` }}
              >
                {/* Top gradient bar */}
                <div className={`h-0.5 bg-gradient-to-r ${pal.bar}`} />

                {/* Glow orb (top right) */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: pal.accent }}
                />

                <div className="p-6 flex flex-col flex-1 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ background: `${pal.accent}18`, color: pal.accent, boxShadow: `0 0 16px ${pal.accent}40` }}
                    >
                      <Folder size={18} />
                    </div>
                    <ExternalLink size={15} className="text-slate-600 group-hover:text-slate-300 transition-colors mt-1" />
                  </div>

                  <p className="text-[10px] font-mono font-bold tracking-widest mb-1.5" style={{ color: pal.accent }}>
                    {proj.company}
                  </p>
                  <h3 className="font-extrabold text-white text-sm leading-snug mb-3">{proj.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{proj.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {techs.slice(0, 5).map((t) => (
                      <span key={t} className="tag text-[10px]"
                        style={{ background: `${pal.accent}12`, border: `1px solid ${pal.accent}28`, color: pal.accent }}>
                        {t}
                      </span>
                    ))}
                    {techs.length > 5 && (
                      <span className="text-[10px] text-slate-600 self-center font-semibold">+{techs.length - 5}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
