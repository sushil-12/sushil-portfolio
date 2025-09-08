import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight,  User, Search } from 'lucide-react';
import DarkLogo from '../assets/dark-logo.png';
import BlogImage from '../assets/blog.png';
import { blogPosts } from '../data/blogPosts';

const BlogHero = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  const illustrationVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  const BlogIllustration = () => (
    <div className="relative">
      {/* Placeholder for blog illustration */}
      <div className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg flex items-center justify-center">
        <img src={BlogImage} alt="Blog Illustration" className="w-full h-full object-contain" />
      </div>
    </div>
  );

  return (
    <header
      id="blog-hero"
      aria-labelledby="blog-hero-heading"
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
            id="blog-hero-heading"
            className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight text-neutral-900 mb-6"
          >
            <span className="text-neutral-600 text-4xl">Explore My </span> Blog
          </h1>

          <div className="space-y-4 text-lg text-neutral-700 mb-8 max-w-xl mx-auto md:mx-0">
            <p>
              Insights, tutorials, and thoughts on web development, technology trends, 
              and the ever-evolving digital landscape. Join me on this journey of 
              continuous learning and innovation.
            </p>

            {/* Illustration - Between paragraphs on mobile, hidden on desktop */}
            <div className="md:hidden flex justify-center my-8">
              <BlogIllustration />
            </div>

            <p>
              From technical deep-dives to industry observations, discover practical 
              knowledge that can help you build better digital experiences and stay 
              ahead in the fast-paced world of technology.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
            />
          </div>
        </motion.div>

        {/* Illustration - Right side on desktop, hidden on mobile */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={illustrationVariants}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="order-1 md:order-2 hidden md:block"
        >
          <BlogIllustration />
        </motion.div>
      </div>
    </header>
  );
};

const BlogPage: React.FC = () => {

  const categories = ["All", "React", "TypeScript", "Node.js", "CSS", "Performance", "Architecture"];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <BlogHero />

      {/* Blog Content */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Categories Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    category === "All" 
                      ? "bg-neutral-900 text-white" 
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border border-neutral-200 rounded-xl p-8 hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {post.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* All Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <motion.button
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-1 text-neutral-900 font-medium hover:text-neutral-700 transition-colors text-sm"
                      >
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 bg-neutral-50 rounded-xl text-center"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development, 
              technology trends, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;
