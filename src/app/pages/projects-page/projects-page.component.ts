import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { ProjectDetail, LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-page.component.html'
})
export class ProjectsPageComponent {
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  readonly activeCategory = signal<string>('all');

  readonly filteredProjects = computed<ProjectDetail[]>(() => {
    const cat = this.activeCategory();
    if (cat === 'all') {
      return this.contentService.projectsCatalog;
    }
    return this.contentService.projectsCatalog.filter(p => p.category === cat);
  });

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }
}
