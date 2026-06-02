import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience">
      <div class="container">
        <div class="section-header">
          <div class="section-label">// Career Journey</div>
          <h2 class="section-title">Professional <span>Experience</span></h2>
        </div>

        <div class="timeline">
          <div class="timeline-line"></div>

          <div class="timeline-item" *ngFor="let exp of experiences; let i = index"
               [class.current]="exp.current"
               [style.animation-delay.ms]="i * 150">
            <div class="timeline-dot" [class.pulse]="exp.current"></div>

            <div class="exp-card">
              <div class="exp-header">
                <div class="exp-title-block">
                  <h3 class="exp-title">{{ exp.title }}</h3>
                  <div class="exp-company">{{ exp.company }}</div>
                </div>
                <div class="exp-meta">
                  <span class="exp-period" [class.current-badge]="exp.current">
                    {{ exp.current ? '🟢 ' : '' }}{{ exp.period }}
                  </span>
                  <span class="exp-type">{{ exp.type }}</span>
                </div>
              </div>

              <ul class="exp-bullets">
                <li *ngFor="let bullet of exp.bullets">
                  <span class="bullet-arrow">▸</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>

              <div class="exp-tags">
                <span class="tag" *ngFor="let tag of exp.tags">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience { padding: 6rem 0; }

    .container {
      max-width: 900px;
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
      span { color: var(--accent); }
    }

    /* Timeline */
    .timeline {
      position: relative;
      padding-left: 2.5rem;
    }

    .timeline-line {
      position: absolute;
      left: 0.5rem;
      top: 0;
      bottom: 0;
      width: 1px;
      background: linear-gradient(to bottom, var(--accent), transparent);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
      animation: fadeInLeft 0.6s ease forwards;
      opacity: 0;
    }

    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .timeline-dot {
      position: absolute;
      left: -2.15rem;
      top: 1.5rem;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--border);
      border: 2px solid var(--border);
      z-index: 1;
    }

    .timeline-dot.pulse {
      background: var(--accent);
      border-color: var(--accent);
      box-shadow: 0 0 0 4px rgba(0, 212, 184, 0.2);
      animation: pulse-ring 2s infinite;
    }

    @keyframes pulse-ring {
      0% { box-shadow: 0 0 0 0 rgba(0, 212, 184, 0.4); }
      70% { box-shadow: 0 0 0 8px rgba(0, 212, 184, 0); }
      100% { box-shadow: 0 0 0 0 rgba(0, 212, 184, 0); }
    }

    .exp-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--border-accent);
        box-shadow: 0 8px 32px rgba(0, 212, 184, 0.06);
        transform: translateY(-2px);
      }
    }

    .timeline-item.current .exp-card {
      border-color: rgba(0, 212, 184, 0.3);
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }

    .exp-title {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.2rem;
    }

    .exp-company {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--accent);
    }

    .exp-meta {
      text-align: right;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      align-items: flex-end;
    }

    .exp-period {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .exp-period.current-badge {
      color: var(--accent);
    }

    .exp-type {
      font-size: 0.7rem;
      padding: 0.15rem 0.5rem;
      background: var(--accent2-dim);
      border-radius: 10px;
      color: var(--accent2);
      font-family: var(--font-mono);
    }

    .exp-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin-bottom: 1.25rem;

      li {
        display: flex;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: var(--text-secondary);
        line-height: 1.6;
      }

      .bullet-arrow {
        color: var(--accent);
        flex-shrink: 0;
        margin-top: 0.1rem;
      }
    }

    .exp-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .tag {
      display: inline-flex;
      padding: 0.2rem 0.6rem;
      background: var(--accent-dim);
      color: var(--accent);
      border: 1px solid var(--border-accent);
      border-radius: 12px;
      font-size: 0.7rem;
      font-family: var(--font-mono);
    }
  `]
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'SOFTWARE DEVELOPER',
      company: 'EchoFeel',
      period: '04/2025 – Present',
      type: 'Full-time',
      current: true,
      bullets: [
        'Translating sophisticated UI/UX designs into modular Angular and Ionic components with pixel-perfect precision and fluid performance.',
        "Utilizing Angular's HTTP client to architect secure asynchronous data flows and manage enterprise-grade request/response cycles.",
      ],
      tags: ['Angular', 'Ionic', 'TypeScript', 'HTTP Client'],
    },
    {
      title: 'SOFTWARE DEVELOPER',
      company: 'Jeena & Company',
      period: '01/2023 – 03/2025',
      type: 'Full-time',
      current: true,
      bullets: [
        'Engineered a high-availability distributed architecture optimizing modularity for concurrent enterprise-level users.',
        'Built a robust reusable Angular Material component library, accelerating future development speed by over 30%.',
        'Developed an Ionic application for real-time delivery tracking, optimizing field communication for driver fleets.',
        'Led design and implementation of new features, bug fixing, and unit testing to ensure mission-critical software quality.',
      ],
      tags: ['Angular', 'Ionic', 'Angular Material', 'Distributed Systems', 'Unit Testing'],
    },
    {
      title: 'SOFTWARE DEVELOPER',
      company: 'Softimize',
      period: '09/2021 – 12/2022',
      type: 'Full-time',
      current: true,
      bullets: [
        'Specialized in component-based development within the Angular framework to optimize long-term maintainability and codebase modularity.',
        'Spearheaded secure API integrations and responsive UI implementation for multi-user child-care and donor fund management systems.',
      ],
      tags: ['Angular', 'Secure APIs', 'Responsive UI', 'Component Architecture'],
    },
    {
      title: 'APP DEVELOPER',
      company: 'Indian Talent Olympiad',
      period: '08/2018 – 09/2019',
      type: 'Full-time',
      current: true,
      bullets: [
        'Designed and developed a school-wide Event Management App for streamlined registration and participant networking.',
        'Built an interactive Mock Exam App for students from Class 1 to 10, improving assessment accessibility via custom mobile interfaces.',
      ],
      tags: ['Mobile Development', 'Event Management', 'UX Design'],
    },
  ];
}
