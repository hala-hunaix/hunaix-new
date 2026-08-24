import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methodology.component.html'
})
export class MethodologyComponent {
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  readonly activeStepId = signal<number>(1);

  selectStep(id: number): void {
    this.activeStepId.set(id);
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }
}
