import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-banner.component.html'
})
export class CtaBannerComponent {
  readonly translationService = inject(TranslationService);

  t(key: string): string {
    return this.translationService.translate(key);
  }
}
