import { Component, inject, signal, computed, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { ContentService } from '../../core/services/content.service';
import { LocalizedString } from '../../core/models/hunaix.models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit, OnDestroy {
  readonly translationService = inject(TranslationService);
  readonly contentService = inject(ContentService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly activeServiceIndex = signal<number>(0);
  private serviceIntervalId: any = null;
  private isCarouselHovered = false;

  readonly maxServiceSteps = computed<number>(() => {
    const total = this.contentService.services.length;
    return Math.max(1, total - 2);
  });

  readonly serviceSliderTransform = computed<string>(() => {
    const idx = this.activeServiceIndex();
    const isRtl = this.translationService.isArabic();
    const percent = idx * 33.333333;
    return isRtl ? `translateX(${percent}%)` : `translateX(-${percent}%)`;
  });

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startServiceAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopServiceAutoPlay();
  }

  private startServiceAutoPlay(): void {
    this.serviceIntervalId = setInterval(() => {
      if (!this.isCarouselHovered) {
        this.nextService();
      }
    }, 4500);
  }

  private stopServiceAutoPlay(): void {
    if (this.serviceIntervalId) {
      clearInterval(this.serviceIntervalId);
      this.serviceIntervalId = null;
    }
  }

  onServiceCarouselMouseEnter(): void {
    this.isCarouselHovered = true;
  }

  onServiceCarouselMouseLeave(): void {
    this.isCarouselHovered = false;
  }

  nextService(): void {
    const maxSteps = this.maxServiceSteps();
    this.activeServiceIndex.update(idx => (idx + 1 >= maxSteps ? 0 : idx + 1));
  }

  prevService(): void {
    const maxSteps = this.maxServiceSteps();
    this.activeServiceIndex.update(idx => (idx - 1 < 0 ? maxSteps - 1 : idx - 1));
  }

  setServiceIndex(idx: number): void {
    this.activeServiceIndex.set(idx);
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }

  localize(val: LocalizedString): string {
    return this.translationService.isArabic() ? val.ar : val.en;
  }
}
