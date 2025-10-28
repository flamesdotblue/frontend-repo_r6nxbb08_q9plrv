import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header({ currentRoute, navigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', hash: '#/' },
    { label: 'Services', hash: '#/services' },
    { label: 'About Us', hash: '#/about' },
    { label: 'Contact', hash: '#/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all',
        scrolled ? 'bg-white/80 shadow-sm' : 'bg-white/40'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 shadow-md" />
            <span className="font-semibold tracking-tight text-slate-900">Dentistry 2025</span>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.hash);
                }}
                className={classNames(
                  'text-sm font-medium transition-colors',
                  currentRoute === item.hash || (item.hash === '#/' && (currentRoute === '' || currentRoute === '#/'))
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#/connect"
              onClick={(e) => {
                e.preventDefault();
                navigate('#/connect');
              }}
              className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Connect Now
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
