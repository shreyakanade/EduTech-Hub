import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>📚 EduTech Hub</h1>
            <span class="tagline">ML & DevOps Learning Resources</span>
          </div>
          
          <nav class="nav">
            <a href="#" 
               class="nav-link" 
               [class.active]="selectedCategory === 'all'"
               (click)="onCategoryChange('all', $event)">All Resources</a>
            <a href="#" 
               class="nav-link" 
               [class.active]="selectedCategory === 'machine-learning'"
               (click)="onCategoryChange('machine-learning', $event)">Machine Learning</a>
            <a href="#" 
               class="nav-link" 
               [class.active]="selectedCategory === 'devops'"
               (click)="onCategoryChange('devops', $event)">DevOps</a>
            <a href="#" 
               class="nav-link" 
               [class.active]="selectedCategory === 'data-science'"
               (click)="onCategoryChange('data-science', $event)">Data Science</a>
          </nav>

          <div class="header-actions">
            <div class="search-box">
              <input 
                type="text" 
                placeholder="Search papers, books, courses..." 
                [(ngModel)]="searchTerm"
                (ngModelChange)="onSearch()"
                class="search-input">
              <span class="search-icon">🔍</span>
            </div>
            
            <div class="filter-toggle" (click)="toggleFilters()">
              <span class="filter-icon">⚙️</span>
              <span>Filters</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
      margin-bottom: 32px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;
      gap: 32px;
    }

    .logo h1 {
      font-size: 28px;
      font-weight: 700;
      margin: 0;
      color: white;
    }

    .tagline {
      font-size: 12px;
      opacity: 0.9;
      font-weight: 400;
    }

    .nav {
      display: flex;
      gap: 32px;
    }

    .nav-link {
      text-decoration: none;
      color: rgba(255,255,255,0.8);
      font-weight: 500;
      font-size: 16px;
      transition: all 0.3s ease;
      position: relative;
      padding: 8px 0;
    }

    .nav-link:hover, .nav-link.active {
      color: white;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: #FFD700;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .search-box {
      position: relative;
    }

    .search-input {
      width: 300px;
      padding: 12px 40px 12px 16px;
      border: none;
      border-radius: 25px;
      font-size: 14px;
      outline: none;
      background: rgba(255,255,255,0.2);
      color: white;
      backdrop-filter: blur(10px);
    }

    .search-input::placeholder {
      color: rgba(255,255,255,0.7);
    }

    .search-input:focus {
      background: rgba(255,255,255,0.3);
    }

    .search-icon {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.7;
    }

    .filter-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      background: rgba(255,255,255,0.2);
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .filter-toggle:hover {
      background: rgba(255,255,255,0.3);
    }

    @media (max-width: 1024px) {
      .header-content {
        flex-direction: column;
        gap: 20px;
      }

      .nav {
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .search-input {
        width: 250px;
      }
    }

    @media (max-width: 768px) {
      .nav {
        gap: 16px;
      }

      .nav-link {
        font-size: 14px;
      }

      .search-input {
        width: 200px;
      }

      .header-actions {
        gap: 16px;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  selectedCategory = 'all';
  searchTerm = '';

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    // Initialize with all resources
    this.resourceService.filterResources({});
  }

  onCategoryChange(category: string, event: Event) {
    event.preventDefault();
    this.selectedCategory = category;
    this.resourceService.filterResources({ category, searchTerm: this.searchTerm });
  }

  onSearch() {
    this.resourceService.filterResources({ 
      category: this.selectedCategory, 
      searchTerm: this.searchTerm 
    });
  }

  toggleFilters() {
    // This will be implemented when we add filter modal
    console.log('Filters toggled');
  }
}