import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgxParticlesModule],
  template: `
    <section class="hero" id="hero">
      <ngx-particles
        id="tsparticles"
        [options]="particlesOptions"
        [particlesInit]="particlesInit">
      </ngx-particles>

      <div class="hero-content">
        <div class="hero-text">
          <p class="greeting">{{ 'HERO.GREETING' | translate }}</p>
          <h1 class="hero-name">Ayoub RAFFASS</h1>
          <div class="hero-title-wrapper">
            <span class="cursor-line">
              <span class="hero-title">{{ displayedText }}</span>
              <span class="cursor" [class.blink]="!isTyping">|</span>
            </span>
          </div>
          <p class="hero-subtitle">{{ 'HERO.SUBTITLE' | translate }}</p>

          <div class="hero-cta">
            <a class="btn-primary" (click)="scrollService.scrollTo('contact')">
              <i class="fas fa-envelope"></i>
              {{ 'HERO.CTA_CONTACT' | translate }}
            </a>
            <a class="btn-outline" (click)="scrollService.scrollTo('experience')">
              <i class="fas fa-briefcase"></i>
              {{ 'HERO.CTA_WORK' | translate }}
            </a>
          </div>

          <div class="social-links">
            <a href="https://linkedin.com/in/ayoubraffass" target="_blank" rel="noopener" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ayoubraffass" target="_blank" rel="noopener" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="mailto:ayoubraffass@gmail.com" aria-label="Email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div class="scroll-indicator" (click)="scrollService.scrollTo('about')">
          <div class="scroll-line"></div>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: #0a0a0f;
    }

    ngx-particles {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      max-width: 900px;
      padding: 0 24px;
    }

    .greeting {
      font-family: 'JetBrains Mono', monospace;
      color: #00f5ff;
      font-size: 1rem;
      letter-spacing: 4px;
      text-transform: uppercase;
      opacity: 0.8;
      margin-bottom: 16px;
      animation: fadeInUp 0.6s ease both;
    }

    .hero-name {
      font-size: clamp(3rem, 7vw, 5.5rem);
      font-weight: 800;
      background: linear-gradient(135deg, #e8eaf0 0%, #00f5ff 50%, #b44fff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.1;
      margin-bottom: 16px;
      animation: fadeInUp 0.6s 0.2s ease both;
    }

    .hero-title-wrapper {
      min-height: 2.5rem;
      margin-bottom: 24px;
      animation: fadeInUp 0.6s 0.4s ease both;
    }

    .cursor-line {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(1.1rem, 2.5vw, 1.5rem);
      color: #a0a8c0;
    }

    .hero-title {
      color: #00f5ff;
    }

    .cursor {
      color: #00f5ff;
      font-weight: 100;
    }

    .cursor.blink {
      animation: blink-caret 0.75s step-end infinite;
    }

    .hero-subtitle {
      font-size: clamp(0.95rem, 1.8vw, 1.1rem);
      color: #a0a8c0;
      max-width: 620px;
      margin: 0 auto 40px;
      line-height: 1.7;
      animation: fadeInUp 0.6s 0.6s ease both;
    }

    .hero-cta {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
      animation: fadeInUp 0.6s 0.8s ease both;
    }

    .btn-primary, .btn-outline {
      cursor: pointer;
    }

    .social-links {
      display: flex;
      gap: 20px;
      justify-content: center;
      animation: fadeInUp 0.6s 1s ease both;
    }

    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border: 1px solid rgba(0, 245, 255, 0.3);
      border-radius: 50%;
      color: #a0a8c0;
      font-size: 1.1rem;
      transition: all 0.3s;
      text-decoration: none;
    }

    .social-links a:hover {
      color: #00f5ff;
      border-color: #00f5ff;
      box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
      transform: translateY(-3px);
    }

    .scroll-indicator {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      color: #606880;
      cursor: pointer;
      animation: fadeInUp 0.6s 1.2s ease both;
      transition: color 0.3s;
    }

    .scroll-indicator:hover {
      color: #00f5ff;
    }

    .scroll-line {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, transparent, #00f5ff);
      animation: float 2s ease-in-out infinite;
    }

    .scroll-indicator i {
      font-size: 0.8rem;
      animation: float 2s 0.5s ease-in-out infinite;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes blink-caret {
      from, to { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(8px); }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  scrollService = inject(ScrollService);

  displayedText = '';
  isTyping = true;
  private titles = ['Senior Software Engineer', 'Java & Spring Boot Expert', 'Angular Developer', 'Microservices Architect', 'AI/API Management Engineer'];
  private titleIndex = 0;
  private charIndex = 0;
  private typingTimeout: ReturnType<typeof setTimeout> | null = null;
  private deleting = false;

  particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  particlesOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' }
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
        push: { quantity: 2 }
      }
    },
    particles: {
      color: { value: ['#00f5ff', '#b44fff', '#ffffff'] },
      links: {
        color: '#00f5ff',
        distance: 150,
        enable: true,
        opacity: 0.08,
        width: 1
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: { default: 'bounce' as const },
        random: true,
        speed: 0.8,
        straight: false
      },
      number: { density: { enable: true, area: 900 }, value: 60 },
      opacity: { value: { min: 0.1, max: 0.4 } },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  };

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
  }

  private startTyping(): void {
    const currentTitle = this.titles[this.titleIndex];

    if (!this.deleting && this.charIndex <= currentTitle.length) {
      this.displayedText = currentTitle.substring(0, this.charIndex);
      this.isTyping = true;
      this.charIndex++;
      this.typingTimeout = setTimeout(() => this.startTyping(), 80);
    } else if (!this.deleting && this.charIndex > currentTitle.length) {
      this.isTyping = false;
      this.typingTimeout = setTimeout(() => {
        this.deleting = true;
        this.startTyping();
      }, 2000);
    } else if (this.deleting && this.charIndex > 0) {
      this.charIndex--;
      this.displayedText = currentTitle.substring(0, this.charIndex);
      this.isTyping = true;
      this.typingTimeout = setTimeout(() => this.startTyping(), 40);
    } else {
      this.deleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      this.charIndex = 0;
      this.typingTimeout = setTimeout(() => this.startTyping(), 300);
    }
  }
}
