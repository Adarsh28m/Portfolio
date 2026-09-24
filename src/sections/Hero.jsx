import { useEffect, useState } from 'react'
import { profile } from '../data/data'
import Magnetic from '../components/Magnetic'

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => { const id = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600); return () => clearInterval(id) }, [])
  let c = 0
  return (
    <section id="hero" className="flex min-h-screen flex-col justify-center px-6 md:px-16">
      {profile.available && (
        <p className="glass mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          {profile.availableText}
        </p>
      )}
      <h1 className="font-display text-[clamp(3rem,11vw,10rem)] font-bold leading-[0.9] tracking-tight" aria-label={profile.name}>
        {profile.name.split(' ').map((w, wi) => (
          <span key={wi} className="block overflow-hidden pb-2" aria-hidden="true">
            {[...w].map((ch) => <span key={c} className="char" style={{ animationDelay: `${1.5 + c++ * 0.045}s` }}>{ch}</span>)}
          </span>
        ))}
      </h1>
      <p className="mt-6 h-8 font-display text-xl text-white/80 md:text-2xl" aria-live="polite">
        <span key={i} className="grad-text char">{profile.roles[i]}</span>
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Magnetic href="#projects" className="rounded-full bg-gradient-to-r from-violet to-cyan px-7 py-3 font-medium text-ink">View Projects</Magnetic>
        <Magnetic href={profile.resume} download className="glass rounded-full px-7 py-3 font-medium">Download Resume</Magnetic>
      </div>
    </section>
  )
}
