import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScalableReactApplications from '../assets/scalable-react-application.jpg';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Bookmark, 
  Heart,
  Eye,
  Tag,
  ChevronUp,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage?: string;
  authorBio?: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  category: string;
  likes: number;
  comments: number;
  views: number;
  image?: string;
}

interface SingleBlogPostProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
  previousPost?: BlogPost;
  nextPost?: BlogPost;
}

const SingleBlogPost: React.FC<SingleBlogPostProps> = ({ 
  post, 
  relatedPosts = [], 
  previousPost, 
  nextPost 
}) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [tableOfContents, setTableOfContents] = useState<{id: string, title: string, level: number}[]>([]);

  // Generate table of contents from content
  useEffect(() => {
    const headings = post.content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/g);
    if (headings) {
      const toc = headings.map((heading, index) => {
        const level = parseInt(heading.match(/<h([1-6])/)?.[1] || '1');
        const title = heading.replace(/<[^>]*>/g, '');
        const id = `heading-${index}`;
        return { id, title, level };
      });
      setTableOfContents(toc);
    }
  }, [post.content]);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setShowShareMenu(false);
        break;
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Blog Button */}
      <div className="border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        {/* Category */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-3xl">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-8">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{post.views} views</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full hover:bg-neutral-200 transition-colors duration-200"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isLiked 
                  ? 'bg-red-50 text-red-600 border border-red-200' 
                  : 'bg-neutral-50 text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{likes}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isBookmarked 
                  ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                  : 'bg-neutral-50 text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">Save</span>
            </motion.button>
          </div>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors duration-200"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </motion.button>

            <AnimatePresence>
              {showShareMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-50"
                >
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <Twitter className="w-4 h-4 text-blue-500" />
                    Share on Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    Share on LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <Facebook className="w-4 h-4 text-blue-700" />
                    Share on Facebook
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <LinkIcon className="w-4 h-4" />
                    Copy Link
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Featured Image */}
            {post.image && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  // src={post.image}
                  src={ScalableReactApplications}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-neutral prose-headings:text-neutral-900 prose-headings:font-bold prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-neutral-900 prose-a:font-medium prose-strong:text-neutral-900 prose-code:text-neutral-900 prose-code:bg-neutral-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-neutral-900 prose-pre:text-white prose-pre:rounded-lg prose-pre:border-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-neutral-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{post.author}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {post.authorBio || "Passionate developer and tech enthusiast sharing insights about web development, technology trends, and industry best practices."}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className="bg-white border border-neutral-200 rounded-xl p-6 sticky top-24">
                <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wide">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200 ${
                        item.level === 1 ? 'font-medium' : item.level === 2 ? 'ml-3' : 'ml-6'
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wide">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.slice(0, 3).map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <h4 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors duration-200 line-clamp-2 mb-1">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-neutral-500">
                        {formatDate(relatedPost.date)} • {relatedPost.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter Signup */}
            <div className="bg-neutral-900 text-white rounded-xl p-6">
              <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">Stay Updated</h3>
              <p className="text-xs text-neutral-300 mb-4">
                Get the latest articles delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm bg-white text-neutral-900 rounded-lg border-0 focus:ring-2 focus:ring-neutral-300"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Navigation Between Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Previous Post */}
          {previousPost && (
            <Link
              to={`/blog/${previousPost.id}`}
              className="group p-6 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Article</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors duration-200 line-clamp-2">
                {previousPost.title}
              </h3>
            </Link>
          )}

          {/* Next Post */}
          {nextPost && (
            <Link
              to={`/blog/${nextPost.id}`}
              className="group p-6 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all duration-300 md:col-start-2"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-neutral-500 mb-2">
                <span>Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors duration-200 line-clamp-2 text-right">
                {nextPost.title}
              </h3>
            </Link>
          )}
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-neutral-900 text-white rounded-full shadow-lg hover:bg-neutral-800 transition-colors duration-200 z-50 flex items-center justify-center"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SingleBlogPost;