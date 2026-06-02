import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillCategory {
  icon: string;
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills" #skillsSection>
      <div class="container">
        <div class="section-header">
          <div class="section-label">// Core Competencies</div>
          <h2 class="section-title">Technical <span>Arsenal</span></h2>
          <p class="section-desc">Technologies and tools I use to build world-class products.</p>
        </div>

        <div class="skills-grid">
          <div class="skill-category" *ngFor="let cat of skillCategories; let i = index"
               [style.animation-delay.ms]="i * 100">
            <div class="category-header">
              <span class="category-icon">{{ cat.icon }}</span>
              <h3>{{ cat.name }}</h3>
            </div>
            <div class="skill-list">
              <div class="skill-item" *ngFor="let skill of cat.skills">
                <div class="skill-meta">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-fill"
     [style.width.%]="animated ? skill.level : 0"
     style="background: linear-gradient(90deg, var(--accent), var(--accent2))">
</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tools-section">
          <div class="section-label" style="margin-bottom: 1.25rem;">// Also Worked With</div>
          <div class="tools-grid">
            <div class="tool-chip" *ngFor="let tool of tools">{{ tool }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  
  styles: [`
    .skills { padding: 6rem 0; }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-label {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--accent);
      letter-spacing: 0.15em;
      margin-bottom: 0.5rem;
    }

    .section-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      margin-bottom: 0.75rem;
      span { color: var(--accent); }
    }

    .section-desc {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .skill-category {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;

      &:hover {
        border-color: var(--border-accent);
        box-shadow: 0 8px 32px rgba(0, 212, 184, 0.06);
        transform: translateY(-2px);
      }
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.25rem;

      .category-icon { font-size: 1.25rem; }

      h3 {
        font-family: var(--font-display);
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--text-primary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    }

    .skill-list { display: flex; flex-direction: column; gap: 1rem; }

    .skill-item {}

    .skill-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.4rem;
    }

    .skill-name {
      font-size: 0.85rem;
      color: var(--text-secondary);
      font-family: var(--font-mono);
    }

    .skill-level {
      font-size: 0.72rem;
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .skill-bar {
      height: 3px;
      background: var(--border);
      border-radius: 2px;
      overflow: hidden;
    }

    .skill-fill {
      height: 100%;
      border-radius: 2px;
      transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Tools */
    .tools-section {
      margin-top: 1rem;
    }

    .tools-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
    }

    .tool-chip {
      padding: 0.35rem 0.85rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 20px;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-secondary);
      transition: all 0.2s ease;
      cursor: default;

      &:hover {
        border-color: var(--border-accent);
        color: var(--accent);
        background: var(--accent-dim);
      }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  animated = false;

  skillCategories = [
    {
      icon: '⚡',
      name: 'Frameworks',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'Ionic', level: 92 },
        { name: 'ReactJS', level: 50 },
      ]
    },
    {
      icon: '💻',
      name: 'Languages',
      skills: [
        { name: 'TypeScript', level: 93 },
        { name: 'JavaScript', level: 92 },
        { name: 'HTML5 / CSS3', level: 90 },
      ]
    },
    {
      icon: '🔧',
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Python / Django', level: 40 },
        { name: 'REST APIs', level: 75 },
      ]
    },
    {
      icon: '🗃️',
      name: 'Database',
      skills: [
        { name: 'MongoDB', level: 50 },
        { name: 'MySQL', level: 30 },
      ]
    },
    {
      icon: '🏛️',
      name: 'Architecture',
      skills: [
        { name: 'Microservices', level: 30 },
        { name: 'Distributed Systems', level: 30 },
        { name: 'CI/CD Pipelines', level: 80 },
      ]
    },
    {
      icon: '🎨',
      name: 'UI/Design',
      skills: [
        { name: 'Angular Material', level: 92 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Responsive Design', level: 88 },
      ]
    },
  ];

  tools = [
    'Git', 'Docker', 'JIRA', 'Postman', 'Webpack', 'NgRx',
    'RxJS', 'Jasmine', 'ICEGATE/EDI', 'FedEx API', 'Firebase', 'AWS'
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => this.animated = true, 200);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.skillsSection.nativeElement);
  }
}
