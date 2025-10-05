// External Blog API Integration Service
import type { ExternalBlogPost } from '../types/externalBlogs';

// CORS Proxy Service
class CORSProxy {
  private static readonly PROXY_URLS = [
    'https://api.allorigins.win/raw?url=',
    'https://cors-anywhere.herokuapp.com/',
    'https://api.codetabs.com/v1/proxy?quest='
  ];
  
  static async fetchWithProxy(url: string): Promise<Response> {
    // Try direct fetch first
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response;
      }
    } catch (error) {
      // If direct fetch fails, try with proxy
    }
    
    // Try with different proxy services
    for (const proxyUrl of this.PROXY_URLS) {
      try {
        const proxyRequestUrl = proxyUrl + encodeURIComponent(url);
        const response = await fetch(proxyRequestUrl);
        if (response.ok) {
          return response;
        }
      } catch (error) {
        continue;
      }
    }
    
    throw new Error('All proxy attempts failed');
  }
}

// Re-export the type for backward compatibility
export type { ExternalBlogPost };

// Dev.to API Integration
export class DevToAPI {
  private baseUrl = 'https://dev.to/api';
  
  async getArticles(username?: string, tag?: string, limit: number = 10): Promise<ExternalBlogPost[]> {
    try {
      let url = `${this.baseUrl}/articles`;
      const params = new URLSearchParams();
      
      if (username) params.append('username', username);
      if (tag) params.append('tag', tag);
      params.append('per_page', limit.toString());
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      
      const response = await CORSProxy.fetchWithProxy(url);
      
      if (!response.ok) {
        throw new Error(`Dev.to API error: ${response.status} ${response.statusText}`);
      }
      
      const articles = await response.json();
      
      // Shuffle the articles to get different posts each time
      const shuffledArticles = this.shuffleArray([...articles]);
      const timestamp = Date.now();
      
      return shuffledArticles.map((article: any, index: number) => ({
        id: `devto-${index}-${timestamp}-${Math.random().toString(36).substr(2, 9)}`,
        title: article.title,
        excerpt: article.description || article.title,
        content: article.body_html,
        author: article.user.name,
        authorImage: article.user.profile_image_90,
        authorBio: article.user.summary,
        date: article.published_at,
        readTime: `${Math.ceil(article.reading_time_minutes)} min read`,
        tags: article.tag_list || [],
        featured: article.featured,
        category: 'Development',
        likes: article.public_reactions_count,
        comments: article.comments_count,
        views: article.page_views_count,
        image: article.cover_image || article.social_image,
        url: article.url,
        source: 'devto' as const,
        publishedAt: article.published_at
      }));
    } catch (error) {
      return [];
    }
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  async getPopularArticles(limit: number = 10): Promise<ExternalBlogPost[]> {
    return this.getArticles(undefined, undefined, limit);
  }
  
  async getArticlesByTag(tag: string, limit: number = 10): Promise<ExternalBlogPost[]> {
    return this.getArticles(undefined, tag, limit);
  }
}

// Hashnode API Integration (using RSS feed approach)
export class HashnodeAPI {
  private rss2jsonUrl = 'https://api.rss2json.com/v1/api.json';
  
  async getArticles(_publicationId?: string, limit: number = 10): Promise<ExternalBlogPost[]> {
    try {
      // Use Hashnode's public RSS feeds instead of GraphQL API
      const feeds = [
        'https://hashnode.com/n/react/rss.xml',
        'https://hashnode.com/n/javascript/rss.xml',
        'https://hashnode.com/n/webdev/rss.xml',
        'https://hashnode.com/n/programming/rss.xml',
        'https://hashnode.com/n/typescript/rss.xml',
        'https://hashnode.com/n/nodejs/rss.xml',
        'https://hashnode.com/n/frontend/rss.xml',
        'https://hashnode.com/n/backend/rss.xml'
      ];
      
      // Randomly select a feed and add timestamp for variety
      const randomFeed = feeds[Math.floor(Math.random() * feeds.length)];
      const timestamp = Date.now();
      const url = `${this.rss2jsonUrl}?rss_url=${encodeURIComponent(randomFeed)}&count=${limit}&timestamp=${timestamp}`;
      
      const response = await CORSProxy.fetchWithProxy(url);
      if (!response.ok) {
        throw new Error(`RSS fetch failed: ${response.status}`);
      }
      
      const data = await response.json();
      const items = data.items || [];
      
      // Shuffle the items to get different posts each time
      const shuffledItems = this.shuffleArray([...items]);
      
      return shuffledItems.map((item: any, index: number) => ({
        id: `hashnode-${index}-${timestamp}-${Math.random().toString(36).substr(2, 9)}`,
        title: item.title,
        excerpt: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
        content: this.cleanRSSContent(item.description),
        author: item.author || 'Hashnode Author',
        authorImage: undefined,
        authorBio: undefined,
        date: item.pubDate,
        readTime: '5 min read', // Estimated
        tags: ['hashnode', 'development'],
        featured: false,
        category: 'Development',
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 20),
        views: Math.floor(Math.random() * 1000),
        image: item.thumbnail,
        url: item.link,
        source: 'hashnode' as const,
        publishedAt: item.pubDate
      }));
    } catch (error) {
      return [];
    }
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  private cleanRSSContent(content: string): string {
    if (!content) return '';
    
    // Remove common RSS feed elements that cause duplicates
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    
    // Remove elements that typically contain duplicate information
    const elementsToRemove = [
      'h1', 'h2', // Remove headers that might duplicate the title
      '.post-title',
      '.article-title',
      '.entry-title',
      '.author-info',
      '.post-meta',
      '.article-meta',
      '.entry-meta',
      '.tags',
      '.post-tags',
      '.article-tags',
      '.entry-tags',
      // Remove non-working interactive elements
      'button',
      '.btn',
      '.button',
      '.submit',
      '.preview',
      '.comment',
      '.discussion',
      '.reply',
      '.like',
      '.share',
      '.follow',
      '.subscribe',
      '.newsletter',
      '.signup',
      '.login',
      '.register',
      '.code-of-conduct',
      '.report-abuse',
      '.add-to-discussion',
      '.comment-form',
      '.discussion-form',
      '.interaction-buttons',
      '.social-buttons',
      '.engagement-buttons'
    ];
    
    elementsToRemove.forEach(selector => {
      const elements = doc.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });
    
    // Remove any paragraphs that contain only author information or non-working features
    const paragraphs = doc.querySelectorAll('p');
    paragraphs.forEach(p => {
      const text = p.textContent?.toLowerCase() || '';
      if (text.includes('posted by') || 
          text.includes('author:') || 
          text.includes('by ') ||
          text.includes('add to discussion') ||
          text.includes('code of conduct') ||
          text.includes('report abuse') ||
          text.includes('submit') ||
          text.includes('preview')) {
        p.remove();
      }
    });
    
    // Remove non-working links
    const links = doc.querySelectorAll('a');
    links.forEach(link => {
      const text = link.textContent?.toLowerCase() || '';
      if (text.includes('comment') || 
          text.includes('discuss') || 
          text.includes('reply') || 
          text.includes('like') || 
          text.includes('share') ||
          text.includes('follow') ||
          text.includes('subscribe') ||
          text.includes('sign up') ||
          text.includes('login') ||
          text.includes('register') ||
          text.includes('code of conduct') ||
          text.includes('report abuse') ||
          text.includes('add to discussion')) {
        // Convert to plain text
        const textNode = doc.createTextNode(link.textContent || '');
        link.parentNode?.replaceChild(textNode, link);
      }
    });
    
    return doc.body.innerHTML;
  }
}

// Medium RSS Integration (using RSS2JSON proxy)
export class MediumAPI {
  private rss2jsonUrl = 'https://api.rss2json.com/v1/api.json';
  
  async getArticles(feedUrl: string, limit: number = 10): Promise<ExternalBlogPost[]> {
    try {
      const response = await CORSProxy.fetchWithProxy(`${this.rss2jsonUrl}?rss_url=${encodeURIComponent(feedUrl)}&count=${limit}`);
      const data = await response.json();
      
      if (!data.items) return [];
      
      // Shuffle the items to get different posts each time
      const shuffledItems = this.shuffleArray([...data.items]);
      const timestamp = Date.now();
      
      return shuffledItems.map((item: any, index: number) => ({
        id: `medium-${index}-${timestamp}-${Math.random().toString(36).substr(2, 9)}`,
        title: item.title,
        excerpt: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
        content: this.cleanRSSContent(item.description),
        author: item.author,
        authorImage: undefined,
        authorBio: undefined,
        date: item.pubDate,
        readTime: '5 min read', // Medium doesn't provide read time in RSS
        tags: item.categories || [],
        featured: false,
        category: 'Technology',
        likes: 0,
        comments: 0,
        views: 0,
        image: item.thumbnail,
        url: item.link,
        source: 'medium' as const,
        publishedAt: item.pubDate
      }));
    } catch (error) {
      return [];
    }
  }

  private cleanRSSContent(content: string): string {
    if (!content) return '';
    
    // Remove common RSS feed elements that cause duplicates
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    
    // Remove elements that typically contain duplicate information
    const elementsToRemove = [
      'h1', 'h2', // Remove headers that might duplicate the title
      '.post-title',
      '.article-title',
      '.entry-title',
      '.author-info',
      '.post-meta',
      '.article-meta',
      '.entry-meta',
      '.tags',
      '.post-tags',
      '.article-tags',
      '.entry-tags',
      // Remove non-working interactive elements
      'button',
      '.btn',
      '.button',
      '.submit',
      '.preview',
      '.comment',
      '.discussion',
      '.reply',
      '.like',
      '.share',
      '.follow',
      '.subscribe',
      '.newsletter',
      '.signup',
      '.login',
      '.register',
      '.code-of-conduct',
      '.report-abuse',
      '.add-to-discussion',
      '.comment-form',
      '.discussion-form',
      '.interaction-buttons',
      '.social-buttons',
      '.engagement-buttons'
    ];
    
    elementsToRemove.forEach(selector => {
      const elements = doc.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });
    
    // Remove any paragraphs that contain only author information or non-working features
    const paragraphs = doc.querySelectorAll('p');
    paragraphs.forEach(p => {
      const text = p.textContent?.toLowerCase() || '';
      if (text.includes('posted by') || 
          text.includes('author:') || 
          text.includes('by ') ||
          text.includes('add to discussion') ||
          text.includes('code of conduct') ||
          text.includes('report abuse') ||
          text.includes('submit') ||
          text.includes('preview')) {
        p.remove();
      }
    });
    
    // Remove non-working links
    const links = doc.querySelectorAll('a');
    links.forEach(link => {
      const text = link.textContent?.toLowerCase() || '';
      if (text.includes('comment') || 
          text.includes('discuss') || 
          text.includes('reply') || 
          text.includes('like') || 
          text.includes('share') ||
          text.includes('follow') ||
          text.includes('subscribe') ||
          text.includes('sign up') ||
          text.includes('login') ||
          text.includes('register') ||
          text.includes('code of conduct') ||
          text.includes('report abuse') ||
          text.includes('add to discussion')) {
        // Convert to plain text
        const textNode = doc.createTextNode(link.textContent || '');
        link.parentNode?.replaceChild(textNode, link);
      }
    });
    
    return doc.body.innerHTML;
  }
  
  async getPopularTechArticles(limit: number = 10): Promise<ExternalBlogPost[]> {
    // Use working Medium RSS feeds
    const feeds = [
      'https://medium.com/feed/@freecodecamp',
      'https://medium.com/feed/@javascriptdaily',
      'https://medium.com/feed/@reactjs',
      'https://medium.com/feed/@nodejs',
      'https://medium.com/feed/@typescript',
      'https://medium.com/feed/@webdev',
      'https://medium.com/feed/@programming',
      'https://medium.com/feed/@frontend'
    ];
    
    const randomFeed = feeds[Math.floor(Math.random() * feeds.length)];
    return this.getArticles(randomFeed, limit);
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  async getReactArticles(limit: number = 10): Promise<ExternalBlogPost[]> {
    return this.getArticles('https://medium.com/feed/topic/react', limit);
  }
  
  async getJavaScriptArticles(limit: number = 10): Promise<ExternalBlogPost[]> {
    return this.getArticles('https://medium.com/feed/topic/javascript', limit);
  }
}

// Main External Blog Service
export class ExternalBlogService {
  private devToAPI: DevToAPI;
  private hashnodeAPI: HashnodeAPI;
  private mediumAPI: MediumAPI;
  
  constructor() {
    this.devToAPI = new DevToAPI();
    this.hashnodeAPI = new HashnodeAPI();
    this.mediumAPI = new MediumAPI();
  }
  
  async getAllExternalPosts(limit: number = 20): Promise<ExternalBlogPost[]> {
    try {
      const [devToPosts, hashnodePosts, mediumPosts] = await Promise.all([
        this.devToAPI.getPopularArticles(Math.ceil(limit / 3)),
        this.hashnodeAPI.getArticles(undefined, Math.ceil(limit / 3)),
        this.mediumAPI.getPopularTechArticles(Math.ceil(limit / 3))
      ]);
      
      const allPosts = [...devToPosts, ...hashnodePosts, ...mediumPosts];
      
      // Sort by published date (newest first)
      const sortedPosts = allPosts.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ).slice(0, limit);
      
      return sortedPosts;
    } catch (error) {
      return [];
    }
  }
  
  async getPostsByTopic(topic: string, limit: number = 10): Promise<ExternalBlogPost[]> {
    try {
      const [devToPosts, mediumPosts] = await Promise.all([
        this.devToAPI.getArticlesByTag(topic, Math.ceil(limit / 2)),
        this.mediumAPI.getArticles(`https://medium.com/feed/topic/${topic}`, Math.ceil(limit / 2))
      ]);
      
      const allPosts = [...devToPosts, ...mediumPosts];
      
      return allPosts.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ).slice(0, limit);
    } catch (error) {
      console.error('Error fetching posts by topic:', error);
      return [];
    }
  }
  
  async getReactPosts(limit: number = 10): Promise<ExternalBlogPost[]> {
    return this.getPostsByTopic('react', limit);
  }
  
  async getNodeJSPosts(limit: number = 10): Promise<ExternalBlogPost[]> {
    return this.getPostsByTopic('nodejs', limit);
  }
  
  async getTypeScriptPosts(limit: number = 10): Promise<ExternalBlogPost[]> {
    return this.getPostsByTopic('typescript', limit);
  }

  async getPostById(id: string): Promise<ExternalBlogPost | null> {
    try {
      // First, try to find the post in our cached data
      const allPosts = await this.getAllExternalPosts(100);
      const foundPost = allPosts.find(post => post.id === id);
      
      if (foundPost) {
        return foundPost;
      }
      
      return null;
    } catch (error) {
      return null;
    }
  }

  async fetchPostContent(post: ExternalBlogPost): Promise<string> {
    try {
      // For Dev.to posts, we already have the content
      if (post.source === 'devto' && post.content) {
        return this.cleanContent(post.content, post);
      }
      
      // For other sources, we might need to fetch from the original URL
      // This is a simplified approach - in a real app, you might want to use a proxy
      if (post.url) {
        const response = await fetch(post.url);
        if (response.ok) {
          const html = await response.text();
          // Extract content from HTML (simplified)
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const content = doc.querySelector('article') || doc.querySelector('.post-content') || doc.querySelector('main');
          return content ? this.cleanContent(content.innerHTML, post) : '';
        }
      }
      
      return '';
    } catch (error) {
      return '';
    }
  }

  private cleanContent(htmlContent: string, post: ExternalBlogPost): string {
    // Create a temporary DOM element to parse and clean the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    
    // Remove duplicate elements that we're already showing in our component
    const elementsToRemove = [
      'h1', // Remove duplicate titles
      '.post-title',
      '.article-title',
      '.entry-title',
      '.author-info',
      '.post-meta',
      '.article-meta',
      '.entry-meta',
      '.tags',
      '.post-tags',
      '.article-tags',
      '.entry-tags',
      '.post-header',
      '.article-header',
      '.entry-header'
    ];
    
    elementsToRemove.forEach(selector => {
      const elements = doc.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });
    
    // Remove non-working buttons and interactive elements
    const nonWorkingElements = [
      'button',
      '.btn',
      '.button',
      '.submit',
      '.preview',
      '.comment',
      '.discussion',
      '.reply',
      '.like',
      '.share',
      '.follow',
      '.subscribe',
      '.newsletter',
      '.signup',
      '.login',
      '.register',
      '.code-of-conduct',
      '.report-abuse',
      '.add-to-discussion',
      '.comment-form',
      '.discussion-form',
      '.interaction-buttons',
      '.social-buttons',
      '.engagement-buttons'
    ];
    
    nonWorkingElements.forEach(selector => {
      const elements = doc.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });
    
    // Remove links that don't work in our context
    const links = doc.querySelectorAll('a');
    links.forEach(link => {
      const text = link.textContent?.toLowerCase() || '';
      
      // Remove links to non-working features
      if (text.includes('comment') || 
          text.includes('discuss') || 
          text.includes('reply') || 
          text.includes('like') || 
          text.includes('share') ||
          text.includes('follow') ||
          text.includes('subscribe') ||
          text.includes('sign up') ||
          text.includes('login') ||
          text.includes('register') ||
          text.includes('code of conduct') ||
          text.includes('report abuse') ||
          text.includes('add to discussion')) {
        // Convert to plain text
        const textNode = doc.createTextNode(link.textContent || '');
        link.parentNode?.replaceChild(textNode, link);
      }
    });
    
    // Also remove any h1 elements that might contain the title
    const h1Elements = doc.querySelectorAll('h1');
    h1Elements.forEach(h1 => {
      // If the h1 contains the same text as our title, remove it
      if (h1.textContent?.trim().toLowerCase() === post.title?.toLowerCase()) {
        h1.remove();
      }
    });
    
    // Remove any duplicate author information
    const authorElements = doc.querySelectorAll('*');
    authorElements.forEach(el => {
      if (el.textContent?.includes(post.author || '') && 
          (el.tagName === 'P' || el.tagName === 'DIV' || el.tagName === 'SPAN')) {
        el.remove();
      }
    });
    
    // Remove duplicate images (keep only the first one if it's the same as our featured image)
    const images = doc.querySelectorAll('img');
    images.forEach((img, index) => {
      if (index > 0 && img.src === post.image) {
        img.remove();
      }
    });
    
    return doc.body.innerHTML;
  }
}

// Export singleton instance
export const externalBlogService = new ExternalBlogService();
