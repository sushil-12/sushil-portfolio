import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import HeroImage from './HeroImage';
import aboutUsImage from '../assets/about-us.png';
import DarkLogo from '../assets/dark-logo.png';
import Experience from './Experience';


const AboutHero = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  const illustrationVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  const AboutUsIllustration = () => (
    <div className="relative">
      <HeroImage
        src={aboutUsImage}
        alt="Sushil Hub - Full Stack Developer"
        className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg"
      />
    </div>
  );

  return (
    <header
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="mx-auto max-w-7xl px-6 md:px-8 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-start">
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
            id="about-hero-heading"
            className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight text-neutral-900 mb-6"
          >
            <span className="text-neutral-600 text-4xl">Learn About </span> Sushil Hub
          </h1>

          <div className="space-y-4 text-lg text-neutral-700 mb-8 max-w-xl mx-auto md:mx-0">
            <p>
              Sushil Hub is more than just a development portfolio - it's a comprehensive 
              platform showcasing 5+ years of full-stack expertise. Founded by Sushil Kumar, 
              specialize in transforming complex business requirements into elegant, 
              scalable web solutions.
            </p>

            {/* Illustration - Between paragraphs on mobile, hidden on desktop */}
            <div className="md:hidden flex justify-center my-8">
              <AboutUsIllustration />
            </div>

            <p>
              From startups building their first MVP to enterprises modernizing legacy systems, 
              Sushil Hub delivers end-to-end solutions that combine technical excellence 
              with business acumen.
            </p>
          </div>
        </motion.div>

        {/* Illustration - Right side on desktop, hidden on mobile */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={illustrationVariants}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="order-1 md:order-2 hidden md:block"
        >
          <AboutUsIllustration />
        </motion.div>
      </div>
    </header>
  );
};

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AboutHero />
      <Experience />

      {/* Compact About Content */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* CTA Section - Compact */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Ready to Work with Sushil Hub?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how Sushil Hub can help bring your 
              vision to life with cutting-edge web development solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Calendar className="w-5 h-5" />
              Get in Touch with Sushil Hub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;