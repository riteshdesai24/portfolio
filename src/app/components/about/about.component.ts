import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-visual">
            <div class="avatar-wrapper">
              <div class="avatar-ring ring-1"></div>
              <div class="avatar-ring ring-2"></div>
              <div class="avatar-core">
                <div class="initials">RD</div>
              </div>
              <div class="orbit-dot dot-1"></div>
              <div class="orbit-dot dot-2"></div>
            </div>
            <div class="location-card">
              <span class="loc-icon">📍</span>
              <div>
                <div class="loc-city">Mumbai, India</div>
                <div class="loc-tz">IST (UTC+5:30)</div>
              </div>
            </div>
          </div>

          <div class="about-content">
            <div class="section-label">// About Me</div>
            <h2 class="section-title">
              Building the Web,<br>
              <span>One Component</span> at a Time.
            </h2>

            <p class="about-text">
              I'm a results-driven Software Developer with <strong>5+ years of experience</strong>
              crafting complex, scalable web and mobile applications. My expertise lies in the
              Angular and Ionic ecosystems, with strong secondary skills in ReactJS and Node.js.
            </p>

            <p class="about-text">
              I've architected distributed systems from the ground up, implemented enterprise-grade
              authentication frameworks, and built robust CI/CD pipelines that ship features faster.
              I care deeply about clean, maintainable code that scales.
            </p>

            <div class="highlights">
              <div class="highlight" *ngFor="let h of highlights">
                <span class="highlight-icon">{{ h.icon }}</span>
                <div>
                  <div class="highlight-title">{{ h.title }}</div>
                  <div class="highlight-desc">{{ h.desc }}</div>
                </div>
              </div>
            </div>

            <div class="languages">
              <span class="lang-label">Languages:</span>
              <span class="lang-tag" *ngFor="let lang of langs">{{ lang }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 6rem 0;
      position: relative;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 5rem;
      align-items: center;
    }

    /* Visual */
    .about-visual {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .avatar-wrapper {
      position: relative;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar-ring {
      position: absolute;
      border-radius: 50%;
      border: 1px solid transparent;
      animation: spin-slow 10s linear infinite;
    }

    .ring-1 {
      width: 190px;
      height: 190px;
      border-color: rgba(0, 212, 184, 0.3);
      border-top-color: var(--accent);
    }

    .ring-2 {
      width: 220px;
      height: 220px;
      border-color: rgba(79, 142, 247, 0.15);
      border-bottom-color: var(--accent2);
      animation-direction: reverse;
      animation-duration: 15s;
    }

    .avatar-core {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%);
      border: 2px solid var(--border-accent);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 40px rgba(0, 212, 184, 0.15);
      z-index: 1;
    }

    .initials {
      font-family: var(--font-display);
      font-size: 3rem;
      font-weight: 800;
      color: var(--accent);
    }

    .orbit-dot {
      position: absolute;
      width: 10px;
      height: 10px;
      background: var(--accent);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--accent);
    }

    .dot-1 {
      animation: orbit 8s linear infinite;
      top: 50%;
      left: 50%;
      transform-origin: -95px 0;
    }

    .dot-2 {
      animation: orbit 12s linear infinite reverse;
      top: 50%;
      left: 50%;
      transform-origin: -110px 0;
      background: var(--accent2);
      box-shadow: 0 0 10px var(--accent2);
      width: 7px;
      height: 7px;
    }

    @keyframes orbit {
      from { transform: rotate(0deg) translateX(95px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(95px) rotate(-360deg); }
    }

    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .location-card {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.75rem 1.25rem;

      .loc-icon { font-size: 1.25rem; }
      .loc-city { font-weight: 600; color: var(--text-primary); font-size: 0.9rem; }
      .loc-tz { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); }
    }

    /* Content */
    .section-label {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--accent);
      letter-spacing: 0.15em;
      margin-bottom: 0.75rem;
    }

    .section-title {
      font-family: var(--font-display);
      font-size: clamp(1.75rem, 3vw, 2.5rem);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 1.5rem;

      span { color: var(--accent); }
    }

    .about-text {
      color: var(--text-secondary);
      line-height: 1.75;
      margin-bottom: 1rem;
      font-size: 0.95rem;

      strong { color: var(--text-primary); }
    }

    .highlights {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1.75rem 0;
    }

    .highlight {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.75rem 1rem;
      background: var(--bg-card);
      border-left: 2px solid var(--accent);
      border-radius: 0 8px 8px 0;

      .highlight-icon { font-size: 1.25rem; margin-top: 0.1rem; }
      .highlight-title { font-weight: 600; color: var(--text-primary); font-size: 0.9rem; }
      .highlight-desc { font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.1rem; }
    }

    .languages {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;

      .lang-label {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-muted);
      }

      .lang-tag {
        padding: 0.2rem 0.65rem;
        background: var(--accent2-dim);
        border: 1px solid rgba(79, 142, 247, 0.25);
        border-radius: 12px;
        font-size: 0.75rem;
        color: var(--accent2);
        font-family: var(--font-mono);
      }
    }

    @media (max-width: 900px) {
      .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
      .about-visual { flex-direction: row; justify-content: flex-start; }
    }

    @media (max-width: 600px) {
      .about-visual { flex-direction: column; }
    }
  `]
})
export class AboutComponent {
  highlights = [
    { icon: '🏗️', title: 'Distributed Systems Architect', desc: 'Designed high-availability systems for concurrent enterprise users' },
    { icon: '📱', title: 'Mobile-First Developer', desc: 'Built Ionic apps for logistics, education & matrimonial platforms' },
    { icon: '⚡', title: 'Performance Optimizer', desc: 'Reduced dev time 30%+ via reusable Angular Material component libraries' },
  ];

  langs = ['Marathi', 'Hindi', 'English'];
}
