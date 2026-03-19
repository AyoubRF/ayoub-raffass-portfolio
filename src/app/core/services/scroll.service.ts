import { Injectable, signal } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  isScrolled = signal<boolean>(false);
  activeSection = signal<string>('hero');

  constructor() {
    fromEvent(window, 'scroll')
      .pipe(throttleTime(100))
      .subscribe(() => {
        this.isScrolled.set(window.scrollY > 80);
        this.detectActiveSection();
      });
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private detectActiveSection(): void {
    const sections = ['hero', 'about', 'experience', 'skills', 'education', 'certifications', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection.set(id);
          break;
        }
      }
    }
  }
}
