import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const SideNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);
  
  const sections = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'skills', name: 'Skills', href: '#skills-heading' },
    { id: 'projects', name: 'Projects', href: '#projects-heading' },
    { id: 'experience', name: 'Experience', href: '#experience-heading' },
    { id: 'contact', name: 'Contact', href: '#contact-heading' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id === 'home' ? 'home' : section.href.substring(1));
        if (element && 
            element.offsetTop <= scrollPosition && 
            (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="flex flex-col space-y-6">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="relative"
            >
              {/* Navigation Line */}
              <motion.button
                onClick={() => scrollToSection(section.href)}
                className={`block w-8 h-0.5 transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-neutral-900' 
                    : 'bg-neutral-300 border-dashed border-t border-neutral-300'
                }`}
                whileHover={{ scaleX: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.div>
          );
        })}
      </nav>
      
      {/* Compact Navigation Card - appears on hover of entire section */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 w-64">
              {/* Greeting and Name */}
              <div className="mb-6">
                <p className="text-neutral-700 text-sm mb-1">Hello, I'm</p>
                <h2 className="text-xl font-semibold text-gray-600">Sushil Kumar.</h2>
              </div>
              
              {/* Navigation Links */}
              <nav className="space-y-3">
                {sections.map((navSection) => (
                  <button
                    key={navSection.id}
                    onClick={() => scrollToSection(navSection.href)}
                    className={`block w-full text-left text-sm font-medium transition-colors duration-200 ${
                      navSection.id === activeSection 
                        ? 'text-black scale-105' 
                        : 'text-neutral-600 hover:text-black scale-105'
                    }`}
                  >
                    {navSection.name}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SideNavigation;