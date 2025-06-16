import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from '../services/resource.service';
import { Category } from '../models/resource.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="categories-section">
      <div class="container">
        <div class="section-header">
          <h2>Browse by Category</h2>
          <p>Explore our organized collection of learning materials</p>
        </div>
        
        <div class="categories-grid grid grid-3">
          <div class="category-card" 
               *ngFor="let category of categories"
               (click)="selectCategory(category.id)">
            <div class="category-icon">{{ category.icon }}</div>
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="category-description">{{ category.description }}</p>
            <div class="category-count">{{ category.resourceCount }} resources</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .categories-section {
      padding: 64px 0;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }

    .section-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .section-header h2 {
      font-size: 36px;
      font-weight: 700;
      color: #1F2937;
      margin-bottom: 16px;
    }

    .section-header p {
      font-size: 18px;
      color: #6B7280;
      max-width: 600px;
      margin: 0 auto;
    }

    .categories-grid {
      gap: 32px;
    }

    .category-card {
      background: white;
      padding: 32px 24px;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      cursor: pointer;
      border: 2px solid transparent;
    }

    .category-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      border-color: #6366F1;
    }

    .category-icon {
      font-size: 48px;
      margin-bottom: 20px;
    }

    .category-name {
      font-size: 24px;
      font-weight: 700;
      color: #1F2937;
      margin-bottom: 12px;
    }

    .category-description {
      color: #6B7280;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 16px;
    }

    .category-count {
      color: #6366F1;
      font-weight: 600;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .categories-section {
        padding: 48px 0;
      }

      .section-header h2 {
        font-size: 28px;
      }

      .categories-grid {
        gap: 24px;
      }

      .category-card {
        padding: 24px 20px;
      }

      .category-icon {
        font-size: 40px;
      }

      .category-name {
        font-size: 20px;
      }
    }
  `]
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    this.categories = this.resourceService.getCategories();
  }

  selectCategory(categoryId: string) {
    this.resourceService.filterResources({ category: categoryId });
    // Scroll to resources section
    document.querySelector('.resource-grid-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}