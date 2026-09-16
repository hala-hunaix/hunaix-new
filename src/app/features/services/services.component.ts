import { Component, inject, signal, computed, OnInit, OnDestroy, HostListener, PLATFORM_ID } from '@angular/core';
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
  readonly itemsPerView = signal<number>(this.getInitialItemsPerView());

  private serviceIntervalId: any = null;
  private isCarouselHovered = false;

  // Touch gesture tracking for mobile and tablet
  private touchStartX = 0;
  private touchStartY = 0;
  private isSwiping = false;

  readonly maxServiceSteps = computed<number>(() => {
    const total = this.contentService.services.length;
    return Math.max(1, total - this.itemsPerView() + 1);
  });

  readonly serviceSliderTransform = computed<string>(() => {
    const idx = this.activeServiceIndex();
    const isRtl = this.translationService.isArabic();
    const stepPercent = 100 / this.itemsPerView();
    const percent = idx * stepPercent;
    return isRtl ? `translateX(${percent}%)` : `translateX(-${percent}%)`;
  });

  private getInitialItemsPerView(): number {
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(min-width: 1024px)').matches) return 3;
      if (window.matchMedia('(min-width: 768px)').matches) return 2;
      return 1;
    }
    return 3;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateItemsPerView();
  }

  private updateItemsPerView(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    let count = 1;
    if (window.matchMedia('(min-width: 1024px)').matches) {
      count = 3;
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      count = 2;
    } else {
      count = 1;
    }
    this.itemsPerView.set(count);
    const max = Math.max(1, this.contentService.services.length - count + 1);
    if (this.activeServiceIndex() >= max) {
      this.activeServiceIndex.set(max - 1);
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateItemsPerView();
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

  onTouchStart(e: TouchEvent): void {
    if (e.touches.length === 1) {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
      this.isSwiping = true;
      this.isCarouselHovered = true;
    }
  }

  onTouchEnd(e: TouchEvent): void {
    if (!this.isSwiping) return;
    this.isSwiping = false;
    this.isCarouselHovered = false;

    if (e.changedTouches.length === 1) {
      const deltaX = e.changedTouches[0].clientX - this.touchStartX;
      const deltaY = e.changedTouches[0].clientY - this.touchStartY;

      if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          this.nextService();
        } else {
          this.prevService();
        }
      }
    }
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
