import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.component.html'
})
export class FaqsComponent {
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  readonly openFaqIndex = signal<number | null>(0);

  toggleFaq(index: number): void {
    if (this.openFaqIndex() === index) {
      this.openFaqIndex.set(null);
    } else {
      this.openFaqIndex.set(index);
    }
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex() === index;
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }
}
