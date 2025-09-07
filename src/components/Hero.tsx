import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import HeroImage from './HeroImage';
import heroImage from '../assets/hero.jpg';
import DarkLogo from '../assets/dark-logo.png';


const DeveloperIllustration = () => (
  <div className="relative">
    <HeroImage
      src={heroImage}
      alt="Sushil Hub - Full Stack Developer"
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
    const eventTitle = encodeURIComponent('Meeting with Sushil Hub - Discussion');
    const eventDetails = encodeURIComponent('Let\'s discuss your project requirements and how Sushil Hub can help bring your ideas to life.');

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
        className="mx-auto max-w-7xl px-6 md:px-8"
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
            {/* Logo Section */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <img
                  src={DarkLogo}
                  alt="Sushil Hub Logo"
                  className="w-48 h-auto transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight text-neutral-900 mb-6"
            >
              <span className="text-neutral-600 text-4xl ">Welcome to </span> Sushil Hub
            </h1>

            <div className="space-y-4 text-lg text-neutral-700 mb-8 max-w-xl mx-auto md:mx-0">
              <p>
                Sushil Hub, founded by Sushil Kumar, is a leading full stack development portfolio showcasing expertise in
                React.js, Node.js, Next.js, TypeScript, and AWS. With over 5 years of experience, Sushil Hub transforms innovative ideas
                into high-performance web applications, scalable backend systems, and modern digital solutions.
              </p>

              {/* Illustration - Between paragraphs on mobile, hidden on desktop */}
              <div className="md:hidden flex justify-center my-8">
                <DeveloperIllustration />
              </div>

              <p>
                At Sushil Hub, we specialize in end-to-end project ownership,
                modern UI/UX design, microservices architecture, and scalable solutions
                that drive real business value.
              </p>
            </div>

            {/* Book a Meeting Button */}
            <button
              onClick={handleBookMeeting}
              aria-label="Book a meeting with Sushil Hub"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Calendar className="w-5 h-5" />
              Book a Meeting with Sushil Hub
            </button>
          </motion.div>

          {/* Illustration - Right side on desktop, hidden on mobile */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={illustrationVariants}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="order-1 md:order-2 hidden md:block"
          >
            <DeveloperIllustration />
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Hero;