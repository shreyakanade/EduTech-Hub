import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from '../services/resource.service';
import { ResourceCardComponent } from './resource-card.component';
import { Resource } from '../models/resource.model';

@Component({
  selector: 'app-resource-grid',
  standalone: true,
  imports: [CommonModule, ResourceCardComponent],
  template: `
    <section class="resource-grid-section">
      <div class="container">
        <div class="section-header">
          <h2>Learning Resources</h2>
          <p>Curated collection of papers, books, and courses for ML and DevOps professionals</p>
        </div>
        
        <div class="filter-summary" *ngIf="resources.length > 0">
          <span class="result-count">{{ resources.length }} resources found</span>
          <div class="quick-filters">
            <button class="filter-btn" 
                    [class.active]="currentFilters.type === 'all'"
                    (click)="filterByType('all')">All</button>
            <button class="filter-btn" 
                    [class.active]="currentFilters.type === 'paper'"
                    (click)="filterByType('paper')">Papers</button>
            <button class="filter-btn" 
                    [class.active]="currentFilters.type === 'book'"
                    (click)="filterByType('book')">Books</button>
            <button class="filter-btn" 
                    [class.active]="currentFilters.isFree === true"
                    (click)="filterByPrice(true)">Free Only</button>
          </div>
        </div>
        
        <div class="resources-grid grid grid-3" *ngIf="resources.length > 0">
          <app-resource-card 
            *ngFor="let resource of resources; trackBy: trackByResourceId" 
            [resource]="resource">
          </app-resource-card>
        </div>
        
        <div class="no-resources" *ngIf="resources.length === 0">
          <div class="no-resources-icon">📚</div>
          <h3>No resources found</h3>
          <p>Try adjusting your search terms or filters to find what you're looking for</p>
          <button class="btn btn-primary" (click)="clearFilters()">Clear Filters</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .resource-grid-section {
      padding: 32px 0 64px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .section-header h2 {
      font-size: 42px;
      font-weight: 800;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 16px;
    }

    .section-header p {
      font-size: 18px;
      color: #6B7280;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .filter-summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      padding: 20px;
      background: #F9FAFB;
      border-radius: 12px;
    }

    .result-count {
      font-weight: 600;
      color: #374151;
    }

    .quick-filters {
      display: flex;
      gap: 12px;
    }

    .filter-btn {
      padding: 8px 16px;
      border: 2px solid #E5E7EB;
      background: white;
      color: #6B7280;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .filter-btn:hover {
      border-color: #6366F1;
      color: #6366F1;
    }

    .filter-btn.active {
      background: #6366F1;
      border-color: #6366F1;
      color: white;
    }

    .resources-grid {
      margin-bottom: 48px;
    }

    .no-resources {
      text-align: center;
      padding: 80px 32px;
      color: #6B7280;
    }

    .no-resources-icon {
      font-size: 64px;
      margin-bottom: 24px;
    }

    .no-resources h3 {
      font-size: 28px;
      margin-bottom: 16px;
      color: #374151;
    }

    .no-resources p {
      font-size: 16px;
      margin-bottom: 32px;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 1024px) {
      .filter-summary {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }

      .quick-filters {
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      .section-header h2 {
        font-size: 32px;
      }

      .section-header p {
        font-size: 16px;
        padding: 0 16px;
      }

      .resource-grid-section {
        padding: 24px 0 48px;
      }

      .section-header {
        margin-bottom: 32px;
      }

      .filter-summary {
        padding: 16px;
      }

      .filter-btn {
        padding: 6px 12px;
        font-size: 12px;
      }
    }
  `]
})
export class ResourceGridComponent implements OnInit {
  resources: Resource[] = [];
  currentFilters: any = {};

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    this.resourceService.filteredResources$.subscribe(resources => {
      this.resources = resources;
    });

    this.currentFilters = this.resourceService.getCurrentFilters();
  }

  trackByResourceId(index: number, resource: Resource): number {
    return resource.id;
  }

  filterByType(type: string) {
    this.resourceService.filterResources({ type });
    this.currentFilters = this.resourceService.getCurrentFilters();
  }

  filterByPrice(isFree: boolean) {
    const newFilter = this.currentFilters.isFree === isFree ? null : isFree;
    this.resourceService.filterResources({ isFree: newFilter });
    this.currentFilters = this.resourceService.getCurrentFilters();
  }

  clearFilters() {
    this.resourceService.filterResources({
      category: 'all',
      type: 'all',
      difficulty: 'all',
      isFree: null,
      searchTerm: ''
    });
    this.currentFilters = this.resourceService.getCurrentFilters();
  }
}