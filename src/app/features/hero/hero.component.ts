import { Component, inject, signal, OnInit, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { Hero3dLogoComponent } from '../../shared/components/hero-3d-logo/hero-3d-logo.component';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Hero3dLogoComponent, RouterLink],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  readonly translationService = inject(TranslationService);
  private readonly platformId = inject(PLATFORM_ID);

  // Only initialize and render 3D WebGL on Desktop screens (>= 1024px) for peak mobile performance
  readonly isDesktop = signal<boolean>(false);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  private checkScreenSize(): void {
    this.isDesktop.set(window.innerWidth >= 1024);
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }
}
