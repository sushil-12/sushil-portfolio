import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Share2, Download, X } from 'lucide-react';
import businessCardImage from '../assets/business-card.png';

const FloatingBusinessCardButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleDownloadImage = () => {
    // Create a temporary link element to download the image directly
    const link = document.createElement('a');
    link.href = businessCardImage;
    link.download = 'sushil-kumar-business-card.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <div className="relative max-w-none">
            {/* Business Card Image */}
            <img 
              src={businessCardImage} 
              alt="Sushil Kumar Business Card" 
              className="max-w-none h-auto shadow-2xl"
              style={{ borderRadius: 'inherit' }}
            />
            
            {/* Overlay Action Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {/* Share Button */}
              <motion.button
                onClick={handleShare}
                className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </motion.button>

              {/* Download Button */}
              <motion.button
                onClick={handleDownloadImage}
                className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download Image"
              >
                <Download className="w-4 h-4" />
              </motion.button>
            </div>
            
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Close"
            >
              <X className="w-5 h-5 text-neutral-600" />
            </motion.button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingBusinessCardButton;
