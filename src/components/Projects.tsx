import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Star, Clock } from 'lucide-react';
import ProjectImage from './ProjectImage';
import CaseStudyPopup from './CaseStudyPopup';
import { getCaseStudyById } from '../data/caseStudies';

// Import project images
import wpvipImage from '../assets/project/wpvip.png';
import limoImage from '../assets/project/1800limo.png';
import metaImage from '../assets/project/meta.jpg';
import hegroupImage from '../assets/project/hegroup.png';
import pups4saleImage from '../assets/project/pups4sale.png';
import gitmateImage from '../assets/project/gitmate.png';
import witlingoImage from '../assets/project/witlingo.png';
import vettedImage from '../assets/project/vetted.png';
import llmImage from '../assets/project/llm.png';

// Project interface
interface Project {
  title: string;
  description: string;
  tech: string[];
  live: string;
  caseStudyId?: string;
  category: 'featured' | 'past';
}

type ProjectCategory = 'featured' | 'past';

const categories = {
  featured: { name: 'Featured', icon: Star },
  past: { name: 'Past Projects', icon: Clock }
} as const;

// Projects data - Updated with case study IDs
const projects: Project[] = [
  {
    title: "WPVIP.com",
    description: "Official website of WPVIP. Built custom plugins for WordPress VIP, Gutenberg blocks, and comprehensive WordPress solutions.",
    tech: ["WordPress", "PHP", "Gutenberg", "Custom Plugins", "WordPress VIP"],
    live: "https://wpvip.com",
    caseStudyId: "wpvip",
    category: "featured"
  },
  {
    title: "1800LIMO.com",
    description: "Online limousine booking platform with real-time communication. Full-stack solution with Angular frontend and Laravel + Node.js backend.",
    tech: ["Angular", "Laravel", "Node.js", "Real-time Communication", "WebSockets"],
    live: "https://1800limo.com",
    caseStudyId: "1800limo",
    category: "featured"
  },
  {
    title: "GitMate",
    description: "My own AI-based tool for git operations. Featured tool that enhances developer productivity with intelligent git assistance.",
    tech: ["Node.js", "React.js", "AI", "Git Operations", "Developer Tools"],
    live: "https://gitmate.com",
    caseStudyId: "gitmate",
    category: "featured"
  },
  {
    title: "Metahub.com",
    description: "Official website of Metahub. Built custom themes on their own platform Nexudus using Next.js for optimal performance.",
    tech: ["Next.js", "React.js", "Nexudus Platform", "Custom Themes"],
    live: "https://metahub.com",
    category: "past"
  },
  {
    title: "HeGroup CMS",
    description: "Custom content management system built for HeGroup using Node.js and React. Tailored solution for enterprise content management.",
    tech: ["Node.js", "React.js", "Custom CMS", "Enterprise Solution"],
    live: "https://hegroup-cms.com",
    category: "past"
  },
  {
    title: "Vetted.work",
    description: "Multi-user platform for job seekers and employers built with Laravel and Vue.js. Comprehensive job matching and verification system.",
    tech: ["Laravel", "Vue.js", "Multi-user Platform", "Job Matching", "Verification System"],
    live: "https://vetted.work",
    category: "past"
  },
  {
    title: "Witlingo Audio Station",
    description: "Next.js and React.js based audio station platform. Modern audio streaming and management solution.",
    tech: ["Next.js", "React.js", "Audio Streaming", "Audio Management"],
    live: "https://witlingo-audio.com",
    category: "past"
  },
  {
    title: "LLM Based Chatbot",
    description: "AI-powered chatbot built with Node.js and React.js. Advanced language model integration for intelligent conversations.",
    tech: ["Node.js", "React.js", "LLM", "AI Chatbot", "Natural Language Processing"],
    live: "https://llm-chatbot.com",
    category: "past"
  },
  {
    title: "pups4sale",
    description: "Full-stack e-commerce platform built with React.js and Node.js. Complete online shopping solution with payment integration.",
    tech: ["Next.js", "Nest.js", "E-commerce", "Payment Integration", "Full-stack"],
    live: "https://dev.pups4sale.com.au/",
    caseStudyId: "pups4sale",
    category: "featured"
  },
  {
    title: "1800LIMO Mobile App APIs",
    description: "Backend APIs for the 1800LIMO mobile application. RESTful services supporting the mobile booking experience.",
    tech: ["Laravel", "REST APIs", "Mobile Backend", "Booking System"],
    live: "https://1800limo.com/",
    category: "featured"
  }
];

// Project Card Component
const ProjectCard: React.FC<{ project: Project; index: number; onCaseStudyClick: (caseStudyId: string) => void }> = ({ project, index, onCaseStudyClick }) => {
  // Function to get project image based on title
  const getProjectImage = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('wpvip')) return wpvipImage;
    if (titleLower.includes('1800limo')) return limoImage;
    if (titleLower.includes('metahub') || titleLower.includes('meta')) return metaImage;
    if (titleLower.includes('hegroup')) return hegroupImage;
    if (titleLower.includes('pups4sale')) return pups4saleImage;
    if (titleLower.includes('gitmate')) return gitmateImage;
    if (titleLower.includes('witlingo')) return witlingoImage;
    if (titleLower.includes('vetted')) return vettedImage;
    if (titleLower.includes('llm')) return llmImage;
    return null; // No image available
  };

  const projectImage = getProjectImage(project.title);

  const handleCaseStudyClick = () => {
    if (project.caseStudyId) {
      onCaseStudyClick(project.caseStudyId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Project Image or Screenshot Placeholder */}
      <div className="aspect-video rounded-xl m-4 mb-0 overflow-hidden">
        {projectImage ? (
          <ProjectImage 
            src={projectImage} 
            alt={`${project.title} screenshot`}
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
            priority={index < 3} // Prioritize first 3 images
          />
        ) : (
          <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm">
            Screenshot
          </div>
        )}
      </div>
      
      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>
          
        {/* Action Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
          >
            <ExternalLink className="w-3 h-3" />
            Live
          </a>
          {project.caseStudyId && (
            <button
              onClick={handleCaseStudyClick}
              aria-label={`View case study for ${project.title}`}
              className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <FileText className="w-3 h-3" />
              Case Study
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('featured');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  
  const filteredProjects = projects.filter(project => project.category === activeCategory);

  const handleCaseStudyClick = (caseStudyId: string) => {
    setSelectedCaseStudy(caseStudyId);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <section
      aria-labelledby="projects-heading"
      className="mx-auto max-w-7xl px-6 md:px-8 py-12"
    >
      {/* Section Heading */}
      <h2 
        id="projects-heading"
        className="text-2xl font-bold tracking-tight text-neutral-900 mb-3"
      >
        Projects
      </h2>
      
      {/* Subtitle */}
      <p className="text-neutral-600 text-base leading-relaxed mb-8 max-w-2xl">
        A selection of my work — exploring full-stack builds, e-commerce, CMS systems, and more.
      </p>
      
      {/* Filter Tabs */}
      <div role="tablist" className="flex flex-wrap gap-6 mb-8">
        {(Object.keys(categories) as ProjectCategory[]).map((category) => {
          const isActive = activeCategory === category;
          const CategoryIcon = categories[category].icon;
          
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${category}-projects-panel`}
              onClick={() => setActiveCategory(category)}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 pb-2 border-b-2 ${
                isActive
                  ? 'border-neutral-900 text-neutral-900'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              }`}
            >
              <CategoryIcon className="w-4 h-4" />
              {categories[category].name}
            </button>
          );
        })}
      </div>
      
      {/* Projects Grid */}
      <div
        role="tabpanel"
        id={`${activeCategory}-projects-panel`}
        aria-labelledby="projects-heading"
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index}
                onCaseStudyClick={handleCaseStudyClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Case Study Popup */}
      <CaseStudyPopup
        caseStudy={selectedCaseStudy ? getCaseStudyById(selectedCaseStudy) || null : null}
        isOpen={!!selectedCaseStudy}
        onClose={handleCloseCaseStudy}
      />
    </section>
  );
};

export default Projects;
