import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personal } from '../data/resume'
import { Code2, Cpu, Database, Layers } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '2.5+' },
  { label: 'Projects Shipped', value: '10+' },
  { label: 'Tech Stack Items', value: '30+' },
  { label: 'LLM Integrations', value: '5+' },
]

const traits = [
  { icon: <Layers size={20} />, title: 'Backend Architecture', desc: 'FastAPI async systems, multi-tenant SaaS, WebSocket engines' },
  { icon: <Cpu size={20} />, title: 'AI / LLM Integration', desc: 'LangChain, Azure OpenAI, Gemini, RAG pipelines, agentic AI' },
  { icon: <Database size={20} />, title: 'Data Engineering', desc: 'ETL pipelines, AWS cloud, PostgreSQL, MongoDB, PySpark' },
  { icon: <Code2 size={20} />, title: 'Full Stack Delivery', desc: 'React frontends, CI/CD with GitHub Actions & Jenkins' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <SectionHeader label="01. About Me" title="Who I Am" />

      <div ref={ref} className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-slate-300 leading-relaxed text-base mb-6">{personal.summary}</p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center">
                <p className="text-3xl font-bold gradient-text mb-1">{s.value}</p>
                <p className="text-slate-400 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-4"
        >
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-5 flex gap-4 hover:border-indigo-500/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 flex-shrink-0">
                {t.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">{t.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function SectionHeader({ label, title }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-indigo-400 text-sm mb-2 tracking-widest">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
    </div>
  )
}
