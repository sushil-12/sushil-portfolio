import { useState, useEffect } from 'react';
import { externalBlogService } from '../services/externalBlogs';
import type { ExternalBlogPost } from '../types/externalBlogs';

export const useExternalBlogs = (limit: number = 20) => {
  const [posts, setPosts] = useState<ExternalBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const externalPosts = await externalBlogService.getAllExternalPosts(limit);
        setPosts(externalPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch external posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  const refetch = () => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const externalPosts = await externalBlogService.getAllExternalPosts(limit);
        setPosts(externalPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch external posts');
        console.error('Error fetching external posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  };

  return { posts, loading, error, refetch };
};

export const useExternalBlogsByTopic = (topic: string, limit: number = 10) => {
  const [posts, setPosts] = useState<ExternalBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const externalPosts = await externalBlogService.getPostsByTopic(topic, limit);
        setPosts(externalPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch external posts');
        console.error('Error fetching external posts:', err);
      } finally {
        setLoading(false);
      }
    };

    if (topic) {
      fetchPosts();
    }
  }, [topic, limit]);

  const refetch = () => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const externalPosts = await externalBlogService.getPostsByTopic(topic, limit);
        setPosts(externalPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch external posts');
        console.error('Error fetching external posts:', err);
      } finally {
        setLoading(false);
      }
    };
    if (topic) {
      fetchPosts();
    }
  };

  return { posts, loading, error, refetch };
};

export const useReactPosts = (limit: number = 10) => {
  const [posts, setPosts] = useState<ExternalBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const reactPosts = await externalBlogService.getReactPosts(limit);
        setPosts(reactPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch React posts');
        console.error('Error fetching React posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
};

export const useNodeJSPosts = (limit: number = 10) => {
  const [posts, setPosts] = useState<ExternalBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const nodePosts = await externalBlogService.getNodeJSPosts(limit);
        setPosts(nodePosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Node.js posts');
        console.error('Error fetching Node.js posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
};

export const useTypeScriptPosts = (limit: number = 10) => {
  const [posts, setPosts] = useState<ExternalBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const tsPosts = await externalBlogService.getTypeScriptPosts(limit);
        setPosts(tsPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch TypeScript posts');
        console.error('Error fetching TypeScript posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
};
