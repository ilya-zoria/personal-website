import React from 'react';

interface Project {
  title: string;
  description: string;
  role?: string;
  team?: string;
  year?: string;
  goal?: string;
  media?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
  case?: string;
}

export const projects: Record<string, Project> = {
  'brainly-ai': {
    title: 'Brainly. AI Learning Companion',
    description: "Brainly is one of the world's largest learning platforms with over 300M students globally — was entering a new chapter. The product was evolving beyond its roots in community-driven Q&A toward becoming an AI-powered Learning Companion.",
    role: "Senior Product Designer",
    team: "CTO, PM, 2 Product Designers, UX Researcher, Engineers, QAs",
    year: "2025",
    // goal: "Define a design vision for Brainly's future by introducing new branding and unifying the experience across AI-powered tools, including Q&A, Test Prep, and Brainly Classes.",
    case: "For the full case study, feel free to reach out via email",
    media: {
      type: 'video',
      src: '/Craft/brainly-main.mp4',
      alt: 'brainly-main'
    }
  },
  'carerix': {
    title: 'Carerix',
    description: 'Redesigned a 20-year-old legacy ATS to modernize the recruitment experience for enterprise agencies, defined MVP scope, led 20+ user interviews, and built a scalable design system for long-term growth.',
    role: "Lead Product Designer",
    team: "Head of Products and 2 Product owners, UI Designer, 3 Front-end Developers, 3 Back end Developers, 3 QAs",
    year: "2022",
    case: "For the full case study, feel free to reach out via email",
    media: {
      type: 'image',
      src: '/Craft/png/Carerix-1.png',
      alt: 'carerix_vision'
    }
  },
  // 'cheapoair': {
  //   title: 'CheapOair',
  //   description: 'CheapOair main product in the Fareportal family helps 5M monthly active travellers fly cheaply on over 450 airlines. I was responsible for creating design vision for iOS and Android app.',
  //   role: "Senior Product Designer",
  //   team: "Fareportal Design Team",
  //   year: "2021",
  //   goal: "Create design vision for iOS and Android app",
  //   media: {
  //     type: 'image',
  //     src: '/images/projects/CheapOair.png',
  //     alt: 'CheapOair'
  //   }
  // },
  'guidefoot': {
    title: 'Guidefoot',
    description: "This is my first startup—a platform where travelers discover meaningful experiences, lasting connections, and like-minded people. Think Airbnb Experiences, but focused on multi-day tours led by local guides.",
    role: "Founder & Product Designer",
    team: "Solo Project",
    year: "2020",
    media: {
      type: 'image',
      src: '/Craft/png/Guidefoot-1.png',
      alt: 'Guidefoot'
    }
  },
  'explorations': {
    title: 'Side projects',
    description: 'Selected freelance and side projects',
  }
}; 