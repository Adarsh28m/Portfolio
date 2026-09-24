import { useEffect, useRef } from 'react'
export default function Cursor() {
  const el = useRef()
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return
    let x = 0, y = 0, cx = 0, cy = 0, raf
    const move = (e) => { x = e.clientX; y = e.clientY }
    const tick = () => { cx += (x - cx) * 0.18; cy += (y - cy) * 0.18; if (el.current) el.current.style.transform = `translate(${cx - 14}px,${cy - 14}px)`; raf = requestAnimationFrame(tick) }
    addEventListener('pointermove', move); tick()
    return () => { removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={el} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-40 hidden h-7 w-7 rounded-full border border-cyan/70 mix-blend-screen md:block" />
}
