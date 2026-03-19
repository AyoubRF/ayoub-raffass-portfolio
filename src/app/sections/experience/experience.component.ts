import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent],
  template: `
    <section class="experience" id="experience">
      <div class="container">
        <app-section-title titleKey="EXPERIENCE.TITLE" number="02"></app-section-title>

        <div class="timeline">
          @for (role of roles; track $index; let i = $index; let first = $first) {
            <div class="timeline-item" [class.right]="i % 2 !== 0"
                 data-aos="fade-up" [attr.data-aos-delay]="i * 100">
              <div class="timeline-dot" [class.current]="first">
                <i class="fas fa-briefcase"></i>
              </div>
              <div class="timeline-card glass-card">
                <div class="card-header">
                  <div>
                    <h3 class="role-title">{{ ('EXPERIENCE.ROLES.' + i + '.TITLE') | translate }}</h3>
                    <p class="company">
                      <i class="fas fa-building"></i>
                      {{ ('EXPERIENCE.ROLES.' + i + '.COMPANY') | translate }}
                    </p>
                  </div>
                  <div class="period-badge">
                    <i class="fas fa-calendar"></i>
                    {{ ('EXPERIENCE.ROLES.' + i + '.PERIOD') | translate }}
                    @if (first) {
                      <span class="current-badge">{{ 'EXPERIENCE.CURRENT' | translate }}</span>
                    }
                  </div>
                </div>
                <p class="description">{{ ('EXPERIENCE.ROLES.' + i + '.DESCRIPTION') | translate }}</p>
                <div class="tags">
                  @for (tag of getTagsArray(i); track tag) {
                    <span class="tag">{{ tag }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
      background: #0a0a0f;
    }

    .timeline {
      position: relative;
      max-width: 900px;
      margin: 0 auto;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, #00f5ff, #b44fff, transparent);
      transform: translateX(-50%);
    }

    .timeline-item {
      display: flex;
      justify-content: flex-end;
      padding-right: calc(50% + 40px);
      margin-bottom: 48px;
      position: relative;
    }

    .timeline-item.right {
      justify-content: flex-start;
      padding-right: 0;
      padding-left: calc(50% + 40px);
    }

    .timeline-dot {
      position: absolute;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #0a0a0f;
      border: 2px solid rgba(0, 245, 255, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }

    .timeline-dot i {
      color: #a0a8c0;
      font-size: 0.85rem;
    }

    .timeline-dot.current {
      border-color: #00f5ff;
      background: rgba(0, 245, 255, 0.1);
      box-shadow: 0 0 20px rgba(0, 245, 255, 0.4);
    }

    .timeline-dot.current i {
      color: #00f5ff;
    }

    .timeline-card {
      background: rgba(15, 15, 30, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 245, 255, 0.15);
      border-radius: 16px;
      padding: 28px;
      width: 100%;
      transition: all 0.3s ease;
    }

    .timeline-card:hover {
      border-color: rgba(0, 245, 255, 0.4);
      box-shadow: 0 0 25px rgba(0, 245, 255, 0.1);
      transform: translateY(-4px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 14px;
      flex-wrap: wrap;
    }

    .role-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: #e8eaf0;
      margin-bottom: 6px;
    }

    .company {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #00f5ff;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .company i {
      font-size: 0.8rem;
    }

    .period-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #606880;
      font-size: 0.8rem;
      font-family: 'JetBrains Mono', monospace;
      white-space: nowrap;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .period-badge i {
      color: #b44fff;
    }

    .current-badge {
      background: linear-gradient(135deg, #00f5ff, #b44fff);
      color: #0a0a0f;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 10px;
      font-family: 'Inter', sans-serif;
    }

    .description {
      color: #a0a8c0;
      font-size: 0.9rem;
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    @media (max-width: 768px) {
      .timeline::before {
        left: 20px;
      }

      .timeline-item {
        padding-right: 0;
        padding-left: 64px;
        justify-content: flex-start;
      }

      .timeline-item.right {
        padding-left: 64px;
      }

      .timeline-dot {
        left: 20px;
        width: 36px;
        height: 36px;
      }

      .card-header {
        flex-direction: column;
      }

      .period-badge {
        justify-content: flex-start;
      }
    }
  `]
})
export class ExperienceComponent {
  roles = Array(6).fill(null);

  private tagsSets: string[][] = [
    ['Java', 'Spring Boot', 'LLMs', 'MCP', 'API Management', 'Microservices'],
    ['Angular', 'Java', 'Spring Boot', 'Jenkins', 'CI/CD', 'SAFe'],
    ['Java', 'Spring Boot', 'REST API', 'PostgreSQL'],
    ['Java EE', 'Angular', 'Banking', 'REST', 'Oracle'],
    ['Java EE', 'Angular', 'TypeScript', 'Spring', 'Agile'],
    ['Java', 'Spring', 'ForeWriter', 'Insurance Tech', 'Scor']
  ];

  getTagsArray(index: number): string[] {
    return this.tagsSets[index] || [];
  }
}
