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

// Import images using ES6 syntax
import softwareIcon from '../assets/skill.png';
import expertiseIcon from '../assets/expertise.png';
import languageIcon from '../assets/code.png';

const icons = {
  Tech: <img src={softwareIcon} alt="Tech" className="w-6 h-6" />,
  Expertise: <img src={expertiseIcon} alt="Expertise" className="w-6 h-6" />,
  Language: <img src={languageIcon} alt="Language" className="w-6 h-6" />
}

// Skills data organized by category with icons
const categories = {
  Tech: [
    { name: 'React.js', icon: Code, level: 90 },
    { name: 'Next.js', icon: Globe, level: 80 },
    { name: 'Node.js', icon: Terminal, level: 80 },
    { name: 'Laravel', icon: Database, level: 90 },
    { name: 'Vue.js', icon: Palette, level: 60 },
    { name: 'Angular', icon: Code, level: 50   },
    { name: 'WordPress', icon: Globe, level: 80 },
    { name: 'Shopify', icon: Palette, level: 75 },
    { name: 'MongoDB', icon: Database, level: 80 },
    { name: 'MySQL', icon: Database, level: 90 },
    { name: 'Docker', icon: Terminal, level: 70 },
    { name: 'AWS', icon: Globe, level: 60 },
    { name: 'Git', icon: Code, level: 95 },
    { name: 'Jest', icon: Zap, level: 60 }
  ],
  Expertise: [
    { name: 'Full-stack Development', icon: Code, level: 90 },
    { name: 'Microservices Architecture', icon: Globe, level: 70 },
    { name: 'UI/UX Design', icon: Palette, level: 80 },
    { name: 'CI/CD Pipelines', icon: Terminal, level: 80 },
    { name: 'AWS Cloud Services', icon: Database, level: 70 }
  ],
  Language: [
    { name: 'JavaScript', icon: Code, level: 90 },
    { name: 'TypeScript', icon: Type, level: 80 },
    { name: 'PHP', icon: Server, level: 70 },
    { name: 'Python', icon: Cpu, level: 60 },
    { name: 'SQL', icon: Database, level: 50 },
    { name: 'HTML', icon: FileCode, level: 70 },
    { name: 'CSS', icon: Palette, level: 70 },
    { name: 'C++', icon: Braces, level: 50 },
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
      className="mx-auto max-w-7xl px-6 md:px-8 py-8"
    >
      {/* Section Heading */}
      <h2 
        id="skills-heading"
        className="text-2xl font-bold tracking-tight text-neutral-900 mb-6"
      >
        Skills
      </h2>

      {/* Category Tabs */}
      <div role="tablist" className="flex flex-wrap gap-3 mb-8">
        {(Object.keys(categories) as CategoryKey[]).map((category) => {
          const isActive = activeTab === category;
          
          return (
            <motion.button
              key={category}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${category.toLowerCase()}-panel`}
              onClick={() => setActiveTab(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden ${
                isActive
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-800'
              }`}
            >
              {/* Active tab background animation */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black rounded-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Content */}
              <div className="relative z-10 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: isActive ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={isActive ? 'filter brightness-0 invert' : ''}
                >
                  {icons[category]}
                </motion.div>
                <span className="font-semibold">{category}</span>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 t via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          );
        })}
      </div>

      {/* Skills Bar Grid */}
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
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {categories[activeTab].map((skill, index) => {
              const IconComponent = skill.icon;
              // Generate random skill level for demo (you can replace with actual data)
              const skillLevel = skill.level;
              
              return (
                <motion.div
                  key={skill.name + index}
                  variants={itemVariants}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative"
                  whileHover={{ x: 4 }}
                >
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <IconComponent className="w-4 h-4 text-neutral-600 group-hover:text-black transition-colors duration-200" />
                      </motion.div>
                      <span className="text-sm font-medium text-neutral-900 group-hover:text-black transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                    <motion.span 
                      className="text-xs font-bold text-neutral-500 group-hover:text-black transition-colors duration-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      {skillLevel}%
                    </motion.span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="relative w-full bg-neutral-100 h-2 rounded-full overflow-hidden shadow-inner">
                    {/* Animated Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skillLevel}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.05, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      }}
                      className="relative h-full bg-black rounded-full"
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-neutral-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    
                    {/* Percentage indicator dot */}
                    <motion.div
                      className="absolute top-1/2 w-1 h-1 bg-white rounded-full shadow-sm"
                      style={{ left: `${skillLevel}%` }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + index * 0.05 }}
                    />
                  </div>
                  
                  {/* Skill level indicator line */}
                  <motion.div
                    className="absolute top-8 left-0 w-0 h-0.5 -to-r from-emerald-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skillLevel}%` }}
                    transition={{ 
                      duration: 1.2, 
                      delay: index * 0.05 + 0.5,
                      ease: "easeOut"
                    }}
                  />
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
