import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search, ChevronRight, Users } from 'lucide-react';
import DarkLogo from '../assets/dark-logo.png';
import BlogImage from '../assets/blog.png';
import { blogPosts } from '../data/blogPosts';
import { useExternalBlogs } from '../hooks/useExternalBlogs';
import type { ExternalBlogPost } from '../types/externalBlogs';


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
      className="mx-auto max-w-7xl px-6 py-4"
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
            <span className="text-neutral-600 text-4xl">Tech Insights & </span> Development Stories
          </h1>

          <div className="space-y-4 text-lg text-neutral-700 mb-8 max-w-xl mx-auto md:mx-0">
            <p>
              Discover the latest trends, tutorials, and insights in web development, 
              React, Node.js, and modern technologies. Stay ahead with expert content 
              from the developer community.
            </p>

            {/* Illustration - Between paragraphs on mobile, hidden on desktop */}
            <div className="md:hidden flex justify-center my-8">
              <BlogIllustration />
            </div>

            <p>
              From curated content across Dev.to, Hashnode, Medium, and original articles, 
              explore practical knowledge that can help you build better digital experiences 
              and stay ahead in the fast-paced world of technology.
            </p>
          </div>

          <button
              onClick={() => {
                window.location.href = '/blog';
              }}
              aria-label="Read all of blogs now"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Calendar className="w-5 h-5" />
              Read all of blogs now
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
          <BlogIllustration />
        </motion.div>
      </div>
    </header>
  );
};

// Enhanced Blog Card Component that handles both local and external posts
const BlogCard = ({ post, isExternal = false }: { post: any; isExternal?: boolean }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="group bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-md transition-all duration-300"
    >
      {/* Feature Image */}
      {post.image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNTAgMTUwSDQ1MFYyNTBIMzUwVjE1MFoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTM3NSAxNzVIMzUwVjE1MEgzNzVWMTc1WiIgZmlsbD0iI0QxRDVEQiIvPgo8cGF0aCBkPSJNNDI1IDE3NUg0MDBWMTUwSDQyNVYxNzVaIiBmaWxsPSIjRDFENURCIi8+CjxwYXRoIGQ9Ik00NTAgMTc1SDQyNVYxNTBINDUwVjE3NVoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTM3NSAyMDBIMzUwVjE3NUgzNzVWMjAwWiIgZmlsbD0iI0QxRDVEQiIvPgo8cGF0aCBkPSJNNDI1IDIwMEg0MDBWMTc1SDQyNVYyMDBaIiBmaWxsPSIjRDFENURCIi8+CjxwYXRoIGQ9Ik00NTAgMjAwSDQyNVYxNzVINDUwVjIwMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTM3NSAyMjVIMzUwVjIwMEgzNzVWMjI1WiIgZmlsbD0iI0QxRDVEQiIvPgo8cGF0aCBkPSJNNDI1IDIyNUg0MDBWMjAwSDQyNVYyMjVaIiBmaWxsPSIjRDFENURCIi8+CjxwYXRoIGQ9Ik00NTAgMjI1SDQyNVYyMDBINDUwVjIyNVoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTM3NSAyNTBIMzUwVjIyNUgzNzVWMjUwWiIgZmlsbD0iI0QxRDVEQiIvPgo8cGF0aCBkPSJNNDI1IDI1MEg0MDBWMjI1SDQyNVYyNTBaIiBmaWxsPSIjRDFENURCIi8+CjxwYXRoIGQ9Ik00NTAgMjUwSDQyNVYyMjVINDUwVjI1MFoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+';
            }}
          />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(post.date || post.publishedAt)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>

        <h3 className="text-base font-semibold text-neutral-900 mb-2 line-clamp-2">
          {isExternal ? (
            <Link to={`/external-blog/${post.id}`} className="hover:text-blue-600 transition-colors">
              {post.title}
            </Link>
          ) : (
            <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
              {post.title}
            </Link>
          )}
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed mb-3 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {post.tags && post.tags.slice(0, 2).map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md border border-neutral-200 bg-neutral-50 text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {isExternal ? (
            <Link to={`/external-blog/${post.id}`}>
              <motion.button
                whileHover={{ x: 2 }}
                className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-all duration-200"
              >
                Read
                <ChevronRight className="w-3 h-3" />
              </motion.button>
            </Link>
          ) : (
            <Link to={`/blog/${post.id}`}>
              <motion.button
                whileHover={{ x: 2 }}
                className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-all duration-200"
              >
                Read
                <ChevronRight className="w-3 h-3" />
              </motion.button>
            </Link>
          )}
        </div>

      </div>
    </motion.article>
  );
};

const BlogPage: React.FC = () => {
  const [searchQuery] = useState('');
  const [selectedCategory] = useState('All');
  const [selectedSource] = useState('all');
  const [displayedPosts, setDisplayedPosts] = useState(12); // Show 12 posts initially
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  // Fetch external blog posts
  const { posts: externalPosts, loading: externalLoading, error: externalError } = useExternalBlogs(30);
  
  
  // Combine local and external posts
  const allPosts = useMemo(() => {
    const localPosts = blogPosts.map(post => ({ ...post, source: 'local' }));
    const combined = [...localPosts, ...externalPosts];
    
    return combined.sort((a, b) => {
      const dateA = a.date || (a as ExternalBlogPost).publishedAt;
      const dateB = b.date || (b as ExternalBlogPost).publishedAt;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
  }, [externalPosts]);

  // Get posts to display based on pagination
  const postsToShow = useMemo(() => {
    return allPosts.slice(0, displayedPosts);
  }, [allPosts, displayedPosts]);

  // Check if there are more posts to load
  const hasMorePosts = displayedPosts < allPosts.length;

  // Handle fetch more
  const handleFetchMore = async () => {
    setIsLoadingMore(true);
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    setDisplayedPosts(prev => Math.min(prev + 12, allPosts.length));
    setIsLoadingMore(false);
  };

  // Filter posts
  const filteredPosts = useMemo(() => {
    let filtered = postsToShow;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post =>
        post.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase())) ||
        post.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by source
    if (selectedSource !== 'all') {
      filtered = filtered.filter(post => post.source === selectedSource);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [allPosts, searchQuery, selectedCategory, selectedSource]);

  // Get unique categories and sources for filters (for future use)
  // const categories = useMemo(() => {
  //   const cats = [...new Set(allPosts.map(post => post.category))];
  //   return ['All', ...cats];
  // }, [allPosts]);

  // const sources = useMemo(() => {
  //   const srcs = [...new Set(allPosts.map(post => post.source))];
  //   return ['all', ...srcs];
  // }, [allPosts]);


  // All posts are now shown in the single "All Articles" section

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <BlogHero />

      {/* Blog Content */}
      <section className="mx-auto max-w-7xl px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          

          {/* Community Content Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Users className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Community Content
              </h2>
              <span className="ml-4 text-sm text-neutral-500">
                Curated from Dev.to, Hashnode, Medium & more
              </span>
            </div>
            
            {/* Error Display */}
            {externalError && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">
                  ⚠️ Unable to load external content: {externalError}
                </p>
                <p className="text-red-500 text-xs mt-1">
                  Showing sample content instead. Check browser console for details.
                </p>
              </div>
            )}
            
            {externalLoading ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg border border-neutral-200 p-4 animate-pulse">
                    <div className="h-4 bg-neutral-200 rounded mb-4"></div>
                    <div className="h-4 bg-neutral-200 rounded mb-2"></div>
                    <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {externalPosts.slice(0, 6).map((post) => (
                  <BlogCard key={`external-${post.id}`} post={post} isExternal={true} />
                ))}
              </div>
            )}
          </div>

          {/* All Articles */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-3">
              All Articles
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-8 max-w-2xl">
              Explore the latest thoughts on web development, technology trends, and industry insights from our community and original content.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${searchQuery}-${selectedSource}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filteredPosts.map((post) => (
                  <BlogCard 
                    key={`${post.source}-${post.id}`} 
                    post={post} 
                    isExternal={post.source !== 'local'} 
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <Search className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-600 mb-2">No articles found</h3>
                <p className="text-neutral-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>

          {/* Fetch More Button */}
          {hasMorePosts && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 text-center"
            >
              <motion.button
                onClick={handleFetchMore}
                disabled={isLoadingMore}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
              >
                {isLoadingMore ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Loading More Posts...
                  </>
                ) : (
                  <>
                    <Users className="w-5 h-5 mr-3" />
                    Load More Posts ({allPosts.length - displayedPosts} remaining)
                  </>
                )}
              </motion.button>
            </motion.div>
          )}

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
