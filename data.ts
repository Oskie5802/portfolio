import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'omnios',
    title: 'OmniOS',
    category: 'OS / System',
    description: "A fully local, privacy-focused operating system where AI isn't just a feature—it's the core. Semantic understanding, proactive intelligence, and privacy by design. Join the future of personal computing.",
    status: 'working',
    link: 'https://omniaios.com',
    releaseLabel: 'EARLY 2026',
    // imageUrl: '/assets/omnios.png' 
  },
  {
    id: 'strescto',
    title: 'streść.to',
    category: 'Web/AI',
    description: 'Intelligent tool for instant analysis and summarization of long-form text. Available on mobile and web.',
    status: 'released',
    link: 'https://strescto.pl',
    // imageUrl: '/assets/strescto.png'
  },
  {
    id: 'iamdog',
    title: 'I Am Dog',
    category: 'Mobile Game',
    description: "A life simulator with unique scent and exploration mechanics. Experience the world from a dog's perspective.",
    status: 'released',
    link: 'https://play.google.com/store/apps/details?id=com.ronimstudio.iamdog',
    // imageUrl: '/assets/iamdog.png'
  },
  {
    id: 'hungrypiggy',
    title: 'Hungry Piggy',
    category: 'Mobile Game',
    description: 'Arcade mobile game featuring an insatiable piggy. Ragdoll physics and dynamic difficulty levels.',
    status: 'released',
    link: 'https://play.google.com/store/apps/details?id=com.ronimstudio.hitacoin',
    // imageUrl: '/assets/hungrypiggy.png'
  },
];