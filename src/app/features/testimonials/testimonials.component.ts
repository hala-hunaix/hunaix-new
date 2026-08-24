import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent {
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  readonly activeTestimonialIndex = signal<number>(0);

  readonly testimonialSliderTransform = computed<string>(() => {
    const idx = this.activeTestimonialIndex();
    const isRtl = this.translationService.isArabic();
    const percent = idx * 100;
    return isRtl ? `translateX(${percent}%)` : `translateX(-${percent}%)`;
  });

  setTestimonialIndex(idx: number): void {
    this.activeTestimonialIndex.set(idx);
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }
}
