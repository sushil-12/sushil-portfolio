import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Type,
  Globe,
  Palette,
  Terminal,
  Database,
  Braces,
  FileCode,
  Cpu,
  Server,
  Zap
} from 'lucide-react';

// Import OptimizedImage component
import OptimizedImage from './OptimizedImage';

const icons = {
  Tech: <OptimizedImage src="/src/assets/icons/software.png" alt="Tech" className="w-6 h-6" />,
  Expertise: <OptimizedImage src="/src/assets/icons/expertise.png" alt="Expertise" className="w-6 h-6" />,
  Language: <OptimizedImage src="/src/assets/icons/lang.png" alt="Language" className="w-6 h-6" />
}

// Skills data organized by category with icons
const categories = {
  Tech: [
    { name: 'React.js', icon: Code },
    { name: 'Next.js', icon: Globe },
    { name: 'Node.js', icon: Terminal },
    { name: 'Laravel', icon: Database },
    { name: 'Vue.js', icon: Palette },
    { name: 'Angular', icon: Code },
    { name: 'WordPress', icon: Globe },
    { name: 'Shopify', icon: Palette },
    { name: 'MongoDB', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'Docker', icon: Terminal },
    { name: 'AWS', icon: Globe },
    { name: 'Git', icon: Code },
    { name: 'Jest', icon: Zap }
  ],
  Expertise: [
    { name: 'Full-stack Development', icon: Code },
    { name: 'Microservices Architecture', icon: Globe },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'CI/CD Pipelines', icon: Terminal },
    { name: 'AWS Cloud Services', icon: Database }
  ],
  Language: [
    { name: 'JavaScript', icon: Code },
    { name: 'TypeScript', icon: Type },
    { name: 'PHP', icon: Server },
    { name: 'Python', icon: Cpu },
    { name: 'SQL', icon: Database },
    { name: 'HTML', icon: FileCode },
    { name: 'CSS', icon: Palette },
    { name: 'C++', icon: Braces },
    { name: 'Java', icon: Zap }
  ]
} as const;

type CategoryKey = keyof typeof categories;

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryKey>('Tech');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      aria-labelledby="skills-heading"
      className="mx-auto max-w-7xl px-6 md:px-8 py-12"
    >
      {/* Section Heading */}
      <h2 
        id="skills-heading"
        className="text-2xl font-bold tracking-tight text-neutral-900 mb-8"
      >
        Skills
      </h2>

      {/* Category Tabs */}
      <div role="tablist" className="flex flex-wrap gap-6 mb-8">
        {(Object.keys(categories) as CategoryKey[]).map((category) => {
          const isActive = activeTab === category;
          
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${category.toLowerCase()}-panel`}
              onClick={() => setActiveTab(category)}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 pb-2 border-b-2 ${
                isActive
                  ? 'border-neutral-900 text-neutral-900'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              }`}
            >
              {icons[category]}
              {category}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div
        role="tabpanel"
        id={`${activeTab.toLowerCase()}-panel`}
        aria-labelledby="skills-heading"
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6"
          >
            {categories[activeTab].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name + index}
                  variants={itemVariants}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="rounded-sm border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 items-center shadow-sm hover:shadow-md transition-all duration-200 cursor-default flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4 text-neutral-500" />
                  {skill.name}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
