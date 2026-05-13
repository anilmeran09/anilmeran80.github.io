import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/resume'
import SectionHeader from './SectionHeader'

const CATS = [
  { name: 'Languages & Core',   accent: '#915EFF', emoji: '⚡' },
  { name: 'Frameworks & APIs',  accent: '#00D4FF', emoji: '🔌' },
  { name: 'Databases',          accent: '#6EE7B7', emoji: '🗄️' },
  { name: 'AI / ML / GenAI',    accent: '#F9A8D4', emoji: '🤖' },
  { name: 'Cloud & DevOps',     accent: '#FCD34D', emoji: '☁️' },
  { name: 'Background & Queues',accent: '#FF6B6B', emoji: '⚙️' },
  { name: 'Frontend',           accent: '#67E8F9', emoji: '🎨' },
  { name: 'Other Tools',        accent: '#C4B5FD', emoji: '🛠️' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills">
      <div className="section-wrap">
        <SectionHeader number="04" subtitle="What I Use" title="Skills" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATS.map((cat, i) => {
            const items = skills[cat.name] || []
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                whileHover={{ y: -7, scale: 1.03 }}
                className="glass-card shine relative overflow-hidden p-5 flex flex-col gap-4"
                style={{ borderColor: `${cat.accent}22` }}
              >
                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(to right, ${cat.accent}, transparent)` }} />

                {/* Glow */}
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-15 pointer-events-none"
                  style={{ background: cat.accent }} />

                <div className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">{cat.emoji}</span>
                  <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: cat.accent }}>
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.12, y: -2 }}
                      transition={{ duration: 0.15 }}
                      className="tag text-[11px]"
                      style={{
                        background: `${cat.accent}12`,
                        border: `1px solid ${cat.accent}28`,
                        color: cat.accent,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
