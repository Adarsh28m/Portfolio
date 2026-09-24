import { useEffect, useRef, useState } from 'react'
// Word-by-word reveal when the text scrolls into view.
export default function Reveal({ text, className = '' }) {
  const ref = useRef()
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.4 })
    io.observe(ref.current); return () => io.disconnect()
  }, [])
  return (
    <p ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden="true" className="inline-block transition-all duration-700 motion-reduce:transition-none"
          style={{ opacity: on ? 1 : 0.08, transform: on ? 'none' : 'translateY(12px)', transitionDelay: `${i * 35}ms` }}>{w}&nbsp;</span>
      ))}
    </p>
  )
}
