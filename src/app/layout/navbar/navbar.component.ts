import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateConfigService } from '../../core/services/translate-config.service';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <nav class="navbar" [class.scrolled]="scrollService.isScrolled()">
      <div class="nav-container">
        <div class="nav-brand" (click)="scrollTo('hero')">
          <span class="brand-bracket">&lt;</span>
          <span class="brand-name">AR</span>
          <span class="brand-bracket">/&gt;</span>
        </div>

        <div class="nav-links" [class.open]="menuOpen">
          <a (click)="scrollTo('about')" [class.active]="scrollService.activeSection() === 'about'">{{ 'NAV.ABOUT' | translate }}</a>
          <a (click)="scrollTo('experience')" [class.active]="scrollService.activeSection() === 'experience'">{{ 'NAV.EXPERIENCE' | translate }}</a>
          <a (click)="scrollTo('skills')" [class.active]="scrollService.activeSection() === 'skills'">{{ 'NAV.SKILLS' | translate }}</a>
          <a (click)="scrollTo('education')" [class.active]="scrollService.activeSection() === 'education'">{{ 'NAV.EDUCATION' | translate }}</a>
          <a (click)="scrollTo('certifications')" [class.active]="scrollService.activeSection() === 'certifications'">{{ 'NAV.CERTIFICATIONS' | translate }}</a>
          <a (click)="scrollTo('contact')" [class.active]="scrollService.activeSection() === 'contact'">{{ 'NAV.CONTACT' | translate }}</a>

          <button class="lang-toggle" (click)="toggleLang()">
            {{ translateConfig.currentLang() === 'en' ? 'FR' : 'EN' }}
          </button>
        </div>

        <button class="hamburger" [class.open]="menuOpen" (click)="menuOpen = !menuOpen" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 20px 0;
      transition: all 0.3s ease;
      background: transparent;
    }

    .navbar.scrolled {
      background: rgba(10, 10, 15, 0.95);
      backdrop-filter: blur(20px);
      padding: 12px 0;
      box-shadow: 0 2px 30px rgba(0, 245, 255, 0.1);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-brand {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.4rem;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
    }

    .brand-bracket {
      color: #00f5ff;
    }

    .brand-name {
      color: #e8eaf0;
      margin: 0 2px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .nav-links a {
      color: #a0a8c0;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.3s;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #00f5ff;
      transition: width 0.3s;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #00f5ff;
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }

    .lang-toggle {
      background: transparent;
      border: 1px solid rgba(0, 245, 255, 0.4);
      color: #00f5ff;
      padding: 6px 14px;
      border-radius: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .lang-toggle:hover {
      background: rgba(0, 245, 255, 0.1);
      box-shadow: 0 0 15px rgba(0, 245, 255, 0.3);
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }

    .hamburger span {
      display: block;
      width: 24px;
      height: 2px;
      background: #e8eaf0;
      border-radius: 2px;
      transition: all 0.3s;
    }

    .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }

      .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(10, 10, 15, 0.98);
        backdrop-filter: blur(20px);
        padding: 24px;
        gap: 20px;
        border-bottom: 1px solid rgba(0, 245, 255, 0.15);
      }

      .nav-links.open {
        display: flex;
      }

      .nav-links a {
        font-size: 1rem;
        padding: 8px 0;
      }
    }
  `]
})
export class NavbarComponent {
  translateConfig = inject(TranslateConfigService);
  scrollService = inject(ScrollService);
  menuOpen = false;

  scrollTo(id: string): void {
    this.scrollService.scrollTo(id);
    this.menuOpen = false;
  }

  toggleLang(): void {
    this.translateConfig.toggleLanguage();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
