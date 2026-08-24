import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html'
})
export class SolutionsComponent {
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }
}
