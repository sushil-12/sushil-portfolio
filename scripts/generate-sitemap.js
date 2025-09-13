import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Blog posts data (hardcoded for now since we can't easily import TS in Node)
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Modern Architecture",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends to Watch in 2024",
    date: "2024-01-10"
  },
  {
    id: 3,
    title: "Mastering TypeScript: Advanced Patterns and Techniques",
    date: "2024-01-05"
  }
];

// Base URL for your site
const baseUrl = 'https://sushilhub.com';

// Current date in YYYY-MM-DD format
const currentDate = new Date().toISOString().split('T')[0];

// Generate sitemap XML
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Blog Section -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Individual Blog Posts -->`;

  // Add each blog post to sitemap
  blogPosts.forEach(post => {
    const postDate = new Date(post.date).toISOString().split('T')[0];
    sitemap += `
  <url>
    <loc>${baseUrl}/blog/${post.id}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
const sitemapContent = generateSitemap();
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

fs.writeFileSync(sitemapPath, sitemapContent);
console.log('✅ Sitemap generated successfully!');
console.log(`📄 Sitemap saved to: ${sitemapPath}`);
console.log(`🔗 Sitemap URL: ${baseUrl}/sitemap.xml`);
