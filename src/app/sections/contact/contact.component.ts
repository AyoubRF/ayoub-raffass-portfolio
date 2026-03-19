import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, SectionTitleComponent],
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <app-section-title titleKey="CONTACT.TITLE" number="06"></app-section-title>

        <p class="contact-subtitle" data-aos="fade-up">{{ 'CONTACT.SUBTITLE' | translate }}</p>

        <div class="contact-grid" data-aos="fade-up" data-aos-delay="100">
          <!-- Form -->
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form glass-card">
            <div class="form-row">
              <div class="form-group">
                <label>{{ 'CONTACT.NAME_LABEL' | translate }}</label>
                <input type="text" formControlName="name" [placeholder]="'CONTACT.NAME_PLACEHOLDER' | translate" [class.error]="isFieldError('name')">
                @if (isFieldError('name')) {
                  <span class="field-error">Name is required</span>
                }
              </div>
              <div class="form-group">
                <label>{{ 'CONTACT.EMAIL_LABEL' | translate }}</label>
                <input type="email" formControlName="email" [placeholder]="'CONTACT.EMAIL_PLACEHOLDER' | translate" [class.error]="isFieldError('email')">
                @if (isFieldError('email')) {
                  <span class="field-error">Valid email is required</span>
                }
              </div>
            </div>

            <div class="form-group">
              <label>{{ 'CONTACT.SUBJECT_LABEL' | translate }}</label>
              <input type="text" formControlName="subject" [placeholder]="'CONTACT.SUBJECT_PLACEHOLDER' | translate">
            </div>

            <div class="form-group">
              <label>{{ 'CONTACT.MESSAGE_LABEL' | translate }}</label>
              <textarea formControlName="message" rows="5" [placeholder]="'CONTACT.MESSAGE_PLACEHOLDER' | translate" [class.error]="isFieldError('message')"></textarea>
              @if (isFieldError('message')) {
                <span class="field-error">Message is required</span>
              }
            </div>

            <button type="submit" class="btn-primary submit-btn" [disabled]="sending">
              @if (sending) {
                <i class="fas fa-spinner fa-spin"></i>
              } @else {
                <i class="fas fa-paper-plane"></i>
              }
              {{ 'CONTACT.SEND_BTN' | translate }}
            </button>

            @if (submitted && sent) {
              <div class="success-msg">
                <i class="fas fa-check-circle"></i>
                {{ 'CONTACT.SUCCESS' | translate }}
              </div>
            }
          </form>

          <!-- Social -->
          <div class="contact-info">
            <p class="or-label">{{ 'CONTACT.OR' | translate }}</p>

            <div class="social-cards">
              <a href="mailto:ayoubraffass@gmail.com" class="social-card">
                <div class="social-icon email">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <span class="social-label">Email</span>
                  <span class="social-value">ayoubraffass@gmail.com</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/ayoubraffass" target="_blank" class="social-card">
                <div class="social-icon linkedin">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div>
                  <span class="social-label">LinkedIn</span>
                  <span class="social-value">linkedin.com/in/ayoubraffass</span>
                </div>
              </a>

              <a href="https://github.com/ayoubraffass" target="_blank" class="social-card">
                <div class="social-icon github">
                  <i class="fab fa-github"></i>
                </div>
                <div>
                  <span class="social-label">GitHub</span>
                  <span class="social-value">github.com/ayoubraffass</span>
                </div>
              </a>

              <div class="location-card">
                <div class="social-icon location">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <span class="social-label">Location</span>
                  <span class="social-value">Roissy-en-France, Île-de-France, France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: #0a0a0f;
      padding-bottom: 80px;
    }

    .contact-subtitle {
      text-align: center;
      color: #a0a8c0;
      max-width: 550px;
      margin: -40px auto 48px;
      line-height: 1.7;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 40px;
      align-items: start;
      max-width: 1000px;
      margin: 0 auto;
    }

    .contact-form {
      background: rgba(15, 15, 30, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 245, 255, 0.15);
      border-radius: 16px;
      padding: 40px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 16px;
    }

    .form-group label {
      font-size: 0.85rem;
      color: #a0a8c0;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(0, 245, 255, 0.15);
      border-radius: 8px;
      padding: 12px 16px;
      color: #e8eaf0;
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      transition: all 0.3s;
      resize: vertical;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: #606880;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #00f5ff;
      box-shadow: 0 0 15px rgba(0, 245, 255, 0.1);
    }

    .form-group input.error,
    .form-group textarea.error {
      border-color: #ff006e;
    }

    .field-error {
      font-size: 0.75rem;
      color: #ff006e;
    }

    .submit-btn {
      width: 100%;
      justify-content: center;
      margin-top: 8px;
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .success-msg {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
      padding: 12px 16px;
      background: rgba(0, 245, 255, 0.1);
      border: 1px solid rgba(0, 245, 255, 0.3);
      border-radius: 8px;
      color: #00f5ff;
      font-size: 0.9rem;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .or-label {
      color: #606880;
      font-size: 0.85rem;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .social-cards {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .social-card,
    .location-card {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px;
      background: rgba(15, 15, 30, 0.6);
      border: 1px solid rgba(0, 245, 255, 0.1);
      border-radius: 12px;
      text-decoration: none;
      transition: all 0.3s;
    }

    .social-card:hover {
      border-color: rgba(0, 245, 255, 0.3);
      transform: translateX(4px);
    }

    .social-card div:last-child,
    .location-card div:last-child {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .social-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    .social-icon.email { background: rgba(0, 245, 255, 0.1); color: #00f5ff; }
    .social-icon.linkedin { background: rgba(0, 119, 181, 0.15); color: #0077b5; }
    .social-icon.github { background: rgba(255, 255, 255, 0.05); color: #e8eaf0; }
    .social-icon.location { background: rgba(255, 0, 110, 0.1); color: #ff006e; }

    .social-label {
      font-size: 0.75rem;
      color: #606880;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .social-value {
      font-size: 0.85rem;
      color: #a0a8c0;
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .contact-form {
        padding: 24px;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  sending = false;
  submitted = false;
  sent = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  isFieldError(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted));
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    const { name, email, subject, message } = this.contactForm.value;
    const mailtoLink = `mailto:ayoubraffass@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
    window.open(mailtoLink, '_blank');
    this.sent = true;
  }
}
