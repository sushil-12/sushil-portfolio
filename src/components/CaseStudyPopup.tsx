import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import type { CaseStudyPopupProps } from '../types/caseStudy';
import OptimizedImage from './OptimizedImage';

const CaseStudyPopup: React.FC<CaseStudyPopupProps> = ({ caseStudy, isOpen, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle escape key and click outside
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden border border-neutral-200"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black border-b border-neutral-700 px-6 py-3 z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white mb-1">{caseStudy.title}</h2>
                  <p className="text-neutral-300 text-xs">{caseStudy.tagline}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black text-xs font-semibold rounded hover:bg-neutral-100 transition-all duration-200 cursor-pointer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </a>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-neutral-800 rounded transition-all duration-200 cursor-pointer"
                    aria-label="Close case study"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Stats */}

            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-80px)] custom-scrollbar">
              {/* Hero Image */}
              <div className="relative">
                <OptimizedImage
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  className="w-full h-100 object-cover"
                  priority={true}
                />
              </div>


              {/* Main Content */}
              <div className="px-6 py-4 space-y-6">
                {/* Overview */}
                <section>
                  <div className="flex items-center gap-8 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-black"></div>
                      <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Overview</h3>
                    </div>
                    
                    {/* Project Stats - Beautified */}
                    <div className="flex items-center gap-6 px-4 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-neutral-900 text-xs font-semibold">{caseStudy.duration}</span>
                        <span className="text-neutral-500 text-xs">Duration</span>
                      </div>
                      <div className="w-px h-4 bg-neutral-300"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-neutral-900 text-xs font-semibold">{caseStudy.teamSize}</span>
                        <span className="text-neutral-500 text-xs">Team</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed pl-3">{caseStudy.overview}</p>
                </section>

                {/* Divider */}
                <div className="border-t border-neutral-200"></div>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <section>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-4 bg-black"></div>
                      <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Challenge</h3>
                    </div>
                    <p className="text-neutral-700 text-sm leading-relaxed pl-3">{caseStudy.problem}</p>
                  </section>
                  <section>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-4 bg-black"></div>
                      <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Solution</h3>
                    </div>
                    <p className="text-neutral-700 text-sm leading-relaxed pl-3">{caseStudy.solution}</p>
                  </section>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-200"></div>

                {/* Technologies & Features */}
                <div className="grid md:grid-cols-2 gap-6">
                  <section>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-4 bg-black"></div>
                      <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Technologies</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pl-3">
                      {caseStudy.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-black text-white text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                  <section>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-4 bg-black"></div>
                      <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Key Features</h3>
                    </div>
                    <div className="space-y-2 pl-3">
                      {caseStudy.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                          <span className="text-neutral-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-200"></div>

                {/* Results */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 bg-black"></div>
                    <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Results</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pl-3">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center p-3 bg-black text-white rounded">
                        <div className="text-lg font-bold">{result.value}</div>
                        <div className="text-xs text-neutral-300">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-sm font-semibold text-neutral-900 mb-1">Ready to build something amazing?</div>
                    <div className="text-xs text-neutral-600">Let's discuss your project requirements</div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-neutral-300 text-neutral-700 text-sm font-medium rounded hover:bg-white hover:border-neutral-400 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-neutral-800 transition-all duration-200 shadow-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyPopup;
