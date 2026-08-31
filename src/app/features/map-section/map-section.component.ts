import { Component, inject, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslationService } from '../../core/services/translation.service';

/**
 * Component responsible for managing location coordinates, generating secure Google Maps embed URLs
 * and direct links, and providing localized content representation for the application's map section.
 */
@Component({
  selector: 'app-map-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapSectionComponent {
  // Translation service injected to handle localization lookups and language state
  readonly translationService = inject(TranslationService);
  // DomSanitizer injected to bypass security checks for safe external map iframe resource URLs
  private readonly sanitizer = inject(DomSanitizer);

  // Signal storing the geographic Plus Code for precise map positioning
  readonly plusCode = signal('G5JC+3WF');
  // Signal storing the descriptive text location/address
  readonly cityLocation = signal('Al-Hamra\'a, Jeddah Saudi Arabia');

  // Computed signal generating a direct external link URL to Google Maps search
  readonly directMapLink = computed(() => 
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.plusCode() + ' ' + this.cityLocation())}`
  );

  // Computed signal generating and sanitizing the embedded Google Maps iframe URL with search query and zoom parameters
  readonly mapUrl = computed<SafeResourceUrl>(() => {
    const rawUrl = `https://maps.google.com/maps?q=${encodeURIComponent(this.plusCode() + ', ' + this.cityLocation())}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  });

  // Computed signal checking whether the active language direction is Arabic/RTL
  readonly isArabic = computed(() => this.translationService.isArabic());

  /**
   * Helper translation method retrieving localized text strings for the given translation key.
   */
  t(key: string): string {
    return this.translationService.translate(key);
  }
}