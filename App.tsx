
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Settings, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Car, 
  Clock, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Music,
  User,
  Image as ImageIcon,
  HelpCircle,
  Calendar
} from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import PackagesPage from './pages/PackagesPage';
import ReviewsPage from './pages/ReviewsPage';
import GalleryPage from './pages/GalleryPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
              <Car className="text-zinc-950 h-6 w-6" />
            </div>
            <span className="font-heading text-2xl font-black tracking-tighter italic">CAR KINGS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  location.pathname === link.path ? 'text-orange-500' : 'text-zinc-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="bg-orange-500 text-zinc-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-600 transition-all transform hover:scale-105"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-zinc-300 hover:text-orange-500 border-b border-zinc-800 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              onClick={() => setIsOpen(false)}
              className="block bg-orange-500 text-zinc-950 text-center px-6 py-3 rounded-lg font-bold"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Car className="text-zinc-950 h-6 w-6" />
              </div>
              <span className="font-heading text-xl font-black italic">CAR KINGS</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Bangalore's premium hub for car customization, PPF, high-fidelity audio, and luxury interiors. 15+ years of driving excellence.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'YouTube', 'WhatsApp'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 transition-colors text-zinc-400 hover:text-zinc-950">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li><Link to="/services" className="hover:text-orange-500">Our Services</Link></li>
              <li><Link to="/packages" className="hover:text-orange-500">Custom Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500">Project Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-orange-500">Customer Stories</Link></li>
              <li><Link to="/faq" className="hover:text-orange-500">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Popular Services</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li><Link to="/services" className="hover:text-orange-500">TPU Paint Protection Film</Link></li>
              <li><Link to="/services" className="hover:text-orange-500">High-End Audio Tunings</Link></li>
              <li><Link to="/services" className="hover:text-orange-500">Custom Napa Interiors</Link></li>
              <li><Link to="/services" className="hover:text-orange-500">9H Ceramic Shield</Link></li>
              <li><Link to="/services" className="hover:text-orange-500">Bi-LED Projector Upgrades</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Visit Our Studio</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} />
                <span>#45, 100 Feet Ring Road, BTM Layout 2nd Stage, Bangalore - 560076</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-orange-500 shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="text-orange-500 shrink-0" size={18} />
                <span>10:00 AM - 08:30 PM (Daily)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-xs">
          <p>© {new Date().getFullYear()} Car Kings Customization Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const StickyActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-all transform hover:scale-110 active:scale-95"
      >
        <MessageCircle size={28} />
      </a>
      <a 
        href="tel:+919876543210" 
        className="w-14 h-14 bg-orange-500 text-zinc-950 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all transform hover:scale-110 active:scale-95"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyActions />
      </div>
    </Router>
  );
};

export default App;
