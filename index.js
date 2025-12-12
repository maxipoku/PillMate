import { siteContent } from './data.js';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import Contact from './pages/Contact.js';

// --- Shared Components (HTML Strings) ---

const Logo = (className = "w-10 h-10") => `
  <svg viewBox="0 0 100 100" class="${className}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="44" stroke="#0e4f61" stroke-width="8" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(0 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(30 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(60 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(90 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(120 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(150 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(180 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(210 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(240 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(270 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(300 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <line x1="50" y1="12" x2="50" y2="18" transform="rotate(330 50 50)" stroke="#0e4f61" stroke-width="6" stroke-linecap="round" />
    <g transform="rotate(25 50 50)">
      <path d="M36,50 L36,36 A14,14 0 0,1 64,36 L64,50 Z" fill="#2ec4b6" />
      <path d="M36,50 L36,64 A14,14 0 0,0 64,64 L64,50 Z" fill="#0e4f61" />
      <ellipse cx="45" cy="40" rx="3" ry="5" fill="white" fill-opacity="0.4" transform="rotate(-10 45 40)" />
    </g>
  </svg>
`;

const Header = () => {
  const currentHash = window.location.hash || '#/';
  const isActive = (hash) => currentHash === hash ? 'text-medical-primary font-bold' : 'text-slate-600 hover:text-medical-primary';
  const isActiveMobile = (hash) => currentHash === hash ? 'bg-medical-light text-medical-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-medical-primary';

  return `
    <header class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a href="#/" class="flex items-center space-x-2.5 group">
            ${Logo("w-9 h-9 transition-transform group-hover:scale-105")}
            <span class="text-xl font-bold text-medical-primary tracking-wide">
              ${siteContent.siteSettings.name.toUpperCase()}
            </span>
          </a>

          <nav class="hidden md:flex space-x-8">
            <a href="#/" class="text-sm font-medium transition-colors duration-200 ${isActive('#/')}">Home</a>
            <a href="#/blog" class="text-sm font-medium transition-colors duration-200 ${isActive('#/blog')}">Blog</a>
            <a href="#/contact" class="text-sm font-medium transition-colors duration-200 ${isActive('#/contact')}">Contact</a>
          </nav>

          <div class="md:hidden">
            <button id="mobile-menu-btn" class="p-2 rounded-md text-slate-600 hover:text-medical-primary focus:outline-none">
              <i data-lucide="menu"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu (Hidden by default) -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#/" class="block px-3 py-2 rounded-md text-base font-medium ${isActiveMobile('#/')}">Home</a>
            <a href="#/blog" class="block px-3 py-2 rounded-md text-base font-medium ${isActiveMobile('#/blog')}">Blog</a>
            <a href="#/contact" class="block px-3 py-2 rounded-md text-base font-medium ${isActiveMobile('#/contact')}">Contact</a>
        </div>
      </div>
    </header>
  `;
};

const Footer = () => `
  <footer class="bg-medical-dark text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-1">
            <div class="flex items-center space-x-2 mb-4">
              <div class="bg-white rounded-full p-0.5">
                  ${Logo("w-8 h-8")}
              </div>
              <span class="text-lg font-bold text-white tracking-wide">
                ${siteContent.siteSettings.name.toUpperCase()}
              </span>
          </div>
          <p class="text-sm text-slate-400 mb-4">
            ${siteContent.siteSettings.footerText}
          </p>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-medical-accent transition-colors"><i data-lucide="facebook" class="w-5 h-5"></i></a>
            <a href="#" class="hover:text-medical-accent transition-colors"><i data-lucide="twitter" class="w-5 h-5"></i></a>
            <a href="#" class="hover:text-medical-accent transition-colors"><i data-lucide="instagram" class="w-5 h-5"></i></a>
            <a href="#" class="hover:text-medical-accent transition-colors"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
          </div>
        </div>
        
        <div>
          <h3 class="text-white font-semibold mb-4">Product</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#/" class="hover:text-medical-accent transition-colors">Features</a></li>
            <li><a href="#/" class="hover:text-medical-accent transition-colors">Pricing</a></li>
            <li><a href="#/" class="hover:text-medical-accent transition-colors">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#/contact" class="hover:text-medical-accent transition-colors">About Us</a></li>
            <li><a href="#/blog" class="hover:text-medical-accent transition-colors">Blog</a></li>
            <li><a href="#/contact" class="hover:text-medical-accent transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
            <h3 class="text-white font-semibold mb-4">Legal</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-medical-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-medical-accent transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        &copy; ${new Date().getFullYear()} ${siteContent.siteSettings.name}. All rights reserved.
      </div>
    </div>
  </footer>
`;

const ScrollToTop = () => `
  <button
    id="scroll-to-top"
    onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
    class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-medical-primary text-white shadow-lg transition-all duration-300 hover:bg-medical-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medical-primary opacity-0 translate-y-10 pointer-events-none"
    aria-label="Scroll to top"
  >
    <i data-lucide="chevron-up" class="w-6 h-6"></i>
  </button>
`;

// --- Router & Rendering Logic ---

const render = () => {
  const app = document.getElementById('app');
  const hash = window.location.hash || '#/';
  
  // 1. Determine Page Content
  let pageContent = '';
  if (hash.startsWith('#/blog')) {
    pageContent = Blog();
  } else if (hash.startsWith('#/contact')) {
    pageContent = Contact();
  } else {
    pageContent = Home();
  }

  // 2. Assemble Layout
  app.innerHTML = `
    <div class="min-h-screen flex flex-col font-sans bg-medical-light/30">
      ${Header()}
      <main class="flex-grow">
        ${pageContent}
      </main>
      ${Footer()}
      ${ScrollToTop()}
    </div>
  `;

  // 3. Post-Render: Initialize Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 4. Post-Render: Attach Event Listeners
  
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if(mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
      });
  }

  // Scroll To Top Logic
  const scrollBtn = document.getElementById('scroll-to-top');
  const handleScroll = () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
    } else {
      scrollBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    }
  };
  window.removeEventListener('scroll', handleScroll); // Clean up old listeners if any (though full re-render clears them usually)
  window.addEventListener('scroll', handleScroll);
  
  // Initial check in case we load scrolled down
  handleScroll();
  
  // Scroll to top on route change
  window.scrollTo(0, 0);
};

// --- Initialization ---

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
