import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  User,
  Briefcase,
  Star,
  Award,
  Calendar,
  MapPin
} from 'lucide-react';

interface ProjectHighlight {
  title: string;
  desc: string;
  technologies?: string[];
}

interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  portfolio?: string;
}

interface FreelancerBusinessCardProps {
  name: string;
  title: string;
  avatarUrl?: string;
  accentColor?: string;
  services: string[];
  highlights: ProjectHighlight[];
  links: SocialLinks;
  onHire?: () => void;
  resumeUrl?: string;
  showTrigger?: boolean;
  experience?: string;
  location?: string;
  availability?: string;
  rating?: number;
  projectsCompleted?: number;
}

const FreelancerBusinessCard: React.FC<FreelancerBusinessCardProps> = ({
  name,
  title,
  avatarUrl,
  accentColor = '#3B82F6',
  services,
  highlights,
  links,
  onHire,
  resumeUrl,
  showTrigger = false,
  experience,
  location,
  availability,
  rating,
  projectsCompleted
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap
  useEffect(() => {
    if (isOpen) {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;
      
      firstElement?.focus();

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleHire = () => {
    onHire?.();
    handleClose();
  };

  const handleDownloadCV = () => {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank');
    }
  };

  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating: number = 0) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
      />
    ));
  };

  // If showTrigger is false, just render the card content directly
  if (!showTrigger) {
    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700">
        <div className="flex flex-col lg:flex-row">
          {/* Left Brand Panel */}
          <div className="w-full lg:w-[40%] bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="circuit-board" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="40" height="40" fill="transparent" />
                    <path d="M0,20 L40,20 M20,0 L20,40" stroke="white" strokeWidth="0.5" fill="none" />
                    <circle cx="20" cy="20" r="2" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-board)" />
              </svg>
            </div>

            {/* Avatar/Logo */}
            <div className="relative z-10 mb-6">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`${name} avatar`}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-xl"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center text-2xl font-bold shadow-xl">
                  {getInitials(name)}
                </div>
              )}
            </div>

            {/* Name & Title */}
            <div className="text-center relative z-10 mb-6">
              <h2 
                id="business-card-title"
                className="text-xl font-bold mb-2"
              >
                {name}
              </h2>
              <p className="text-base opacity-90 leading-relaxed">
                {title}
              </p>
            </div>

            {/* Key Services - Only show top 3 */}
            <div className="w-full space-y-2 relative z-10">
              {services.slice(0, 3).map((service, index) => (
                <div key={index} className="text-center">
                  <span className="text-sm opacity-80">• {service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="flex-1 p-6 bg-white dark:bg-neutral-900">
            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                {links.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">{links.email}</span>
                  </div>
                )}
                {links.github && (
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">github.com/sushil-12</span>
                  </div>
                )}
                {links.linkedin && (
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">linkedin.com/in/sushil-maurya</span>
                  </div>
                )}
              </div>
            </div>

            {/* Top Skills - Only show top 6 */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {services.slice(0, 6).map((service, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-full border border-neutral-200 dark:border-neutral-700"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <button
                onClick={handleHire}
                className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original modal functionality when showTrigger is true
  return (
    <>
      {/* Demo Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
        className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
        style={{ backgroundColor: accentColor }}
      >
        <User className="w-5 h-5" />
        View Card
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="business-card-title"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              </motion.button>

              <div className="p-2 bg-white dark:bg-neutral-900 rounded-2xl">
                <FreelancerBusinessCard 
                  {...{ 
                    name, 
                    title, 
                    avatarUrl, 
                    accentColor, 
                    services, 
                    highlights, 
                    links, 
                    onHire, 
                    resumeUrl, 
                    showTrigger: false,
                    experience,
                    location,
                    availability,
                    rating,
                    projectsCompleted
                  }} 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FreelancerBusinessCard;