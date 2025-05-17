import React from 'react';

interface Project {
  title: string;
  description: string;
  role: string;
  team: string;
  year: string;
  goal: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
}

export const projects: Record<string, Project> = {
  'brainly-ai': {
    title: 'Brainly. AI Learning Companion',
    description: "Brainly is one of the world's largest learning platforms with over 300M students globally — was entering a new chapter. The product was evolving beyond its roots in community-driven Q&A toward becoming an AI-powered Learning Companion.",
    role: "Lead Product Designer",
    team: "Brainly Design Team",
    year: "2023",
    goal: "Create a design vision for AI-powered learning assistance",
    media: {
      type: 'video',
      src: '/Craft/brainly-main.mp4',
      alt: 'brainly-main'
    }
  },
  'carerix': {
    title: 'Carerix',
    description: 'Recruitment software for enterprise recruitment and staffing agencies. I was responsible for a new design vision for a 20-year-old applicant tracking system.',
    role: "Lead Product Designer",
    team: "Carerix Design Team",
    year: "2022",
    goal: "Redesign a 20-year-old applicant tracking system",
    media: {
      type: 'image',
      src: '/Craft/png/Carerix-1.png',
      alt: 'carerix_vision'
    }
  },
  'cheapoair': {
    title: 'CheapOair',
    description: 'CheapOair main product in the Fareportal family helps 5M monthly active travellers fly cheaply on over 450 airlines. I was responsible for creating design vision for iOS and Android app.',
    role: "Senior Product Designer",
    team: "Fareportal Design Team",
    year: "2021",
    goal: "Create design vision for iOS and Android app",
    media: {
      type: 'image',
      src: '/images/projects/CheapOair.png',
      alt: 'CheapOair'
    }
  },
  'guidefoot': {
    title: 'Guidefoot',
    description: "This is my first startup. Place, where travelers can find experience, emotions and like-minded people. It's similar to Airbnb Experience but for long-lasting tours from 3–30 days with local guides.",
    role: "Founder & Product Designer",
    team: "Solo Project",
    year: "2020",
    goal: "Create a platform for immersive travel experiences",
    media: {
      type: 'image',
      src: '/images/projects/Guidefoot.png',
      alt: 'Guidefoot'
    }
  },
  'explorations': {
    title: 'Explorations',
    description: 'Different ideas',
    role: "Product Designer",
    team: "Personal Projects",
    year: "2019-2023",
    goal: "Explore different design concepts and ideas",
    media: {
      type: 'video',
      src: '/Craft/spichify.mp4',
      alt: 'spichify'
    }
  }
}; 