import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  template: `
    <div class="section-title-wrapper">
      <span class="section-number">{{ number }}</span>
      <h2 class="section-title">{{ titleKey | translate }}</h2>
      <div class="neon-divider"></div>
    </div>
  `,
  styles: [`
    .section-title-wrapper {
      text-align: center;
      margin-bottom: 60px;
    }
    .section-number {
      display: block;
      font-family: 'JetBrains Mono', monospace;
      color: #00f5ff;
      font-size: 0.9rem;
      opacity: 0.7;
      margin-bottom: 8px;
      letter-spacing: 2px;
    }
    .section-title {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700;
      background: linear-gradient(135deg, #e8eaf0, #00f5ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .neon-divider {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #00f5ff, #b44fff);
      border-radius: 2px;
      margin: 16px auto 0;
    }
  `]
})
export class SectionTitleComponent {
  @Input() titleKey = '';
  @Input() number = '01';
}
