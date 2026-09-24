import { skills } from '../data/data'
export default function Skills() {
  return (
    <section id="skills" className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-16">
      <h2 className="mb-8 font-display text-5xl font-bold md:text-7xl">Skills</h2>
      <div className="grid max-w-xl gap-3 md:max-w-2xl md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <article key={group} className="glass rounded-2xl p-4">
            <h3 className="mb-2 font-display text-lg">{group}</h3>
            <ul className="flex flex-wrap gap-1.5 text-sm text-white/80">
              {items.map((s) => <li key={s} className="rounded-full bg-white/10 px-2.5 py-1">{s}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
