import { useEffect, useState } from 'react'
import { sections } from '../data/data'
export default function Nav({ lenis }) {
  const [active, setActive] = useState('hero')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { threshold: 0.5 })
    sections.forEach((s) => { const n = document.getElementById(s.id); n && io.observe(n) })
    return () => io.disconnect()
  }, [])
  const go = (e, id) => { e.preventDefault(); const n = document.getElementById(id); lenis ? lenis.scrollTo(n) : n.scrollIntoView() }
  return (
    <nav aria-label="Sections" className="fixed left-0 right-0 top-0 z-30 flex justify-center px-4 pt-4">
      <ul className="glass flex gap-1 overflow-x-auto rounded-full p-1 text-sm">
        {sections.map((s) => (
          <li key={s.id}><a href={`#${s.id}`} onClick={(e) => go(e, s.id)}
            className={`block rounded-full px-3 py-1.5 transition-colors ${active === s.id ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}>{s.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
