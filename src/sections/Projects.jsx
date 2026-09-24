import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/data'

function Card({ p, onOpen }) {
  const ref = useRef()
  const move = (e) => {
    const r = ref.current.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height
    ref.current.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 12}deg)`
    ref.current.style.setProperty('--gx', `${x * 100}%`); ref.current.style.setProperty('--gy', `${y * 100}%`)
  }
  return (
    <article ref={ref} onPointerMove={move} onPointerLeave={() => (ref.current.style.transform = '')}
      className="glass flex flex-col rounded-2xl p-6 transition-transform duration-150 motion-reduce:transform-none"
      style={{ backgroundImage: 'radial-gradient(240px circle at var(--gx,50%) var(--gy,0%), rgba(139,92,246,.22), transparent)' }}>
      <h3 className="font-display text-2xl font-bold">{p.name}</h3>
      <p className="mt-2 line-clamp-3 text-white/70">{p.desc}</p>
      <button onClick={() => onOpen(p)} className="mt-5 self-start rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20" aria-haspopup="dialog">See details</button>
    </article>
  )
}

function Detail({ p, onClose }) {
  const btn = useRef()
  useEffect(() => {
    btn.current.focus()
    const k = (e) => e.key === 'Escape' && onClose()
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [onClose])
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={p.name} onClick={(e) => e.stopPropagation()}
        className="glass max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-ink/80 p-8" style={{ animation: 'rise .5s cubic-bezier(.2,.8,.2,1) both' }}>
        <h3 className="font-display text-3xl font-bold grad-text">{p.name}</h3>
        <p className="mt-4 text-white/80">{p.desc}</p>
        {p.stack.length > 0 && <ul className="mt-5 flex flex-wrap gap-2 text-sm">{p.stack.map((s) => <li key={s} className="rounded-full bg-white/10 px-3 py-1">{s}</li>)}</ul>}
        <div className="mt-8 flex flex-wrap gap-3">
          {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-violet to-cyan px-5 py-2 font-medium text-ink">Open live site</a>}
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="glass rounded-full px-5 py-2">View on GitHub</a>
          <button ref={btn} onClick={onClose} className="ml-auto rounded-full px-5 py-2 text-white/70 hover:text-white">Close</button>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ lenis }) {
  const [open, setOpen] = useState(null)
  useEffect(() => { open ? lenis?.stop() : lenis?.start() }, [open, lenis]) // freeze page scroll while dialog is open
  return (
    <section id="projects" className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-16">
      <h2 className="mb-8 font-display text-5xl font-bold md:text-7xl">Projects</h2>
      <div className="grid gap-4 md:max-w-4xl md:grid-cols-2">{projects.map((p) => <Card key={p.name} p={p} onOpen={setOpen} />)}</div>
      {open && <Detail p={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
