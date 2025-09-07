import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, FolderOpen, Award, Mail } from 'lucide-react';

interface SideNavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sections = [
    { id: 'home', name: 'Home', href: '#home', icon: Home },
    { id: 'about', name: 'About Sushil Hub', href: '#about', icon: User },
    { id: 'services', name: 'Services', href: '#services', icon: Briefcase },
    { id: 'skills', name: 'Skills', href: '#skills-heading', icon: Code },
    { id: 'projects', name: 'Projects', href: '#projects-heading', icon: FolderOpen },
    { id: 'experience', name: 'Experience', href: '#experience-heading', icon: Award },
    { id: 'contact', name: 'Contact', href: '#contact-heading', icon: Mail },
  ];

  useEffect(() => {
    if (currentPage === 'home') {
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
    }
  }, [currentPage]);

  const handleNavigation = (sectionId: string, href: string) => {
    if (sectionId === 'about' || sectionId === 'services') {
      setCurrentPage(sectionId);
    } else if (sectionId === 'home') {
      setCurrentPage('home');
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      // Scroll to section
      setTimeout(() => {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Side Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ 
            width: isHovered ? 220 : 56,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white/90 backdrop-blur-lg border border-neutral-200/50 rounded-2xl shadow-xl"
        >
          <div className="p-2">
            <div className="space-y-1">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                const isActive = currentPage === section.id || 
                  (currentPage === 'home' && activeSection === section.id);
                
                return (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1,
                      x: 0
                    }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleNavigation(section.id, section.href)}
                    className={`group relative w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-neutral-900 text-white shadow-lg' 
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    {/* Text */}
                    <motion.span 
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        width: isHovered ? 'auto' : 0
                      }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="text-sm font-medium whitespace-nowrap overflow-hidden"
                    >
                      {section.name}
                    </motion.span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-full"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 lg:hidden"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-neutral-900">
              Sushil Hub
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-t border-neutral-200"
            >
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="space-y-1">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    const isActive = currentPage === section.id || 
                      (currentPage === 'home' && activeSection === section.id);
                    
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleNavigation(section.id, section.href)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive 
                            ? 'bg-neutral-900 text-white' 
                            : 'text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        {section.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile spacing */}
      <div className="h-16 lg:hidden" />
    </>
  );
};

export default SideNavigation;