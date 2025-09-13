// Base types for GraphQL responses
export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  category: Category;
  likes: number;
  comments: number;
  views: number;
  image?: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
}

export interface BlogPostsResponse {
  data: BlogPost[];
  totalCount: number;
  pageInfo: PageInfo;
}

export interface BlogPostFilter {
  category?: string;
  featured?: boolean;
  publishedAfter?: string;
  publishedBefore?: string;
  tags?: string[];
}

// GraphQL Query Variables
export interface GetBlogPostsVariables {
  first?: number;
  after?: string;
  filter?: BlogPostFilter;
  search?: string;
  category?: string;
  featured?: boolean;
}

export interface GetBlogPostBySlugVariables {
  slug: string;
}

export interface GetBlogPostByIdVariables {
  id: string;
}

export interface GetFeaturedPostsVariables {
  limit?: number;
}

export interface GetRelatedPostsVariables {
  postId: string;
  limit?: number;
}

export interface SearchBlogPostsVariables {
  query: string;
  first?: number;
  after?: string;
}

// GraphQL Mutation Variables
export interface LikeBlogPostVariables {
  postId: string;
}

export interface UnlikeBlogPostVariables {
  postId: string;
}

export interface BookmarkBlogPostVariables {
  postId: string;
}

export interface UnbookmarkBlogPostVariables {
  postId: string;
}

export interface IncrementViewCountVariables {
  postId: string;
}

export interface SubscribeNewsletterVariables {
  email: string;
}

// GraphQL Response Types
export interface GetBlogPostsResponse {
  blogPosts: BlogPostsResponse;
}

export interface GetBlogPostBySlugResponse {
  blogPost: BlogPost;
}

export interface GetBlogPostByIdResponse {
  blogPost: BlogPost;
}

export interface GetFeaturedPostsResponse {
  featuredPosts: BlogPost[];
}

export interface GetRelatedPostsResponse {
  relatedPosts: BlogPost[];
}

export interface GetCategoriesResponse {
  categories: Category[];
}

export interface GetPreviousPostResponse {
  previousPost?: BlogPost;
}

export interface GetNextPostResponse {
  nextPost?: BlogPost;
}

export interface SearchBlogPostsResponse {
  searchBlogPosts: BlogPostsResponse;
}

export interface LikeBlogPostResponse {
  likeBlogPost: {
    success: boolean;
    likes: number;
  };
}

export interface UnlikeBlogPostResponse {
  unlikeBlogPost: {
    success: boolean;
    likes: number;
  };
}

export interface BookmarkBlogPostResponse {
  bookmarkBlogPost: {
    success: boolean;
    bookmarked: boolean;
  };
}

export interface UnbookmarkBlogPostResponse {
  unbookmarkBlogPost: {
    success: boolean;
    bookmarked: boolean;
  };
}

export interface IncrementViewCountResponse {
  incrementViewCount: {
    success: boolean;
    views: number;
  };
}

export interface SubscribeNewsletterResponse {
  subscribeNewsletter: {
    success: boolean;
    message: string;
  };
}
