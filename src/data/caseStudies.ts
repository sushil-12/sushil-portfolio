import type { CaseStudy } from '../types/caseStudy';

// Import project images
import wpvipImage from '../assets/project/wpvip.png';
import limoImage from '../assets/project/1800limo.png';
import gitmateImage from '../assets/project/gitmate.png';
import pups4saleImage from '../assets/project/pups4sale.png';
import metaImage from '../assets/project/meta.jpg';
import hegroupImage from '../assets/project/hegroup.png';
import vettedImage from '../assets/project/vetted.png';
import witlingoImage from '../assets/project/witlingo.png';
import llmImage from '../assets/project/llm.png';

export const caseStudies: CaseStudy[] = [
  {
    id: 'wpvip',
    title: 'WPVIP.com',
    tagline: 'Official WordPress VIP Platform Website',
    status: 'live',
    heroImage: wpvipImage,
    overview: 'Contributed to the official website for WPVIP, building a scalable design system with custom themes, reusable components, Gutenberg blocks, and marketplace-ready patterns tailored for enterprise clients.',
    problem: 'WPVIP needed more than a marketing site. They required a flexible marketplace framework with themes, reusable design components, custom Gutenberg blocks, and scalable content patterns to showcase their services and solutions.',
    solution: 'Delivered a fully responsive and modular WordPress platform featuring custom plugins, Gutenberg blocks, reusable design components, and performance-optimized architecture aligned with enterprise standards.',
    technologies: ['WordPress', 'PHP', 'Gutenberg', 'Custom Plugins', 'Reusable Patterns', 'WordPress VIP', 'JavaScript', 'CSS3', 'MySQL'],
    features: [
      'Marketplace-ready themes and reusable design patterns',
      'Custom Gutenberg blocks for flexible publishing',
      'Component-driven design system for scalability',
      'Performance-optimized WordPress setup',
      'Responsive design across all devices',
      'SEO-friendly content architecture'
    ],
    results: [
      { metric: 'Performance Score', value: '95+', description: 'Lighthouse performance & accessibility score' },
      { metric: 'Page Load Time', value: '<2s', description: 'Average load time across devices' },
      { metric: 'Mobile Score', value: '98+', description: 'Mobile usability & accessibility score' },
      { metric: 'Client Satisfaction', value: '100%', description: 'Client approval and successful adoption' }
    ],
    screenshots: [
      wpvipImage,
      wpvipImage,
      wpvipImage
    ],
    lessonsLearned: [
      'Scalable component libraries accelerate enterprise content workflows',
      'Marketplace-style themes and patterns improve design consistency',
      'Enterprise clients prioritize performance and reliability',
      'Well-architected WordPress solutions ensure long-term maintainability'
    ],
    liveUrl: 'https://wpvip.com',
    duration: '8 months',
    teamSize: '14 developers',
    category: 'featured',
    role: 'Lead Frontend Developer'
  },  
  {
    id: "1800limo",
    title: "1800LIMO.com - Premium Limousine Booking Platform",
    tagline: "Premium Limousine Booking Platform | Transportation Technology | Limo Booking System",
    status: "live",
    heroImage: limoImage,
    overview: "Developed a comprehensive limousine booking platform with real-time communication, payment processing, and fleet management capabilities. A complete transportation technology solution for limousine services, corporate travel, and luxury transportation booking.",
    problem: "The client was operating their limousine business on third-party platforms that charged heavy commissions and imposed multiple restrictions. Being completely non-technical, they lacked control over their business data, customers, and revenue stream. They needed a custom limo booking system that would give them complete independence and control over their transportation business.",
    solution: "Designed and delivered a full-fledged, secure booking platform tailored to the client's business needs. The system supported multi-user roles (individual customers, admin, sub-admin, affiliate drivers, travel agents, and corporate accounts), integrated secure payment services, enabled real-time booking notifications, and provided complete business independence without third-party dependency. Built with modern web technologies for scalability and performance.",
    technologies: ["Angular", "Laravel", "Node.js", "WebSockets", "MySQL", "Redis", "Stripe API", "Google Maps API", "TypeScript", "JavaScript", "PHP", "Real-time Communication"],
    features: [
      "Multi-user system with admin, sub-admin, affiliates, drivers, and corporate accounts",
      "Real-time booking and availability checking for limousine services",
      "Live vehicle tracking and driver communication system",
      "Automated SMS and email notifications for booking confirmations",
      "Payment processing with Stripe integration for secure transactions",
      "Admin dashboard for fleet management and business analytics",
      "Mobile-responsive design for all devices and screen sizes",
      "Corporate travel booking and management system",
      "Driver mobile app for real-time updates and navigation"
    ],
    results: [
      { metric: "Booking Conversion", value: "40%", description: "Increase in online limousine bookings" },
      { metric: "Customer Satisfaction", value: "4.8/5", description: "Average customer rating for limo services" },
      { metric: "Response Time", value: "<1s", description: "Average booking response time for transportation requests" },
      { metric: "Revenue Growth", value: "60%", description: "Year-over-year revenue increase for limousine business" }
    ],
    screenshots: [limoImage, limoImage, limoImage],
    lessonsLearned: [
      "Real-time features require careful state management for transportation booking systems",
      "Payment integration needs robust error handling for high-value limousine bookings",
      "Mobile-first design is essential for booking platforms and transportation services",
      "User experience directly impacts conversion rates in luxury transportation",
      "Collaborating with non-technical clients requires clear communication and extra focus on usability",
      "Transportation technology requires reliable real-time communication systems"
    ],
    liveUrl: "https://1800limo.com",
    duration: "3 years",
    teamSize: "4 developers",
    category: "featured",
    role: "Senior Developer & Project Manager",
    seoKeywords: ["1800limo", "limousine booking", "transportation technology", "limo booking system", "luxury transportation", "corporate travel", "limousine services", "transportation booking platform", "limo app", "chauffeur services"]
  },  
  {
    id: 'gitmate',
    title: 'GitMate',
    tagline: 'AI-Powered Git Operations Tool',
    status: 'live',
    heroImage: gitmateImage,
    overview: 'Created an innovative AI-based tool that enhances developer productivity with intelligent git assistance, automated commit messages, and smart branch management.',
    problem: 'Developers having significant time on repetitive git operations and struggle with consistent commit message formatting and branch management strategies.',
    solution: 'Developed an AI-powered tool that learns from code patterns, suggests intelligent commit messages, automates common git operations, and provides smart recommendations for branch management.',
    technologies: ['Node.js', 'React.js', 'OpenAI API', 'Git API', 'TypeScript', 'Docker', 'MongoDB', 'Express.js'],
    features: [
      'AI-generated commit messages based on code changes',
      'Smart branch naming and organization suggestions',
      'Automated conflict resolution assistance',
      'Code review recommendations',
      'Git workflow optimization',
      'Integration with popular IDEs'
    ],
    results: [
      { metric: 'Time Saved', value: '2.5h', description: 'Average time saved per developer per week' },
      { metric: 'Adoption Rate', value: '85%', description: 'Team adoption rate for desktop & mobile' },
      { metric: 'Error Reduction', value: '70%', description: 'Reduction in git-related errors' },
      { metric: 'User Rating', value: '4.9/5', description: 'Average user satisfaction for desktop & mobile for desktop & mobile' }
    ],
    screenshots: [
      gitmateImage,
      gitmateImage,
      gitmateImage
    ],
    lessonsLearned: [
      'AI integration requires careful prompt engineering',
      'Developer tools need to be non-intrusive',
      'User feedback is crucial for AI model improvement',
      'Performance is critical for developer productivity tools'
    ],
    liveUrl: 'https://gitmate.com',
    duration: '4 months',
    teamSize: '3 developers',
    category: 'featured',
    role: 'Lead Developer & Product Owner'
  },
  {
    id: 'pups4sale',
    title: 'pups4sale',
    tagline: 'Full-Stack E-commerce Platform',
    status: 'live',
    heroImage: pups4saleImage,
    overview: 'Built a comprehensive e-commerce platform for pet sales with advanced features including payment processing, inventory management, and user authentication.',
    problem: 'Pet breeders having a specialized e-commerce platform that could handle unique requirements like health certificates, vaccination records, and breed-specific information.',
    solution: 'Developed a full-stack solution with Next.js frontend and Nest.js backend, featuring specialized product management, secure payments, and comprehensive user profiles.',
    technologies: ['Next.js', 'Nest.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS S3', 'JWT', 'Docker'],
    features: [
      'Advanced product catalog with breed-specific filters',
      'Secure payment processing with Stripe',
      'User authentication and profile management',
      'Inventory tracking and management',
      'Order processing and fulfillment',
      'Admin dashboard for platform management'
    ],
    results: [
      { metric: 'Transaction Volume', value: '$50K+', description: 'Monthly transaction volume' },
      { metric: 'User Growth', value: '300%', description: 'Year-over-year user growth for desktop & mobile' },
      { metric: 'Conversion Rate', value: '12%', description: 'Visitor to customer conversion' },
      { metric: 'Platform Uptime', value: '99.9%', description: 'System reliability for desktop & mobile' }
    ],
    screenshots: [
      pups4saleImage,
      pups4saleImage,
      pups4saleImage
    ],
    lessonsLearned: [
      'E-commerce requires robust security measures',
      'Payment processing needs extensive testing',
      'User experience directly impacts conversion rates',
      'Scalability planning is crucial for growth'
    ],
    liveUrl: 'https://dev.pups4sale.com.au/',
    duration: '5 months',
    teamSize: '3 developers',
    category: 'featured',
    role: 'Full-Stack Developer'
  },
  {
    id: "metahub",
    title: "Meta Business Hub",
    tagline: "Workspace & Hub Management Platform",
    status: "live",
    heroImage: metaImage,
    overview: "Developed a custom hub and space management platform for Meta, replacing third-party dependency with a scalable and secure in-house solution.",
    problem: "Meta relied on a third-party organization using a CMS-like platform (Nexudus) to manage their side business hub and workspace operations. This led to high costs, limited flexibility, and dependency on external vendors for even small changes.",
    solution: "Designed and delivered a full-featured, secure hub management platform using Next.js and NestJS. The solution allowed Meta to manage spaces, memberships, events, and bookings independently with complete customization control, scalability, and seamless user experience.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "AWS", "Stripe API", "Socket.io"],
    features: [
      "Custom space and membership management",
      "Event scheduling and booking system",
      "Multi-role access control for admins, managers, and users",
      "Real-time notifications and communication",
      "Secure payment and invoicing system",
      "Analytics dashboard for usage insights",
      "Scalable architecture for global hubs"
    ],
    results: [
      { metric: "Vendor Costs", value: "70% Reduction", description: "Savings by moving away from third-party CMS (Nexudus)" },
      { metric: "Customization", value: "100%", description: "Full control over features and branding" },
      { metric: "System Uptime", value: "99.9%", description: "Ensured reliability and scalability" },
      { metric: "User Adoption", value: "2x Growth", description: "Faster onboarding and improved user satisfaction" }
    ],
    screenshots: [metaImage, metaImage, metaImage],
    lessonsLearned: [
      "Migrating from a third-party CMS requires careful data mapping and testing",
      "Multi-role systems need robust access control policies",
      "Real-time communication features are critical for workspace management",
      "Building scalable solutions for enterprise clients requires strong infra planning"
    ],
    liveUrl: "https://meta.com/business-hub",
    duration: "8 months",
    teamSize: "5 developers",
    category: "featured",
    role: "Next.js Developer"
  },
  {
    id: 'hegroup',
    title: 'HeGroup CMS',
    tagline: 'Enterprise Content Management System',
    status: 'live',
    heroImage: hegroupImage,
    overview: 'Built a comprehensive content management system for HeGroup using Node.js and React. Designed specifically for enterprise content management with advanced features and scalability.',
    problem: 'HeGroup having a custom CMS that could handle complex content workflows, multi-user management, and enterprise-level security requirements.',
    solution: 'Developed a full-stack CMS with Node.js backend and React frontend, featuring role-based access control, content versioning, and advanced publishing workflows.',
    technologies: ['Node.js', 'React.js', 'MongoDB', 'Express.js', 'JWT', 'Multer', 'Docker', 'AWS'],
    features: [
      'Role-based user management system',
      'Advanced content editor with WYSIWYG',
      'Content versioning and approval workflows',
      'Media library with file management',
      'SEO tools and meta management',
      'Multi-language content support'
    ],
    results: [
      { metric: 'Content Efficiency', value: '60%', description: 'Reduction in content management time' },
      { metric: 'User Adoption', value: '90%', description: 'Team adoption rate for desktop & mobile' },
      { metric: 'System Uptime', value: '99.8%', description: 'Platform reliability' },
      { metric: 'Content Volume', value: '500+', description: 'Articles managed monthly for desktop & mobile' }
    ],
    screenshots: [hegroupImage, hegroupImage, hegroupImage],
    lessonsLearned: [
      'Enterprise CMS requires robust user management',
      'Content workflows need to be intuitive and efficient',
      'Scalability planning is essential for growth',
      'User training is crucial for adoption success'
    ],
    liveUrl: 'https://hegroup-cms.com',
    duration: '4 months',
    teamSize: '3 developers',
    category: 'past',
    role: 'Full-Stack Developer'
  },
  {
    id: "vetted",
    title: "Vetted",
    tagline: "Contractor Workforce & Compliance Management",
    status: "live",
    heroImage: vettedImage,
    overview: "Built a secure contractor management platform enabling businesses to onboard, manage, and deploy workers with strong compliance and health & safety features.",
    problem: "Contractors struggled with managing large worker teams, ensuring compliance with safety standards, and handling multiple agreements manually. Existing systems lacked integrated solutions for security, health checks, and signed document management.",
    solution: "Developed a full-fledged workforce management platform with multi-layered security, digital health verification, and automated agreement workflows. The system allowed contractors to send workers onsite with compliance guarantees, manage signed forms, and track workforce activity seamlessly.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AWS S3", "JWT", "DocuSign API", "Twilio"],
    features: [
      "Worker onboarding with identity verification",
      "Digital signed agreement & form handling",
      "Health & safety compliance tracking",
      "Role-based access for contractors, admins, and workers",
      "Onsite deployment management with notifications",
      "Secure document storage & retrieval",
      "Analytics dashboard for workforce activity and compliance"
    ],
    results: [
      { metric: "Compliance Accuracy", value: "95%", description: "Automated checks reduced compliance errors" },
      { metric: "Agreement Handling", value: "80% Faster", description: "Digital workflows replaced manual paperwork" },
      { metric: "Worker Deployment", value: "2x Efficiency", description: "Faster scheduling and onsite readiness" },
      { metric: "Operational Costs", value: "40% Reduction", description: "Savings from automation and reduced paperwork" }
    ],
    screenshots: [vettedImage, vettedImage, vettedImage],
    lessonsLearned: [
      "Integrating legal agreements digitally requires strong API and security considerations",
      "Contractor workflows vary, so the platform needed high configurability",
      "User-friendly design is critical for non-technical workforce adoption",
      "Health & safety compliance can be a major adoption driver in enterprise solutions"
    ],
    liveUrl: "https://vetted.com",
    duration: "7 months",
    teamSize: "6 developers",
    category: "featured",
    role: "Project Manager & Full-Stack Developer"
  },
  {
    id: 'witlingo',
    title: 'Witlingo Audio Station',
    tagline: 'Modern Audio Streaming Platform',
    status: 'live',
    heroImage: witlingoImage,
    overview: 'Developed a comprehensive audio streaming and management platform using Next.js and React. Features include audio upload, streaming, playlist management, and social sharing.',
    problem: 'Content creators having a modern platform to host, manage, and share audio content with advanced features like playlists, analytics, and social integration.',
    solution: 'Built a full-featured audio platform with streaming capabilities, user management, playlist creation, and social sharing features using modern web technologies.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'AWS S3', 'FFmpeg', 'Web Audio API', 'Socket.io'],
    features: [
      'High-quality audio streaming and playback',
      'User playlist creation and management',
      'Audio upload with format conversion',
      'Social sharing and collaboration',
      'Analytics and listening statistics',
      'Mobile-responsive design'
    ],
    results: [
      { metric: 'Audio Quality', value: '320kbps', description: 'Maximum audio bitrate' },
      { metric: 'User Engagement', value: '4.2h', description: 'Average session duration for desktop & mobile' },
      { metric: 'Content Uploads', value: '1000+', description: 'Audio files uploaded monthly' },
      { metric: 'Platform Uptime', value: '99.5%', description: 'System reliability for desktop & mobile' }
    ],
    screenshots: [witlingoImage, witlingoImage, witlingoImage],
    lessonsLearned: [
      'Audio streaming requires careful bandwidth management',
      'User-generated content needs robust moderation tools',
      'Social features increase user engagement significantly',
      'Mobile optimization is crucial for audio platforms'
    ],
    liveUrl: 'https://witlingo-audio.com',
    duration: '3 months',
    teamSize: '2 developers',
    category: 'featured',
    role: 'Full-Stack Developer'
  },
  {
    id: 'llm-chatbot',
    title: 'LLM Based Chatbot',
    tagline: 'AI-Powered Conversational Assistant',
    status: 'live',
    heroImage: llmImage,
    overview: 'Developed an advanced AI-powered chatbot using large language models. Features intelligent conversation handling, context awareness, and integration with various platforms.',
    problem: 'Businesses having an intelligent chatbot that could handle complex conversations, understand context, and provide accurate responses without constant human intervention.',
    solution: 'Built a sophisticated chatbot using advanced LLM integration, implementing context management, conversation flow control, and multi-platform deployment capabilities.',
    technologies: ['Node.js', 'React.js', 'OpenAI API', 'LangChain', 'WebSocket', 'MongoDB', 'Docker', 'Redis'],
    features: [
      'Advanced natural language processing',
      'Context-aware conversation management',
      'Multi-platform integration (Web, API, Slack)',
      'Custom knowledge base integration',
      'Conversation analytics and insights',
      'Real-time response generation'
    ],
    results: [
      { metric: 'Response Accuracy', value: '92%', description: 'Correct response rate' },
      { metric: 'User Satisfaction', value: '4.6/5', description: 'Average user rating for desktop & mobile' },
      { metric: 'Response Time', value: '<2s', description: 'Average response time for desktop & mobile' },
      { metric: 'Conversation Success', value: '88%', description: 'Completed conversation rate for desktop & mobile' }
    ],
    screenshots: [llmImage, llmImage, llmImage],
    lessonsLearned: [
      'LLM integration requires careful prompt engineering',
      'Context management is crucial for conversation quality',
      'User feedback loops improve AI performance',
      'Performance optimization is essential for real-time responses'
    ],
    liveUrl: 'https://llm-chatbot.com',
    duration: '4 months',
    teamSize: '3 developers',
    category: 'past',
    role: 'AI/ML Developer'
  },
  {
    id: '1800limo-apis',
    title: '1800LIMO Mobile APIs',
    tagline: 'Backend Services for Mobile App',
    status: 'live',
    heroImage: limoImage,
    overview: 'Developed comprehensive RESTful APIs for the 1800LIMO mobile application. Built with Laravel, featuring booking management, real-time tracking, and payment processing.',
    problem: 'The 1800LIMO mobile app having robust backend services to handle booking management, real-time vehicle tracking, payment processing, and user authentication.',
    solution: 'Created a comprehensive API suite with Laravel, implementing secure authentication, booking management, real-time WebSocket connections, and payment integration.',
    technologies: ['Laravel', 'MySQL', 'Redis', 'WebSocket', 'Stripe API', 'JWT', 'AWS', 'Docker'],
    features: [
      'RESTful API design with comprehensive endpoints',
      'Real-time WebSocket connections for live tracking',
      'Secure JWT-based authentication',
      'Payment processing with Stripe integration',
      'Booking management and scheduling',
      'Driver and vehicle management systems'
    ],
    results: [
      { metric: 'API Response Time', value: '<200ms', description: 'Average API response time for desktop & mobile' },
      { metric: 'System Uptime', value: '99.9%', description: 'API availability for desktop & mobile' },
      { metric: 'Request Volume', value: '1M+', description: 'API requests per month' },
      { metric: 'Error Rate', value: '<0.1%', description: 'API error rate for desktop & mobile' }
    ],
    screenshots: [limoImage, limoImage, limoImage],
    lessonsLearned: [
      'API design requires careful consideration of mobile app needs',
      'Real-time features need robust WebSocket implementation',
      'Payment integration requires extensive testing and security',
      'Scalable architecture is crucial for high-traffic APIs'
    ],
    liveUrl: 'https://1800limo.com/',
    duration: '3 months',
    teamSize: '2 developers',
    category: 'past',
    role: 'Backend API Developer'
  }
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};
