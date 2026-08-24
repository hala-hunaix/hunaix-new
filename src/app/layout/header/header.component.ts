import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  readonly isMobileMenuOpen = signal<boolean>(false);

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
