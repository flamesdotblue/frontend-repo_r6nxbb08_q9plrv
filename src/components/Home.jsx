import { motion } from 'framer-motion';

export default function Home({ navigate }) {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
              >
                Modern Dental Care for 2025
              </motion.h1>
              <motion.p
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="mt-5 text-lg text-slate-600 max-w-xl"
              >
                Friendly experts. Leading technology. Same‑day appointments. Experience a calm, reassuring visit with a team that puts your smile first.
              </motion.p>
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-8 flex flex-col sm:flex-row items-center gap-4"
              >
                <a
                  href="#/connect"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('#/connect');
                  }}
                  className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Connect Now
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#/about"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  Learn More
                </a>
              </motion.div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="rounded-xl border border-slate-100 bg-white/70 p-4 shadow-sm">
                  <div className="font-semibold text-slate-900">Same‑Day Care</div>
                  <div>Urgent slots available every day</div>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white/70 p-4 shadow-sm">
                  <div className="font-semibold text-slate-900">Transparent Pricing</div>
                  <div>No surprises. Clear treatment plans.</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl border border-slate-100 bg-white p-2 shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=1600&auto=format&fit=crop"
                  alt="Modern dental clinic"
                  className="h-72 w-full object-cover rounded-xl"
                />
              </motion.div>
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08c?q=80&w=1200&auto=format&fit=crop"
                alt="Smiling patient"
                className="mt-6 h-44 w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              Comprehensive Dental Services
            </motion.h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              From preventive care to cosmetic solutions, we provide everything you need for a healthy, confident smile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: 'Preventive & Checkups',
              desc: 'Cleanings, exams, X‑rays, and personalized hygiene plans.',
              img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a3?q=80&w=1200&auto=format&fit=crop'
            }, {
              title: 'Cosmetic Dentistry',
              desc: 'Whitening, veneers, bonding, and smile makeovers.',
              img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
            }, {
              title: 'Restorative Care',
              desc: 'Crowns, implants, and precision restorative treatments.',
              img: 'https://images.unsplash.com/photo-1583912268185-8f3fd86c9aad?q=80&w=1200&auto=format&fit=crop'
            }].map((card, idx) => (
              <motion.div
                key={card.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <img src={card.img} alt={card.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
