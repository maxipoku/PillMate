import { siteContent } from './data.js';

// --- SVGs ---
const LogoSVG = (className = "w-10 h-10") => `
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

// --- Icon Mapper ---
const getIcon = (name) => {
    const map = {
        'Smartphone': 'smartphone', 'Lock': 'lock', 'Bell': 'bell', 'Shield': 'shield',
        'Clock': 'clock', 'Activity': 'activity', 'Eye': 'eye', 'BarChart': 'bar-chart-2',
        'FileCheck': 'file-check', 'RefreshCw': 'refresh-cw', 'Users': 'users'
    };
    return map[name] || 'circle';
};

// --- Renderers ---

function renderHeader() {
    const container = document.getElementById('header-placeholder');
    if (!container) return;
    
    // Determine active link
    const path = window.location.pathname;
    const isHome = path.endsWith('index.html') || path.endsWith('/');
    const isBlog = path.includes('blog.html');
    const isContact = path.includes('contact.html');
    
    const activeClass = "text-medical-primary font-bold";
    const inactiveClass = "text-slate-600 hover:text-medical-primary";
    
    // Links relative to root. On GitHub Pages, URLs might be /repo-name/blog.html
    // Safe approach: use simple relative links assuming flat structure
    
    container.innerHTML = `
    <header class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a href="index.html" class="flex items-center space-x-2.5 group">
            ${LogoSVG("w-9 h-9 transition-transform group-hover:scale-105")}
            <span class="text-xl font-bold text-medical-primary tracking-wide">
              ${siteContent.siteSettings.name.toUpperCase()}
            </span>
          </a>
          <nav class="hidden md:flex space-x-8">
            <a href="index.html" class="text-sm font-medium transition-colors duration-200 ${isHome ? activeClass : inactiveClass}">Home</a>
            <a href="blog.html" class="text-sm font-medium transition-colors duration-200 ${isBlog ? activeClass : inactiveClass}">Blog</a>
            <a href="contact.html" class="text-sm font-medium transition-colors duration-200 ${isContact ? activeClass : inactiveClass}">Contact</a>
          </nav>
          <div class="md:hidden">
            <button id="mobile-menu-btn" class="p-2 rounded-md text-slate-600 hover:text-medical-primary focus:outline-none">
              <i data-lucide="menu"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-medical-primary">Home</a>
            <a href="blog.html" class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-medical-primary">Blog</a>
            <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-medical-primary">Contact</a>
        </div>
      </div>
    </header>
    `;
    
    // Attach listener
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
}

function renderFooter() {
    const container = document.getElementById('footer-placeholder');
    if (!container) return;
    
    container.innerHTML = `
  <footer class="bg-medical-dark text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-1">
            <div class="flex items-center space-x-2 mb-4">
              <div class="bg-white rounded-full p-0.5">
                  ${LogoSVG("w-8 h-8")}
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
            <li><a href="index.html" class="hover:text-medical-accent transition-colors">Features</a></li>
            <li><a href="index.html" class="hover:text-medical-accent transition-colors">Pricing</a></li>
            <li><a href="index.html" class="hover:text-medical-accent transition-colors">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-white font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="contact.html" class="hover:text-medical-accent transition-colors">About Us</a></li>
            <li><a href="blog.html" class="hover:text-medical-accent transition-colors">Blog</a></li>
            <li><a href="contact.html" class="hover:text-medical-accent transition-colors">Careers</a></li>
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
}

function hydrateHome() {
    const { hero, productShowcase, features, testimonials } = siteContent;
    
    // Hero
    const [h1, h2] = hero.headline.split(',');
    document.getElementById('hero-headline').innerHTML = `<span class="block xl:inline">${h1}</span><span class="block text-medical-accent mt-2">${h2}</span>`;
    document.getElementById('hero-subheadline').innerText = hero.subheadline;
    document.getElementById('hero-description').innerText = hero.description;
    document.getElementById('hero-image').src = hero.imageUrl;
    
    document.getElementById('hero-cta-container').innerHTML = `
        <div class="rounded-md shadow">
            <a href="contact.html" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-medical-primary hover:bg-medical-secondary md:py-4 md:text-lg transition-colors">${hero.ctaPrimary}</a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
            <a href="blog.html" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-medical-primary bg-medical-light hover:bg-medical-accent/20 md:py-4 md:text-lg transition-colors">${hero.ctaSecondary}</a>
        </div>
    `;

    // Product Showcase
    document.getElementById('product-title').innerText = productShowcase.title;
    document.getElementById('product-desc').innerText = productShowcase.description;
    document.getElementById('product-image').src = productShowcase.imageUrl;
    document.getElementById('product-features').innerHTML = productShowcase.features.map(f => `
        <li class="flex items-start">
            <i data-lucide="check-circle" class="h-6 w-6 text-medical-accent mr-3 flex-shrink-0"></i>
            <span class="text-slate-700 font-medium">${f}</span>
        </li>
    `).join('');

    // Features
    document.getElementById('features-grid').innerHTML = features.map(f => `
        <div class="pt-6 group">
          <div class="flow-root bg-slate-50 rounded-lg px-6 pb-8 h-full shadow-sm border border-slate-100 hover:shadow-md hover:border-medical-accent/30 transition-all duration-300">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center p-3 bg-medical-primary rounded-md shadow-lg group-hover:bg-medical-accent transition-colors duration-300">
                  <i data-lucide="${getIcon(f.iconName)}" class="h-6 w-6 text-white"></i>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium text-slate-900 tracking-tight">${f.title}</h3>
              <p class="mt-5 text-sm text-slate-500">${f.description}</p>
            </div>
          </div>
        </div>
    `).join('');

    // Testimonials
    document.getElementById('testimonials-grid').innerHTML = testimonials.map(t => `
        <div class="bg-white rounded-xl p-8 relative shadow-sm border border-slate-100">
            <div class="flex items-center space-x-4 mb-4">
                <img src="${t.avatarUrl}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover ring-2 ring-medical-accent" />
                <div>
                    <h4 class="text-lg font-bold text-slate-900">${t.name}</h4>
                    <p class="text-sm text-medical-primary">${t.role}</p>
                </div>
            </div>
            <p class="text-slate-600 italic relative z-10">"${t.content}"</p>
        </div>
    `).join('');
}

function hydrateBlog() {
    const { posts } = siteContent;
    document.getElementById('blog-grid').innerHTML = posts.map(post => `
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="${post.imageUrl}" alt="${post.title}" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-medical-primary">${post.category}</p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-slate-900">${post.title}</p>
                <p class="mt-3 text-base text-slate-500">${post.excerpt}</p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0 text-slate-400 flex items-center">
                 <i data-lucide="calendar" class="w-4 h-4 mr-2"></i> ${post.date}
              </div>
              <div class="ml-auto">
                 <button class="text-medical-primary text-sm font-medium flex items-center hover:text-medical-dark transition-colors">
                    Read more <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                 </button>
              </div>
            </div>
          </div>
        </div>
    `).join('');
}

function hydrateContact() {
    const { contact } = siteContent;
    document.getElementById('contact-address').innerText = contact.address;
    document.getElementById('contact-email').innerText = contact.email;
    document.getElementById('contact-email').href = `mailto:${contact.email}`;
    document.getElementById('contact-phone').innerText = contact.phone;
    document.getElementById('contact-phone').href = `tel:${contact.phone}`;
    document.getElementById('contact-map').src = contact.mapUrl;
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Common Layout
    renderHeader();
    renderFooter();

    // 2. Hydrate Page Specific Content
    const page = document.body.getAttribute('data-page');
    if (page === 'home') hydrateHome();
    if (page === 'blog') hydrateBlog();
    if (page === 'contact') hydrateContact();

    // 3. Init Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    // 4. Scroll Logic
    const scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            } else {
                scrollBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }
        });
    }
});