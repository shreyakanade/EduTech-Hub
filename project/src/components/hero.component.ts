import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Master Machine Learning & DevOps</h1>
          <p class="hero-subtitle">
            Access curated collection of research papers, comprehensive books, and practical courses. 
            Stay ahead with the latest in AI, ML, and modern DevOps practices.
          </p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">500+</span>
              <span class="stat-label">Research Papers</span>
            </div>
            <div class="stat">
              <span class="stat-number">200+</span>
              <span class="stat-label">Technical Books</span>
            </div>
            <div class="stat">
              <span class="stat-number">100+</span>
              <span class="stat-label">Online Courses</span>
            </div>
          </div>
          <div class="hero-actions">
            <button class="btn btn-primary">Explore Resources</button>
            <button class="btn btn-outline">Browse Categories</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
               alt="Learning and Technology" 
               loading="eager">
          <div class="floating-cards">
            <div class="floating-card">
              <span class="card-icon">🤖</span>
              <span class="card-text">AI Research</span>
            </div>
            <div class="floating-card">
              <span class="card-icon">📊</span>
              <span class="card-text">Data Science</span>
            </div>
            <div class="floating-card">
              <span class="card-icon">⚙️</span>
              <span class="card-text">DevOps Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      padding: 100px 0;
      margin-bottom: 64px;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
      opacity: 0.3;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .hero-text {
      color: white;
    }

    .hero-title {
      font-size: 56px;
      font-weight: 800;
      margin-bottom: 24px;
      line-height: 1.1;
      background: linear-gradient(45deg, #fff, #FFD700);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 40px;
      opacity: 0.95;
    }

    .hero-stats {
      display: flex;
      gap: 40px;
      margin-bottom: 40px;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 32px;
      font-weight: 700;
      color: #FFD700;
    }

    .stat-label {
      font-size: 14px;
      opacity: 0.9;
    }

    .hero-actions {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .hero-image {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    }

    .hero-image img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .hero-image:hover img {
      transform: scale(1.05);
    }

    .floating-cards {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .floating-card {
      background: rgba(255,255,255,0.95);
      backdrop-filter: blur(10px);
      padding: 12px 16px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      animation: float 3s ease-in-out infinite;
    }

    .floating-card:nth-child(2) {
      animation-delay: -1s;
    }

    .floating-card:nth-child(3) {
      animation-delay: -2s;
    }

    .card-icon {
      font-size: 20px;
    }

    .card-text {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
      }

      .hero-title {
        font-size: 48px;
      }

      .hero-stats {
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 60px 0;
        margin-bottom: 48px;
      }

      .hero-title {
        font-size: 36px;
      }

      .hero-subtitle {
        font-size: 18px;
      }

      .hero-stats {
        gap: 24px;
      }

      .stat-number {
        font-size: 24px;
      }

      .hero-image img {
        height: 300px;
      }

      .floating-cards {
        display: none;
      }
    }
  `]
})
export class HeroComponent {}