import { SiteContent } from './types';

// ==========================================
// PILLMATE ADMIN DASHBOARD (DATA SOURCE)
// Edit this file to update website content
// ==========================================

export const siteContent: SiteContent = {
  siteSettings: {
    name: "PillMate",
    themeColor: "#0e4f61",
    footerText: "Making medicine taking a light and pleasurable routine.",
  },
  hero: {
    // We use a comma to split the headline colors in Home.tsx
    headline: "Have you ever forgot a pill?, With PillMate you never will.",
    subheadline: "Your Health, Synced & Secured.", 
    description: "The aim of the company is to transform the daily hustle of medicine taking into a light and pleasurable routine, so more mind space can be dedicated to the people and things we love.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800", // Generic lifestyle image for Hero background
    ctaPrimary: "Buy Now",
    ctaSecondary: "Learn More",
  },
  productShowcase: {
    title: "Step into the 21st Century of Medicine",
    description: "PillMate combines a standalone smart dispenser with a powerful subscription app. It addresses the main pain point of timely medication, relieving stress for users and caretakers alike.",
    // UPDATED: Using simple relative filename. Ensure 'product.png' is in the same folder as index.html
    imageUrl: "product.png", 
    features: [
        "Timed pill dispensation",
        "Bar code scanning",
        "Visual and audio alerts",
        "Easy-fit design for simplicity"
    ]
  },
  features: [
    {
      id: 1,
      title: "App Sync",
      description: "Real-time updates to the PillMate mobile app for caregivers and patients.",
      iconName: "Smartphone"
    },
    {
      id: 2,
      title: "Secure Storage",
      description: "Medical-grade materials ensure your medication stays fresh and safe from children.",
      iconName: "Lock"
    },
    {
      id: 3,
      title: "Smart Reminders",
      description: "Gentle audio and visual cues when it's time to take your medication.",
      iconName: "Bell"
    },
    {
      id: 4,
      title: "Remote Monitoring",
      description: "Perfect for caretakers to ensure their loved ones never miss a dose from anywhere.",
      iconName: "Eye"
    },
    {
      id: 5,
      title: "History & Statistics",
      description: "Track adherence trends over time to share with your doctor or family.",
      iconName: "BarChart"
    },
    {
      id: 6,
      title: "Medicine Cross-Checking",
      description: "Filters out contradicting medicines to ensure patient safety and elevated mood.",
      iconName: "FileCheck"
    },
    {
      id: 7,
      title: "Auto Medicine Order",
      description: "Never run out. The system predicts when you need a refill and handles it.",
      iconName: "RefreshCw"
    },
    {
      id: 8,
      title: "Community Features",
      description: "Connect with others, view scoreboards, and discuss medication topics.",
      iconName: "Users"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Caregiver",
      content: "As a personal caretaker, PillMate provides the best care out there. I know exactly when my mom takes her meds.",
      avatarUrl: "https://picsum.photos/100/100?random=2"
    },
    {
      id: 2,
      name: "Dr. Marcus Chen",
      role: "Geriatric Specialist",
      content: "For nursing homes, this offers reduced staff attention to repetitive minor tasks like sorting.",
      avatarUrl: "https://picsum.photos/100/100?random=3"
    },
    {
      id: 3,
      name: "Emily Doe",
      role: "User",
      content: "I didn't recognize the value at first, but after the free trial, the alleviated stress was undeniable.",
      avatarUrl: "https://picsum.photos/100/100?random=4"
    }
  ],
  posts: [
    {
      id: 1,
      title: "The Future of At-Home Care",
      date: "Oct 12, 2023",
      category: "Technology",
      excerpt: "How IoT devices are transforming the way we manage chronic conditions from the comfort of home.",
      content: "Lorem ipsum dolor sit amet...",
      imageUrl: "https://picsum.photos/600/400?random=5"
    },
    {
      id: 2,
      title: "5 Tips for Medication Management",
      date: "Sep 28, 2023",
      category: "Health Tips",
      excerpt: "Struggling to remember your daily vitamins? Here are 5 simple strategies to stay on track.",
      content: "Ut enim ad minim veniam...",
      imageUrl: "https://picsum.photos/600/400?random=6"
    },
    {
      id: 3,
      title: "Understanding Drug Interactions",
      date: "Aug 10, 2023",
      category: "Education",
      excerpt: "Why timing matters. A deep dive into why certain medications shouldn't be mixed.",
      content: "Excepteur sint occaecat cupidatat...",
      imageUrl: "https://picsum.photos/600/400?random=8"
    }
  ],
  contact: {
    address: "123 Innovation Drive, Tech City, CA 94000",
    email: "support@pillmate.health",
    phone: "+1 (555) 123-4567",
    mapUrl: "https://picsum.photos/800/400?random=map" 
  }
};