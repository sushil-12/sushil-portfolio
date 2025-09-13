import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkLogo from '../assets/dark-logo.png';
import SEOHead from './SEOHead';
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
  nextPost
}) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [tableOfContents, setTableOfContents] = useState<{ id: string, title: string, level: number }[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');

  // Generate table of contents from content and add IDs to headings
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

  // Add IDs to headings in the content
  const addIdsToHeadings = (content: string) => {
    const headings = content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/g);
    if (headings) {
      let modifiedContent = content;
      headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        const modifiedHeading = heading.replace(/<h([1-6])([^>]*)>/, `<h$1$2 id="${id}">`);
        modifiedContent = modifiedContent.replace(heading, modifiedHeading);
      });
      return modifiedContent;
    }
    return content;
  };

  // Track active heading for TOC highlighting
  useEffect(() => {
    const handleScroll = () => {
      const headings = tableOfContents.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveHeading(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);



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
    <div className="min-h-screen bg-neutral-50">
      {/* SEO Head with Structured Data */}
      <SEOHead
        title={post.title}
        description={post.excerpt}
        ogImage={post.image}
        canonicalUrl={`https://sushilhub.com/blog/${post.id}`}
        pageType="blog-post"
        structuredData={{
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          image: post.image,
          category: post.category,
          tags: post.tags,
          content: post.content,
          readTime: post.readTime,
          id: post.id
        }}
      />
      
      {/* Back to Blog Button */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-all duration-200 group"
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
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <Link to="/">
                <img
                  src={DarkLogo}
                  alt="Sushil Hub Logo"
                  className="w-48 h-auto transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </motion.div>
          </div>

          {/* Category */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-neutral-600 leading-relaxed mb-10 max-w-3xl">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-8 text-sm text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{post.author}</span>
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
          <div className="flex flex-wrap gap-3 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-neutral-700 text-sm rounded-lg border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all duration-200"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-neutral-200">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLike}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${isLiked
                    ? 'bg-red-50 text-red-600 border border-red-200'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300'
                  }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm font-medium">{likes}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${isBookmarked
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300'
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
                className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all duration-200"
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
                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 z-50"
                  >
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <Twitter className="w-4 h-4 text-blue-500" />
                      Share on Twitter
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 text-blue-600" />
                      Share on LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <Facebook className="w-4 h-4 text-blue-700" />
                      Share on Facebook
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <LinkIcon className="w-4 h-4" />
                      Copy Link
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Featured Image */}
            {post.image && (
              <div className="mb-12 relative group overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-video w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover  transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            )}

            {/* Article Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-neutral-200">
              <div
                className="prose prose-lg max-w-none prose-neutral prose-headings:text-neutral-900 prose-headings:font-bold prose-headings:tracking-tight prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:text-base prose-a:text-neutral-900 prose-a:font-medium prose-a:underline prose-strong:text-neutral-900 prose-code:text-neutral-900 prose-code:bg-neutral-100 prose-code:px-3 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-pre:bg-neutral-900 prose-pre:text-white prose-pre:rounded-xl prose-pre:border-0 prose-pre:p-6 prose-ul:text-neutral-700 prose-ol:text-neutral-700 prose-li:text-neutral-700 prose-li:leading-relaxed prose-li:my-2 prose-ul:my-4 prose-ol:my-4 prose-ul:pl-6 prose-ol:pl-6 prose-ul:space-y-2 prose-ol:space-y-2 prose-ul:list-disc prose-ol:list-decimal prose-blockquote:border-l-4 prose-blockquote:border-neutral-900 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-600 prose-blockquote:my-6"
                dangerouslySetInnerHTML={{ __html: addIdsToHeadings(post.content) }}
              />
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-neutral-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{post.author}</h3>
                  <p className="text-neutral-600 leading-relaxed">
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
              <div className="bg-white border border-neutral-200 rounded-lg p-4 sticky top-24 shadow-sm">
                {/* Header */}
                <div className="border-b border-neutral-200 pb-2 mb-3">
                  <h3 className="text-sm font-semibold text-neutral-900">Contents</h3>
                </div>

                {/* TOC Items */}
                <nav className="space-y-1">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className={`flex items-center rounded-md px-2 py-1.5 text-[13px] transition-colors duration-200 ${activeHeading === item.id
                          ? 'bg-neutral-900 text-white font-medium'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                        } ${item.level === 2
                          ? 'ml-3 text-[12px]'
                          : item.level === 3
                            ? 'ml-6 text-[12px] text-neutral-500'
                            : ''
                        }`}
                    >
                      <span className="truncate">{item.title}</span>
                    </a>
                  ))}
                </nav>

                {/* Divider */}
                <div className="mt-4 border-t border-neutral-200 pt-3">
                  {/* Progress */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                    <span>Reading progress</span>
                    <span>
                      {Math.round(
                        ((tableOfContents.findIndex((item) => item.id === activeHeading) + 1) /
                          tableOfContents.length) *
                        100
                      ) || 0}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-neutral-900 h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: `${((tableOfContents.findIndex((item) => item.id === activeHeading) + 1) /
                            tableOfContents.length) *
                          100 || 0
                          }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )}


            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-bold text-neutral-900 mb-6 uppercase tracking-wide">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.slice(0, 3).map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <h4 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors duration-200 line-clamp-2 mb-2">
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
          </motion.aside>
        </div>

        {/* Navigation Between Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          {/* Next Post */}
          {nextPost && (
            <Link
              to={`/blog/${nextPost.id}`}
              className="group p-8 bg-white border mb-4 border-neutral-200 rounded-2xl hover:border-neutral-300 hover:shadow-lg transition-all duration-300 md:col-start-2"
            >
              <div className="flex items-center justify-end gap-3 text-sm text-neutral-500 mb-4">
                <span className="font-medium">Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors duration-200 line-clamp-2 text-right">
                {nextPost.title}
              </h3>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SingleBlogPost;