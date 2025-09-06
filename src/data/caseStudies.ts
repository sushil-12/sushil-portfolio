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
    overview: 'Built the official website for WPVIP, a premium WordPress hosting platform. Developed custom plugins, Gutenberg blocks, and comprehensive WordPress solutions for enterprise clients.',
    problem: 'WPVIP having a custom modern, professional website to showcase their enterprise WordPress hosting services and attract high-value clients in the competitive hosting market.',
    solution: 'Created a fully responsive website with custom WordPress plugins, Gutenberg blocks, and a content management system that highlights WPVIP\'s enterprise features and technical capabilities.',
    technologies: ['WordPress', 'PHP', 'Gutenberg', 'Custom Plugins', 'WordPress VIP', 'JavaScript', 'CSS3', 'MySQL'],
    features: [
      'Custom Gutenberg blocks for content management',
      'Enterprise-focused design and messaging',
      'Performance-optimized WordPress setup',
      'Custom plugin development',
      'Responsive design across all devices',
      'SEO-optimized content structure'
    ],
    results: [
      { metric: 'Performance Score', value: '95+', description: 'Lighthouse performance & accessibility score' },
      { metric: 'Page Load Time', value: '<2s', description: 'Average page load time for desktop & mobile for desktop & mobile' },
      { metric: 'Mobile Score', value: '98+', description: 'Mobile usability & accessibility score' },
      { metric: 'Client Satisfaction', value: '100%', description: 'Client approval rate' }
    ],
    screenshots: [
      wpvipImage,
      wpvipImage, // Add more screenshots as available
      wpvipImage
    ],
    lessonsLearned: [
      'WordPress VIP requires specific optimization techniques',
      'Custom Gutenberg blocks significantly improve content management',
      'Enterprise clients value performance and reliability over flashy features',
      'Proper WordPress architecture is crucial for maintainability'
    ],
    liveUrl: 'https://wpvip.com',
    duration: '8 months',
    teamSize: '14 developers',
    category: 'featured'
  },
  {
    id: '1800limo',
    title: '1800LIMO.com',
    tagline: 'Premium Limousine Booking Platform',
    status: 'live',
    heroImage: limoImage,
    overview: 'Developed a comprehensive limousine booking platform with real-time communication, payment processing, and fleet management capabilities.',
    problem: 'Traditional limousine booking was inefficient with phone calls and manual scheduling. Clients having a modern, digital solution for seamless booking experiences.',
    solution: 'Built a full-stack platform with Angular frontend, Laravel backend, and Node.js real-time services, featuring instant booking, live tracking, and automated communications.',
    technologies: ['Angular', 'Laravel', 'Node.js', 'WebSockets', 'MySQL', 'Redis', 'Stripe API', 'Google Maps API'],
    features: [
      'Real-time booking and availability checking',
      'Live vehicle tracking and driver communication',
      'Automated SMS and email notifications',
      'Payment processing with Stripe integration',
      'Admin dashboard for fleet management',
      'Mobile-responsive design'
    ],
    results: [
      { metric: 'Booking Conversion', value: '40%', description: 'Increase in online bookings' },
      { metric: 'Customer Satisfaction', value: '4.8/5', description: 'Average customer rating for desktop & mobile' },
      { metric: 'Response Time', value: '<1s', description: 'Average booking response time for desktop & mobile' },
      { metric: 'Revenue Growth', value: '60%', description: 'Year-over-year revenue increase for desktop & mobile' }
    ],
    screenshots: [
      limoImage,
      limoImage,
      limoImage
    ],
    lessonsLearned: [
      'Real-time features require careful state management',
      'Payment integration needs robust error handling',
      'Mobile-first design is essential for booking platforms',
      'User experience directly impacts conversion rates'
    ],
    liveUrl: 'https://1800limo.com',
    duration: '6 months',
    teamSize: '4 developers',
    category: 'featured'
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
    category: 'featured'
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
    category: 'featured'
  },
  {
    id: 'metahub',
    title: 'Metahub.com',
    tagline: 'Official Metahub Platform Website',
    status: 'live',
    heroImage: metaImage,
    overview: 'Developed the official website for Metahub using their proprietary Nexudus platform. Built custom themes and optimized the site for maximum performance and user engagement.',
    problem: 'Metahub having a modern, high-performance website that could showcase their platform capabilities while maintaining fast load times and excellent user experience.',
    solution: 'Created a custom Next.js application with optimized themes for the Nexudus platform, implementing advanced performance optimizations and responsive design.',
    technologies: ['Next.js', 'React.js', 'Nexudus Platform', 'Custom Themes', 'TypeScript', 'CSS3', 'JavaScript'],
    features: [
      'Custom Next.js themes for Nexudus platform',
      'Performance-optimized page loading',
      'Responsive design across all devices',
      'SEO-optimized content structure',
      'Interactive platform demonstrations',
      'Modern UI/UX design'
    ],
    results: [
      { metric: 'Page Speed', value: '98+', description: 'Lighthouse performance score' },
      { metric: 'Load Time', value: '<1.5s', description: 'Average page load time for desktop & mobile' },
      { metric: 'Mobile Score', value: '100', description: 'Mobile usability score' },
      { metric: 'SEO Score', value: '95+', description: 'Search engine optimization for desktop & mobile' }
    ],
    screenshots: [metaImage, metaImage, metaImage],
    lessonsLearned: [
      'Platform-specific development requires deep understanding of constraints',
      'Performance optimization is crucial for user retention',
      'Custom themes need to be maintainable and scalable',
      'Platform integration requires careful API usage'
    ],
    liveUrl: 'https://metahub.com',
    duration: '2 months',
    teamSize: '2 developers',
    category: 'featured'
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
    category: 'past'
  },
  {
    id: 'vetted',
    title: 'Vetted.work',
    tagline: 'Professional Job Matching Platform',
    status: 'live',
    heroImage: vettedImage,
    overview: 'Created a comprehensive job matching platform connecting verified professionals with employers. Built with Laravel and Vue.js for optimal performance and user experience.',
    problem: 'Job seekers and employers struggling with trust and verification in the hiring process. A platform was needed to connect verified professionals with quality opportunities.',
    solution: 'Developed a multi-sided platform with advanced verification systems, intelligent matching algorithms, and comprehensive profile management for both job seekers and employers.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Elasticsearch', 'Stripe', 'AWS S3', 'Docker'],
    features: [
      'Advanced verification and background checking',
      'Intelligent job matching algorithms',
      'Real-time messaging and communication',
      'Portfolio and skill showcase',
      'Employer dashboard and analytics',
      'Payment processing for premium features'
    ],
    results: [
      { metric: 'Job Matches', value: '85%', description: 'Successful job placement rate' },
      { metric: 'User Growth', value: '200%', description: 'Year-over-year user growth' },
      { metric: 'Employer Satisfaction', value: '4.7/5', description: 'Average employer rating for desktop & mobile' },
      { metric: 'Platform Revenue', value: '$25K+', description: 'Monthly recurring revenue for desktop & mobile' }
    ],
    screenshots: [vettedImage, vettedImage, vettedImage],
    lessonsLearned: [
      'Trust and verification are crucial for platform success',
      'Matching algorithms need continuous refinement',
      'User experience directly impacts platform adoption',
      'Two-sided marketplaces require balanced value proposition'
    ],
    liveUrl: 'https://vetted.work',
    duration: '6 months',
    teamSize: '4 developers',
    category: 'featured'
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
    category: 'featured'
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
    category: 'past'
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
    category: 'past'
  }
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};
