import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, User, MessageSquare } from 'lucide-react';

// Contact form interface
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Contact links data
const contactLinks = [
  {
    name: 'Email',
    value: 'hello@sushilkumar.dev',
    href: 'mailto:hello@sushilkumar.dev',
    icon: Mail,
    description: 'Send me an email'
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/sushilkumar',
    href: 'https://linkedin.com/in/sushilkumar',
    icon: Linkedin,
    description: 'Connect professionally'
  },
  {
    name: 'GitHub',
    value: 'github.com/sushilkumar',
    href: 'https://github.com/sushilkumar',
    icon: Github,
    description: 'View my code'
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // You can add actual form submission logic here
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="mx-auto max-w-7xl px-6 md:px-8 py-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants}>
          <h2 
            id="contact-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 mb-3"
          >
            Get in Touch
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl">
            Have a project idea or just want to say hello? Let's connect.
          </p>
        </motion.div>

        {/* Contact Form and Links Row */}
        <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-label="Your name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-label="Your email address"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    aria-label="Your message"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full sm:w-auto px-8 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">
              Or connect with me directly
            </h3>
            <div className="space-y-4">
              {contactLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect with me on ${link.name}`}
                    className="group bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors duration-200">
                        <IconComponent className="w-5 h-5 text-neutral-700" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 text-sm">
                          {link.name}
                        </h4>
                        <p className="text-xs text-neutral-600">
                          {link.description}
                        </p>
                        <p className="text-xs text-neutral-500 font-mono mt-1">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
