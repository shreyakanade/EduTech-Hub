import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Resource, Category, SearchFilters } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: Resource[] = [
    {
      id: 1,
      title: "Deep Learning",
      type: "book",
      category: "machine-learning",
      description: "Comprehensive guide to deep learning by Ian Goodfellow, Yoshua Bengio, and Aaron Courville. Covers mathematical foundations and practical applications.",
      author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
      publishedDate: "2016-11-18",
      difficulty: "advanced",
      tags: ["neural networks", "deep learning", "mathematics", "AI"],
      readUrl: "https://www.deeplearningbook.org/",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      downloads: 15420,
      pages: 800,
      isFree: true
    },
    {
      id: 2,
      title: "Attention Is All You Need",
      type: "paper",
      category: "machine-learning",
      description: "Groundbreaking paper introducing the Transformer architecture that revolutionized natural language processing and machine learning.",
      author: "Ashish Vaswani et al.",
      publishedDate: "2017-06-12",
      difficulty: "advanced",
      tags: ["transformers", "attention", "NLP", "neural networks"],
      downloadUrl: "https://arxiv.org/pdf/1706.03762.pdf",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.9,
      downloads: 8934,
      pages: 15,
      isFree: true
    },
    {
      id: 3,
      title: "The DevOps Handbook",
      type: "book",
      category: "devops",
      description: "Essential guide to implementing DevOps practices in organizations. Covers continuous integration, deployment, and monitoring.",
      author: "Gene Kim, Patrick Debois, John Willis",
      publishedDate: "2016-10-06",
      difficulty: "intermediate",
      tags: ["DevOps", "CI/CD", "automation", "culture"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      downloads: 12340,
      pages: 480,
      isFree: false,
      price: 29.99
    },
    {
      id: 4,
      title: "Kubernetes in Action",
      type: "book",
      category: "devops",
      description: "Complete guide to Kubernetes container orchestration. Learn to deploy, manage, and scale applications in Kubernetes clusters.",
      author: "Marko Lukša",
      publishedDate: "2017-12-20",
      difficulty: "intermediate",
      tags: ["Kubernetes", "containers", "orchestration", "cloud"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.6,
      downloads: 9876,
      pages: 624,
      isFree: false,
      price: 39.99
    },
    {
      id: 5,
      title: "BERT: Pre-training of Deep Bidirectional Transformers",
      type: "paper",
      category: "machine-learning",
      description: "Influential paper introducing BERT, a bidirectional encoder representation from transformers that achieved state-of-the-art results in NLP.",
      author: "Jacob Devlin et al.",
      publishedDate: "2018-10-11",
      difficulty: "advanced",
      tags: ["BERT", "transformers", "NLP", "pre-training"],
      downloadUrl: "https://arxiv.org/pdf/1810.04805.pdf",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      downloads: 7654,
      pages: 16,
      isFree: true
    },
    {
      id: 6,
      title: "Hands-On Machine Learning",
      type: "book",
      category: "machine-learning",
      description: "Practical guide to machine learning with Scikit-Learn, Keras, and TensorFlow. Perfect for beginners and practitioners.",
      author: "Aurélien Géron",
      publishedDate: "2019-10-15",
      difficulty: "beginner",
      tags: ["scikit-learn", "tensorflow", "keras", "practical ML"],
      image: "https://images.pexels.com/photos/159866/books-book-pages-read-159866.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      downloads: 18765,
      pages: 851,
      isFree: false,
      price: 44.99
    },
    {
      id: 7,
      title: "Docker Deep Dive",
      type: "book",
      category: "devops",
      description: "Comprehensive guide to Docker containerization technology. Learn to build, ship, and run applications with Docker.",
      author: "Nigel Poulton",
      publishedDate: "2020-01-15",
      difficulty: "beginner",
      tags: ["Docker", "containers", "microservices", "deployment"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.5,
      downloads: 11234,
      pages: 312,
      isFree: false,
      price: 24.99
    },
    {
      id: 8,
      title: "Generative Adversarial Networks",
      type: "paper",
      category: "machine-learning",
      description: "Original paper introducing GANs by Ian Goodfellow. Revolutionary approach to generative modeling in machine learning.",
      author: "Ian J. Goodfellow et al.",
      publishedDate: "2014-06-10",
      difficulty: "advanced",
      tags: ["GANs", "generative models", "adversarial training"],
      downloadUrl: "https://arxiv.org/pdf/1406.2661.pdf",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.9,
      downloads: 13456,
      pages: 9,
      isFree: true
    }
  ];

  private categories: Category[] = [
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      description: 'Papers and books on ML algorithms, neural networks, and AI',
      icon: '🤖',
      resourceCount: 5
    },
    {
      id: 'devops',
      name: 'DevOps',
      description: 'Resources on CI/CD, containerization, and infrastructure',
      icon: '⚙️',
      resourceCount: 3
    },
    {
      id: 'data-science',
      name: 'Data Science',
      description: 'Analytics, statistics, and data visualization resources',
      icon: '📊',
      resourceCount: 0
    },
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      description: 'AI research papers and foundational texts',
      icon: '🧠',
      resourceCount: 0
    },
    {
      id: 'cloud',
      name: 'Cloud Computing',
      description: 'Cloud platforms, services, and architecture',
      icon: '☁️',
      resourceCount: 0
    },
    {
      id: 'automation',
      name: 'Automation',
      description: 'Infrastructure as code and automation tools',
      icon: '🔄',
      resourceCount: 0
    }
  ];

  private filteredResources = new BehaviorSubject<Resource[]>(this.resources);
  public filteredResources$ = this.filteredResources.asObservable();

  private searchFilters = new BehaviorSubject<SearchFilters>({
    category: 'all',
    type: 'all',
    difficulty: 'all',
    isFree: null,
    searchTerm: ''
  });

  getAllResources(): Observable<Resource[]> {
    return this.filteredResources$;
  }

  getResourceById(id: number): Resource | undefined {
    return this.resources.find(resource => resource.id === id);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  filterResources(filters: Partial<SearchFilters>) {
    const currentFilters = { ...this.searchFilters.value, ...filters };
    this.searchFilters.next(currentFilters);

    let filtered = this.resources;

    if (currentFilters.category !== 'all') {
      filtered = filtered.filter(resource => resource.category === currentFilters.category);
    }

    if (currentFilters.type !== 'all') {
      filtered = filtered.filter(resource => resource.type === currentFilters.type);
    }

    if (currentFilters.difficulty !== 'all') {
      filtered = filtered.filter(resource => resource.difficulty === currentFilters.difficulty);
    }

    if (currentFilters.isFree !== null) {
      filtered = filtered.filter(resource => resource.isFree === currentFilters.isFree);
    }

    if (currentFilters.searchTerm) {
      const term = currentFilters.searchTerm.toLowerCase();
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(term) ||
        resource.description.toLowerCase().includes(term) ||
        resource.author.toLowerCase().includes(term) ||
        resource.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    this.filteredResources.next(filtered);
  }

  getCurrentFilters(): SearchFilters {
    return this.searchFilters.value;
  }
}