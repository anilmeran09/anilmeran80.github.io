import { Mail, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm flex items-center gap-1.5">
          Built with <Heart size={13} className="text-rose-500" /> by{' '}
          <span className="gradient-text font-semibold">{personal.name}</span>
        </p>

        <div className="flex items-center gap-4">
          <a href={personal.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-300 transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-300 transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${personal.email}`} className="text-slate-500 hover:text-slate-300 transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Anil Meran</p>
      </div>
    </footer>
  )
}
