import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent],
  template: `
    <section class="about" id="about">
      <div class="container">
        <app-section-title titleKey="ABOUT.TITLE" number="01"></app-section-title>

        <div class="about-grid" data-aos="fade-up">
          <!-- Profile Card -->
          <div class="profile-card glass-card">
            <div class="avatar-wrapper">
              <div class="avatar">
                <span class="avatar-initials">AR</span>
                <div class="avatar-ring"></div>
              </div>
            </div>
            <h3 class="profile-name">Ayoub RAFFASS</h3>
            <p class="profile-role">Senior Software Engineer</p>

            <div class="profile-info">
              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <span class="info-label">{{ 'ABOUT.LOCATION' | translate }}</span>
                  <span class="info-value">{{ 'ABOUT.LOCATION_VALUE' | translate }}</span>
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-building"></i>
                <div>
                  <span class="info-label">{{ 'ABOUT.COMPANY' | translate }}</span>
                  <span class="info-value">{{ 'ABOUT.COMPANY_VALUE' | translate }}</span>
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-envelope"></i>
                <div>
                  <span class="info-label">{{ 'ABOUT.EMAIL' | translate }}</span>
                  <span class="info-value">{{ 'ABOUT.EMAIL_VALUE' | translate }}</span>
                </div>
              </div>
            </div>

            <div class="profile-actions">
              <a href="mailto:ayoubraffass@gmail.com" class="btn-primary">
                <i class="fas fa-download"></i>
                {{ 'ABOUT.DOWNLOAD_CV' | translate }}
              </a>
              <a href="https://linkedin.com/in/ayoubraffass" target="_blank" class="btn-outline">
                <i class="fab fa-linkedin"></i>
                LinkedIn
              </a>
            </div>
          </div>

          <!-- Bio -->
          <div class="bio-content" data-aos="fade-up" data-aos-delay="100">
            <p class="bio-text">{{ 'ABOUT.BIO_1' | translate }}</p>
            <p class="bio-text">{{ 'ABOUT.BIO_2' | translate }}</p>

            <div class="tech-highlights">
              <div class="highlight-item">
                <span class="highlight-number">6+</span>
                <span class="highlight-label">Years Experience</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-number">10+</span>
                <span class="highlight-label">Technologies</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-number">5+</span>
                <span class="highlight-label">Companies</span>
              </div>
            </div>

            <div class="current-focus">
              <h4>
                <i class="fas fa-rocket"></i>
                Currently Working With
              </h4>
              <div class="focus-tags">
                <span class="tag">Java 17+</span>
                <span class="tag">Spring Boot 3</span>
                <span class="tag">LLMs</span>
                <span class="tag">MCP Protocol</span>
                <span class="tag">API Management</span>
                <span class="tag">Angular 17+</span>
                <span class="tag">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: #0f0f1e;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 340px 1fr;
      gap: 48px;
      align-items: start;
    }

    .profile-card {
      background: rgba(15, 15, 30, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 245, 255, 0.2);
      border-radius: 16px;
      padding: 40px 32px;
      text-align: center;
      transition: all 0.3s ease;
    }

    .profile-card:hover {
      border-color: rgba(0, 245, 255, 0.5);
      box-shadow: 0 0 30px rgba(0, 245, 255, 0.1);
    }

    .avatar-wrapper {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
    }

    .avatar {
      position: relative;
      width: 100px;
      height: 100px;
    }

    .avatar-initials {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(180, 79, 255, 0.2));
      border: 2px solid #00f5ff;
      border-radius: 50%;
      font-family: 'JetBrains Mono', monospace;
      font-size: 2rem;
      font-weight: 700;
      color: #00f5ff;
      z-index: 1;
    }

    .avatar-ring {
      position: absolute;
      inset: -8px;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: #00f5ff;
      border-right-color: #b44fff;
      animation: spin 4s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .profile-name {
      font-size: 1.4rem;
      font-weight: 700;
      color: #e8eaf0;
      margin-bottom: 6px;
    }

    .profile-role {
      color: #00f5ff;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      margin-bottom: 28px;
    }

    .profile-info {
      text-align: left;
      margin-bottom: 28px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .info-item i {
      color: #00f5ff;
      font-size: 0.9rem;
      margin-top: 3px;
      width: 16px;
      flex-shrink: 0;
    }

    .info-item div {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .info-label {
      font-size: 0.75rem;
      color: #606880;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .info-value {
      font-size: 0.85rem;
      color: #a0a8c0;
    }

    .profile-actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .bio-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .bio-text {
      font-size: 1rem;
      color: #a0a8c0;
      line-height: 1.8;
    }

    .tech-highlights {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 24px;
      background: rgba(0, 245, 255, 0.03);
      border: 1px solid rgba(0, 245, 255, 0.1);
      border-radius: 12px;
    }

    .highlight-item {
      text-align: center;
    }

    .highlight-number {
      display: block;
      font-size: 2rem;
      font-weight: 800;
      color: #00f5ff;
      font-family: 'JetBrains Mono', monospace;
    }

    .highlight-label {
      font-size: 0.8rem;
      color: #606880;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .current-focus h4 {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #e8eaf0;
      font-size: 1rem;
      margin-bottom: 14px;
    }

    .current-focus h4 i {
      color: #00f5ff;
    }

    .focus-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
      }

      .tech-highlights {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `]
})
export class AboutComponent {}
