export interface SiteSettings {
  name: string;
  themeColor: string;
  footerText: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  description: string; // Added for the longer mission statement
  imageUrl: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ProductShowcase {
  title: string;
  description: string;
  imageUrl: string;
  features: string[]; // Bullet points for the showcase
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: 'Smartphone' | 'Lock' | 'Bell' | 'Shield' | 'Clock' | 'Activity' | 'Eye' | 'BarChart' | 'FileCheck' | 'RefreshCw' | 'Users';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  category: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  mapUrl: string;
}

export interface SiteContent {
  siteSettings: SiteSettings;
  hero: HeroSection;
  productShowcase: ProductShowcase; // Added new section
  features: Feature[];
  testimonials: Testimonial[];
  posts: BlogPost[];
  contact: ContactInfo;
}