import React from 'react';
import { useParams } from 'react-router-dom';
import SingleBlogPost from './SingleBlogPost';
import NotFound from './NotFound';
import { getBlogPost, getRelatedPosts, getPreviousPost, getNextPost } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = id ? parseInt(id, 10) : 0;
  const post = getBlogPost(postId);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = getRelatedPosts(postId);
  const previousPost = getPreviousPost(postId);
  const nextPost = getNextPost(postId);

  return (
    <SingleBlogPost
      post={post}
      relatedPosts={relatedPosts}
      previousPost={previousPost}
      nextPost={nextPost}
    />
  );
};

export default BlogPostPage;
