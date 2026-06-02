import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <div class="section-label">// Get In Touch</div>
          <h2 class="section-title">Let's <span>Connect</span></h2>
          <p class="section-desc">
            I'm currently open to new opportunities. Whether you have a project in mind or
            just want to say hi — my inbox is always open.
          </p>
        </div>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card" *ngFor="let info of contactInfo">
              <div class="info-icon">{{ info.icon }}</div>
              <div>
                <div class="info-label">{{ info.label }}</div>
                <a [href]="info.href" class="info-value">{{ info.value }}</a>
              </div>
            </div>

            <div class="availability">
              <div class="avail-dot"></div>
              <span>Available for <strong>full-time</strong> & <strong>freelance</strong> roles</span>
            </div>

            <div class="social-links">
              <div class="social-label">Connect online</div>
              <div class="socials">
                <a href="mailto:riteshdesai24@gmail.com" class="social-btn" title="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Email
                </a>
                <a href="#" class="social-btn" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
                <a href="#" class="social-btn" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <div class="form-card">
              <h3>Send a Message</h3>
              <div class="form-group">
                <label>Your Name</label>
                <input type="text" [(ngModel)]="formData.name" placeholder="John Doe" class="form-input">
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" [(ngModel)]="formData.email" placeholder="john@example.com" class="form-input">
              </div>
              <div class="form-group">
                <label>Subject</label>
                <input type="text" [(ngModel)]="formData.subject" placeholder="Job Opportunity / Collaboration" class="form-input">
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea [(ngModel)]="formData.message" placeholder="Tell me about your project..." class="form-textarea" rows="4"></textarea>
              </div>
              <button class="btn-primary submit-btn" (click)="sendMessage()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                {{ sending ? 'Sending...' : 'Send Message' }}
              </button>
              <div class="form-note" *ngIf="sent">
                ✅ Message sent! (This is a demo — please use the email link.)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact { padding: 6rem 0; }

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
      max-width: 500px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 3rem;
      align-items: start;
    }

    /* Info */
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .info-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.25rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--border-accent);
        transform: translateX(4px);
      }

      .info-icon { font-size: 1.25rem; }
      .info-label { font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; }
      .info-value { font-size: 0.875rem; color: var(--text-primary); text-decoration: none; transition: color 0.2s; &:hover { color: var(--accent); } }
    }

    .availability {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.75rem 1.25rem;
      background: rgba(0, 212, 184, 0.06);
      border: 1px solid rgba(0, 212, 184, 0.2);
      border-radius: 10px;
      font-size: 0.85rem;
      color: var(--text-secondary);

      strong { color: var(--accent); }

      .avail-dot {
        width: 8px;
        height: 8px;
        background: var(--accent);
        border-radius: 50%;
        flex-shrink: 0;
        animation: pulse-ring 2s infinite;
        box-shadow: 0 0 6px var(--accent);
      }
    }

    @keyframes pulse-ring {
      0% { box-shadow: 0 0 0 0 rgba(0, 212, 184, 0.4); }
      70% { box-shadow: 0 0 0 6px rgba(0, 212, 184, 0); }
      100% { box-shadow: 0 0 0 0 rgba(0, 212, 184, 0); }
    }

    .social-label {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.6rem;
    }

    .socials {
      display: flex;
      gap: 0.75rem;
    }

    .social-btn {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.5rem 1rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text-secondary);
      font-size: 0.8rem;
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        border-color: var(--border-accent);
        color: var(--accent);
        background: var(--accent-dim);
      }
    }

    /* Form */
    .form-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 2rem;

      h3 {
        font-family: var(--font-display);
        font-size: 1.15rem;
        margin-bottom: 1.5rem;
        color: var(--text-primary);
      }
    }

    .form-group {
      margin-bottom: 1.25rem;

      label {
        display: block;
        font-size: 0.78rem;
        font-family: var(--font-mono);
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 0.4rem;
      }
    }

    .form-input, .form-textarea {
      width: 100%;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.7rem 0.9rem;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s ease;
      resize: vertical;

      &:focus {
        border-color: var(--accent);
        box-shadow: 0 0 0 2px rgba(0, 212, 184, 0.12);
      }

      &::placeholder {
        color: var(--text-muted);
      }
    }

    .submit-btn {
      width: 100%;
      justify-content: center;
      margin-top: 0.5rem;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.75rem;
      background: var(--accent);
      color: var(--bg-primary);
      border: none;
      border-radius: 8px;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: var(--white);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 212, 184, 0.3);
      }
    }

    .form-note {
      margin-top: 0.75rem;
      font-size: 0.8rem;
      color: var(--accent);
      font-family: var(--font-mono);
    }

    @media (max-width: 900px) {
      .contact-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent {
  formData = { name: '', email: '', subject: '', message: '' };
  sending = false;
  sent = false;

  contactInfo = [
    { icon: '📞', label: 'Phone', value: '+91 8692972118', href: 'tel:+918692972118' },
    { icon: '✉️', label: 'Email', value: 'riteshdesai24@gmail.com', href: 'mailto:riteshdesai24@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Mumbai, India', href: '#' },
  ];

  sendMessage() {
    this.sending = true;

    emailjs.send(
      'service_yd8tp5j',
      'template_k0x3jae',
      {
        from_name: this.formData.name,
        from_email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message
      },
      '9aethsjQHdSLRSQuP'
    ).then(() => {
      this.sending = false;
      this.sent = true;

      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }).catch(error => {
      this.sending = false;
      console.error(error);
    });
  }
}
