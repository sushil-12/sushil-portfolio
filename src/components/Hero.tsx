import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';
import heroImage from '../assets/hero.jpg';

// Small helper component for the eyebrow text
const SectionEyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-xl font-semibold tracking-tight text-neutral-800 mb-6">
    {children}
  </div>
);

// Developer illustration SVG component
const DeveloperIllustration: React.FC = () => (
  <div className="p-4 rounded-xl">
    <img 
      src={heroImage} 
      alt="Developer Illustration" 
      className="w-full h-80 md:h-100 object-cover rounded-lg " 
    />
  </div>
);

const Hero: React.FC = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  const illustrationVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header
        id="home"
        aria-labelledby="hero-heading"
        className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24"
      >
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 md:mb-0"
          >
            <SectionEyebrow>Portfolio</SectionEyebrow>
            
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 mb-6"
            >
              Hello, I'm Sushil Kumar<span className="text-neutral-600">.</span>
            </h1>
            
            <div className="space-y-4 text-lg text-neutral-700 mb-8 max-w-xl">
              <p>
                Full Stack Engineer with 5+ years of experience building scalable web and mobile applications using React.js, Node.js, Next.js, and AWS.
              </p>
              <p>
                Skilled in end-to-end project ownership, UI/UX design, microservices architecture, and CI/CD pipelines. Passionate about delivering high-performance, user-centric solutions.
              </p>
            </div>

            {/* Contact Information */}
            {/* <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <Mail className="w-4 h-4" />
                <a href="mailto:sushil124maurya@gmail.com" className="hover:text-neutral-900 transition-colors">
                  sushil124maurya@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <Phone className="w-4 h-4" />
                <span>+91 8219479708</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <MapPin className="w-4 h-4" />
                <span>Parwanoo, Himachal Pradesh</span>
              </div>
            </div> */}
            
            <a
              href="#contact"
              aria-label="Book a call"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-xl text-neutral-700 font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
            >
              <Calendar className="w-5 h-5" />
              Let's Work Together
            </a>
          </motion.div>
          
          {/* Right column - Illustration */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={illustrationVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="flex justify-center md:justify-end"
          >
            <DeveloperIllustration />
          </motion.div>
        </div>
      </header>
      
    </>
  );
};

export default Hero;
