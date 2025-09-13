export interface BlogPost {
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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with Modern Architecture",
    excerpt: "Learn how to structure your React applications for scalability and maintainability using modern patterns and best practices.",
    content: `
      <p>In today's fast-paced development environment, building scalable React applications is crucial for long-term success. This comprehensive guide will walk you through modern architectural patterns that will help you create maintainable, performant, and scalable React applications.</p>
      
      <h2>Understanding Modern React Architecture</h2>
      <p>Modern React architecture goes beyond just components and state management. It encompasses a holistic approach to building applications that can grow with your business needs while maintaining code quality and developer experience.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li><strong>Separation of Concerns:</strong> Each part of your application should have a single responsibility</li>
        <li><strong>Composition over Inheritance:</strong> Build complex UIs by combining simple components</li>
        <li><strong>Predictable State Management:</strong> Use consistent patterns for state updates</li>
        <li><strong>Performance by Default:</strong> Build with performance considerations from the start</li>
      </ul>
      
      <h2>Project Structure Best Practices</h2>
      <p>A well-organized project structure is the foundation of a scalable application. Here's a recommended structure:</p>
      
      <pre><code>src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components (Button, Input, etc.)
│   ├── features/       # Feature-specific components
│   └── layouts/        # Layout components
├── hooks/              # Custom React hooks
├── services/           # API calls and external services
├── store/              # State management
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── constants/          # Application constants</code></pre>
      
      <h2>State Management Strategies</h2>
      <p>Choosing the right state management solution depends on your application's complexity and requirements. Here are the most effective approaches:</p>
      
      <h3>1. Context API for Global State</h3>
      <p>For smaller applications, React's built-in Context API can be sufficient:</p>
      
      <pre><code>// contexts/AppContext.tsx
import React, { createContext, useContext, useReducer } from 'react';

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  loading: boolean;
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};</code></pre>
      
      <h3>2. Redux Toolkit for Complex State</h3>
      <p>For larger applications with complex state interactions, Redux Toolkit provides excellent developer experience:</p>
      
      <pre><code>// store/slices/userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId: string) => {
    const response = await api.getUser(userId);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {
    clearUser: (state) => {
      state.data = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  }
});</code></pre>
      
      <h2>Performance Optimization Techniques</h2>
      <p>Performance is crucial for user experience. Here are essential optimization techniques:</p>
      
      <h3>Code Splitting and Lazy Loading</h3>
      <pre><code>// Lazy load components
const Dashboard = lazy(() => import('./components/Dashboard'));
const Profile = lazy(() => import('./components/Profile'));

// Route-based code splitting
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  </Router>
);</code></pre>
      
      <h3>Memoization Strategies</h3>
      <pre><code>// Memoize expensive calculations
const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: heavyCalculation(item)
    }));
  }, [data]);
  
  return <div>{/* Render processed data */}</div>;
};

// Memoize components to prevent unnecessary re-renders
const MemoizedChild = memo(({ value }) => {
  return <div>{value}</div>;
});</code></pre>
      
      <h2>Testing Strategies</h2>
      <p>A comprehensive testing strategy ensures your application remains reliable as it scales:</p>
      
      <h3>Unit Testing with Jest and React Testing Library</h3>
      <pre><code>// components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});</code></pre>
      
      <h2>Conclusion</h2>
      <p>Building scalable React applications requires careful planning and adherence to modern best practices. By following the patterns and techniques outlined in this guide, you'll be well-equipped to create applications that can grow with your needs while maintaining code quality and performance.</p>
      
      <p>Remember, scalability is not just about handling more users or data—it's about creating a codebase that remains maintainable and enjoyable to work with as your team and requirements grow.</p>
    `,
    author: "Sushil Kumar",
    authorBio: "Full-stack developer with 5+ years of experience building scalable web applications. Passionate about React, Node.js, and modern web technologies.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "JavaScript", "Performance", "Best Practices"],
    featured: true,
    category: "Frontend Development",
    likes: 42,
    comments: 8,
    views: 1250,
    image: "/src/assets/scalable-react-application.jpg"
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Exploring the latest trends and technologies that are shaping the future of web development and how to stay ahead.",
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new technologies and paradigms. Let's explore the key trends that will shape the future of web development.</p>
      
      <h2>1. WebAssembly (WASM) Revolution</h2>
      <p>WebAssembly is becoming increasingly important for performance-critical applications. With near-native performance, WASM enables developers to run code written in languages like Rust, C++, and Go directly in the browser.</p>
      
      <h2>2. Edge Computing and Edge Functions</h2>
      <p>Edge computing is bringing computation closer to users, reducing latency and improving performance. Platforms like Vercel Edge Functions and Cloudflare Workers are making it easier to deploy edge functions.</p>
      
      <h2>3. AI-Powered Development Tools</h2>
      <p>AI is transforming how we write code, with tools like GitHub Copilot and ChatGPT becoming integral parts of the development workflow.</p>
    `,
    author: "Sushil Kumar",
    authorBio: "Full-stack developer with 5+ years of experience building scalable web applications. Passionate about React, Node.js, and modern web technologies.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Web Development", "Trends", "Technology", "Future"],
    featured: false,
    category: "Technology Trends",
    likes: 28,
    comments: 5,
    views: 890,
    image: "/src/assets/code.png"
  },
  {
    id: 3,
    title: "Mastering TypeScript: Advanced Patterns and Techniques",
    excerpt: "Deep dive into advanced TypeScript patterns that will make your code more robust and maintainable.",
    content: `
      <p>TypeScript has become an essential tool for modern web development. This guide explores advanced patterns and techniques that will elevate your TypeScript skills.</p>
      
      <h2>Advanced Type Patterns</h2>
      <p>Understanding advanced type patterns is crucial for writing maintainable TypeScript code.</p>
      
      <h2>Generic Constraints and Utility Types</h2>
      <p>Leverage TypeScript's powerful type system to create flexible and reusable code.</p>
    `,
    author: "Sushil Kumar",
    authorBio: "Full-stack developer with 5+ years of experience building scalable web applications. Passionate about React, Node.js, and modern web technologies.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["TypeScript", "Programming", "Best Practices", "Advanced"],
    featured: false,
    category: "Programming",
    likes: 35,
    comments: 12,
    views: 1100,
    image: "/src/assets/skill.png"
  }
];

export const getBlogPost = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentPostId: number, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPost(currentPostId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === currentPost.category)
    .slice(0, limit);
};

export const getPreviousPost = (currentPostId: number): BlogPost | undefined => {
  const currentIndex = blogPosts.findIndex(post => post.id === currentPostId);
  return currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined;
};

export const getNextPost = (currentPostId: number): BlogPost | undefined => {
  const currentIndex = blogPosts.findIndex(post => post.id === currentPostId);
  return currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined;
};
