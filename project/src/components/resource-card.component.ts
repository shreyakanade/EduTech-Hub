import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resource } from '../models/resource.model';

@Component({
  selector: 'app-resource-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="resource-card fade-in" (click)="onResourceClick()">
      <div class="resource-image">
        <img [src]="resource.image" [alt]="resource.title" loading="lazy">
        <div class="resource-overlay">
          <div class="resource-type">{{ getTypeDisplay() }}</div>
          <div class="resource-actions">
            <button class="btn btn-primary" 
                    *ngIf="resource.readUrl || resource.downloadUrl"
                    (click)="openResource($event)">
              {{ resource.type === 'paper' ? 'Read Paper' : 'View Resource' }}
            </button>
          </div>
        </div>
        <div class="resource-badges">
          <span class="badge difficulty" [class]="resource.difficulty">
            {{ getDifficultyDisplay() }}
          </span>
          <span class="badge price" [class.free]="resource.isFree">
            {{ resource.isFree ? 'Free' : '$' + resource.price }}
          </span>
        </div>
      </div>
      
      <div class="resource-info">
        <div class="resource-category">{{ getCategoryDisplay() }}</div>
        <h3 class="resource-title">{{ resource.title }}</h3>
        <p class="resource-author">by {{ resource.author }}</p>
        <p class="resource-description">{{ resource.description }}</p>
        
        <div class="resource-meta">
          <div class="meta-item">
            <span class="meta-icon">⭐</span>
            <span>{{ resource.rating }}/5</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">📥</span>
            <span>{{ formatDownloads() }}</span>
          </div>
          <div class="meta-item" *ngIf="resource.pages">
            <span class="meta-icon">📄</span>
            <span>{{ resource.pages }} pages</span>
          </div>
          <div class="meta-item" *ngIf="resource.duration">
            <span class="meta-icon">⏱️</span>
            <span>{{ resource.duration }}</span>
          </div>
        </div>

        <div class="resource-tags">
          <span class="tag" *ngFor="let tag of resource.tags.slice(0, 3)">
            {{ tag }}
          </span>
        </div>

        <div class="resource-date">
          Published: {{ formatDate() }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .resource-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      cursor: pointer;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .resource-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .resource-image {
      position: relative;
      overflow: hidden;
      height: 240px;
    }

    .resource-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .resource-card:hover .resource-image img {
      transform: scale(1.1);
    }

    .resource-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .resource-card:hover .resource-overlay {
      opacity: 1;
    }

    .resource-type {
      color: white;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .resource-actions {
      display: flex;
      justify-content: center;
    }

    .resource-badges {
      position: absolute;
      top: 12px;
      right: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .badge {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      text-align: center;
    }

    .badge.difficulty.beginner {
      background: #10B981;
      color: white;
    }

    .badge.difficulty.intermediate {
      background: #F59E0B;
      color: white;
    }

    .badge.difficulty.advanced {
      background: #EF4444;
      color: white;
    }

    .badge.price {
      background: #6366F1;
      color: white;
    }

    .badge.price.free {
      background: #10B981;
    }

    .resource-info {
      padding: 24px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .resource-category {
      color: #6366F1;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .resource-title {
      font-size: 20px;
      font-weight: 700;
      color: #1F2937;
      margin-bottom: 8px;
      line-height: 1.3;
    }

    .resource-author {
      color: #6B7280;
      font-size: 14px;
      margin-bottom: 12px;
      font-style: italic;
    }

    .resource-description {
      color: #4B5563;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .resource-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 16px;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: #6B7280;
    }

    .meta-icon {
      font-size: 14px;
    }

    .resource-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 16px;
    }

    .tag {
      background: #F3F4F6;
      color: #374151;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
    }

    .resource-date {
      color: #9CA3AF;
      font-size: 12px;
      margin-top: auto;
    }

    @media (max-width: 768px) {
      .resource-image {
        height: 200px;
      }

      .resource-info {
        padding: 20px;
      }

      .resource-title {
        font-size: 18px;
      }

      .resource-meta {
        gap: 12px;
      }
    }
  `]
})
export class ResourceCardComponent {
  @Input() resource!: Resource;

  getTypeDisplay(): string {
    const types = {
      'paper': 'Research Paper',
      'book': 'Book',
      'course': 'Course',
      'tutorial': 'Tutorial'
    };
    return types[this.resource.type] || this.resource.type;
  }

  getCategoryDisplay(): string {
    const categories = {
      'machine-learning': 'Machine Learning',
      'devops': 'DevOps',
      'data-science': 'Data Science',
      'ai': 'Artificial Intelligence',
      'cloud': 'Cloud Computing',
      'automation': 'Automation'
    };
    return categories[this.resource.category] || this.resource.category;
  }

  getDifficultyDisplay(): string {
    return this.resource.difficulty.charAt(0).toUpperCase() + this.resource.difficulty.slice(1);
  }

  formatDownloads(): string {
    if (this.resource.downloads >= 1000) {
      return (this.resource.downloads / 1000).toFixed(1) + 'k';
    }
    return this.resource.downloads.toString();
  }

  formatDate(): string {
    return new Date(this.resource.publishedDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  onResourceClick() {
    console.log('Resource clicked:', this.resource);
    // Will be implemented for resource details view
  }

  openResource(event: Event) {
    event.stopPropagation();
    
    const url = this.resource.readUrl || this.resource.downloadUrl;
    if (url) {
      window.open(url, '_blank');
    }
  }
}