// SEO Configuration - Easy to customize for your portfolio
export const seoConfig = {
  // Basic SEO
  title: "Sushil Kumar - Full Stack Developer & Software Engineer",
  description: "Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Building scalable applications and digital solutions.",
  keywords: "Sushil Kumar, Full Stack Developer, React Developer, Node.js, TypeScript, JavaScript, Web Development, Software Engineer, Portfolio, Frontend, Backend, Mobile Development",
  
  // Site Information
  siteName: "Sushil Kumar Portfolio",
  siteUrl: "https://sushilhub.com",
  author: "Sushil Kumar",
  
  // Contact Information
  email: "hello@sushilhub.com",
  
  // Social Media
  twitterHandle: "@sushilhub", // Update with your actual Twitter handle
  linkedinUrl: "https://linkedin.com/in/sushilhub", // Update with your actual LinkedIn
  
  // Images
  favicon: "/favicon.ico",
  ogImage: "/og-image.jpg", // 1200x630px recommended
  twitterImage: "/og-image.jpg",
  
  // Analytics
  googleAnalyticsId: "G-K1VM6TBZF6", // Your GA4 Measurement ID
  vercelAnalytics: true, // Set to false if you don't want Vercel Analytics
  
  // Additional Meta
  language: "en",
  locale: "en_US",
  themeColor: "#3B82F6", // Your brand color
  backgroundColor: "#FFFFFF",
  
  // Structured Data
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sushil Kumar",
    "jobTitle": "Full Stack Developer",
    "description": "Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies.",
    "url": "https://sushilhub.com",
    "email": "hello@sushilhub.com",
    "sameAs": [
      "https://linkedin.com/in/sushilhub",
      "https://github.com/sushilhub"
    ],
    "knowsAbout": [
      "React",
      "Node.js", 
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Software Engineering"
    ]
  }
};

// Helper function to generate page-specific titles
export const generatePageTitle = (pageTitle?: string) => {
  return pageTitle ? `${pageTitle} | ${seoConfig.title}` : seoConfig.title;
};

// Helper function to generate page-specific descriptions
export const generatePageDescription = (pageDescription?: string) => {
  return pageDescription || seoConfig.description;
};
