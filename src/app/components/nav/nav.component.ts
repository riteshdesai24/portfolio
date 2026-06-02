import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="scrolled">
      <div class="nav-inner">
        <a href="#home" class="logo">
          <span class="logo-box">RD</span>
          <span class="logo-name">Ritesh Desai</span>
        </a>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" class="nav-cta">Contact</a></li>
        </ul>
        <button class="menu-btn" (click)="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" [class.open]="menuOpen">
        <a href="#about" (click)="menuOpen=false">About</a>
        <a href="#skills" (click)="menuOpen=false">Skills</a>
        <a href="#experience" (click)="menuOpen=false">Experience</a>
        <a href="#projects" (click)="menuOpen=false">Projects</a>
        <a href="#contact" (click)="menuOpen=false">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1.25rem 0;
      transition: all 0.3s ease;
    }

    nav.scrolled {
      background: rgba(5, 10, 20, 0.92);
      backdrop-filter: blur(20px);
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--border);
    }

    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
    }

    .logo-box {
      width: 38px;
      height: 38px;
      background: var(--accent);
      color: var(--bg-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 0.9rem;
      border-radius: 8px;
    }

    .logo-name {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1rem;
      color: var(--text-primary);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;

      a {
        font-size: 0.875rem;
        color: var(--text-secondary);
        text-decoration: none;
        transition: color 0.2s ease;
        font-weight: 500;

        &:hover {
          color: var(--accent);
        }
      }
    }

    .nav-cta {
      padding: 0.5rem 1.25rem;
      background: var(--accent-dim) !important;
      border: 1px solid var(--border-accent);
      border-radius: 6px;
      color: var(--accent) !important;

      &:hover {
        background: var(--accent) !important;
        color: var(--bg-primary) !important;
      }
    }

    .menu-btn {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;

      span {
        width: 24px;
        height: 2px;
        background: var(--text-primary);
        border-radius: 2px;
        display: block;
        transition: all 0.3s ease;
      }
    }

    .mobile-menu {
      display: none;
      flex-direction: column;
      padding: 1rem 2rem;
      gap: 1rem;
      background: rgba(5, 10, 20, 0.98);
      border-top: 1px solid var(--border);

      a {
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 1rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border);

        &:hover { color: var(--accent); }
      }
    }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .menu-btn { display: flex; }
      .mobile-menu.open { display: flex; }
    }
  `]
})
export class NavComponent {
  @Input() scrolled = false;
  menuOpen = false;
}
