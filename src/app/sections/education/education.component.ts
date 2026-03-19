import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent],
  template: `
    <section class="education" id="education">
      <div class="container">
        <app-section-title titleKey="EDUCATION.TITLE" number="04"></app-section-title>

        <div class="education-grid">
          @for (item of educationItems; track item.index) {
            <div class="edu-card glass-card" data-aos="fade-up" [attr.data-aos-delay]="item.index * 100">
              <div class="edu-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="edu-content">
                <span class="edu-period">{{ ('EDUCATION.ITEMS.' + item.index + '.PERIOD') | translate }}</span>
                <h3 class="edu-degree">{{ ('EDUCATION.ITEMS.' + item.index + '.DEGREE') | translate }}</h3>
                <p class="edu-school">
                  <i class="fas fa-university"></i>
                  {{ ('EDUCATION.ITEMS.' + item.index + '.SCHOOL') | translate }}
                </p>
                <p class="edu-description">{{ ('EDUCATION.ITEMS.' + item.index + '.DESCRIPTION') | translate }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education {
      background: #0a0a0f;
    }

    .education-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 28px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .edu-card {
      background: rgba(15, 15, 30, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 245, 255, 0.15);
      border-radius: 16px;
      padding: 32px;
      display: flex;
      gap: 20px;
      transition: all 0.3s ease;
    }

    .edu-card:hover {
      border-color: rgba(0, 245, 255, 0.4);
      transform: translateY(-4px);
      box-shadow: 0 0 25px rgba(0, 245, 255, 0.1);
    }

    .edu-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: rgba(0, 245, 255, 0.1);
      border: 1px solid rgba(0, 245, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .edu-icon i {
      color: #00f5ff;
      font-size: 1.2rem;
    }

    .edu-content {
      flex: 1;
    }

    .edu-period {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: #b44fff;
      letter-spacing: 1px;
    }

    .edu-degree {
      font-size: 1rem;
      font-weight: 700;
      color: #e8eaf0;
      margin: 6px 0 8px;
      line-height: 1.3;
    }

    .edu-school {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #00f5ff;
      font-size: 0.85rem;
      margin-bottom: 10px;
    }

    .edu-school i {
      font-size: 0.75rem;
    }

    .edu-description {
      font-size: 0.85rem;
      color: #606880;
      line-height: 1.6;
    }
  `]
})
export class EducationComponent {
  educationItems = [0, 1, 2].map(i => ({ index: i }));
}
