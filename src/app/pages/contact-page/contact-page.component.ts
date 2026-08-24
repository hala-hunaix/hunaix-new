import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent {
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  readonly isSubmitted = signal<boolean>(false);

  contactForm = {
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceInterest: 'erp',
    message: ''
  };

  submitForm(e: Event): void {
    e.preventDefault();
    if (this.contactForm.fullName && this.contactForm.phone) {
      this.isSubmitted.set(true);
    }
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }
}
