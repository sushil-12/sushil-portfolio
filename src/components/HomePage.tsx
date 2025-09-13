import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home,  Code, FolderOpen, Mail } from 'lucide-react';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import SEOHead from './SEOHead';
import { generateOrganizationStructuredData } from '../config/structured-data';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = [
    { id: 'home', name: 'Home', href: '#home', icon: Home },
    { id: 'skills', name: 'Skills', href: '#skills-heading', icon: Code },
    { id: 'projects', name: 'Projects', href: '#projects-heading', icon: FolderOpen },
    { id: 'contact', name: 'Contact', href: '#contact-heading', icon: Mail },
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
    <>
      {/* SEO Head with Organization Schema */}
      <SEOHead 
        pageType="homepage"
        structuredData={generateOrganizationStructuredData()}
      />
      
      {/* Side Navigation - Only for Homepage */}
      <motion.nav
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="flex flex-col space-y-3 gap-3">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => scrollToSection(section.href)}
                className={`group relative flex items-center gap-3 justify-center transition-all duration-300 ${
                  isActive 
                    ? 'text-neutral-900' 
                    : 'text-neutral-400 hover:text-neutral-700'
                }`}
                title={section.name}
              >
                <IconComponent className={`w-5 h-5 transition-all duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-105'
                }`} />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-3 py-2 bg-neutral-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg">
                  {section.name}
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-neutral-900 rotate-45"></div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Homepage Content */}
      <div className="pt-16">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;