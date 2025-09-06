import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Experience interface
interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

// Experience data
const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Engineer (Team Lead)",
    company: "Infostride Technologies",
    location: "Onsite",
    period: "Aug 2021 - Present",
    description: "Led a development team of 4 members, driving full-stack application development using Agile methodologies.",
    achievements: [
      "Successfully delivered multiple scalable projects, ensuring on-time delivery and high-quality standards",
      "Worked extensively on React.js and Next.js applications, implementing modular and optimized frontends",
      "Actively collaborated with product managers, designers, and QA teams to streamline Agile workflows",
      "Built an AI-powered git assistant (npm package: sushil-gitmate)",
      "Independently handled end-to-end development for multiple projects under minimal supervision"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "AWS", "Docker", "Agile"]
  },
  {
    title: "Software Engineer",
    company: "Infostride Technologies",
    location: "Remote",
    period: "Mar 2021 - Aug 2021",
    description: "Built responsive, interactive e-commerce UIs and developed custom WordPress plugins.",
    achievements: [
      "Built responsive, interactive e-commerce UIs using React.js, Vue.js, and Shopify templates",
      "Developed custom WordPress plugins, integrated APIs, and optimized MySQL databases",
      "Designed and developed RESTful APIs and backend systems in Laravel",
      "Created cron-based Laravel applications to automate scheduled tasks",
      "Maintained seamless backend/frontend communication and ensured high system reliability"
    ],
    technologies: ["React.js", "Vue.js", "Laravel", "WordPress", "MySQL", "Shopify"]
  },
  {
    title: "Intern Software Engineer",
    company: "Devarty Technologies",
    location: "Remote",
    period: "July 2020 - Feb 2021",
    description: "Worked as a full stack developer and built responsive, Api for mobile app and developed AI based chatbot",
    achievements: [
      "Built AI chatbot using Node.js and React.js",
      "Built Weather app using Node.js and  python",
    ],
    technologies: ["React.js", "Node.js", "Python", "AI"]
  },
];

// Experience Slider Card Component
const ExperienceSliderCard: React.FC<{ experience: ExperienceItem }> = ({ experience }) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-neutral-900 mb-1">
            {experience.title}
          </h3>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-base font-semibold text-neutral-700">
              {experience.company}
            </span>
            <div className="flex items-center gap-1 text-sm text-neutral-500">
              <MapPin className="w-3 h-3" />
              {experience.location}
            </div>

          </div>
          <div className="items-center block md:hidden gap-1  text-neutral-600 py-1 rounded-lg text-sm">
            {experience.period}
          </div>
        </div>
        <div className="items-center hidden md:block gap-1 bg-neutral-100 text-neutral-600 px-3 py-1 rounded-lg text-sm">
          <Calendar className="w-3 h-3" />
          {experience.period}
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-600 text-sm leading-relaxed mb-4">
        {experience.description}
      </p>

      {/* Top 3 Achievements */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-neutral-900 mb-2">Key Highlights</h4>
        <ul className="space-y-1">
          {experience.achievements.slice(0, 3).map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
              <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-xs leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-medium text-neutral-900 mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-1">
          {experience.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-neutral-100 text-neutral-700 rounded border border-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const Experience: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section
      aria-labelledby="experience-heading"
      className="mx-auto max-w-7xl px-6 md:px-8 py-12"
    >
      {/* Section Heading */}
      <h2
        id="experience-heading"
        className="text-2xl font-bold tracking-tight text-neutral-900 mb-3"
      >
        Professional Experience
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-neutral-600 text-base leading-relaxed mb-8 max-w-2xl">
          5+ years of full-stack development experience, delivering scalable solutions
          for enterprises and startups across web and mobile platforms.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label="Previous experience"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-700" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label="Next experience"
          >
            <ChevronRight className="w-5 h-5 text-neutral-700" />
          </button>
        </div>
      </div>

      {/* Experience Slider */}
      <div>
        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {experiences.map((experience, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <ExperienceSliderCard experience={experience} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-neutral-800' : 'bg-neutral-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
