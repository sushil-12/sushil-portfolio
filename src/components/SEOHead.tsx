import { useEffect } from 'react';
import { seoConfig } from '../config/seo';
import { generateStructuredData } from '../config/structured-data';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  pageType?: 'homepage' | 'blog' | 'blog-post' | 'about' | 'services' | 'contact';
  structuredData?: any;
}

const SEOHead = ({ 
  title, 
  description, 
  ogImage, 
  canonicalUrl,
  noIndex = false,
  pageType = 'homepage',
  structuredData
}: SEOHeadProps) => {
  const pageTitle = title ? `${title} | ${seoConfig.title}` : seoConfig.title;
  const pageDescription = description || seoConfig.description;
  const pageOgImage = ogImage || seoConfig.ogImage;
  const pageUrl = canonicalUrl || seoConfig.siteUrl;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic SEO Meta Tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', seoConfig.keywords);
    updateMetaTag('author', seoConfig.author);
    updateMetaTag('robots', noIndex ? 'noindex,nofollow' : 'index,follow');
    updateMetaTag('language', seoConfig.language);
    updateMetaTag('revisit-after', '7 days');

    // Open Graph Meta Tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', `${seoConfig.siteUrl}${pageOgImage}`, true);
    updateMetaTag('og:url', pageUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', seoConfig.siteName, true);
    updateMetaTag('og:locale', seoConfig.locale, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', pageTitle, true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', seoConfig.twitterHandle);
    updateMetaTag('twitter:creator', seoConfig.twitterHandle);
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', `${seoConfig.siteUrl}${pageOgImage}`);
    updateMetaTag('twitter:image:alt', pageTitle);

    // Additional Meta Tags
    updateMetaTag('theme-color', seoConfig.themeColor);
    updateMetaTag('msapplication-TileColor', seoConfig.themeColor);
    updateMetaTag('apple-mobile-web-app-title', seoConfig.siteName);
    updateMetaTag('application-name', seoConfig.siteName);
    
    // LinkedIn Company Page
    updateMetaTag('linkedin:company', seoConfig.linkedinCompanyUrl);
    updateMetaTag('linkedin:profile', seoConfig.linkedinUrl);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    // Structured Data
    const pageStructuredData = structuredData || generateStructuredData(pageType, { title, description, ...structuredData });
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(pageStructuredData);

  }, [pageTitle, pageDescription, pageOgImage, pageUrl, noIndex]);

  return null; // This component doesn't render anything
};

export default SEOHead;
