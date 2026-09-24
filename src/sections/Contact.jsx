import { useState } from 'react'
import { profile } from '../data/data'
import Magnetic from '../components/Magnetic'

const gmail = (to, subject = '', body = '') => `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
const field = 'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-cyan'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!profile.formspreeId) { // no endpoint configured: fall back to the visitor's mail app
      const d = new FormData(form)
      window.open(gmail(profile.email, 'Hello from ' + d.get('name'), d.get('message') + '\n\n' + d.get('email')), '_blank', 'noopener')
      return
    }
    setStatus('sending')
    try {
      const r = await fetch(`https://formspree.io/f/${profile.formspreeId}`, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (!r.ok) throw new Error()
      form.reset(); setStatus('sent')
    } catch { setStatus('error') }
  }
  return (
    <section id="contact" className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-16">
      <h2 className="mb-8 font-display text-5xl font-bold md:text-7xl">Let's talk</h2>
      <div className="grid max-w-3xl gap-8 md:grid-cols-[1.2fr_1fr]">
        <form onSubmit={submit} className="glass space-y-3 rounded-3xl p-6">
          <input name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <label className="block"><span className="mb-1 block text-sm text-white/70">Name</span><input name="name" required autoComplete="name" className={field} /></label>
          <label className="block"><span className="mb-1 block text-sm text-white/70">Email</span><input name="email" type="email" required autoComplete="email" className={field} /></label>
          <label className="block"><span className="mb-1 block text-sm text-white/70">Message</span><textarea name="message" rows="4" required className={field} /></label>
          <button disabled={status === 'sending'} className="rounded-full bg-gradient-to-r from-violet to-cyan px-6 py-2.5 font-medium text-ink disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
          <p role="status" className="min-h-6 text-sm">{status === 'sent' && 'Message sent. I will reply soon.'}{status === 'error' && 'Could not send. Email me directly instead.'}</p>
        </form>
        <ul className="space-y-3 self-center">
          {[['Email', gmail(profile.email, 'Hello Adarsh'), profile.email], ['Phone', `tel:${profile.phone}`, profile.phone], ['GitHub', profile.github, 'Adarsh28m'], ['LinkedIn', profile.linkedin, 'Adarsh Mishra']].map(([l, h, t]) => (
            <li key={l}><Magnetic href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="glass block rounded-2xl px-5 py-3"><span className="block text-sm text-white/50">{l}</span>{t}</Magnetic></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
