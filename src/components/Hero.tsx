import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import HeroImage from './HeroImage';
import heroImage from '../assets/hero.jpg';


const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-4">
    {children}
  </p>
);

const DeveloperIllustration = () => (
  <div className="relative">
    <HeroImage 
      src={heroImage}
      alt="Sushil Kumar - Full Stack Developer" 
      className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg" 
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

  const handleBookMeeting = () => {
    // Create Google Meet calendar event
    const eventTitle = encodeURIComponent('Meeting with Sushil Kumar - Discussion');
    const eventDetails = encodeURIComponent('Let\'s discuss your project requirements and how I can help bring your ideas to life.');
    
    // Google Calendar event creation URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&dates=20241201T100000Z/20241201T110000Z&add=developer.er.sushil@gmail.com&sf=true&output=xml`;
    
    // Open Google Calendar in new tab
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <>
      <header
        id="home"
        aria-labelledby="hero-heading"
        className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center">
          {/* Content - Left side on desktop, full width on mobile */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 md:order-1 text-left"
          >
            <SectionEyebrow>Portfolio</SectionEyebrow>
            
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 mb-6"
            >
              Hello, I'm Sushil Kumar<span className="text-neutral-600">.</span>
            </h1>
            
            <div className="space-y-4 text-lg text-neutral-700 mb-8 max-w-xl mx-auto md:mx-0">
              <p>
                Full Stack Engineer with 5+ years of experience building scalable web and mobile applications using React.js, Node.js, Next.js, and AWS.
              </p>
              
              {/* Illustration - Between paragraphs on mobile, hidden on desktop */}
              <div className="md:hidden flex justify-center my-8">
                <DeveloperIllustration />
              </div>
              
              <p>
                Skilled in end-to-end project ownership, UI/UX design, microservices architecture, and CI/CD pipelines. Passionate about delivering high-performance, user-centric solutions.
              </p>
            </div>

            {/* Book a Meeting Button */}
            <button
              onClick={handleBookMeeting}
              aria-label="Book a meeting"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-xl text-neutral-700 font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
            >
              <Calendar className="w-5 h-5" />
              Book a Meeting
            </button>
          </motion.div>
          
          {/* Illustration - Right side on desktop only */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={illustrationVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="hidden md:flex justify-end order-1 md:order-2"
          >
            <DeveloperIllustration />
          </motion.div>
        </div>
      </header>
      
    </>
  );
};

export default Hero;
