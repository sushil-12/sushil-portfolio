// External Blog API Configuration
export const externalBlogConfig = {
  // Dev.to API Configuration
  devto: {
    enabled: true,
    username: 'sushilhub', // Your Dev.to username (optional)
    tags: ['react', 'nodejs', 'typescript', 'javascript', 'web-development'],
    limit: 10
  },
  
  // Hashnode API Configuration
  hashnode: {
    enabled: true,
    publicationId: '', // Your Hashnode publication ID (optional)
    limit: 10
  },
  
  // Medium RSS Configuration
  medium: {
    enabled: true,
    feeds: [
      'https://medium.com/feed/topic/technology',
      'https://medium.com/feed/topic/react',
      'https://medium.com/feed/topic/javascript',
      'https://medium.com/feed/topic/nodejs',
      'https://medium.com/feed/topic/typescript'
    ],
    limit: 10
  },
  
  // Ghost Content API Configuration
  ghost: {
    enabled: false, // Set to true if you have a Ghost blog
    baseUrl: 'https://your-ghost-blog.com',
    apiKey: 'your-ghost-api-key',
    limit: 10
  },
  
  // Content Caching Configuration
  cache: {
    enabled: true,
    duration: 30 * 60 * 1000, // 30 minutes in milliseconds
    maxPosts: 50
  },
  
  // SEO Configuration for External Content
  seo: {
    nofollowExternalLinks: true,
    addSourceAttribution: true,
    includeInSitemap: false // External content shouldn't be in your sitemap
  }
};

// Popular tech topics for content curation
export const popularTechTopics = [
  'react',
  'nodejs',
  'typescript',
  'javascript',
  'web-development',
  'frontend',
  'backend',
  'full-stack',
  'api',
  'database',
  'aws',
  'docker',
  'kubernetes',
  'microservices',
  'ai',
  'machine-learning',
  'blockchain',
  'cybersecurity',
  'devops',
  'mobile-development'
];

// Content quality filters
export const contentFilters = {
  minReadTime: 2, // Minimum read time in minutes
  maxReadTime: 30, // Maximum read time in minutes
  minLikes: 0, // Minimum likes/engagement
  excludeKeywords: ['spam', 'advertisement', 'promotion'], // Keywords to exclude
  includeKeywords: ['tutorial', 'guide', 'best-practices', 'tips'] // Preferred keywords
};

// Source-specific configurations
export const sourceConfigs = {
  devto: {
    name: 'Dev.to',
    icon: '🔷',
    color: 'bg-blue-100 text-blue-800',
    description: 'Developer community articles'
  },
  hashnode: {
    name: 'Hashnode',
    icon: '🔶',
    color: 'bg-purple-100 text-purple-800',
    description: 'Developer blogging platform'
  },
  medium: {
    name: 'Medium',
    icon: '📝',
    color: 'bg-green-100 text-green-800',
    description: 'Technology articles'
  },
  ghost: {
    name: 'Ghost',
    icon: '👻',
    color: 'bg-gray-100 text-gray-800',
    description: 'Professional blogging'
  },
  local: {
    name: 'SushilHub',
    icon: '🏠',
    color: 'bg-indigo-100 text-indigo-800',
    description: 'Original content'
  }
};
