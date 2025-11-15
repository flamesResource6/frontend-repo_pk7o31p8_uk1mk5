import { useState } from 'react'

const features = [
  {
    title: 'Agenda intelligente',
    desc: 'Gestisci appuntamenti, sale e terapisti con drag & drop e reminder automatici.',
  },
  {
    title: 'CRM clienti',
    desc: 'Schede cliente con storico trattamenti, preferenze e note riservate.',
  },
  {
    title: 'Pagamenti & Fatture',
    desc: 'Incassi integrati e fatture automatiche, anche con pacchetti e abbonamenti.',
  },
  {
    title: 'Reportistica',
    desc: 'Statistiche chiare su occupazione cabine, ricavi, performance staff.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '29€',
    period: '/mese',
    features: ['Agenda base', 'CRM semplice', 'Report base', 'Supporto email'],
  },
  {
    name: 'Pro',
    price: '59€',
    period: '/mese',
    popular: true,
    features: ['Agenda avanzata', 'Pagamenti integrati', 'Report avanzati', 'Supporto chat'],
  },
  {
    name: 'Elite',
    price: '99€',
    period: '/mese',
    features: ['Multi-sede', 'Ruoli & permessi', 'API & integrazioni', 'Supporto prioritario'],
  },
]

function App() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', message: '', plan: 'Pro' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Invio in corso…' })
    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Errore di invio')
      setStatus({ state: 'success', message: 'Grazie! Ti contatteremo a breve.' })
      setForm({ name: '', email: '', phone: '', business: '', message: '', plan: 'Pro' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Qualcosa è andato storto. Riprova.' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-indigo-50">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-200 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-50" />

        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600" />
            <span className="font-semibold text-xl">MassaGest</span>
          </div>
          <a href="#pricing" className="text-sm font-medium text-indigo-700 hover:text-indigo-900">Prezzi</a>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Il gestionale moderno per centri massaggi
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Agenda smart, pagamenti, CRM e report: tutto in un unico posto. Riduci i no‑show, riempi l’agenda e fai crescere il tuo centro.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">Provalo gratis</a>
              <a href="#features" className="px-5 py-3 rounded-lg bg-white/70 backdrop-blur border border-gray-200 font-semibold hover:bg-white transition">Guarda le funzionalità</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Nessuna carta richiesta • Disdici quando vuoi</div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="h-64 bg-gradient-to-tr from-indigo-50 to-rose-50 rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-5xl font-bold">📅</div>
                  <div className="mt-2 font-medium">Dashboard & Agenda</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="bg-gray-50 rounded p-3">Reminder SMS</div>
                <div className="bg-gray-50 rounded p-3">Pacchetti</div>
                <div className="bg-gray-50 rounded p-3">Multi-terapista</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Funzionalità chiave</h2>
        <p className="text-center text-gray-600 mt-2">Tutto ciò che serve per gestire e far crescere il tuo centro massaggi</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <div className="text-2xl">✨</div>
              <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-white/60">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="text-3xl">⭐️⭐️⭐️⭐️⭐️</div>
            <p className="mt-3 text-gray-700">“Ridotto i no‑show del 32% grazie ai reminder automatici.”</p>
            <div className="mt-4 text-sm text-gray-500">Sofia — Centro Olistico Aurora</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="text-3xl">⭐️⭐️⭐️⭐️⭐️</div>
            <p className="mt-3 text-gray-700">“Finalmente report chiari su ricavi e occupazione delle cabine.”</p>
            <div className="mt-4 text-sm text-gray-500">Marco — Benessere In</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="text-3xl">⭐️⭐️⭐️⭐️⭐️</div>
            <p className="mt-3 text-gray-700">“In 1 giorno abbiamo migrato tutto, facilissimo.”</p>
            <div className="mt-4 text-sm text-gray-500">Giulia — Spazio Relax</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Prezzi semplici</h2>
        <p className="text-center text-gray-600 mt-2">Scegli il piano giusto per il tuo centro</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 border shadow-sm ${p.popular ? 'bg-indigo-600 text-white' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center justify-between">
                <h3 className={`text-xl font-semibold ${p.popular ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
                {p.popular && <span className="text-xs px-2 py-1 rounded-full bg-white/20">Più scelto</span>}
              </div>
              <div className="mt-3"><span className="text-4xl font-bold">{p.price}</span><span className="text-gray-500 ml-1 {p.popular ? 'text-indigo-100' : ''}">{p.period}</span></div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span>✔️</span> {f}</li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-block w-full text-center font-semibold px-4 py-2 rounded-lg transition ${p.popular ? 'bg-white text-indigo-700 hover:bg-indigo-50' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>Inizia ora</a>
            </div>
          ))}
        </div>
      </section>

      {/* Lead form */}
      <section id="cta" className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-2xl font-bold text-gray-900">Richiedi una demo gratuita</h3>
          <p className="text-gray-600 mt-1">Compila il modulo: ti contatteremo entro 24h.</p>

          <form onSubmit={submit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Nome e cognome" />
            <input required type="email" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Email" />
            <input value={form.phone} onChange={(e)=>setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Telefono" />
            <input value={form.business} onChange={(e)=>setForm({ ...form, business: e.target.value })} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Nome centro" />
            <textarea value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} rows={4} className="md:col-span-2 w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Di cosa hai bisogno?" />
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Piano:</label>
                <select value={form.plan} onChange={(e)=>setForm({ ...form, plan: e.target.value })} className="border border-gray-200 rounded-lg px-3 py-2">
                  {plans.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <button type="submit" disabled={status.state==='loading'} className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-60">
                {status.state==='loading' ? 'Invio…' : 'Invia richiesta'}
              </button>
            </div>
            {status.state !== 'idle' && (
              <div className={`md:col-span-2 text-sm ${status.state==='success' ? 'text-green-600' : status.state==='error' ? 'text-red-600' : 'text-gray-600'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Domande frequenti</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="font-semibold">Posso importare i miei dati?</h4>
            <p className="text-gray-600">Sì, ti aiutiamo a migrare clienti, trattamenti e listini in poche ore.</p>
          </div>
          <div>
            <h4 className="font-semibold">Serve installare qualcosa?</h4>
            <p className="text-gray-600">No, è tutto in cloud. Accedi dal computer, tablet o smartphone.</p>
          </div>
          <div>
            <h4 className="font-semibold">È conforme al GDPR?</h4>
            <p className="text-gray-600">Certo. Gestiamo consensi, privacy e conservazione dati in modo sicuro.</p>
          </div>
          <div>
            <h4 className="font-semibold">C’è assistenza?</h4>
            <p className="text-gray-600">Supporto via email e chat, con onboarding dedicato per i piani Pro ed Elite.</p>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white/70">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
          <div>© {new Date().getFullYear()} MassaGest</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Termini</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="/test" className="hover:text-gray-900">Stato sistema</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
