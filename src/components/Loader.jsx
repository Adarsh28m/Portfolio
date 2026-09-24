import { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()
  const [shown, setShown] = useState(0)
  const [done, setDone] = useState(false)
  useEffect(() => { // ~1.4s minimum so the logo animation plays
    const id = setInterval(() => setShown((s) => Math.min(s + 2, 100)), 28)
    return () => clearInterval(id)
  }, [progress])
  useEffect(() => { if (shown >= 100) setTimeout(() => setDone(true), 300) }, [shown])
  return (
    <div role="status" aria-live="polite" className={`fixed inset-0 z-50 grid place-items-center bg-ink transition-opacity duration-700 ${done ? 'pointer-events-none opacity-0' : ''}`}>
      <div className="text-center">
        <div className="mx-auto mb-6 h-16 w-16 rotate-45 animate-spin rounded-xl border-2 border-violet" style={{ animationDuration: '2.4s', boxShadow: '0 0 40px #22d3ee66' }} />
        <p className="font-display text-5xl grad-text tabular-nums">{shown}%</p>
      </div>
    </div>
  )
}
