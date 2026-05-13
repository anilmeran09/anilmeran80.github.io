import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal } from '../data/resume'

const STATS = [
  { value: '2.5+', label: 'Years Exp.' },
  { value: '10+', label: 'Projects' },
  { value: '30+', label: 'Tech Skills' },
  { value: '3', label: 'Companies' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Left content */}
      <div className="relative z-10 w-full md:w-[55%] px-6 md:px-16 lg:px-24 pt-20">
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Label */}
          <motion.p variants={fadeUp} className="font-mono text-[#00D4FF] text-sm tracking-[0.3em] uppercase mb-4">
            Hello, World! I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="font-black leading-none mb-2">
            <span
              className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-text"
              style={{ filter: 'drop-shadow(0 0 40px rgba(145,94,255,0.45))' }}
            >
              Anil
            </span>
            <span
              className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"
              style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))' }}
            >
              Meran
            </span>
          </motion.h1>

          {/* Role badge */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mt-5 mb-6">
            {['Backend', 'Data', 'ML Engineer'].map((t, i) => (
              <span
                key={t}
                className="tag text-xs font-bold tracking-widest"
                style={{
                  background: i === 0 ? 'rgba(145,94,255,0.15)' : i === 1 ? 'rgba(0,212,255,0.15)' : 'rgba(255,107,107,0.15)',
                  border: `1px solid ${i === 0 ? 'rgba(145,94,255,0.4)' : i === 1 ? 'rgba(0,212,255,0.4)' : 'rgba(255,107,107,0.4)'}`,
                  color: i === 0 ? '#c4b5fd' : i === 1 ? '#67e8f9' : '#fca5a5',
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed text-sm md:text-base max-w-xl mb-8">
            Versatile engineer with <span className="text-white font-semibold">2.5+ years</span> building{' '}
            <span className="text-[#915EFF] font-semibold">scalable APIs</span>, real-time AI systems, and
            multi-tenant SaaS platforms. Expert in{' '}
            <span className="text-[#00D4FF] font-semibold">FastAPI, LangChain, Azure OpenAI</span> and cloud infrastructure.
          </motion.p>

          {/* Info chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
            <span className="flex items-center gap-1.5 text-xs text-slate-500 px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03]">
              <MapPin size={11} className="text-[#915EFF]" /> {personal.location}
            </span>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] hover:border-[rgba(145,94,255,0.3)] transition-all">
              <Mail size={11} className="text-[#00D4FF]" /> {personal.email}
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <a href={personal.github} target="_blank" rel="noreferrer" className="btn-neon flex items-center gap-2">
              <FaGithub size={16} /> GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline flex items-center gap-2"
            >
              <Mail size={14} /> Contact Me
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-black gradient-text mb-0.5">{s.value}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right side — transparent, 3D planet shows through */}
      <div className="hidden md:block w-[45%]" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-slate-600 font-mono tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-slate-700 hover:text-[#915EFF] transition-colors"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
