import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">About Our Practice</h1>
            <p className="mt-3 text-slate-600">
              We blend compassionate care with modern technology to deliver dentistry that feels calm, transparent, and precise. Our team prioritizes comfort at every step — from booking to follow‑up.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[{label:'Years',value:'15+'},{label:'5‑Star Reviews',value:'1,200+'},{label:'Same‑Day Slots',value:'Daily'}].map(stat => (
                <div key={stat.label} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.6 }}>
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=1600&auto=format&fit=crop"
                alt="State-of-the-art dental studio"
                className="h-80 w-full object-cover"
              />
            </div>
            <motion.img
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1606813907291-76b9c9c0b87a?q=80&w=1200&auto=format&fit=crop"
              alt="Friendly dental team"
              className="mt-6 h-48 w-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
