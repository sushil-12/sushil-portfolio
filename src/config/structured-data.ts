import { seoConfig } from './seo';
import { caseStudies } from '../data/caseStudies';

// Generate structured data for different page types
export const generateStructuredData = (pageType: string, data?: any) => {
  const baseStructuredData = {
    ...seoConfig.structuredData
  };

  switch (pageType) {
    case 'homepage':
      return {
        ...baseStructuredData,
        "@type": "Person",
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Developer",
          "description": "Developing web applications and digital solutions for enterprises and startups"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Sushil Hub",
          "url": "https://sushilhub.com",
          "sameAs": [
            "https://www.linkedin.com/company/sushilhub/"
          ]
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Full Stack Development",
            "description": "React, Node.js, TypeScript, JavaScript expertise"
          }
        ]
      };

    case 'blog':
      return {
        ...baseStructuredData,
        "@type": "Blog",
        "name": "Sushil Hub Blog",
        "description": "Technical articles and insights on web development, React, Node.js, and modern technologies",
        "url": "https://sushilhub.com/blog",
        "author": {
          "@type": "Person",
          "name": "Sushil Kumar",
          "url": "https://sushilhub.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sushil Hub",
          "url": "https://sushilhub.com"
        }
      };

    case 'blog-post':
      return {
        ...baseStructuredData,
        "@type": "BlogPosting",
        "headline": data?.title || "Blog Post",
        "description": data?.description || "Technical article by Sushil Kumar",
        "url": data?.url || "https://sushilhub.com/blog",
        "datePublished": data?.datePublished || new Date().toISOString(),
        "dateModified": data?.dateModified || new Date().toISOString(),
        "author": {
          "@type": "Person",
          "name": "Sushil Kumar",
          "url": "https://sushilhub.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sushil Hub",
          "url": "https://sushilhub.com"
        }
      };

    case 'about':
      return {
        ...baseStructuredData,
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Person",
          "name": "Sushil Kumar",
          "jobTitle": "Full Stack Developer & Software Engineer",
          "description": "Experienced developer specializing in React, Node.js, TypeScript, and modern web technologies. Developer of 1800limo.com and other enterprise solutions.",
          "url": "https://sushilhub.com",
          "sameAs": seoConfig.structuredData.sameAs
        }
      };

    case 'services':
      return {
        ...baseStructuredData,
        "@type": "Service",
        "name": "Full Stack Development Services",
        "description": "Professional web development services including React, Node.js, TypeScript, and modern web technologies",
        "provider": {
          "@type": "Person",
          "name": "Sushil Kumar",
          "url": "https://sushilhub.com"
        },
        "serviceType": "Web Development",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "React Development",
                "description": "Custom React applications and components"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Node.js Backend Development",
                "description": "Scalable server-side applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Stack Solutions",
                "description": "Complete web application development"
              }
            }
          ]
        }
      };

    case 'contact':
      return {
        ...baseStructuredData,
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "Person",
          "name": "Sushil Kumar",
          "email": seoConfig.email,
          "url": "https://sushilhub.com",
          "sameAs": seoConfig.structuredData.sameAs
        }
      };

    default:
      return baseStructuredData;
  }
};

// Generate structured data for projects/case studies
export const generateProjectStructuredData = (projectId: string) => {
  const project = caseStudies.find(p => p.id === projectId);
  if (!project) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.overview,
    "url": project.liveUrl,
    "creator": {
      "@type": "Person",
      "name": "Sushil Kumar",
      "url": "https://sushilhub.com"
    },
    "dateCreated": "2023-01-01", // You can add actual dates to case studies
    "keywords": project.technologies.join(", "),
    "about": {
      "@type": "Thing",
      "name": project.tagline
    },
    "workExample": {
      "@type": "SoftwareApplication",
      "name": project.title,
      "url": project.liveUrl,
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser"
    }
  };
};

// Generate organization structured data for SushilHub
export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SushilHub",
    "alternateName": "Sushil Hub",
    "url": "https://sushilhub.com",
    "logo": "https://sushilhub.com/light-logo.png",
    "description": "Professional software development company specializing in React, Node.js, TypeScript, and modern web technologies. Developer of 1800limo.com limousine booking platform and enterprise solutions.",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Sushil Kumar",
      "jobTitle": "Full Stack Developer & Software Engineer",
      "url": "https://sushilhub.com",
      "sameAs": [
        "https://linkedin.com/in/sushil-maurya-6256b4154/",
        "https://github.com/sushil-12"
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/sushilhub/",
      "https://linkedin.com/in/sushil-maurya-6256b4154/",
      "https://github.com/sushil-12"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": seoConfig.email,
      "contactType": "Business Inquiries",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "React Development",
      "Node.js Development", 
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Full Stack Development",
      "Limousine Booking Systems",
      "Transportation Technology",
      "E-commerce Development",
      "AI Development",
      "WordPress VIP",
      "Limo Booking",
      "Software Development",
      "Digital Solutions",
      "Corporate Travel",
      "Luxury Transportation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transportation Technology Development",
            "description": "Custom limousine booking platforms and transportation management systems like 1800limo.com"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Web Development",
            "description": "React, Node.js, TypeScript applications for enterprises and startups"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "E-commerce Solutions",
            "description": "Custom e-commerce platforms and online marketplaces"
          }
        }
      ]
    }
  };
};