import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const timeslots = [
  'Today 10:00 AM',
  'Today 11:30 AM',
  'Today 2:15 PM',
  'Today 4:00 PM',
  'Tomorrow 9:00 AM',
  'Tomorrow 1:00 PM',
  'Tomorrow 3:30 PM',
];

export default function Connect() {
  const [selected, setSelected] = useState(timeslots[0]);
  const [submitted, setSubmitted] = useState(false);

  const confirmationId = useMemo(() => Math.random().toString(36).slice(2, 8).toUpperCase(), [submitted]);

  return (
    <main className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Connect to an Available Dentist</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Choose a timeslot for a virtual consultation or request a live chat. We'll match you with the next available dentist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">Instant Chat</h2>
            <p className="mt-1.5 text-sm text-slate-600">Start a secure conversation with our care team now.</p>
            <button
              onClick={() => setSubmitted(true)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Start Live Chat
            </button>
            <div className="mt-6 text-xs text-slate-500">Avg. response time: under 2 minutes</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">Reserve a Timeslot</h2>
            <p className="mt-1.5 text-sm text-slate-600">Pick a time that works and we'll send a confirmation instantly.</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {timeslots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelected(slot)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                    selected === slot
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <button
              onClick={() => setSubmitted(true)}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Confirm Appointment
            </button>
          </motion.div>
        </div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900"
          >
            <div className="text-lg font-semibold">You're all set!</div>
            <div className="mt-1 text-sm">Reservation <span className="font-mono">#{confirmationId}</span> confirmed. We'll email details and a secure link shortly.</div>
            <div className="mt-1 text-sm">Selected: {selected}</div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
