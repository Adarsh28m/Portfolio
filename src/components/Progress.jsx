import { useEffect, useRef } from 'react'
import { scroll } from '../three/scroll'
export default function Progress() {
  const bar = useRef()
  useEffect(() => { let raf; const t = () => { if (bar.current) bar.current.style.transform = `scaleY(${scroll.progress})`; raf = requestAnimationFrame(t) }; t(); return () => cancelAnimationFrame(raf) }, [])
  return <div aria-hidden="true" className="fixed right-3 top-1/2 z-30 h-40 w-[3px] -translate-y-1/2 rounded bg-white/10"><div ref={bar} className="h-full origin-top rounded bg-gradient-to-b from-violet to-cyan" style={{ transform: 'scaleY(0)' }} /></div>
}
