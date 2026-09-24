import { education as ed } from '../data/data'
export default function Education() {
  return (
    <section id="education" className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-16">
      <h2 className="mb-8 font-display text-5xl font-bold md:text-7xl">Education</h2>
      <div className="grid max-w-4xl gap-4 md:grid-cols-2">
        <article className="glass rounded-2xl p-6 md:col-span-2">
          <h3 className="font-display text-2xl font-bold">{ed.degree}</h3>
          <p className="mt-1 text-white/70">{ed.school}</p>
          <p className="mt-3 text-white/60">{ed.period} · CGPI {ed.cgpi}</p>
        </article>
        {ed.earlier.map(([n, score, yr]) => (
          <article key={n} className="glass rounded-2xl p-5">
            <h3 className="font-medium">{n}</h3><p className="text-sm text-white/60">{score} · {yr}</p>
          </article>
        ))}
        <article className="glass rounded-2xl p-6 md:col-span-2">
          <h3 className="mb-3 font-display text-xl">Certifications</h3>
          <ul className="space-y-1.5 text-white/80">{ed.certs.map((c) => <li key={c}>{c}</li>)}</ul>
        </article>
      </div>
    </section>
  )
}
