// SEO Configuration - Optimized for "Sushil Hub" branding with enhanced 1800limo visibility
export const seoConfig = {
  // Basic SEO - Enhanced for better search visibility
  title: "SushilHub - Full Stack Developer & Software Engineer | React, Node.js, TypeScript Expert | 1800limo Developer",
  description: "SushilHub - Professional software development company specializing in React, Node.js, TypeScript, and modern web technologies. Developer of 1800limo.com limousine booking platform, WPVIP.com, and enterprise solutions. Building scalable digital solutions for transportation, e-commerce, and business applications.",
  keywords: "SushilHub, Sushil Kumar, Full Stack Developer, React Developer, Node.js, TypeScript, JavaScript, Web Development, Software Engineer, Portfolio, Frontend, Backend, Mobile Development, 1800limo, limo booking, SushilHub, software development, LinkedIn company page, digital solutions, limousine booking platform, WPVIP, WPVIP.com, WordPress VIP, GitMate, AI development, Meta Business Hub, Vetted, contractor management, transportation technology, limo booking system, luxury transportation, corporate travel, transportation booking platform",
  
  // Site Information - Updated branding
  siteName: "SushilHub",
  siteUrl: "https://sushilhub.com",
  author: "Sushil Kumar",
  
  // Contact Information
  email: "developer.er.sushil@gmail.com",
  
  // Social Media - Updated with company LinkedIn
  twitterHandle: "@sushilhub",
  linkedinUrl: "https://linkedin.com/in/sushil-maurya-6256b4154/",
  linkedinCompanyUrl: "https://www.linkedin.com/company/sushilhub/",
  githubUrl: "https://github.com/sushil-12",
  
  // Images
  favicon: "/favicon.ico",
  ogImage: "/og-image.jpg",
  twitterImage: "/og-image.jpg",
  
  // Analytics
  googleAnalyticsId: "G-K1VM6TBZF6",
  vercelAnalytics: true,
  
  // Additional Meta
  language: "en",
  locale: "en_US",
  themeColor: "#3B82F6",
  backgroundColor: "#FFFFFF",
  
  // Enhanced Structured Data for better SEO
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sushil Kumar",
    "alternateName": "Sushil Hub",
    "jobTitle": "Full Stack Developer & Software Engineer",
    "description": "Sushil Hub - Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Developer of 1800limo.com limousine booking platform and other enterprise solutions.",
    "url": "https://sushilhub.com",
    "email": "developer.er.sushil@gmail.com",
    "sameAs": [
      "https://linkedin.com/in/sushil-maurya-6256b4154/",
      "https://www.linkedin.com/company/sushilhub/",
      "https://github.com/sushil-12"
    ],
    "knowsAbout": [
      "React",
      "Node.js", 
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Software Engineering",
      "Full Stack Development",
      "Limousine Booking Systems",
      "Transportation Technology",
      "E-commerce Development",
      "AI Development",
      "WordPress VIP"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Developing web applications and digital solutions for enterprises and startups"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Software Development"
    }
  }
};

// Helper function to generate page-specific titles
export const generatePageTitle = (pageTitle?: string) => {
  return pageTitle ? `${pageTitle} | Sushil Hub` : seoConfig.title;
};

// Helper function to generate page-specific descriptions
export const generatePageDescription = (pageDescription?: string) => {
  return pageDescription || seoConfig.description;
};