import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'
import { education } from '../data/resume'
import SectionHeader from './SectionHeader'

const THEMES = [
  { accent: '#915EFF', icon: <GraduationCap size={22} />, bar: 'from-[#915EFF] to-[#6d28d9]' },
  { accent: '#00D4FF', icon: <BookOpen size={22} />,      bar: 'from-[#00D4FF] to-[#0284c7]' },
  { accent: '#6EE7B7', icon: <Award size={22} />,         bar: 'from-[#6EE7B7] to-[#059669]' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education">
      <div className="section-wrap">
        <SectionHeader number="05" subtitle="Academic Background" title="Education" />

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => {
            const th = THEMES[i % THEMES.length]
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: -9, scale: 1.03 }}
                className="glass-card shine relative overflow-hidden"
                style={{ borderColor: `${th.accent}22` }}
              >
                {/* Top bar */}
                <div className={`h-0.5 bg-gradient-to-r ${th.bar}`} />

                {/* Background glow orb */}
                <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full blur-3xl opacity-15 pointer-events-none"
                  style={{ background: th.accent }} />

                <div className="p-6 relative z-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${th.accent}18`, color: th.accent, boxShadow: `0 0 20px ${th.accent}35` }}
                  >
                    {th.icon}
                  </div>

                  <p className="text-xs font-mono font-bold mb-2 tracking-widest" style={{ color: th.accent }}>{edu.year}</p>
                  <h3 className="font-extrabold text-white text-sm leading-snug mb-2">{edu.degree}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{edu.institution}</p>

                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{ background: `${th.accent}15`, border: `1px solid ${th.accent}30` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: th.accent }} />
                    <span className="text-xs font-bold" style={{ color: th.accent }}>{edu.score}</span>
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
