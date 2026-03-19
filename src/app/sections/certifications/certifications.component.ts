import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent],
  template: `
    <section class="certifications" id="certifications">
      <div class="container">
        <app-section-title titleKey="CERTIFICATIONS.TITLE" number="05"></app-section-title>

        <div class="certs-grid">
          @for (cert of certItems; track cert.index) {
            <div class="cert-card glass-card" data-aos="fade-up" [attr.data-aos-delay]="cert.index * 80">
              <div class="cert-badge">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="cert-info">
                <h3 class="cert-name">{{ ('CERTIFICATIONS.ITEMS.' + cert.index + '.NAME') | translate }}</h3>
                <p class="cert-issuer">
                  <i class="fas fa-award"></i>
                  {{ ('CERTIFICATIONS.ITEMS.' + cert.index + '.ISSUER') | translate }}
                </p>
                <span class="cert-year">{{ ('CERTIFICATIONS.ITEMS.' + cert.index + '.YEAR') | translate }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .certifications {
      background: #0f0f1e;
    }

    .certs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .cert-card {
      background: rgba(15, 15, 30, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(180, 79, 255, 0.15);
      border-radius: 16px;
      padding: 24px;
      display: flex;
      align-items: center;
      gap: 16px;
      transition: all 0.3s ease;
    }

    .cert-card:hover {
      border-color: rgba(180, 79, 255, 0.5);
      transform: translateY(-4px);
      box-shadow: 0 0 25px rgba(180, 79, 255, 0.1);
    }

    .cert-badge {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      background: rgba(180, 79, 255, 0.1);
      border: 1px solid rgba(180, 79, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .cert-badge i {
      color: #b44fff;
      font-size: 1.4rem;
    }

    .cert-info {
      flex: 1;
      min-width: 0;
    }

    .cert-name {
      font-size: 0.9rem;
      font-weight: 600;
      color: #e8eaf0;
      margin-bottom: 6px;
      line-height: 1.3;
    }

    .cert-issuer {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #a0a8c0;
      font-size: 0.8rem;
      margin-bottom: 6px;
    }

    .cert-issuer i {
      color: #b44fff;
      font-size: 0.75rem;
    }

    .cert-year {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: #606880;
    }
  `]
})
export class CertificationsComponent {
  certItems = [0, 1, 2, 3, 4].map(i => ({ index: i }));
}
