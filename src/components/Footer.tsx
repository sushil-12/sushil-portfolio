import React from 'react';
import LightLogo from '../assets/light-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 dark-scrollbar">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="flex flex-col space-x-4 items-center md:items-start gap-4">
            <div className="transition-transform duration-300 hover:scale-105">
              <img 
                src={LightLogo} 
                alt="Sushil Kumar Logo" 
                className="w-44 h-auto" 
              />
            </div>
            <div className="text-sm text-neutral-300">
              © 2025 Sushil Kumar. All rights reserved.
            </div>
          </div>
          
          {/* Right side - Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="#projects" 
              className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a 
              href="#about-us" 
              className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
            >
              About SushilHub
            </a>
            <a 
              href="/blog" 
              className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
