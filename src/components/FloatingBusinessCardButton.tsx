import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Share2, Download, X } from 'lucide-react';
import FreelancerBusinessCard from './FreelancerBusinessCard';

// Dynamic import for html2canvas to avoid SSR issues
let html2canvas: any = null;
if (typeof window !== 'undefined') {
  import('html2canvas').then(module => {
    html2canvas = module.default;
  });
}

const FloatingBusinessCardButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Business card data
  const businessCardData = {
    name: 'Sushil Kumar',
    title: 'Full Stack Developer & UI/UX Designer',
    services: [
      'React/Next.js Development',
      'Node.js Backend',
      'UI/UX Design',
      'Mobile App Development',
      'Database Design',
      'API Integration'
    ],
    highlights: [
      {
        title: 'E-commerce Platforms',
        desc: 'Built scalable e-commerce solutions with modern tech stacks'
      },
      {
        title: 'SaaS Applications',
        desc: 'Developed enterprise SaaS platforms with complex workflows'
      },
      {
        title: 'Mobile Apps',
        desc: 'Created cross-platform mobile applications using React Native'
      },
      {
        title: 'AI Integration',
        desc: 'Integrated AI services and machine learning models'
      }
    ],
    links: {
      github: 'https://github.com/sushil-12',
      linkedin: 'https://www.linkedin.com/in/sushil-maurya-6256b4154/',
      email: 'developer.er.sushil@gmail.com'
    },
    accentColor: 'emerald-500'
  };

  const handleHire = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact-heading');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  const handleDownloadPNG = async () => {
    if (cardRef.current && html2canvas) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: '#ffffff',
          scale: 2, // Higher quality
          useCORS: true,
          allowTaint: true
        });
        
        const link = document.createElement('a');
        link.download = 'sushil-kumar-business-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('Error generating PNG:', error);
      }
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Sushil Kumar - Business Card',
          text: 'Full Stack Developer & UI/UX Designer',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-40 bg-neutral-900 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 group"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label="View my business card"
      >
        <User className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-neutral-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          View My Card
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-neutral-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </motion.button>

      {/* Business Card Display */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Header with Action Buttons */}
            <div className="sticky top-0 bg-white dark:bg-neutral-900 px-6 py-4 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                My Business Card
              </h2>
              
              <div className="flex items-center gap-3">
                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                
                {/* Download Button */}
                <button
                  onClick={handleDownloadPNG}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>
                
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Business Card Content */}
            <div className="p-6" ref={cardRef}>
              <FreelancerBusinessCard 
                {...businessCardData}
                onHire={handleHire}
                showTrigger={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingBusinessCardButton;
