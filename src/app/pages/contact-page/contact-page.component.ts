import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  DomSanitizer,
  SafeResourceUrl,
} from '@angular/platform-browser';

import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  private readonly sanitizer = inject(DomSanitizer);

  readonly isSubmitted = signal(false);

  contactForm = {
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceInterest: 'erp',
    message: '',
  };

  readonly plusCode = 'G5JC+3WF';

  readonly cityLocation =
    "Al-Hamra'a, Jeddah Saudi Arabia";

  readonly mapUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://maps.google.com/maps?q=${encodeURIComponent(
        `${this.plusCode}, ${this.cityLocation}`,
      )}&t=&z=15&ie=UTF8&iwloc=&output=embed`,
    );

  submitForm(event: Event): void {
    event.preventDefault();

    if (
      this.contactForm.fullName &&
      this.contactForm.phone
    ) {
      this.isSubmitted.set(true);
    }
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic()
      ? val.ar
      : val.en;
  }

  isArabic(): boolean {
    return this.translationService.isArabic();
  }
}