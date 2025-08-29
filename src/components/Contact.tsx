import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, User, MessageSquare, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
    value: 'developer.er.sushil@gmail.com',
    href: 'mailto:developer.er.sushil@gmail.com',
    icon: Mail,
    description: 'Send me an email'
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/er-sushil-maurya',
    href: 'https://www.linkedin.com/in/sushil-maurya-6256b4154/',
    icon: Linkedin,
    description: 'Connect professionally'
  },
  {
    name: 'GitHub',
    value: 'github.com/sushil-12',
    href: 'https://github.com/sushil-12',
    icon: Github,
    description: 'View my code'
  }
];

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('VxSN989F4OmTErZ1O');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Map EmailJS field names to our state names
    let stateName: keyof ContactForm;
    switch (name) {
      case 'user_name':
        stateName = 'name';
        break;
      case 'user_email':
        stateName = 'email';
        break;
      case 'message':
        stateName = 'message';
        break;
      default:
        stateName = 'name';
    }

    setFormData(prev => ({
      ...prev,
      [stateName]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Send email to admin (you) - using sendForm with hidden recipient field
      const adminResult = await emailjs.sendForm(
        'service_6mj6xjf',
        'template_rngdl0l', // Admin template
        formRef.current!,
        'VxSN989F4OmTErZ1O'
      );

      // Send confirmation email to user - using sendForm with hidden recipient field
      const userResult = await emailjs.sendForm(
        'service_6mj6xjf',
        'template_m5zdr7c', // User template
        formRef.current!,
        'VxSN989F4OmTErZ1O'
      );

      if (adminResult.status === 200 && userResult.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! You\'ll receive a confirmation email, and I\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', message: '' });

        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly.');

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookMeeting = () => {
    // Create Google Meet calendar event
    const eventTitle = encodeURIComponent('Meeting with Sushil Kumar - Discussion');
    const eventDetails = encodeURIComponent('Let\'s discuss your project requirements and how I can help bring your ideas to life.');
    
    // Google Calendar event creation URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&dates=20241201T100000Z/20241201T110000Z&add=developer.er.sushil@gmail.com&sf=true&output=xml`;
    
    // Open Google Calendar in new tab
    window.open(googleCalendarUrl, '_blank');
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
      className="mx-auto max-w-7xl px-6 md:px-8 py-12"
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

          {/* Book a Meeting Button - Restored Original Styling */}
          <button
            onClick={handleBookMeeting}
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-xl text-neutral-700 font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 mb-8"
          >
            <Calendar className="w-5 h-5" />
            Book a Meeting
          </button>
        </motion.div>

        {/* Contact Form and Links Row */}
        <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-1">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    id="name"
                    name="user_name"
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
                    name="user_email"
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

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <div className={`mt-4 p-3 rounded-lg text-sm ${submitStatus === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                  {statusMessage}
                </div>
              )}

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
