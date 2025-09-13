import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images using ES6 syntax
import softwareIcon from '../assets/skill.png';
import expertiseIcon from '../assets/expertise.png';
import languageIcon from '../assets/code.png';

const icons = {
  Tech: <img src={softwareIcon} alt="Tech" className="w-6 h-6" />,
  Expertise: <img src={expertiseIcon} alt="Expertise" className="w-6 h-6" />,
  Language: <img src={languageIcon} alt="Language" className="w-6 h-6" />
}

// Skills data organized by category with actual technology icons
const categories = {
  Tech: [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Laravel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4hgAj2QByaNVhFdb3OYDtsidv54ynE0QOw&s' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg' },
    { name: 'Shopify', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'AWS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8_ACwdQT0NMs_ptU8917_1THnLQqxK_u8Q&s' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' }
  ],
  Expertise: [
    { name: 'Full-stack Development', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fullstack/fullstack-original.svg' },
    { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg' },
    { name: 'UI/UX Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
    { name: 'Cloud Services', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg' }
  ],
  Language: [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
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
            className="mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3"
          >
            {categories[activeTab].map((skill, index) => {
              return (
                <motion.div
                  key={skill.name + index}
                  variants={itemVariants}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative bg-white border border-neutral-200 rounded-lg p-3 hover:border-neutral-300 hover:shadow-md transition-all duration-200"
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="p-1.5 bg-neutral-50 rounded-md group-hover:bg-neutral-100 transition-colors duration-200"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-5 h-5"
                        onError={(e) => {
                          // Fallback to a simple div if icon fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-5 h-5 bg-neutral-300 rounded"></div>
                    </motion.div>
                    <span className="text-xs font-medium text-neutral-700 group-hover:text-black transition-colors duration-200 leading-tight">
                      {skill.name}
                    </span>
                  </div>
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
