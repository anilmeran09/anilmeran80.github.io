import { Mail, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t py-8 px-6" style={{ borderColor: 'rgba(145,94,255,0.12)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm flex items-center gap-1.5">
          Crafted with <Heart size={13} className="text-[#FF6B6B]" /> by{' '}
          <span className="gradient-text font-bold">{personal.name}</span>
          {' '}· React + Three.js
        </p>

        <div className="flex items-center gap-5">
          <a href={personal.github} target="_blank" rel="noreferrer"
            className="text-slate-600 hover:text-[#915EFF] transition-colors duration-200">
            <FaGithub size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer"
            className="text-slate-600 hover:text-[#00D4FF] transition-colors duration-200">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${personal.email}`}
            className="text-slate-600 hover:text-[#FF6B6B] transition-colors duration-200">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-slate-700 text-xs">© {new Date().getFullYear()} Anil Meran</p>
      </div>
    </footer>
  )
}
