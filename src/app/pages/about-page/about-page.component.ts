import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { ThemeService } from '../../core/services/theme.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString, TeamMember } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent {
  readonly translationService = inject(TranslationService);
  readonly themeService = inject(ThemeService);
  readonly contentService = inject(ContentService);

  readonly selectedMemberIndex = signal<number>(0);

  readonly selectedMember = computed<TeamMember>(() => {
    const list = this.contentService.teamMembers;
    const idx = this.selectedMemberIndex();
    return list[idx] || list[0];
  });

  selectMember(index: number): void {
    this.selectedMemberIndex.set(index);
  }

  nextMember(): void {
    const list = this.contentService.teamMembers;
    this.selectedMemberIndex.update(idx => (idx + 1) % list.length);
  }

  prevMember(): void {
    const list = this.contentService.teamMembers;
    this.selectedMemberIndex.update(idx => (idx - 1 + list.length) % list.length);
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }

  get duplicatedLogos() {
    return [
      ...this.contentService.clientLogos,
      ...this.contentService.clientLogos,
      ...this.contentService.clientLogos
    ];
  }
}
