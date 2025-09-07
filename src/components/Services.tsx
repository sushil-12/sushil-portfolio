import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Palette, Zap, Shield, Calendar, ArrowRight } from 'lucide-react';
import DarkLogo from '../assets/dark-logo.png';
import servicesImage from '../assets/services.png';

const ServicesHero = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  const illustrationVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  const ServicesIllustration = () => (
    <div className="relative">
      {/* Placeholder for services illustration - you can replace with actual image */}
      <div className="w-full h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg flex items-center justify-center">
        <img src={servicesImage} alt="Services Illustration" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );

  const handleBookMeeting = () => {
    const eventTitle = encodeURIComponent('Sushil Hub - Services Consultation');
    const eventDetails = encodeURIComponent('Let\'s discuss your project requirements and how Sushil Hub can help with our comprehensive development services.');
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&dates=20241201T100000Z/20241201T110000Z&add=developer.er.sushil@gmail.com&sf=true&output=xml`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <header
      id="services-hero"
      aria-labelledby="services-hero-heading"
      className="mx-auto max-w-7xl px-6 md:px-8 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-start">
        {/* Content - Left side on desktop, full width on mobile */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1 text-left"
        >
          {/* Logo Section */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <img
                src={DarkLogo}
                alt="Sushil Hub Logo"
                className="w-48 h-auto transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>

          <h1
            id="services-hero-heading"
            className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight text-neutral-900 mb-6"
          >
            <span className="text-neutral-600 text-4xl">Explore </span> Services
          </h1>

          <div className="space-y-4 text-lg text-neutral-700 mb-8 max-w-xl mx-auto md:mx-0">
            <p>
              Sushil Hub offers comprehensive web development solutions tailored to your business needs. 
              From full-stack development to UI/UX design, we combine technical expertise with creative 
              vision to deliver exceptional digital experiences.
            </p>

            {/* Illustration - Between paragraphs on mobile, hidden on desktop */}
            <div className="md:hidden flex justify-center my-8">
              <ServicesIllustration />
            </div>

            <p>
              Whether you're a startup building your first product or an enterprise looking to modernize 
              your systems, Sushil Hub provides end-to-end solutions that drive real business value.
            </p>
          </div>

          {/* Book a Meeting Button */}
          <button
            onClick={handleBookMeeting}
            aria-label="Book a consultation for Sushil Hub services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Calendar className="w-5 h-5" />
            Get Free Consultation
          </button>
        </motion.div>

        {/* Illustration - Right side on desktop, hidden on mobile */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={illustrationVariants}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="order-1 md:order-2 hidden md:block"
        >
          <ServicesIllustration />
        </motion.div>
      </div>
    </header>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web applications using React, Node.js, and modern frameworks.",
      features: ["React & Next.js", "Node.js & Express", "TypeScript", "RESTful APIs"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile solutions that work seamlessly across iOS and Android.",
      features: ["React Native", "Progressive Web Apps", "Mobile Optimization", "App Store Deployment"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and database optimization.",
      features: ["API Development", "Database Design", "Cloud Integration", "Performance Optimization"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized loading times and smooth interactions.",
      features: ["Core Web Vitals", "Code Splitting", "Caching Strategies", "CDN Integration"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Secure applications with regular updates, monitoring, and ongoing support.",
      features: ["Security Audits", "Regular Updates", "Monitoring", "24/7 Support"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Services Grid - Compact & Readable */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
                  >
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features - Compact */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-neutral-500">
                          <div className="w-1 h-1 bg-neutral-400 rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create a custom solution that 
                drives your business forward. Sushil Hub is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const eventTitle = encodeURIComponent('Sushil Hub - Project Discussion');
                    const eventDetails = encodeURIComponent('Let\'s discuss your project requirements and how Sushil Hub can help bring your ideas to life.');
                    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&dates=20241201T100000Z/20241201T110000Z&add=developer.er.sushil@gmail.com&sf=true&output=xml`;
                    window.open(googleCalendarUrl, '_blank');
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  Get Free Consultation
                </button>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-semibold rounded-lg hover:bg-neutral-900 hover:text-white transition-all duration-200"
                >
                  View my work
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;