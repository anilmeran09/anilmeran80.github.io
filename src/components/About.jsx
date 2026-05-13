import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '../data/resume'
import { Code2, Cpu, Database, Layers } from 'lucide-react'
import SectionHeader from './SectionHeader'

const TRAITS = [
  { icon: <Layers size={22} />, title: 'Backend Architecture', desc: 'FastAPI async systems, multi-tenant SaaS, WebSocket real-time engines with LLM streaming', color: '#915EFF' },
  { icon: <Cpu size={22} />, title: 'AI / LLM Integration', desc: 'LangChain, Azure OpenAI GPT-4.1, Google Gemini, RAG pipelines, agentic AI systems', color: '#00D4FF' },
  { icon: <Database size={22} />, title: 'Data Engineering', desc: 'AWS ETL pipelines, PySpark, PostgreSQL, MongoDB, Redis queue systems', color: '#FF6B6B' },
  { icon: <Code2 size={22} />, title: 'Full Stack Delivery', desc: 'React UIs, GitHub Actions CI/CD, Docker, multi-environment deployments', color: '#FFD93D' },
]

const STATS = [
  { val: '2.5+', label: 'Years Experience', color: '#915EFF' },
  { val: '10+', label: 'Projects Shipped', color: '#00D4FF' },
  { val: '30+', label: 'Technologies', color: '#FF6B6B' },
  { val: '5+', label: 'LLM Integrations', color: '#FFD93D' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: 'easeOut' } },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative">
      <div className="section-wrap">
        <SectionHeader number="01" subtitle="About Me" title="Who I Am" />

        <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div className="space-y-8">
            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-slate-300 leading-relaxed text-base"
            >
              {personal.summary}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="glass-card shine p-6 text-center"
                  style={{ borderColor: `${s.color}22` }}
                >
                  <p
                    className="text-3xl font-black mb-1"
                    style={{ color: s.color, filter: `drop-shadow(0 0 10px ${s.color}88)` }}
                  >
                    {s.val}
                  </p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className="grid gap-4">
            {TRAITS.map((t, i) => (
              <motion.div
                key={t.title}
                variants={fadeUp(0.1 + i * 0.1)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass-card shine flex gap-4 p-5"
                style={{ borderColor: `${t.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${t.color}18`, color: t.color, boxShadow: `0 0 20px ${t.color}30` }}
                >
                  {t.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: t.color }}>{t.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
