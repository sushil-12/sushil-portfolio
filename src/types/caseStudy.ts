export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  status: 'live' | 'completed' | 'in-progress';
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  screenshots: string[];
  lessonsLearned: string[];
  liveUrl: string;
  duration: string;
  teamSize: string;
  category: 'featured' | 'past';
}

export interface CaseStudyPopupProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}
