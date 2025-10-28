import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  const navigate = (hash) => {
    window.location.hash = hash;
    setRoute(hash);
  };

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderRoute = () => {
    if (route.startsWith('#/connect')) return <Connect />;
    if (route.startsWith('#/services')) return <Services />;
    if (route.startsWith('#/about')) return <About />;
    if (route.startsWith('#/contact')) return <Contact />;
    return <Home navigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header currentRoute={route} navigate={navigate} />
      <div className="flex-1">{renderRoute()}</div>
      <Footer />
    </div>
  );
}
