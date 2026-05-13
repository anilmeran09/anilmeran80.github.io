import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(5,8,22,0.9)] backdrop-blur-xl border-b border-[rgba(145,94,255,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xl font-black gradient-text tracking-wider"
        >
          AM
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#915EFF] to-[#00D4FF] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(5,8,22,0.95)] backdrop-blur-xl border-b border-[rgba(145,94,255,0.12)]"
          >
            <ul className="px-6 py-5 flex flex-col gap-4">
              {NAV.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-slate-300 hover:text-white text-sm w-full text-left py-1 hover:text-[#915EFF] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
