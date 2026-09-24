import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Scene from './three/Scene'
import { scroll, reducedMotion } from './three/scroll'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Progress from './components/Progress'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  const [lenis, setLenis] = useState(null)
  useEffect(() => {
    const update = () => { const max = document.documentElement.scrollHeight - innerHeight; scroll.progress = max > 0 ? scrollY / max : 0 }
    if (reducedMotion()) { addEventListener('scroll', update, { passive: true }); update(); return () => removeEventListener('scroll', update) }
    const l = new Lenis({ lerp: 0.09 })
    l.on('scroll', update); setLenis(l)
    let raf; const loop = (t) => { l.raf(t); raf = requestAnimationFrame(loop) }; raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); l.destroy() }
  }, [])
  return (
    <>
      <Loader /><Scene /><Cursor /><Progress /><Nav lenis={lenis} />
      <main className="relative z-10"><Hero /><About /><Skills /><Projects lenis={lenis} /><Experience /><Education /><Contact /></main>
    </>
  )
}
