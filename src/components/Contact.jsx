import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal } from '../data/resume'
import SectionHeader from './SectionHeader'

const ITEMS = [
  { icon: <Mail size={18} />,       label: 'Email',    value: personal.email,              href: `mailto:${personal.email}`, accent: '#915EFF' },
  { icon: <FaGithub size={18} />,   label: 'GitHub',   value: 'github.com/anilmeran09',    href: personal.github,            accent: '#C4B5FD' },
  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/anilmeran', href: personal.linkedin,          accent: '#00D4FF' },
  { icon: <Phone size={18} />,      label: 'Phone',    value: personal.phone,              href: `tel:${personal.phone}`,    accent: '#6EE7B7' },
  { icon: <MapPin size={18} />,     label: 'Location', value: personal.location,           href: null,                       accent: '#FCD34D' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact">
      <div className="section-wrap">
        <SectionHeader number="06" subtitle="Let's Talk" title="Get In Touch" />

        <div ref={ref} className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
              Open to new{' '}
              <span className="gradient-text">opportunities</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether it&apos;s a full-time role, a freelance project, or just a conversation about
              backend engineering and AI — I&apos;d love to connect. Drop me a line!
            </p>

            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-neon inline-flex items-center gap-2.5"
            >
              <Send size={15} />
              Send me an email
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>

          {/* Right */}
          <div className="grid gap-3">
            {ITEMS.map((item, i) => {
              const card = (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.09 }}
                  whileHover={{ x: 8, scale: 1.025 }}
                  className="glass-card shine flex items-center gap-4 p-4"
                  style={{ borderColor: `${item.accent}20` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.accent}18`, color: item.accent, boxShadow: `0 0 14px ${item.accent}30` }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-sm text-slate-300 truncate">{item.value}</p>
                  </div>
                  {item.href && <ArrowUpRight size={13} className="text-slate-700 flex-shrink-0" />}
                </motion.div>
              )

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {card}
                </a>
              ) : (
                <div key={item.label}>{card}</div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
