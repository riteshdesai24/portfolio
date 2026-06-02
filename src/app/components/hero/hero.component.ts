import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero grid-bg">
      <!-- Ambient blobs -->
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>

      <!-- Particle dots -->
      <div class="particles">
        <div class="particle" *ngFor="let p of particles" [style.left.%]="p.x" [style.top.%]="p.y" [style.animation-delay.s]="p.delay" [style.width.px]="p.size" [style.height.px]="p.size"></div>
      </div>

      <div class="container hero-content">
        <div class="hero-badge animate-fade-up">
          <span class="dot"></span>
          Available for new opportunities
        </div>

        <h1 class="hero-name animate-fade-up delay-100">
          <span class="line-1">RITESH</span>
          <span class="line-2">DESAI<span class="dot-accent">.</span></span>
        </h1>

        <div class="hero-title animate-fade-up delay-200">
          <span class="title-prefix">// </span>
          <span class="typing-text">{{ displayText }}<span class="cursor" [class.blink]="cursorBlink">|</span></span>
        </div>

        <p class="hero-desc animate-fade-up delay-300">
          Senior Software Developer crafting scalable web & mobile experiences with
          <span class="accent">Angular</span>, <span class="accent">Ionic</span> & <span class="accent">ReactJS</span>.
          Based in <span class="accent2">Mumbai, India</span>.
        </p>

        <div class="hero-stats animate-fade-up delay-400">
          <div class="stat">
            <span class="stat-num">7+</span>
            <span class="stat-label">Years Exp</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">4</span>
            <span class="stat-label">Companies</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">10+</span>
            <span class="stat-label">Projects</span>
          </div>
        </div>

        <div class="hero-actions animate-fade-up delay-500">
          <a href="#projects" class="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            View Work
          </a>
          <a href="#contact" class="btn-outline">Get In Touch</a>
        </div>

        <div class="tech-stack animate-fade-up delay-600">
          <span class="stack-label">Tech Stack</span>
          <div class="stack-tags">
            <span class="tag" *ngFor="let tech of techStack">{{ tech }}</span>
          </div>
        </div>
      </div>

      <div class="hero-graphic animate-fade-up delay-300">
        <div class="code-window">
          <div class="window-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="file-name">ritesh.ts</span>
          </div>
          <div class="code-body">
            <div class="code-line"><span class="kw">const</span> developer = &#123;</div>
            <div class="code-line">&nbsp;&nbsp;<span class="key">name</span>: <span class="str">'Ritesh Desai'</span>,</div>
            <div class="code-line">&nbsp;&nbsp;<span class="key">role</span>: <span class="str">'Senior Dev'</span>,</div>
            <div class="code-line">&nbsp;&nbsp;<span class="key">skills</span>: [</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'Angular'</span>,</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'Ionic'</span>,</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'ReactJS'</span>,</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'NodeJS'</span></div>
            <div class="code-line">&nbsp;&nbsp;],</div>
            <div class="code-line">&nbsp;&nbsp;<span class="key">location</span>: <span class="str">'Mumbai 🇮🇳'</span>,</div>
            <div class="code-line">&nbsp;&nbsp;<span class="key">open</span>: <span class="bool">true</span></div>
            <div class="code-line">&#125;;</div>
          </div>
        </div>

        <div class="floating-tags">
          <div class="ftag ftag-1">Angular 17+</div>
          <div class="ftag ftag-2">TypeScript</div>
          <div class="ftag ftag-3">CI/CD</div>
        </div>
      </div>

      <div class="scroll-indicator">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 6rem 0 4rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      width: 100%;
    }

    /* Blobs */
    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
      z-index: 0;
    }

    .blob-1 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(0,212,184,0.12) 0%, transparent 70%);
      top: -100px;
      left: -100px;
    }

    .blob-2 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(79,142,247,0.1) 0%, transparent 70%);
      bottom: 0;
      right: 0;
    }

    .blob-3 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(0,212,184,0.06) 0%, transparent 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* Particles */
    .particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
    .particle {
      position: absolute;
      background: var(--accent);
      border-radius: 50%;
      opacity: 0.4;
      animation: float 4s ease-in-out infinite;
    }

    /* Hero content */
    .hero-content { position: relative; z-index: 1; }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.9rem;
      background: rgba(0, 212, 184, 0.08);
      border: 1px solid rgba(0, 212, 184, 0.25);
      border-radius: 20px;
      font-size: 0.78rem;
      color: var(--accent);
      font-family: var(--font-mono);
      margin-bottom: 1.5rem;
      opacity: 0;

      .dot {
        width: 7px;
        height: 7px;
        background: var(--accent);
        border-radius: 50%;
        animation: pulse-glow 2s infinite;
        box-shadow: 0 0 6px var(--accent);
      }
    }

    .hero-name {
      margin-bottom: 1rem;
      opacity: 0;
    }

    .line-1, .line-2 {
      display: block;
      font-family: var(--font-display);
      font-weight: 800;
      line-height: 1;
    }

    .line-1 {
      font-size: clamp(3.5rem, 8vw, 6.5rem);
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }

    .line-2 {
      font-size: clamp(3.5rem, 8vw, 6.5rem);
      color: var(--accent);
      letter-spacing: -0.02em;
    }

    .dot-accent {
      color: var(--accent2);
    }

    .hero-title {
      font-family: var(--font-mono);
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      opacity: 0;

      .title-prefix { color: var(--accent2); }
      .typing-text { color: var(--text-primary); }
      .cursor { color: var(--accent); }
      .cursor.blink { animation: blink 1s step-end infinite; }
    }

    .hero-desc {
      color: var(--text-secondary);
      font-size: 1rem;
      line-height: 1.7;
      max-width: 500px;
      margin-bottom: 2rem;
      opacity: 0;
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0;
    }

    .stat {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }

    .stat-num {
      font-family: var(--font-display);
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--accent);
      line-height: 1;
    }

    .stat-label {
      font-size: 0.72rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-family: var(--font-mono);
    }

    .stat-divider {
      width: 1px;
      height: 35px;
      background: var(--border);
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 2.5rem;
      opacity: 0;
    }

    .tech-stack {
      opacity: 0;
    }

    .stack-label {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      display: block;
      margin-bottom: 0.75rem;
    }

    .stack-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    /* Code window */
    .hero-graphic {
      position: relative;
      z-index: 1;
      opacity: 0;
    }

    .code-window {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 212, 184, 0.08);
      animation: float 6s ease-in-out infinite;
    }

    .window-header {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.75rem 1rem;
      background: rgba(255,255,255,0.02);
      border-bottom: 1px solid var(--border);

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        &.red { background: #ff5f56; }
        &.yellow { background: #ffbd2e; }
        &.green { background: #27c93f; }
      }

      .file-name {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-muted);
        margin-left: auto;
      }
    }

    .code-body {
      padding: 1.25rem;
    }

    .code-line {
      font-family: var(--font-mono);
      font-size: 0.82rem;
      line-height: 1.8;
      color: var(--text-secondary);

      .kw { color: #c792ea; }
      .key { color: #82aaff; }
      .str { color: #c3e88d; }
      .bool { color: #f78c6c; }
    }

    /* Floating tags */
    .floating-tags {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
    }

    .ftag {
      position: absolute;
      padding: 0.4rem 0.8rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 8px;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--accent);
      white-space: nowrap;
      animation: float 5s ease-in-out infinite;
    }

    .ftag-1 {
      top: -10px;
      right: -20px;
      animation-delay: -1s;
      border-color: var(--border-accent);
    }

    .ftag-2 {
      bottom: 20%;
      right: -25px;
      animation-delay: -2s;
      color: var(--accent2);
    }

    .ftag-3 {
      bottom: -10px;
      left: 20%;
      animation-delay: -3s;
    }

    /* Scroll indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.4;

      span {
        font-family: var(--font-mono);
        font-size: 0.65rem;
        letter-spacing: 0.2em;
        color: var(--text-muted);
        text-transform: uppercase;
      }

      .scroll-line {
        width: 1px;
        height: 40px;
        background: linear-gradient(to bottom, var(--accent), transparent);
        animation: float 2s ease-in-out infinite;
      }
    }

    /* Animate on init */
    .animate-fade-up {
      animation: fadeInUp 0.8s ease forwards;
    }

    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
    .delay-600 { animation-delay: 0.6s; }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 6px var(--accent); }
      50% { box-shadow: 0 0 14px var(--accent); }
    }

    @media (max-width: 900px) {
      .container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .hero-graphic { order: -1; max-width: 400px; margin: 0 auto; }
      .ftag { display: none; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  particles: { x: number; y: number; delay: number; size: number }[] = [];
  displayText = '';
  cursorBlink = true;
  private typeInterval: any;
  private phrases = [
    'Senior Software Developer',
    'Angular Specialist',
    'Ionic Mobile Expert',
    'Distributed Systems Architect',
  ];
  private phraseIndex = 0;
  private charIndex = 0;
  private deleting = false;

  techStack = ['Angular', 'Ionic', 'ReactJS', 'NodeJS', 'TypeScript', 'MongoDB', 'CI/CD'];

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 3 + 1
      });
    }
    this.startTyping();
  }

  ngOnDestroy() {
    clearInterval(this.typeInterval);
  }

  startTyping() {
    this.typeInterval = setInterval(() => {
      const current = this.phrases[this.phraseIndex];
      if (!this.deleting) {
        this.displayText = current.substring(0, this.charIndex + 1);
        this.charIndex++;
        if (this.charIndex === current.length) {
          this.deleting = true;
          clearInterval(this.typeInterval);
          setTimeout(() => {
            this.deleting = true;
            this.typeInterval = setInterval(() => this.typeStep(), 50);
          }, 2000);
          return;
        }
      }
    }, 80);
  }

  typeStep() {
    const current = this.phrases[this.phraseIndex];
    if (this.deleting) {
      this.displayText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.deleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        clearInterval(this.typeInterval);
        this.startTyping();
      }
    }
  }
}
