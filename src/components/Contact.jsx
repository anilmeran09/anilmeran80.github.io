import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal } from '../data/resume'
import { SectionHeader } from './About'

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'text-indigo-400 bg-indigo-500/15',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/anilmeran09',
    href: personal.github,
    color: 'text-slate-300 bg-slate-500/15',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/anilmeran',
    href: personal.linkedin,
    color: 'text-blue-400 bg-blue-500/15',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
    color: 'text-emerald-400 bg-emerald-500/15',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: personal.location,
    href: null,
    color: 'text-orange-400 bg-orange-500/15',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <SectionHeader label="06. Contact" title="Get In Touch" />

      <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Let&apos;s work together
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            I&apos;m always open to discussing new opportunities, interesting projects, or anything related to
            backend engineering, AI systems, and data pipelines. Drop me a message!
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25"
          >
            <Mail size={16} />
            Send me an email
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-3"
        >
          {contactItems.map((item, i) => {
            const content = (
              <div
                key={item.label}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-indigo-500/25 transition-colors duration-200 group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors truncate">{item.value}</p>
                </div>
                {item.href && <ArrowUpRight size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors ml-auto flex-shrink-0" />}
              </div>
            )

            return item.href ? (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                {content}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
