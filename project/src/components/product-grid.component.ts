import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from './product-card.component';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <section class="product-grid-section">
      <div class="container">
        <div class="section-header">
          <h2>Featured Products</h2>
          <p>Discover our curated collection of premium fashion items</p>
        </div>
        
        <div class="products-grid grid grid-4" *ngIf="products.length > 0">
          <app-product-card 
            *ngFor="let product of products; trackBy: trackByProductId" 
            [product]="product">
          </app-product-card>
        </div>
        
        <div class="no-products" *ngIf="products.length === 0">
          <h3>No products found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .product-grid-section {
      padding: 32px 0 64px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .section-header h2 {
      font-size: 36px;
      font-weight: 700;
      color: #000;
      margin-bottom: 16px;
    }

    .section-header p {
      font-size: 18px;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .products-grid {
      margin-bottom: 48px;
    }

    .no-products {
      text-align: center;
      padding: 64px 32px;
      color: #666;
    }

    .no-products h3 {
      font-size: 24px;
      margin-bottom: 16px;
      color: #000;
    }

    .no-products p {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      .section-header h2 {
        font-size: 28px;
      }

      .section-header p {
        font-size: 16px;
        padding: 0 16px;
      }

      .product-grid-section {
        padding: 24px 0 48px;
      }

      .section-header {
        margin-bottom: 32px;
      }
    }
  `]
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.filteredProducts$.subscribe(products => {
      this.products = products;
    });
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}