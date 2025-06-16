import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>📚 EduTech Hub</h3>
            <p>Your premier destination for machine learning and DevOps education. 
               Access cutting-edge research papers, comprehensive books, and practical courses.</p>
            <div class="social-links">
              <a href="#" class="social-link">📧 Newsletter</a>
              <a href="#" class="social-link">🐦 Twitter</a>
              <a href="#" class="social-link">💼 LinkedIn</a>
              <a href="#" class="social-link">📱 GitHub</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Machine Learning</a></li>
              <li><a href="#">DevOps & Infrastructure</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Artificial Intelligence</a></li>
              <li><a href="#">Cloud Computing</a></li>
              <li><a href="#">Automation Tools</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Resource Types</h4>
            <ul>
              <li><a href="#">Research Papers</a></li>
              <li><a href="#">Technical Books</a></li>
              <li><a href="#">Online Courses</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="#">Discussion Forum</a></li>
              <li><a href="#">Study Groups</a></li>
              <li><a href="#">Expert Network</a></li>
              <li><a href="#">Contribute Content</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-stats">
            <div class="stat">
              <span class="stat-number">500+</span>
              <span class="stat-label">Papers</span>
            </div>
            <div class="stat">
              <span class="stat-number">200+</span>
              <span class="stat-label">Books</span>
            </div>
            <div class="stat">
              <span class="stat-number">100+</span>
              <span class="stat-label">Courses</span>
            </div>
            <div class="stat">
              <span class="stat-number">50k+</span>
              <span class="stat-label">Learners</span>
            </div>
          </div>
          
          <div class="footer-legal">
            <p>&copy; 2025 EduTech Hub. All rights reserved.</p>
            <div class="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
      padding: 64px 0 32px;
      margin-top: 64px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 48px;
      margin-bottom: 48px;
    }

    .footer-section h3 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 16px;
      background: linear-gradient(45deg, #FFD700, #FFA500);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .footer-section h4 {
      color: white;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .footer-section p {
      color: rgba(255,255,255,0.8);
      line-height: 1.6;
      margin-bottom: 24px;
    }

    .footer-section ul {
      list-style: none;
    }

    .footer-section ul li {
      margin-bottom: 12px;
    }

    .footer-section ul li a {
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 14px;
    }

    .footer-section ul li a:hover {
      color: #FFD700;
    }

    .social-links {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .social-link {
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.3s ease;
    }

    .social-link:hover {
      color: #FFD700;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.2);
      padding-top: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-stats {
      display: flex;
      gap: 32px;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 24px;
      font-weight: 700;
      color: #FFD700;
    }

    .stat-label {
      font-size: 12px;
      color: rgba(255,255,255,0.7);
    }

    .footer-legal {
      text-align: right;
    }

    .footer-legal p {
      color: rgba(255,255,255,0.7);
      margin: 0 0 8px 0;
      font-size: 14px;
    }

    .legal-links {
      display: flex;
      gap: 16px;
    }

    .legal-links a {
      color: rgba(255,255,255,0.6);
      text-decoration: none;
      font-size: 12px;
      transition: color 0.3s ease;
    }

    .legal-links a:hover {
      color: #FFD700;
    }

    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 24px;
        text-align: center;
      }

      .footer-stats {
        gap: 24px;
      }

      .footer-legal {
        text-align: center;
      }
    }

    @media (max-width: 768px) {
      .footer {
        padding: 48px 0 24px;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .footer-stats {
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .legal-links {
        flex-direction: column;
        gap: 8px;
      }
    }
  `]
})
export class FooterComponent {}