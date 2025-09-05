import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Clock, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';
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
            className="bg-white rounded-xl shadow-xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-neutral-200"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">{caseStudy.title}</h2>
                <p className="text-neutral-600 text-sm">{caseStudy.tagline}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Close case study"
              >
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Hero Image */}
              <div className="relative">
                <OptimizedImage
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  className="w-full h-64 md:h-80 object-cover"
                  priority={true}
                />
              </div>

              {/* Quick Stats */}
              <div className="px-6 py-6 border-b border-neutral-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-neutral-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-neutral-900">{caseStudy.duration}</div>
                    <div className="text-xs text-neutral-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-neutral-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-neutral-900">{caseStudy.teamSize}</div>
                    <div className="text-xs text-neutral-600">Team Size</div>
                  </div>
                  <div className="text-center">
                    <Star className="w-5 h-5 text-neutral-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-neutral-900">{caseStudy.technologies.length}</div>
                    <div className="text-xs text-neutral-600">Technologies</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-5 h-5 text-neutral-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-neutral-900">{caseStudy.features.length}</div>
                    <div className="text-xs text-neutral-600">Features</div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="px-6 py-8 space-y-8">
                {/* Overview */}
                <section>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Overview</h3>
                  <p className="text-neutral-700 leading-relaxed">{caseStudy.overview}</p>
                </section>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <section>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">Problem</h3>
                    <p className="text-neutral-700 leading-relaxed text-sm">{caseStudy.problem}</p>
                  </section>
                  <section>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">Solution</h3>
                    <p className="text-neutral-700 leading-relaxed text-sm">{caseStudy.solution}</p>
                  </section>
                </div>

                {/* Technologies */}
                <section>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-md text-sm border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Key Features */}
                <section>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {caseStudy.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-neutral-600 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Results */}
                <section>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Results</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                        <div className="text-2xl font-bold text-neutral-900 mb-1">{result.value}</div>
                        <div className="text-sm font-medium text-neutral-700 mb-1">{result.metric}</div>
                        <div className="text-xs text-neutral-600">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Lessons Learned */}
                <section>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Lessons Learned</h3>
                  <div className="space-y-3">
                    {caseStudy.lessonsLearned.map((lesson, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                        <div className="w-5 h-5 bg-neutral-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-neutral-700 text-xs font-medium">{index + 1}</span>
                        </div>
                        <p className="text-neutral-700 text-sm">{lesson}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Footer */}
              <div className="px-6 py-6 bg-neutral-50 border-t border-neutral-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-neutral-600">
                    Interested in similar work? Let's discuss your project.
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors text-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Get In Touch
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
