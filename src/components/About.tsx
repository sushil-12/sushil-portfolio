import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, Code, Users, Award, Target } from 'lucide-react';
import HeroImage from './HeroImage';
import aboutUsImage from '../assets/about-us.png';
import DarkLogo from '../assets/dark-logo.png';
import Experience from './Experience';
import { seoConfig } from '../config/seo';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        id="about-hero"
        aria-labelledby="about-hero-heading"
        className="mx-auto max-w-7xl px-6 md:px-8 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            {/* Logo */}
            <div className="mb-6">
              <img
                src={DarkLogo}
                alt="SushilHub Logo"
                className="w-40 h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h1
              id="about-hero-heading"
              className="text-3xl font-bold leading-tight text-neutral-900 mb-4"
            >
              About SushilHub
            </h1>

            <div className="space-y-4 text-neutral-600 mb-6">
              <p>
                <strong>SushilHub</strong> is a professional software development company founded by 
                Sushil Kumar, specializing in React, Node.js, TypeScript, and modern web technologies.
              </p>
              <p>
                Our portfolio includes high-profile projects like <strong>1800limo.com</strong> - 
                a comprehensive limousine booking platform, <strong>WPVIP.com</strong> - the official 
                WordPress VIP website, and various AI-powered solutions and e-commerce platforms.
              </p>
            </div>

            {/* LinkedIn Link */}
            <div className="flex items-center gap-3">
              <a
                href={seoConfig.linkedinCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Follow on LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <HeroImage
              src={aboutUsImage}
              alt="SushilHub - Software Development Company"
              className="w-full h-full md:h-full rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Company Details */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <h2 
            id="company-details-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 mb-3"
          >
            Company Details
          </h2>
          
          {/* Subtitle */}
          <p className="text-neutral-600 text-base leading-relaxed mb-8 max-w-2xl">
            Professional software development company specializing in full-stack solutions, 
            transportation technology, and digital innovation.
          </p>

                  {/* Mission & Values */}
                  <div className="mb-8">
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Mission Section */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                        <div className="relative">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                              <Target className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-xl font-bold text-white">
                                  Our Mission
                                </h3>
                                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                              </div>
                              <p className="text-white/90 text-base leading-relaxed mb-3">
                                At <strong className="text-white">SushilHub</strong>, we believe in the power of technology to transform businesses. 
                                Our mission is to deliver cutting-edge software solutions that drive growth, 
                                efficiency, and innovation for our clients across industries.
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                                  Innovation
                                </span>
                                <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                                  Excellence
                                </span>
                                <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                                  Growth
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Values Section */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-6 border border-neutral-200">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-12 translate-x-12"></div>
                        <div className="relative">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                              <Award className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-xl font-bold text-neutral-900">
                                  Our Values
                                </h3>
                                <div className="w-8 h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-600"></div>
                              </div>
                              <p className="text-neutral-700 text-base leading-relaxed mb-3">
                                We specialize in building scalable, high-performance solutions that meet the unique 
                                needs of modern businesses, from transportation platforms to enterprise applications.
                              </p>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-neutral-200">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                  <span className="text-xs font-medium text-neutral-700">Scalable</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-neutral-200">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                  <span className="text-xs font-medium text-neutral-700">Performance</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-neutral-200">
                                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                  <span className="text-xs font-medium text-neutral-700">Modern</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-neutral-200">
                                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                  <span className="text-xs font-medium text-neutral-700">Enterprise</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

          {/* Expertise Areas */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Our Expertise
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* Transportation Technology */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">
                    Transportation Technology
                  </h4>
                  <p className="text-xs text-neutral-600">
                    Limousine booking platforms like 1800limo.com
                  </p>
                </div>
              </div>

              {/* Full Stack Development */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">
                    Full Stack Development
                  </h4>
                  <p className="text-xs text-neutral-600">
                    React, Node.js, TypeScript applications
                  </p>
                </div>
              </div>

              {/* Enterprise Solutions */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">
                    Enterprise Solutions
                  </h4>
                  <p className="text-xs text-neutral-600">
                    WordPress VIP, AI tools, e-commerce
                  </p>
                </div>
              </div>

              {/* Quality & Innovation */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">
                    Quality & Innovation
                  </h4>
                  <p className="text-xs text-neutral-600">
                    40% conversion increase, 60% revenue growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <Experience />
      <div className="mb-12"></div>
    </div>
  );
};

export default About;