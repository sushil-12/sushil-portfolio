import { seoConfig } from './seo';
import { caseStudies } from '../data/caseStudies';
import { blogPosts } from '../data/blogPosts';

// Generate sitemap data for better SEO
export const generateSitemapData = () => {
  const baseUrl = seoConfig.siteUrl;
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    }
  ];

  // Add project pages
  const projectPages = caseStudies.map(project => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  }));

  // Add blog post pages
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastmod: new Date(post.date).toISOString(),
    changefreq: 'monthly',
    priority: '0.7'
  }));

  return [...staticPages, ...projectPages, ...blogPages];
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${seoConfig.siteUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /blog/
Allow: /projects/
Allow: /about
Allow: /contact
Allow: /services`;
};

// Generate meta tags for better SEO
export const generateMetaTags = (page: string, data?: any) => {
  const baseUrl = seoConfig.siteUrl;
  
  switch (page) {
    case 'homepage':
      return {
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords,
        canonical: baseUrl,
        ogImage: `${baseUrl}${seoConfig.ogImage}`,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sushil Kumar",
          "jobTitle": "Full Stack Developer & Software Engineer",
          "description": "Developer of 1800limo.com limousine booking platform and other enterprise solutions",
          "url": baseUrl,
          "sameAs": seoConfig.structuredData.sameAs
        }
      };

    case 'project':
      const project = caseStudies.find(p => p.id === data?.id);
      if (!project) return {};
      
      return {
        title: `${project.title} | Sushil Hub - Full Stack Developer`,
        description: project.overview,
        keywords: project.seoKeywords?.join(', ') || project.technologies.join(', '),
        canonical: `${baseUrl}/projects/${project.id}`,
        ogImage: `${baseUrl}${project.heroImage}`,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.overview,
          "url": project.liveUrl,
          "creator": {
            "@type": "Person",
            "name": "Sushil Kumar",
            "url": baseUrl
          }
        }
      };

    case 'blog':
      return {
        title: `Blog | Sushil Hub - Technical Articles & Insights`,
        description: "Technical articles and insights on web development, React, Node.js, TypeScript, and modern technologies by Sushil Kumar",
        keywords: "React blog, Node.js articles, TypeScript tutorials, web development insights, Sushil Hub blog",
        canonical: `${baseUrl}/blog`,
        ogImage: `${baseUrl}${seoConfig.ogImage}`
      };

    case 'blog-post':
      const post = blogPosts.find(p => p.id === data?.id);
      if (!post) return {};
      
      return {
        title: `${post.title} | Sushil Hub Blog`,
        description: post.excerpt,
        keywords: post.tags.join(', '),
        canonical: `${baseUrl}/blog/${post.id}`,
        ogImage: `${baseUrl}${seoConfig.ogImage}`,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "url": `${baseUrl}/blog/${post.id}`,
          "datePublished": post.date,
          "author": {
            "@type": "Person",
            "name": "Sushil Kumar",
            "url": baseUrl
          }
        }
      };

    default:
      return {};
  }
};
