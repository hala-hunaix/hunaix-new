import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly themeService = inject(ThemeService);
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

    // Signal storing the geographic Plus Code for precise map positioning
  readonly plusCode = signal('G5JC+3WF');
  // Signal storing the descriptive text location/address
  readonly cityLocation = signal('Al-Hamra\'a, Jeddah Saudi Arabia');

  // Computed signal generating a direct external link URL to Google Maps search
  readonly directMapLink = computed(() => 
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.plusCode() + ' ' + this.cityLocation())}`
  );
}
