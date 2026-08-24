import { Component, inject, signal, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from './core/services/theme.service';
import { TranslationService } from './core/services/translation.service';

// Layout Components
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

// Feature Components
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { MethodologyComponent } from './features/methodology/methodology.component';
import { SolutionsComponent } from './features/solutions/solutions.component';
import { CalculatorComponent } from './features/calculator/calculator.component';
import { CtaBannerComponent } from './features/cta-banner/cta-banner.component';
import { FaqsComponent } from './features/faqs/faqs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    MethodologyComponent,
    SolutionsComponent,
    CalculatorComponent,
    CtaBannerComponent,
    FaqsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly themeService = inject(ThemeService);
  readonly translationService = inject(TranslationService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly showScrollTop = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || 0;
      this.showScrollTop.set(scrollPos > 300);
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
