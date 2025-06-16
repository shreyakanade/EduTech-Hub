import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card fade-in" (click)="onProductClick()">
      <div class="product-image">
        <img [src]="product.image" [alt]="product.name" loading="lazy">
        <div class="product-overlay">
          <button class="btn quick-add-btn" (click)="addToCart($event)">
            Quick Add
          </button>
        </div>
      </div>
      
      <div class="product-info">
        <div class="product-category">{{ getCategoryDisplay() }}</div>
        <h3 class="product-name">{{ product.name }}</h3>
        <div class="product-rating">
          <span class="stars">{{ getStars() }}</span>
          <span class="review-count">({{ product.reviews }})</span>
        </div>
        <div class="product-price">
          <span class="current-price">\${{ product.price.toFixed(2) }}</span>
          <span class="original-price" *ngIf="product.originalPrice">
            \${{ product.originalPrice.toFixed(2) }}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      cursor: pointer;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.15);
    }

    .product-image {
      position: relative;
      overflow: hidden;
      height: 280px;
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .product-card:hover .product-image img {
      transform: scale(1.05);
    }

    .product-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .product-card:hover .product-overlay {
      opacity: 1;
    }

    .quick-add-btn {
      background: #D4AF37;
      color: #000;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .quick-add-btn:hover {
      background: #B8941F;
      transform: translateY(-2px);
    }

    .product-info {
      padding: 20px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .product-category {
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .product-name {
      font-size: 18px;
      font-weight: 600;
      color: #000;
      margin-bottom: 12px;
      line-height: 1.3;
    }

    .product-rating {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }

    .stars {
      color: #D4AF37;
      font-size: 14px;
    }

    .review-count {
      color: #666;
      font-size: 12px;
    }

    .product-price {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: auto;
    }

    .current-price {
      font-size: 20px;
      font-weight: 700;
      color: #000;
    }

    .original-price {
      font-size: 16px;
      color: #999;
      text-decoration: line-through;
    }

    @media (max-width: 768px) {
      .product-image {
        height: 240px;
      }

      .product-info {
        padding: 16px;
      }

      .product-name {
        font-size: 16px;
      }

      .current-price {
        font-size: 18px;
      }
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  getCategoryDisplay(): string {
    return this.product.category.charAt(0).toUpperCase() + this.product.category.slice(1);
  }

  getStars(): string {
    const fullStars = Math.floor(this.product.rating);
    const hasHalfStar = this.product.rating % 1 >= 0.5;
    
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    stars += '☆'.repeat(5 - Math.ceil(this.product.rating));
    
    return stars;
  }

  onProductClick() {
    // Will be implemented for product details view
    console.log('Product clicked:', this.product);
  }

  addToCart(event: Event) {
    event.stopPropagation();
    
    // Use default selections for quick add
    const defaultSize = this.product.sizes[0];
    const defaultColor = this.product.colors[0];
    
    this.cartService.addToCart(this.product, defaultSize, defaultColor, 1);
    
    // Show feedback (could be a toast notification)
    console.log('Added to cart:', this.product.name);
  }
}