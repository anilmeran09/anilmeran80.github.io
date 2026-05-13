export default function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="mb-16">
      <p className="font-mono text-[#915EFF] text-sm tracking-[0.3em] uppercase mb-3">
        {number} — {subtitle}
      </p>
      <h2 className="section-title gradient-text">{title}</h2>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#915EFF] to-transparent" />
        <div className="w-2 h-2 rounded-full bg-[#915EFF] shadow-[0_0_10px_#915EFF]" />
        <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-[#00D4FF] to-transparent" />
      </div>
    </div>
  )
}
