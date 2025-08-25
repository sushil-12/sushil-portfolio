import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="text-sm text-neutral-300">
            © 2025 Sushil Kumar. All rights reserved.
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
