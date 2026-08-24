import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { ProjectDetail, LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './project-detail-page.component.html'
})
export class ProjectDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);

  readonly project = signal<ProjectDetail | undefined>(undefined);
  readonly isDemoModalOpen = signal<boolean>(false);
  readonly isFormSubmitted = signal<boolean>(false);

  // Demo Form State
  demoForm = {
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    notes: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') || 'erp';
      const found = this.contentService.getProjectById(id);
      if (found) {
        this.project.set(found);
      } else {
        // Fallback to ERP if not found
        this.project.set(this.contentService.getProjectById('erp'));
      }
      this.isFormSubmitted.set(false);
    });
  }

  get otherProjects(): ProjectDetail[] {
    const currentId = this.project()?.id;
    return this.contentService.projectsCatalog.filter(p => p.id !== currentId).slice(0, 3);
  }

  openDemoModal(): void {
    this.isDemoModalOpen.set(true);
  }

  closeDemoModal(): void {
    this.isDemoModalOpen.set(false);
  }

  submitDemoRequest(e: Event): void {
    e.preventDefault();
    if (this.demoForm.fullName && this.demoForm.phone) {
      this.isFormSubmitted.set(true);
      setTimeout(() => {
        this.isDemoModalOpen.set(false);
      }, 2500);
    }
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }
}
