import React from 'react';
import FreelancerBusinessCard from './FreelancerBusinessCard';
import Hero from '../assets/hero.jpg';

const FreelancerBusinessCardDemo: React.FC = () => {
  const sampleData = {
    name: "Sushil Kumar",
    title: "Full-Stack & Mobile Developer",
    avatarUrl: Hero, // Will use initials
    accentColor: "emerald-500",
    services: [
      "React & React Native",
      "Node.js & Express",
      "Next.js & TypeScript",
      "AWS & Cloud Solutions",
      "CI/CD & DevOps",
      "UI/UX Design"
    ],
    highlights: [
      {
        title: "E-commerce Platform",
        desc: "Built scalable React/Node.js platform handling 10K+ daily users with real-time inventory management."
      },
      {
        title: "Mobile Banking App",
        desc: "Developed secure React Native app with biometric authentication and real-time transaction processing."
      },
      {
        title: "AI-Powered Analytics",
        desc: "Created ML-driven dashboard using Next.js and TensorFlow for business intelligence insights."
      }
    ],
    links: {
      github: "https://github.com/sushilkumar",
      linkedin: "https://linkedin.com/in/er-sushil-maurya",
      twitter: "https://twitter.com/sushilkumar",
      email: "developer.er.sushil@gmail.com"
    },
    onHire: () => {
      alert("Thank you for your interest! I'll get back to you soon.");
    },
    resumeUrl: "/resume.pdf"
  };

  const alternativeData = {
    name: "Alex Chen",
    title: "UI/UX Designer & Frontend Developer",
    avatarUrl: Hero,
    accentColor: "blue-500",
    services: [
      "Figma & Adobe Creative Suite",
      "React & Vue.js",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Accessibility"
    ],
    highlights: [
      {
        title: "Design System",
        desc: "Created comprehensive design system used across 50+ products with 99% accessibility compliance."
      },
      {
        title: "E-learning Platform",
        desc: "Designed and developed intuitive learning interface with gamification elements."
      }
    ],
    links: {
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/er-sushil-maurya",
      email: "alex@designer.com"
    },
    onHire: () => {
      alert("Great! Let's discuss your design project.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-8 custom-scrollbar">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Freelancer Business Card Demo
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A modern, responsive business card modal component built with React, Tailwind CSS, and Framer Motion. 
            Features accessibility, dark mode support, and mobile-first design.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Primary Demo */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Primary Demo
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Full-featured business card with all sections and interactions.
            </p>
            <FreelancerBusinessCard {...sampleData} />
          </div>

          {/* Alternative Demo */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Alternative Style
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Different accent color and simplified content structure.
            </p>
            <FreelancerBusinessCard {...alternativeData} />
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            Component Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">🎨 Design</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Modern, clean design with rounded corners, shadows, and smooth animations
              </p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">📱 Responsive</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Mobile-first design that adapts to all screen sizes with stacked layout on small screens
              </p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">♿ Accessibility</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Focus trapping, ARIA labels, keyboard navigation, and screen reader support
              </p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">🌙 Dark Mode</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Built-in dark mode support using Tailwind's dark: variant
              </p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">🎭 Animations</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Smooth Framer Motion animations with spring physics and reduced motion support
              </p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">⚡ Performance</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Optimized with proper event cleanup, refs, and efficient re-renders
              </p>
            </div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            How to Use
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">1. Import the Component</h3>
              <pre className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg text-sm overflow-x-auto">
                {`import FreelancerBusinessCard from './components/FreelancerBusinessCard';`}
              </pre>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">2. Prepare Your Data</h3>
              <pre className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg text-sm overflow-x-auto">
                {`const cardData = {
  name: "Your Name",
  title: "Your Title",
  services: ["Skill 1", "Skill 2"],
  highlights: [{ title: "Project", desc: "Description" }],
  links: { github: "url", linkedin: "url" }
};`}
              </pre>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">3. Render the Component</h3>
              <pre className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg text-sm overflow-x-auto">
                {`<FreelancerBusinessCard {...cardData} />`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerBusinessCardDemo;
