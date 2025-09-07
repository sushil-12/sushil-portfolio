import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, User, MessageSquare, Calendar} from 'lucide-react';
import emailjs from '@emailjs/browser';
import DarkLogo from '../assets/dark-logo.png';
import ContactImage from '../assets/contact.jpg';
// Contact form interface
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactHero = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  const illustrationVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  const ContactIllustration = () => (
    <div className="relative">
      {/* Placeholder for contact illustration */}
      <div className="w-full h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg flex items-center justify-center">
        <img src={ContactImage} alt="Contact Illustration" className="w-full h-full object-cover" />
      </div>
    </div>
  );

  const handleBookMeeting = () => {
    const eventTitle = encodeURIComponent('Sushil Hub - Contact Discussion');
    const eventDetails = encodeURIComponent('Let\'s discuss your project requirements and how Sushil Hub can help bring your ideas to life.');
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&dates=20241201T100000Z/20241201T110000Z&add=developer.er.sushil@gmail.com&sf=true&output=xml`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <header
      id="contact-hero"
      aria-labelledby="contact-hero-heading"
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
            id="contact-hero-heading"
            className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight text-neutral-900 mb-6"
          >
            <span className="text-neutral-600 text-4xl">Let's </span> Connect
          </h1>

          <div className="space-y-4 text-lg text-neutral-700 mb-8 max-w-xl mx-auto md:mx-0">
            <p>
              Ready to bring your ideas to life? I'm here to help you create 
              exceptional digital experiences. Whether you have a project in mind 
              or just want to chat about possibilities, let's start the conversation.
            </p>

            {/* Illustration - Between paragraphs on mobile, hidden on desktop */}
            <div className="md:hidden flex justify-center my-8">
              <ContactIllustration />
            </div>

            <p>
              From concept to deployment, I'll work with you every step of the way 
              to ensure your vision becomes reality with cutting-edge technology and 
              modern design principles.
            </p>
          </div>

          {/* Book a Meeting Button */}
          <button
            onClick={handleBookMeeting}
            aria-label="Book a consultation with Sushil Hub"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Calendar className="w-5 h-5" />
            Book Free Consultation
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
          <ContactIllustration />
        </motion.div>
      </div>
    </header>
  );
};

const ContactPage: React.FC = () => {
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
      const adminResult = await emailjs.sendForm(
        'service_6mj6xjf',
        'template_rngdl0l',
        formRef.current!,
        'VxSN989F4OmTErZ1O'
      );

      const userResult = await emailjs.sendForm(
        'service_6mj6xjf',
        'template_m5zdr7c',
        formRef.current!,
        'VxSN989F4OmTErZ1O'
      );

      if (adminResult.status === 200 && userResult.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly.');

      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "developer.er.sushil@gmail.com",
      href: "mailto:developer.er.sushil@gmail.com",
      description: "Send me an email"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/er-sushil-maurya",
      href: "https://www.linkedin.com/in/sushil-maurya-6256b4154/",
      description: "Connect professionally"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/sushil-12",
      href: "https://github.com/sushil-12",
      description: "View my code"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form & Info Section */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Send a Message
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
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
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
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
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              {submitStatus !== 'idle' && (
                <div className={`p-3 rounded-lg text-sm ${submitStatus === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                  {statusMessage}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
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
              </motion.button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="block p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-neutral-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">{info.title}</h3>
                        <p className="text-sm text-neutral-600">{info.description}</p>
                        <p className="text-sm text-neutral-500 font-mono">{info.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-neutral-50 rounded-lg"
            >
              <h3 className="font-semibold text-neutral-900 mb-2">Quick Response</h3>
              <p className="text-sm text-neutral-600">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to mention it in your message!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
