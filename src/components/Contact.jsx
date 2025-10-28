import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('submitting');
    // Simulate async submit
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <main className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Get in Touch</h1>
            <p className="mt-3 text-slate-600 max-w-xl">
              Questions, appointments, or second opinions — we’re here for you. Send us a note and our care team will respond shortly.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a3?q=80&w=1600&auto=format&fit=crop"
                alt="Welcoming dental reception"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-slate-600">Visit us</div>
                <div className="mt-1 font-semibold text-slate-900">123 Blue Ave, Suite 202</div>
                <div className="mt-1 text-sm text-slate-600">Mon–Fri 8:00–18:00 · (555) 123‑4567</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            {status !== 'success' ? (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder=" "
                      className="peer w-full rounded-xl border border-slate-200 bg-white px-4 pt-4 pb-2 text-sm text-slate-900 placeholder-transparent shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                      aria-label="Full name"
                    />
                    <label className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:left-3 peer-focus:text-xs">
                      Full name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder=" "
                      className="peer w-full rounded-xl border border-slate-200 bg-white px-4 pt-4 pb-2 text-sm text-slate-900 placeholder-transparent shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                      aria-label="Email"
                    />
                    <label className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:left-3 peer-focus:text-xs">
                      Email
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder=" "
                      className="peer w-full rounded-xl border border-slate-200 bg-white px-4 pt-4 pb-2 text-sm text-slate-900 placeholder-transparent shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      aria-label="Phone"
                    />
                    <label className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:left-3 peer-focus:text-xs">
                      Phone (optional)
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={onChange}
                      placeholder=" "
                      className="peer w-full rounded-xl border border-slate-200 bg-white px-4 pt-4 pb-2 text-sm text-slate-900 placeholder-transparent shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      aria-label="Subject"
                    />
                    <label className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:left-3 peer-focus:text-xs">
                      Subject (optional)
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder=" "
                    rows={5}
                    className="peer w-full rounded-xl border border-slate-200 bg-white px-4 pt-4 pb-2 text-sm text-slate-900 placeholder-transparent shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                    aria-label="How can we help?"
                  />
                  <label className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:left-3 peer-focus:text-xs">
                    How can we help?
                  </label>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">We reply within a few business hours.</div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                </div>

                <div className="text-xs text-slate-500">
                  Prefer email? <a className="text-blue-600 hover:underline" href="mailto:care@dentistry2025.com">care@dentistry2025.com</a>
                </div>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
                  <div className="text-lg font-semibold">Thanks — your message is on its way!</div>
                  <div className="mt-1 text-sm">Our team will get back to you shortly at <span className="font-medium">{form.email}</span>.</div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
