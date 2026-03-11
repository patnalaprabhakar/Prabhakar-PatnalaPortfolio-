
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Prabhakar Patnala",
  title: "Principal Product Designer & Visual Storyteller",
  heroHeadline: "Designing Connections through Interfaces",
  availabilityStatus: "Open for Creative Direction",
  aboutHeadline: "Shaping digital narratives with intention.",
  about: "I craft human-centered digital ecosystems where functionality meets purpose. I believe design is about more than just aesthetics; it's about building meaningful experiences that resonate at the intersection of brand and human connection.",
  profileImage: "https://drive.google.com/file/d/1hTzprXmGLyp7C2_QI0jb2zbwyef8DZ6Y/view?usp=sharing",
  resumeUrl: "#",
  yearsExperience: "8+",
  yearsExperienceLabel: "Elite Years",
  email: "hello@prabhakar.design",
  phone: "+1 (212) 555-0198",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    behance: "https://behance.net",
    dribbble: "https://dribbble.com"
  },
  projectCategories: [
    { name: "Ui/UX projects", filterTag: "UI, UX" },
    { name: "Graphic design projects", filterTag: "!UI, !UX" },
    { name: "Video Projects", filterTag: "Video" }
  ],
  skills: [
    { category: "Visual Design", items: ["UI Densign", "Branding", "Design Systems", "Typography", "Motion"] },
    { category: "Strategy", items: ["UX Research", "Wireframing", "Product Logic", "Prototyping", "Sprints"] }
  ],
  experience: [
    {
      company: "Lumina Studio",
      role: "Creative Director",
      period: "2021 - Present",
      description: ["Led visual transformation of 12+ Fortune 500 products.", "Established cross-platform design systems."]
    },
    {
      company: "Pixel & Paper",
      role: "Senior Designer",
      period: "2018 - 2021",
      description: ["Crafted mobile experiences for FinTech startups.", "Increased user retention by 35% via UX overhaul."]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Elysian Wellness",
      description: "A luxury fitness interface focused on mindfulness and reducing cognitive load for a seamless user journey.",
      longDescription: "A comprehensive study in high-end aesthetic utility, balancing minimalist aesthetics with powerful health tracking features.",
      tags: ["UI/UX", "Mobile", "Motion"],
      imageUrls: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"],
      links: { demo: "#", github: "#" }
    },
    {
      id: "p2",
      title: "Aura Brand Identity",
      description: "A comprehensive visual identity and design system for a sustainable high-fashion house based in Milan.",
      longDescription: "An exploration of organic minimalism and custom typography to reflect brand values of sustainability and luxury.",
      tags: ["Graphic Design", "Branding", "Print"],
      imageUrls: ["https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200"],
      links: { demo: "#", github: "#" }
    },
    {
      id: "p3",
      title: "Nebula OS",
      description: "A conceptual operating system exploring spatial computing interactions and glassmorphic UI patterns.",
      longDescription: "Defining the next generation of desktop interactions through immersive, depth-based visual hierarchies.",
      tags: ["UI/UX", "Product Design", "Future"],
      imageUrls: ["https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200"],
      links: { demo: "#", github: "#" }
    },
    {
      id: "p4",
      title: "Digital Horizon",
      description: "A bold, dynamic visual showcase of motion design and brand storytelling.",
      longDescription: "An intensive exploration into 3D motion graphics and kinetic typography, designed to capture the essence of forward-thinking digital brands.",
      tags: ["Video", "Motion"],
      imageUrls: [],
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      links: { demo: "#", github: "#" }
    }
  ]
};
