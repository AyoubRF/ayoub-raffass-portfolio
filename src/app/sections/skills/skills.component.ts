import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { Skill, SkillCategory } from '../../shared/models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent],
  template: `
    <section class="skills" id="skills">
      <div class="container">
        <app-section-title titleKey="SKILLS.TITLE" number="03"></app-section-title>

        <!-- Filters -->
        <div class="filter-bar" data-aos="fade-up">
          @for (f of filters; track f.value) {
            <button
              class="filter-btn"
              [class.active]="activeFilter() === f.value"
              (click)="activeFilter.set(f.value)">
              {{ f.labelKey | translate }}
            </button>
          }
        </div>

        <!-- Skills Grid -->
        <div class="skills-grid" data-aos="fade-up" data-aos-delay="100">
          @for (skill of filteredSkills(); track skill.name) {
            <div class="skill-pill" [ngClass]="'category-' + skill.category">
              @if (skill.icon) {
                <i [class]="skill.icon"></i>
              }
              <span>{{ skill.name }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      background: #0f0f1e;
    }

    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      margin-bottom: 48px;
    }

    .filter-btn {
      padding: 8px 24px;
      background: transparent;
      border: 1px solid rgba(0, 245, 255, 0.2);
      border-radius: 50px;
      color: #a0a8c0;
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s;
    }

    .filter-btn:hover {
      border-color: rgba(0, 245, 255, 0.5);
      color: #00f5ff;
    }

    .filter-btn.active {
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(180, 79, 255, 0.15));
      border-color: #00f5ff;
      color: #00f5ff;
      box-shadow: 0 0 15px rgba(0, 245, 255, 0.2);
    }

    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      max-width: 900px;
      margin: 0 auto;
    }

    .skill-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 500;
      font-family: 'JetBrains Mono', monospace;
      transition: all 0.3s;
      border: 1px solid transparent;
      cursor: default;
    }

    .skill-pill i {
      font-size: 1rem;
    }

    .skill-pill:hover {
      transform: translateY(-3px);
    }

    .skill-pill.category-backend {
      background: rgba(0, 245, 255, 0.08);
      border-color: rgba(0, 245, 255, 0.25);
      color: #00f5ff;
    }

    .skill-pill.category-backend:hover {
      box-shadow: 0 0 20px rgba(0, 245, 255, 0.2);
    }

    .skill-pill.category-frontend {
      background: rgba(180, 79, 255, 0.08);
      border-color: rgba(180, 79, 255, 0.25);
      color: #b44fff;
    }

    .skill-pill.category-frontend:hover {
      box-shadow: 0 0 20px rgba(180, 79, 255, 0.2);
    }

    .skill-pill.category-devops {
      background: rgba(255, 0, 110, 0.08);
      border-color: rgba(255, 0, 110, 0.25);
      color: #ff006e;
    }

    .skill-pill.category-devops:hover {
      box-shadow: 0 0 20px rgba(255, 0, 110, 0.2);
    }

    .skill-pill.category-architecture {
      background: rgba(255, 200, 0, 0.08);
      border-color: rgba(255, 200, 0, 0.25);
      color: #ffc800;
    }

    .skill-pill.category-architecture:hover {
      box-shadow: 0 0 20px rgba(255, 200, 0, 0.2);
    }
  `]
})
export class SkillsComponent {
  activeFilter = signal<string>('all');

  filters = [
    { value: 'all', labelKey: 'SKILLS.FILTER_ALL' },
    { value: 'backend', labelKey: 'SKILLS.FILTER_BACKEND' },
    { value: 'frontend', labelKey: 'SKILLS.FILTER_FRONTEND' },
    { value: 'devops', labelKey: 'SKILLS.FILTER_DEVOPS' },
    { value: 'architecture', labelKey: 'SKILLS.FILTER_ARCHITECTURE' },
  ];

  allSkills: Skill[] = [
    // Backend
    { name: 'Java', category: 'backend', icon: 'fab fa-java' },
    { name: 'Spring Boot', category: 'backend', icon: 'fas fa-leaf' },
    { name: 'Spring Cloud', category: 'backend', icon: 'fas fa-cloud' },
    { name: 'Hibernate / JPA', category: 'backend', icon: 'fas fa-database' },
    { name: 'Kafka', category: 'backend', icon: 'fas fa-stream' },
    { name: 'REST APIs', category: 'backend', icon: 'fas fa-plug' },
    { name: 'GraphQL', category: 'backend', icon: 'fas fa-project-diagram' },
    { name: 'PostgreSQL', category: 'backend', icon: 'fas fa-database' },
    { name: 'Oracle DB', category: 'backend', icon: 'fas fa-database' },
    // Frontend
    { name: 'Angular', category: 'frontend', icon: 'fab fa-angular' },
    { name: 'TypeScript', category: 'frontend', icon: 'fas fa-code' },
    { name: 'RxJS', category: 'frontend', icon: 'fas fa-retweet' },
    { name: 'SCSS / CSS3', category: 'frontend', icon: 'fab fa-css3-alt' },
    { name: 'HTML5', category: 'frontend', icon: 'fab fa-html5' },
    // DevOps
    { name: 'Docker', category: 'devops', icon: 'fab fa-docker' },
    { name: 'Kubernetes', category: 'devops', icon: 'fas fa-dharmachakra' },
    { name: 'Jenkins', category: 'devops', icon: 'fas fa-cog' },
    { name: 'GitHub Actions', category: 'devops', icon: 'fab fa-github' },
    { name: 'CI/CD', category: 'devops', icon: 'fas fa-infinity' },
    { name: 'Linux', category: 'devops', icon: 'fab fa-linux' },
    // Architecture
    { name: 'Microservices', category: 'architecture', icon: 'fas fa-cubes' },
    { name: 'Event-Driven', category: 'architecture', icon: 'fas fa-bolt' },
    { name: 'MCP Protocol', category: 'architecture', icon: 'fas fa-network-wired' },
    { name: 'LLMs / AI', category: 'architecture', icon: 'fas fa-brain' },
    { name: 'API Management', category: 'architecture', icon: 'fas fa-sitemap' },
    { name: 'DDD', category: 'architecture', icon: 'fas fa-layer-group' },
  ];

  filteredSkills = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.allSkills;
    return this.allSkills.filter(s => s.category === f);
  });
}
