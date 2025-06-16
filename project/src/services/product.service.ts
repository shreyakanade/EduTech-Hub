import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: 89.99,
      originalPrice: 120.00,
      category: "women",
      description: "A timeless white button-down shirt crafted from premium cotton. Perfect for both professional and casual settings.",
      image: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      reviews: 142,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Light Blue", "Pink"],
      inStock: true
    },
    {
      id: 2,
      name: "Elegant Black Dress",
      price: 149.99,
      category: "women",
      description: "Sophisticated black dress suitable for evening events and formal occasions. Features a flattering silhouette.",
      image: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.9,
      reviews: 89,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Burgundy"],
      inStock: true
    },
    {
      id: 3,
      name: "Men's Casual Blazer",
      price: 199.99,
      originalPrice: 250.00,
      category: "men",
      description: "Versatile casual blazer that transitions seamlessly from office to weekend. Made with high-quality wool blend.",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      reviews: 76,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Navy", "Charcoal", "Brown"],
      inStock: true
    },
    {
      id: 4,
      name: "Designer Denim Jeans",
      price: 129.99,
      category: "men",
      description: "Premium denim jeans with a modern slim fit. Crafted from sustainable cotton with excellent durability.",
      image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.6,
      reviews: 234,
      sizes: ["28", "30", "32", "34", "36", "38"],
      colors: ["Dark Blue", "Light Blue", "Black"],
      inStock: true
    },
    {
      id: 5,
      name: "Luxury Leather Handbag",
      price: 299.99,
      originalPrice: 399.99,
      category: "accessories",
      description: "Handcrafted leather handbag with multiple compartments. Perfect blend of style and functionality.",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.9,
      reviews: 56,
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Tan"],
      inStock: true
    },
    {
      id: 6,
      name: "Silk Scarf Collection",
      price: 79.99,
      category: "accessories",
      description: "Luxurious silk scarf with artistic patterns. A perfect accessory to elevate any outfit.",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      reviews: 43,
      sizes: ["One Size"],
      colors: ["Floral", "Geometric", "Abstract"],
      inStock: true
    },
    {
      id: 7,
      name: "Casual Summer Dress",
      price: 69.99,
      category: "women",
      description: "Light and breezy summer dress perfect for warm weather. Features a comfortable fit and beautiful print.",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.5,
      reviews: 167,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Floral", "Solid Blue", "Striped"],
      inStock: true
    },
    {
      id: 8,
      name: "Men's Premium T-Shirt",
      price: 49.99,
      category: "men",
      description: "High-quality cotton t-shirt with superior comfort and durability. Perfect for everyday wear.",
      image: "https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.4,
      reviews: 312,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Gray", "Navy"],
      inStock: true
    }
  ];

  private filteredProducts = new BehaviorSubject<Product[]>(this.products);
  public filteredProducts$ = this.filteredProducts.asObservable();

  getAllProducts(): Observable<Product[]> {
    return this.filteredProducts$;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  filterProducts(category: string = 'all', searchTerm: string = '') {
    let filtered = this.products;

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    this.filteredProducts.next(filtered);
  }

  getCategories(): string[] {
    return ['all', 'men', 'women', 'accessories'];
  }
}