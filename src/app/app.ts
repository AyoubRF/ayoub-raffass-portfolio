import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { EducationComponent } from './sections/education/education.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    CertificationsComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-skills></app-skills>
      <app-education></app-education>
      <app-certifications></app-certifications>
      <app-contact></app-contact>
    </main>
    <footer class="footer">
      <p>Designed & Built by <span class="neon-cyan">Ayoub RAFFASS</span></p>
      <p class="footer-sub">Angular 21 · TypeScript · SCSS</p>
    </footer>
  `,
  styles: [`
    main { display: block; }

    .footer {
      text-align: center;
      padding: 40px 24px;
      background: #0f0f1e;
      border-top: 1px solid rgba(0, 245, 255, 0.08);
      color: #606880;
      font-size: 0.85rem;
    }

    .footer .neon-cyan {
      color: #00f5ff;
      font-weight: 600;
    }

    .footer .footer-sub {
      margin-top: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      opacity: 0.5;
    }
  `]
})
export class App implements OnInit {
  ngOnInit(): void {}
}
