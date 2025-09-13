// Structured Data for Better AI Overview Visibility
export const generateStructuredData = (page: string, data?: any) => {
  const baseUrl = 'https://sushilhub.com';
  const currentDate = new Date().toISOString();

  switch (page) {
    case 'homepage':
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Sushil Kumar",
        "jobTitle": "Full Stack Developer & Software Engineer",
        "description": "Full Stack Developer specializing in React.js, Node.js, Next.js, TypeScript, and AWS. Building scalable web applications and modern digital solutions.",
        "url": baseUrl,
        "image": `${baseUrl}/src/assets/dark-logo.png`,
        "sameAs": [
          "https://github.com/sushilkumar",
          "https://linkedin.com/in/sushilkumar",
          "https://twitter.com/sushilkumar"
        ],
        "knowsAbout": [
          "React.js",
          "Node.js", 
          "Next.js",
          "TypeScript",
          "JavaScript",
          "AWS",
          "Full Stack Development",
          "Web Development",
          "Software Engineering",
          "Frontend Development",
          "Backend Development"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Developer",
          "description": "Developing end-to-end web applications using modern technologies"
        },
        "alumniOf": {
          "@type": "Organization",
          "name": "Sushil Hub"
        }
      };

    case 'blog':
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Sushil Hub Blog",
        "description": "Technical blog about web development, React, TypeScript, and software engineering best practices",
        "url": `${baseUrl}/blog`,
        "author": {
          "@type": "Person",
          "name": "Sushil Kumar",
          "url": baseUrl
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sushil Hub",
          "url": baseUrl
        },
        "inLanguage": "en-US",
        "dateModified": currentDate
      };

    case 'blog-post':
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data.title,
        "description": data.excerpt,
        "image": data.image ? `${baseUrl}${data.image}` : `${baseUrl}/src/assets/dark-logo.png`,
        "datePublished": data.date,
        "dateModified": data.date,
        "author": {
          "@type": "Person",
          "name": "Sushil Kumar",
          "url": baseUrl
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sushil Hub",
          "url": baseUrl
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseUrl}/blog/${data.id}`
        },
        "articleSection": data.category,
        "keywords": data.tags.join(', '),
        "wordCount": data.content.split(' ').length,
        "timeRequired": data.readTime,
        "inLanguage": "en-US"
      };

    case 'about':
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Sushil Kumar - Full Stack Developer",
        "description": "Learn about Sushil Kumar's journey as a Full Stack Developer, his expertise in modern web technologies, and his passion for building innovative digital solutions.",
        "url": `${baseUrl}/about`,
        "mainEntity": {
          "@type": "Person",
          "name": "Sushil Kumar",
          "jobTitle": "Full Stack Developer & Software Engineer",
          "description": "Passionate full-stack developer with expertise in React.js, Node.js, TypeScript, and AWS. Building scalable web applications and modern digital solutions.",
          "knowsAbout": [
            "React.js",
            "Node.js",
            "TypeScript", 
            "JavaScript",
            "AWS",
            "Full Stack Development",
            "Web Development",
            "Software Engineering"
          ]
        }
      };

    case 'services':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Full Stack Web Development Services",
        "description": "Professional web development services including React.js applications, Node.js backends, TypeScript development, and AWS deployment solutions.",
        "provider": {
          "@type": "Person",
          "name": "Sushil Kumar",
          "url": baseUrl
        },
        "serviceType": "Web Development",
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": `${baseUrl}/contact`
        },
        "offers": {
          "@type": "Offer",
          "description": "Full Stack Web Development Services",
          "priceCurrency": "USD"
        }
      };

    default:
      return null;
  }
};

// Generate JSON-LD script tag
export const generateJsonLdScript = (structuredData: any) => {
  return {
    __html: JSON.stringify(structuredData, null, 2)
  };
};
