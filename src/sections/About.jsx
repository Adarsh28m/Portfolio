import { profile } from '../data/data'
import Reveal from '../components/Reveal'
export default function About() {
  return (
    <section id="about" className="flex min-h-screen flex-col justify-center px-6 md:px-16">
      <h2 className="mb-8 font-display text-5xl font-bold md:text-7xl">About me</h2>
      <Reveal text={profile.bio} className="max-w-3xl font-display text-2xl leading-snug md:text-4xl" />
      <dl className="mt-12 grid max-w-3xl grid-cols-3 gap-4">
        {profile.stats.map(([v, l]) => (
          <div key={l} className="glass rounded-2xl p-5">
            <dt className="order-2 text-sm text-white/60">{l}</dt>
            <dd className="font-display text-3xl font-bold grad-text md:text-4xl">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
