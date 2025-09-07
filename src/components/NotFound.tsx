import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft} from 'lucide-react';
import { Link } from 'react-router-dom';
import DarkLogo from '../assets/dark-logo.png';

const NotFound: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neutral-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neutral-200 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <section className="mx-auto max-w-4xl px-6 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Logo with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-full blur-lg opacity-50"
              ></motion.div>
              <img
                src={DarkLogo}
                alt="Sushil Hub Logo"
                className="relative w-32 h-auto transition-transform duration-300 hover:scale-110 hover:rotate-2"
              />
            </div>
          </motion.div>

          {/* 404 Number with Impressive Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <motion.h1 
              className="text-7xl md:text-8xl font-black text-neutral-900 mb-4 relative"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(0,0,0,0)",
                  "0 0 20px rgba(0,0,0,0.1)",
                  "0 0 0px rgba(0,0,0,0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            ></motion.div>
          </motion.div>

          {/* Error Message with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10"
          >
            <motion.h2 
              className="text-3xl font-bold text-neutral-900 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Oops! Page Not Found
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              The page you're looking for seems to have vanished into the digital void. 
              But don't worry, we'll get you back on track!
            </motion.p>
          </motion.div>

          {/* Action Buttons with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white font-bold rounded-xl hover:from-neutral-800 hover:to-neutral-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-bold rounded-xl hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </motion.div>
          </motion.div>

          {/* Quick Links with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="border-t border-neutral-200 pt-8"
          >
            <motion.p 
              className="text-sm text-neutral-500 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Or explore these popular sections:
            </motion.p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/#projects", label: "Projects" },
                { to: "/#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.to}
                    className="text-neutral-600 hover:text-neutral-900 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-neutral-100"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default NotFound;
