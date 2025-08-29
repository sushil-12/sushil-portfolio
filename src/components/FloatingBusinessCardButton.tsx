import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Share2, Download, X } from 'lucide-react';
import businessCardImage from '../assets/business-card.png';

const FloatingBusinessCardButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    // Restore body scrolling when modal is closed
    document.body.style.overflow = 'unset';
  };

  // Cleanup on component unmount
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleDownloadImage = () => {
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
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
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
        className="fixed bottom-6 right-6 z-40 bg-neutral-900 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-neutral-700 focus:ring-offset-2 group"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label="View my business card"
      >
        <User className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-neutral-900/95 text-white text-sm rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          View My Card
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-neutral-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </motion.button>

      {/* Business Card Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 150, damping: 18 }}
            >
              {/* Business Card */}
              <img
                src={businessCardImage}
                alt="Sushil Kumar Business Card"
                className="
                  w-[90vw] 
                  max-h-[100vh] 
                  sm:w-[380px] 
                  sm-h-[400px] 
                  md:w-[480px] 
                  lg:w-[580px] 
                  xl:w-[680px]
                  rounded-2xl 
                  shadow-2xl 
                  border 
                  border-neutral-800 
                  object-contain
                "
              />

              {/* Action Buttons */}
              <div className="absolute -bottom-8 -right-0 flex gap-2 sm:gap-3">
                {/* Share */}
                <motion.button
                  onClick={handleShare}
                  className="p-3 bg-black/80 hover:bg-black/90 text-white rounded-full shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>

                {/* Download */}
                <motion.button
                  onClick={handleDownloadImage}
                  className="p-3 bg-black/80 hover:bg-black/90 text-white rounded-full shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute -top-4 -right-4 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-neutral-700" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingBusinessCardButton;
