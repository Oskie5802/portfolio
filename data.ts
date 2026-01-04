
import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'omnios',
    title: 'OmniOS',
    category: 'OS / System',
    description: "A fully local, privacy-first operating system where AI isn't just an add-on — it's the core. Semantic understanding, proactive intelligence, and privacy by design. Join the future of personal computing.",
    status: 'working',
    link: 'https://omniaios.com',
    releaseLabel: 'EARLY 2026',
    imageUrl: '/icons/omnios.webp' 
  },
  {
    id: 'strescto',
    title: 'streść.to',
    category: 'Web/AI',
    description: 'An intelligent tool for instant analysis and summarization of long-form text. Available across mobile and web platforms.',
    status: 'released',
    link: 'https://strescto.pl',
    imageUrl: '/icons/strescto.webp'
  },
  {
    id: 'iamdog',
    title: 'I Am Dog',
    category: 'Mobile Game',
    description: "A life simulator featuring unique scent and exploration mechanics. Experience the world through the perspective of a dog.",
    status: 'released',
    link: 'https://play.google.com/store/apps/details?id=com.ronimstudio.iamdog',
    imageUrl: '/icons/iamdog.webp'
  },
  {
    id: 'hungrypiggy',
    title: 'Hungry Piggy',
    category: 'Mobile Game',
    description: 'An arcade mobile game starring an insatiable piggy. Features ragdoll physics and dynamic difficulty levels.',
    status: 'released',
    link: 'https://play.google.com/store/apps/details?id=com.ronimstudio.hitacoin',
    imageUrl: '/icons/hungrypiggy.webp'
  },
];
