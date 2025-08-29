import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  X,
  User,
  Briefcase,
} from "lucide-react";
import QrCode from "../assets/qrcode.png";
import Hero from "../assets/hero.jpg";

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
  accentColor = "#3B82F6",
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
  projectsCompleted,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);

  // Focus trap
  React.useEffect(() => {
    if (isOpen) {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[
        focusableElements.length - 1
      ] as HTMLElement;

      firstElement?.focus();

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
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

      document.addEventListener("keydown", handleTabKey);
      return () => document.removeEventListener("keydown", handleTabKey);
    }
  }, [isOpen]);

  // ESC key handler
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // If showTrigger is false, just render the card content directly
  if (!showTrigger) {
    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Full Black */}
          <div className="w-full lg:w-[40%] bg-black p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-white relative">
            {/* Avatar/Logo */}
            <div className="relative z-10 mb-4 sm:mb-6">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`${name} avatar`}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white/30 shadow-xl"
                />
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full">
                 <img src={Hero} alt={`${name} avatar`} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover" />
                </div>
              )}
            </div>

            {/* Name & Title */}
            <div className="text-center relative z-10 mb-4 sm:mb-6">
              <h2 id="business-card-title" className="text-lg sm:text-xl font-bold mb-2 text-white">
                {name}
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">{title}</p>
              <span className="text-xs sm:text-sm text-white/70">Crafting fast, scalable apps with user-first design</span>
            </div>

            {/* Key Services - Only show top 3 */}
            
          </div>

          {/* Right Content Panel */}
          <div className="flex-1 p-6 bg-white dark:bg-neutral-900 relative">
            {/* QR Code Section - Top Right */}
            <div className="absolute top-10 right-4">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-lg border border-neutral-300 dark:border-neutral-400 flex items-center justify-center shadow-sm">
                  <img src={QrCode} alt="QR Code" className="w-18 h-18" />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                {links.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {links.email}
                    </span>
                  </div>
                )}
                {links.github && (
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      github.com/sushil-12
                    </span>
                  </div>
                )}
                {links.linkedin && (
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      linkedin.com/in/er-sushil-maurya
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Core Skills */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Core Skills
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {services.slice(0, 6).map((service, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-full border border-neutral-200 dark:border-neutral-700 text-center"
                  >
                    {service}
                  </span>
                ))}
              </div>
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
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[800px] lg:max-w-[900px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200 dark:border-neutral-700">
                <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">Business Card</h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                  aria-label="Close popup"
                >
                  <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                </button>
              </div>

              {/* Freelancer Business Card Content */}
              <div className="p-3 sm:p-4 md:p-6">
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
                    projectsCompleted,
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
