import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import FreelancerBusinessCard from './FreelancerBusinessCard';

interface BusinessCardPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BusinessCardPopup: React.FC<BusinessCardPopupProps> = ({ isOpen, onClose }) => {
  const sushilData = {
    name: "Sushil Kumar",
    title: "Full-Stack & Mobile Developer",
    avatarUrl: undefined, // Will use initials
    accentColor: "emerald-500",
    services: [
      "React & React Native",
      "Node.js & Express",
      "Next.js & TypeScript",
      "AWS & Cloud Solutions",
      "CI/CD & DevOps",
      "UI/UX Design"
    ],
    highlights: [
      {
        title: "E-commerce Platform",
        desc: "Built scalable React/Node.js platform handling 10K+ daily users with real-time inventory management."
      },
      {
        title: "Mobile Banking App",
        desc: "Developed secure React Native app with biometric authentication and real-time transaction processing."
      },
      {
        title: "AI-Powered Analytics",
        desc: "Created ML-driven dashboard using Next.js and TensorFlow for business intelligence insights."
      }
    ],
    links: {
      github: "https://github.com/sushilkumar",
      linkedin: "https://linkedin.com/in/sushilkumar",
      twitter: "https://twitter.com/sushilkumar",
      email: "developer.er.sushil@gmail.com"
    },
    onHire: () => {
      alert("Thank you for your interest! I'll get back to you soon.");
    },
    resumeUrl: "/resume.pdf"
  };

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
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-[900px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Business Card</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              </button>
            </div>

            {/* Freelancer Business Card Content */}
            <div className="p-6">
              <FreelancerBusinessCard {...sushilData} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessCardPopup;
