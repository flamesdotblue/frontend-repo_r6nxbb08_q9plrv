export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400" />
              <span className="font-semibold tracking-tight text-slate-900">Dentistry 2025</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-xs">
              Calming, modern dental care that keeps you smiling.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Explore</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#/" className="hover:text-slate-900">Home</a></li>
              <li><a href="#/services" className="hover:text-slate-900">Services</a></li>
              <li><a href="#/about" className="hover:text-slate-900">About Us</a></li>
              <li><a href="#/contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>123 Blue Ave, Suite 202</li>
              <li>Mon–Fri: 8:00–18:00</li>
              <li>(555) 123-4567</li>
              <li>care@dentistry2025.com</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Follow</div>
            <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Instagram</a>
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
              <a href="#" className="hover:text-slate-900">YouTube</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} Dentistry 2025. All rights reserved.</p>
            <div className="text-base font-extrabold tracking-wider text-slate-900">DENTIST CO</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
