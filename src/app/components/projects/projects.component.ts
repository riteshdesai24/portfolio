import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-header">
          <div class="section-label">// Strategic Portfolio</div>
          <h2 class="section-title">Featured <span>Projects</span></h2>
          <p class="section-desc">A selection of real-world systems built across industries.</p>
        </div>

        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects; let i = index"
               [class.featured]="project.featured"
               [style.animation-delay.ms]="i * 100">
            <div class="project-header">
              <div class="project-icon">{{ project.icon }}</div>
              <span class="project-category">{{ project.category }}</span>
            </div>

            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-desc">{{ project.desc }}</p>

            <ul class="project-features">
              <li *ngFor="let feat of project.features">
                <span class="feat-dot">◆</span> {{ feat }}
              </li>
            </ul>

            <div class="project-footer">
              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
            </div>

            <div class="card-glow" *ngIf="project.featured"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects { padding: 6rem 0; }

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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.75rem;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;

      &:hover {
        border-color: var(--border-accent);
        transform: translateY(-4px);
        box-shadow: 0 16px 48px rgba(0, 212, 184, 0.08);

        .card-glow { opacity: 1; }
      }
    }

    .project-card.featured {
      border-color: rgba(0, 212, 184, 0.25);
      background: linear-gradient(135deg, var(--bg-card) 0%, rgba(0, 212, 184, 0.03) 100%);
    }

    .card-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at top left, rgba(0, 212, 184, 0.05), transparent 60%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .project-icon {
      font-size: 1.75rem;
    }

    .project-category {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      padding: 0.2rem 0.6rem;
      background: var(--accent2-dim);
      border: 1px solid rgba(79, 142, 247, 0.2);
      border-radius: 10px;
      color: var(--accent2);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .project-name {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.6rem;
    }

    .project-desc {
      color: var(--text-secondary);
      font-size: 0.875rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .project-features {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 1.25rem;

      li {
        display: flex;
        gap: 0.5rem;
        align-items: flex-start;
        font-size: 0.8rem;
        color: var(--text-secondary);
      }

      .feat-dot {
        color: var(--accent);
        font-size: 0.5rem;
        margin-top: 0.35rem;
        flex-shrink: 0;
      }
    }

    .project-footer {}

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .tag {
      padding: 0.2rem 0.6rem;
      background: var(--accent-dim);
      color: var(--accent);
      border: 1px solid var(--border-accent);
      border-radius: 10px;
      font-size: 0.68rem;
      font-family: var(--font-mono);
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      icon: '🚚',
      name: 'J5 System',
      category: 'Logistics',
      featured: true,
      desc: 'Enterprise freight management platform digitizing documentation and customs workflows for global shipments.',
      features: [
        'FedEx API integration for real-time tracking',
        'ICEGATE/EDI support for customs automation',
        'Multi-user document management',
      ],
      tags: ['Angular', 'Python Django', 'MySQL', 'FedEx API', 'EDI'],
    },
    {
      icon: '💍',
      name: 'Shaadi Proposal',
      category: 'Matrimonial',
      featured: true,
      desc: 'Full-featured matrimonial platform with document verification, community-based search, and private messaging.',
      features: [
        'Document-based identity verification',
        'Community-based profile search filters',
        'Private encrypted chat system',
      ],
      tags: ['Angular', 'Ionic', 'NodeJS', 'MongoDB'],
    },
    {
      icon: '🎓',
      name: 'EduEazy App',
      category: 'EdTech',
      featured: false,
      desc: 'Comprehensive learning platform with offline-first course access and community forums for self-paced learning.',
      features: [
        'Community forums & peer interaction',
        'Offline multimedia course playback',
        'Student analytics dashboard',
      ],
      tags: ['Ionic', 'Angular', 'REST APIs', 'Firebase'],
    },
    {
      icon: '❤️',
      name: 'Child Care Portal',
      category: 'NGO Tech',
      featured: false,
      desc: 'End-to-end system tracking child education and medical history with transparent donor fund allocation.',
      features: [
        'Role-based access control (RBAC)',
        'Medical & education history tracking',
        'Donor fund allocation transparency',
      ],
      tags: ['Angular', 'NodeJS', 'MongoDB', 'Secure Auth'],
    },
  ];
}
