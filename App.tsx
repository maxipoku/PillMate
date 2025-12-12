import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { siteContent } from './data';

// --- Logo Component (Matches provided image) ---
const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Ring (Dark Petrol) */}
    <circle cx="50" cy="50" r="44" stroke="#0e4f61" strokeWidth="8" />
    
    {/* Clock Ticks */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <line 
        key={deg} 
        x1="50" y1="12" x2="50" y2="18" 
        transform={`rotate(${deg} 50 50)`} 
        stroke="#0e4f61" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
    ))}

    {/* Pill Icon (Rotated) */}
    <g transform="rotate(25 50 50)">
      {/* Top Half (Cyan Accent) */}
      <path d="M36,50 L36,36 A14,14 0 0,1 64,36 L64,50 Z" fill="#2ec4b6" />
      {/* Bottom Half (Dark Petrol) */}
      <path d="M36,50 L36,64 A14,14 0 0,0 64,64 L64,50 Z" fill="#0e4f61" />
      {/* Reflection Highlight */}
      <ellipse cx="45" cy="40" rx="3" ry="5" fill="white" fillOpacity="0.4" transform="rotate(-10 45 40)" />
    </g>
  </svg>
);

// --- Layout Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-medical-primary text-white shadow-lg transition-all duration-300 hover:bg-medical-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medical-primary ${
        showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <Logo className="w-9 h-9 transition-transform group-hover:scale-105" />
            <span className="text-xl font-bold text-medical-primary tracking-wide">
              {siteContent.siteSettings.name.toUpperCase()}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-medical-primary font-bold'
                    : 'text-slate-600 hover:text-medical-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-medical-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-medical-light text-medical-primary'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-medical-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-2 mb-4">
                {/* Logo with White/Cyan strokes for dark footer background */}
                <div className="bg-white rounded-full p-0.5">
                   <Logo className="w-8 h-8" />
                </div>
                <span className="text-lg font-bold text-white tracking-wide">
                  {siteContent.siteSettings.name.toUpperCase()}
                </span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              {siteContent.siteSettings.footerText}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-medical-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-medical-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-medical-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-medical-accent transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-medical-accent transition-colors">Features</Link></li>
              <li><Link to="/" className="hover:text-medical-accent transition-colors">Pricing</Link></li>
              <li><Link to="/" className="hover:text-medical-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-medical-accent transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-medical-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-medical-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-medical-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-medical-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {siteContent.siteSettings.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans bg-medical-light/30">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </HashRouter>
  );
};

export default App;