export interface ShowcaseItem {
  id: string;
  title: string;
  category: 'web-app' | 'mobile-app' | 'ai-tool' | 'desktop-app' | 'other';
  type: string;
  status: 'live' | 'in-development' | 'completed' | 'archived';
  heroImage: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  duration: string;
  teamSize: string;
  role: string;
  highlights: string[];
  screenshots: string[];
  featured: boolean;
}

export interface ShowcaseFilter {
  category?: string;
  status?: string;
  featured?: boolean;
}

export interface ShowcaseStats {
  totalProjects: number;
  liveProjects: number;
  technologiesUsed: number;
  yearsExperience: number;
}
