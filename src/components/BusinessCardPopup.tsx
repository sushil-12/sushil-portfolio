import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import businessCardImage from '../assets/business-card.png';

interface BusinessCardPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BusinessCardPopup: React.FC<BusinessCardPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Business Card Image with responsive dimensions */}
            <img 
              src={businessCardImage} 
              alt="Sushil Kumar Business Card" 
              className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] object-contain shadow-2xl rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-neutral-600" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessCardPopup;
