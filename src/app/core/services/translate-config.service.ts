import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslateConfigService {
  currentLang = signal<string>('en');

  constructor(private translate: TranslateService) {
    const saved = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(saved);
    this.currentLang.set(saved);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  toggleLanguage(): void {
    const next = this.currentLang() === 'en' ? 'fr' : 'en';
    this.switchLanguage(next);
  }
}
