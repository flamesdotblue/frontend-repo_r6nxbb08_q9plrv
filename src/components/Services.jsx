import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Preventive Care',
      desc: 'Comprehensive exams, cleanings, fluoride, and tailored hygiene plans.',
      img: 'https://images.unsplash.com/photo-1581594693700-8e9a1d232879?q=80&w=1500&auto=format&fit=crop',
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Whitening, veneers, bonding, and smile design for natural results.',
      img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1500&auto=format&fit=crop',
    },
    {
      title: 'Restorative & Implants',
      desc: 'Crowns, bridges, implants, and precision restorative solutions.',
      img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a3?q=80&w=1500&auto=format&fit=crop',
    },
    {
      title: 'Orthodontics',
      desc: 'Clear aligners and advanced orthodontic planning for a confident smile.',
      img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1500&auto=format&fit=crop',
    },
    {
      title: 'Emergency Care',
      desc: 'Same-day relief for pain, fractures, and urgent dental needs.',
      img: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1500&auto=format&fit=crop',
    },
    {
      title: 'Pediatric Dentistry',
      desc: 'Gentle, positive visits that keep kids smiling and confident.',
      img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=1500&auto=format&fit=crop',
    },
  ];

  return (
    <main className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Our Services</motion.h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Thoughtfully designed care across prevention, aesthetics, and restoration — all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <div className="overflow-hidden">
                <img src={s.img} alt={s.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
