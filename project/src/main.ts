import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { CategoriesComponent } from './components/categories.component';
import { ResourceGridComponent } from './components/resource-grid.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    ResourceGridComponent,
    FooterComponent
  ],
  template: `
    <div class="app">
      <app-header></app-header>
      <main class="main-content">
        <app-hero></app-hero>
        <app-categories></app-categories>
        <app-resource-grid></app-resource-grid>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
    }
  `]
})
export class App implements OnInit {
  ngOnInit() {
    console.log('EduTech Hub - ML & DevOps Learning Platform Initialized');
  }
}

bootstrapApplication(App);