export interface Resource {
  id: number;
  title: string;
  type: 'paper' | 'book' | 'course' | 'tutorial';
  category: 'machine-learning' | 'devops' | 'data-science' | 'ai' | 'cloud' | 'automation';
  description: string;
  author: string;
  publishedDate: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  downloadUrl?: string;
  readUrl?: string;
  image: string;
  rating: number;
  downloads: number;
  pages?: number;
  duration?: string; // for courses
  isFree: boolean;
  price?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  resourceCount: number;
}

export interface SearchFilters {
  category: string;
  type: string;
  difficulty: string;
  isFree: boolean | null;
  searchTerm: string;
}