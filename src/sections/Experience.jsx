import { experience } from '../data/data'
export default function Experience() {
  return (
    <section id="experience" className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-16">
      <h2 className="mb-10 font-display text-5xl font-bold md:text-7xl">Experience</h2>
      <ol className="relative max-w-2xl border-l-2 border-violet/60 pl-8" style={{ perspective: '900px' }}>
        {experience.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-cyan" style={{ boxShadow: '0 0 18px #22d3ee' }} aria-hidden="true" />
            <div className="glass rounded-2xl p-6" style={{ transform: 'rotateY(-7deg)', transformOrigin: 'left center' }}>
              <h3 className="font-display text-2xl font-bold">{e.role}</h3>
              <p className="mt-1 text-white/70">{e.org}</p>
              <p className="text-sm text-white/50">{e.period}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
