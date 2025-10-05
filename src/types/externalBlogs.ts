// External Blog Types
export interface ExternalBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  authorImage?: string;
  authorBio?: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  category: string;
  likes: number;
  comments: number;
  views: number;
  image?: string;
  url: string;
  source: 'devto' | 'hashnode' | 'medium' | 'ghost' | 'local';
  publishedAt: string;
}
