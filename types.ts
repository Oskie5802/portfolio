export type ProjectCategory = 'Mobile Game' | 'Web/AI' | 'OS / System' | 'Experimental';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  status: 'released' | 'working' | 'beta' | 'concept';
  link?: string;
  releaseLabel?: string; // e.g. "Early 2026"
  imageUrl?: string;
}