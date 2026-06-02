import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <div class="app-wrapper">
      <app-nav [scrolled]="scrolled"></app-nav>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-experience></app-experience>
        <app-projects></app-projects>
        <app-contact></app-contact>
      </main>
      <footer>
        <div class="container">
          <p class="footer-text">
            <span class="accent">Ritesh Rajendra Desai</span> · Crafted with Angular · Mumbai, India
          </p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .app-wrapper {
      min-height: 100vh;
    }

    footer {
      padding: 2rem 0;
      border-top: 1px solid var(--border);
      text-align: center;
    }

    .footer-text {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-muted);
    }
  `]
})
export class AppComponent implements OnInit {
  scrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  ngOnInit() {}
}
