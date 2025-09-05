import type { CaseStudy } from '../types/caseStudy';

export const caseStudies: CaseStudy[] = [
  {
    id: 'wpvip',
    title: 'WPVIP.com',
    tagline: 'Official WordPress VIP Platform Website',
    status: 'live',
    heroImage: '/src/assets/project/wpvip.png',
    overview: 'Built the official website for WPVIP, a premium WordPress hosting platform. Developed custom plugins, Gutenberg blocks, and comprehensive WordPress solutions for enterprise clients.',
    problem: 'WPVIP needed a modern, professional website to showcase their enterprise WordPress hosting services and attract high-value clients in the competitive hosting market.',
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
      { metric: 'Performance Score', value: '95+', description: 'Lighthouse performance score' },
      { metric: 'Page Load Time', value: '<2s', description: 'Average page load time' },
      { metric: 'Mobile Score', value: '98+', description: 'Mobile usability score' },
      { metric: 'Client Satisfaction', value: '100%', description: 'Client approval rate' }
    ],
    screenshots: [
      '/src/assets/project/wpvip.png',
      '/src/assets/project/wpvip.png', // Add more screenshots as available
      '/src/assets/project/wpvip.png'
    ],
    lessonsLearned: [
      'WordPress VIP requires specific optimization techniques',
      'Custom Gutenberg blocks significantly improve content management',
      'Enterprise clients value performance and reliability over flashy features',
      'Proper WordPress architecture is crucial for maintainability'
    ],
    liveUrl: 'https://wpvip.com',
    duration: '3 months',
    teamSize: '2 developers',
    category: 'featured'
  },
  {
    id: '1800limo',
    title: '1800LIMO.com',
    tagline: 'Premium Limousine Booking Platform',
    status: 'live',
    heroImage: '/src/assets/project/1800limo.png',
    overview: 'Developed a comprehensive limousine booking platform with real-time communication, payment processing, and fleet management capabilities.',
    problem: 'Traditional limousine booking was inefficient with phone calls and manual scheduling. Clients needed a modern, digital solution for seamless booking experiences.',
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
      { metric: 'Customer Satisfaction', value: '4.8/5', description: 'Average customer rating' },
      { metric: 'Response Time', value: '<1s', description: 'Average booking response time' },
      { metric: 'Revenue Growth', value: '60%', description: 'Year-over-year revenue increase' }
    ],
    screenshots: [
      '/src/assets/project/1800limo.png',
      '/src/assets/project/1800limo.png',
      '/src/assets/project/1800limo.png'
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
    heroImage: '/src/assets/project/gitmate.png',
    overview: 'Created an innovative AI-based tool that enhances developer productivity with intelligent git assistance, automated commit messages, and smart branch management.',
    problem: 'Developers spend significant time on repetitive git operations and struggle with consistent commit message formatting and branch management strategies.',
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
      { metric: 'Adoption Rate', value: '85%', description: 'Team adoption rate' },
      { metric: 'Error Reduction', value: '70%', description: 'Reduction in git-related errors' },
      { metric: 'User Rating', value: '4.9/5', description: 'Average user satisfaction' }
    ],
    screenshots: [
      '/src/assets/project/gitmate.png',
      '/src/assets/project/gitmate.png',
      '/src/assets/project/gitmate.png'
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
    heroImage: '/src/assets/project/pups4sale.png',
    overview: 'Built a comprehensive e-commerce platform for pet sales with advanced features including payment processing, inventory management, and user authentication.',
    problem: 'Pet breeders needed a specialized e-commerce platform that could handle unique requirements like health certificates, vaccination records, and breed-specific information.',
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
      { metric: 'User Growth', value: '300%', description: 'Year-over-year user growth' },
      { metric: 'Conversion Rate', value: '12%', description: 'Visitor to customer conversion' },
      { metric: 'Platform Uptime', value: '99.9%', description: 'System reliability' }
    ],
    screenshots: [
      '/src/assets/project/pups4sale.png',
      '/src/assets/project/pups4sale.png',
      '/src/assets/project/pups4sale.png'
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
  }
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};
