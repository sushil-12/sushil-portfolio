export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
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
}

export const blogPosts: BlogPost[] = [
  
];

export const getBlogPost = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentPostId: number, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPost(currentPostId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === currentPost.category)
    .slice(0, limit);
};

export const getPreviousPost = (currentPostId: number): BlogPost | undefined => {
  const currentIndex = blogPosts.findIndex(post => post.id === currentPostId);
  return currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined;
};

export const getNextPost = (currentPostId: number): BlogPost | undefined => {
  const currentIndex = blogPosts.findIndex(post => post.id === currentPostId);
  return currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined;
};
