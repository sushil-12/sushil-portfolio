// SEO Configuration - Optimized for "Sushil Hub" branding
export const seoConfig = {
  // Basic SEO - Updated for "Sushil Hub" branding
  title: "Sushil Hub - Full Stack Developer & Software Engineer | React, Node.js, TypeScript Expert",
  description: "Sushil Hub - Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Building scalable applications and digital solutions for enterprises and startups.",
  keywords: "Sushil Hub, Sushil Kumar, Full Stack Developer, React Developer, Node.js, TypeScript, JavaScript, Web Development, Software Engineer, Portfolio, Frontend, Backend, Mobile Development, Sushil Hub Portfolio, React Expert, Node.js Expert",
  
  // Site Information - Updated branding
  siteName: "Sushil Hub",
  siteUrl: "https://sushilhub.com",
  author: "Sushil Kumar",
  
  // Contact Information
  email: "developer.er.sushil@gmail.com", // Updated to actual email
  
  // Social Media - Update with actual handles
  twitterHandle: "@sushilhub",
  linkedinUrl: "https://linkedin.com/in/sushil-maurya-6256b4154/", // Your actual LinkedIn
  githubUrl: "https://github.com/sushil-12", // Your actual GitHub
  
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
  
  // Structured Data - Updated for "Sushil Hub"
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sushil Kumar",
    "alternateName": "Sushil Hub",
    "jobTitle": "Full Stack Developer & Software Engineer",
    "description": "Sushil Hub - Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Building scalable applications and digital solutions.",
    "url": "https://sushilhub.com",
    "email": "developer.er.sushil@gmail.com",
    "sameAs": [
      "https://linkedin.com/in/sushil-maurya-6256b4154/",
      "https://github.com/sushil-12"
    ],
    "knowsAbout": [
      "React",
      "Node.js", 
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Software Engineering",
      "Full Stack Development"
    ]
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