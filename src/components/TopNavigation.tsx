import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase,Mail, NewspaperIcon } from 'lucide-react';

const TopNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/about', name: 'About', icon: User },
    { path: '/services', name: 'Services', icon: Briefcase },
    { path: '/blog', name: 'Blog', icon: NewspaperIcon },
    { path: '/contact', name: 'Contact', icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's a hash link, scroll to section on homepage
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        window.location.href = path;
      } else {
        // Just scroll to section
        const targetId = path.substring(2);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'text-neutral-900 scale-105 border-b-2 border-neutral-900'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors absolute right-6"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-neutral-200/50"
            >
              <div className="py-4 space-y-1">
                {navigationItems.map((item) => {
                  const active = isActive(item.path);
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        active
                          ? 'text-neutral-900'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default TopNavigation;
