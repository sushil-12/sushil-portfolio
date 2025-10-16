export const chatbotDataset = {
  personalInfo: {
    name: "Sushil",
    role: "Full-Stack Developer & AI Integration Specialist",
    experience: "5+ years",
    location: "Remote/Global",
    specialties: [
      "React.js & Next.js Development",
      "Node.js & Laravel Backend",
      "AI/ML Integration & Chatbots",
      "WordPress & Custom Plugins",
      "E-commerce Solutions",
      "Real-time Applications",
      "Mobile App Development",
      "API Development & Integration"
    ],
    bio: "I'm a passionate full-stack developer with 5+ years of experience building scalable web applications, AI-powered solutions, and custom software. I specialize in modern JavaScript frameworks, backend development, and integrating AI technologies to solve complex business problems."
  },
  
  projects: {
    featured: [
      {
        name: "WPVIP.com",
        description: "Official WordPress VIP platform website with custom plugins, Gutenberg blocks, and enterprise solutions",
        tech: ["WordPress", "PHP", "Gutenberg", "Custom Plugins", "WordPress VIP"],
        url: "https://wpvip.com",
        duration: "8 months",
        role: "Lead Frontend Developer",
        results: "95+ Lighthouse performance score, 100% client satisfaction"
      },
      {
        name: "1800LIMO.com",
        description: "Premium limousine booking platform with real-time communication, payment processing, and fleet management",
        tech: ["Angular", "Laravel", "Node.js", "WebSockets", "MySQL", "Stripe API"],
        url: "https://1800limo.com",
        duration: "3 years",
        role: "Senior Developer & Project Manager",
        results: "40% increase in bookings, 60% revenue growth, 4.8/5 customer rating"
      },
      {
        name: "GitMate",
        description: "AI-powered Git operations tool with intelligent commit messages and automated git assistance",
        tech: ["Node.js", "React.js", "OpenAI API", "Git API", "TypeScript"],
        url: "https://gitmate.com",
        duration: "4 months",
        role: "Lead Developer & Product Owner",
        results: "2.5h time saved per developer/week, 85% adoption rate, 4.9/5 rating"
      },
      {
        name: "Meta Business Hub",
        description: "Custom hub and workspace management platform replacing third-party dependency with scalable in-house solution",
        tech: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "AWS", "Stripe API"],
        url: "https://meta.com/business-hub",
        duration: "8 months",
        role: "Next.js Developer",
        results: "70% cost reduction, 100% customization control, 2x user growth"
      },
      {
        name: "Vetted",
        description: "Contractor workforce and compliance management platform with security and health & safety features",
        tech: ["React.js", "Node.js", "PostgreSQL", "AWS S3", "DocuSign API"],
        url: "https://vetted.com",
        duration: "7 months",
        role: "Project Manager & Full-Stack Developer",
        results: "95% compliance accuracy, 80% faster agreement handling, 40% cost reduction"
      }
    ],
    personal: [
      {
        name: "pups4sale",
        description: "Full-stack e-commerce platform for pet sales with advanced features and payment processing",
        tech: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL", "Stripe"],
        url: "https://dev.pups4sale.com.au/",
        duration: "5 months",
        results: "$50K+ monthly transactions, 300% user growth, 12% conversion rate"
      },
      {
        name: "Witlingo Audio Station",
        description: "Modern audio streaming platform with playlist management and social sharing",
        tech: ["Next.js", "React.js", "Node.js", "MongoDB", "AWS S3", "Web Audio API"],
        url: "https://witlingo-audio.com",
        duration: "3 months",
        results: "4.2h average session, 1000+ monthly uploads, 99.5% uptime"
      },
      {
        name: "LLM Based Chatbot",
        description: "AI-powered conversational assistant with context awareness and multi-platform integration",
        tech: ["Node.js", "React.js", "OpenAI API", "LangChain", "WebSocket"],
        url: "https://llm-chatbot.com",
        duration: "4 months",
        results: "92% response accuracy, 4.6/5 rating, 88% conversation success rate"
      }
    ]
  },

  domains: [
    "E-commerce & Marketplaces",
    "Transportation & Logistics", 
    "AI/ML & Chatbots",
    "Enterprise CMS & WordPress",
    "Real-time Applications",
    "Mobile App Development",
    "API Development",
    "Workforce Management",
    "Audio Streaming Platforms",
    "Business Hub Solutions"
  ],

  technologies: {
    frontend: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Laravel", "NestJS", "Express.js", "PHP", "Python"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    cloud: ["AWS", "Docker", "Vercel", "Heroku"],
    ai: ["OpenAI API", "LangChain", "Gemini API", "Custom LLM Integration"],
    payments: ["Stripe", "PayPal", "Razorpay"],
    realtime: ["WebSockets", "Socket.io", "Pusher"],
    mobile: ["React Native", "Flutter", "Progressive Web Apps"]
  },

  services: [
    "Custom Web Application Development",
    "AI/ML Integration & Chatbot Development", 
    "E-commerce Platform Development",
    "WordPress & Custom Plugin Development",
    "API Development & Integration",
    "Real-time Application Development",
    "Mobile App Development",
    "Database Design & Optimization",
    "Cloud Infrastructure Setup",
    "Performance Optimization & SEO"
  ],

  pricing: {
    hourly: "$75-150/hour",
    project: "Custom quotes based on scope",
    consultation: "Free initial consultation",
    maintenance: "Ongoing support available"
  },

  contact: {
    email: "sushil@example.com",
    availability: "Available for new projects",
    responseTime: "Within 24 hours",
    timezone: "Flexible (Global)"
  }
};

export const cannedMessages = [
  "Hi! I'm Sushil's AI assistant. I can help you learn about his projects, skills, and services. What would you like to know?",
  "I can tell you about Sushil's featured projects like WPVIP.com, 1800LIMO, or GitMate. Which interests you?",
  "Sushil specializes in React.js, Node.js, AI integration, and full-stack development. Would you like details about any specific technology?",
  "For pricing and availability, I can connect you directly with Sushil. Would you like his contact information?",
  "Sushil has worked on projects ranging from e-commerce platforms to AI chatbots. What type of project are you planning?",
  "I can share case studies and results from Sushil's previous work. What kind of solution are you looking for?",
  "Sushil offers free consultations for new projects. Would you like to schedule a discussion about your requirements?"
];

export const getContextualResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Project-related queries
  if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
    return `**Featured Projects:**

• **WPVIP.com** - WordPress VIP platform (Lead Frontend Developer)
  - Custom plugins, Gutenberg blocks, enterprise solutions
  - 95+ Lighthouse performance score, 100% client satisfaction

• **1800LIMO.com** - Premium limousine booking platform (Senior Developer & PM)
  - Real-time communication, Stripe payments, fleet management
  - 40% increase in bookings, 60% revenue growth

• **GitMate** - AI-powered Git operations tool (Lead Developer & Product Owner)
  - Intelligent commit messages, automated Git assistance
  - 2.5h time saved per developer/week, 85% adoption rate

• **Meta Business Hub** - Workspace management platform (Next.js Developer)
  - Replaced third-party dependency with scalable solution
  - 70% cost reduction, 2x user growth

Which project type interests you most?`;
  }
  
  // Technology queries
  if (message.includes('tech') || message.includes('technology') || message.includes('stack')) {
    return `**Sushil's Tech Stack:**

**Frontend:** React.js, Next.js, Angular, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS

**Backend:** Node.js, Laravel, NestJS, Express.js, PHP, Python

**Databases:** MySQL, PostgreSQL, MongoDB, Redis

**AI/ML:** OpenAI API, LangChain, Gemini API, Custom LLM Integration

**Cloud:** AWS, Docker, Vercel, Heroku

**Payments:** Stripe, PayPal, Razorpay

He's experienced with both frontend and backend development, plus AI integration.`;
  }
  
  // AI/Chatbot queries
  if (message.includes('ai') || message.includes('chatbot') || message.includes('machine learning')) {
    return `**AI & Chatbot Expertise:**

Sushil specializes in AI integration and has built several solutions:

• **GitMate** - AI-powered Git operations tool
• **LLM Based Chatbot** - Context-aware conversational assistant
• **Custom AI Solutions** - Tailored to business needs

**Technologies:** OpenAI API, LangChain, Gemini API, Custom LLM implementations

**Capabilities:**
- Natural language processing
- Context-aware conversations
- Multi-platform integration
- Custom knowledge base integration
- Real-time response generation

Would you like to discuss AI integration for your project?`;
  }
  
  // Pricing queries
  if (message.includes('price') || message.includes('cost') || message.includes('rate')) {
    return `**Pricing & Availability:**

**Hourly Rate:** $75-150/hour (depending on project complexity)

**Services:**
• Custom Web Application Development
• AI/ML Integration & Chatbot Development
• E-commerce Platform Development
• WordPress & Custom Plugin Development
• API Development & Integration
• Real-time Application Development

**What's Included:**
• Free initial consultation
• Custom project quotes
• Ongoing support available
• 24-hour response time

Would you like to discuss your specific requirements?`;
  }
  
  // Contact queries
  if (message.includes('contact') || message.includes('hire') || message.includes('available')) {
    return `**Contact & Availability:**

**Status:** Available for new projects
**Response Time:** Within 24 hours
**Timezone:** Flexible (Global)

**Next Steps:**
1. Free initial consultation
2. Project scope discussion
3. Custom quote based on requirements
4. Timeline and deliverables planning

Would you like to schedule a consultation or discuss your project needs?`;
  }
  
  // Default response
  return `**How can I help you today?**

You can ask about:
• **Projects** - Featured work and case studies
• **Technologies** - Tech stack and expertise
• **AI Solutions** - Chatbot and AI integration
• **Pricing** - Rates and project quotes
• **Contact** - Availability and consultation

What would you like to know?`;
};
