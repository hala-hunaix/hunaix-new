import { Component, inject, signal, HostListener, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { TranslationService } from './core/services/translation.service';

// Layout Components
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ChatBotComponent } from './layout/chat-bot/presentation/chat-bot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ChatBotComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  readonly themeService = inject(ThemeService);
  readonly translationService = inject(TranslationService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  readonly showScrollTop = signal<boolean>(false);
  readonly isNavigating = signal<boolean>(false);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // 1. Smoothly fade out and remove the enterprise initial splash screen
      setTimeout(() => {
        const splash = document.getElementById('app-splash-screen');
        if (splash) {
          splash.classList.add('splash-fade-out');
          setTimeout(() => {
            splash.remove();
          }, 700);
        }
      }, 550);

      // 2. Track route navigation loading
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.isNavigating.set(true);
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          setTimeout(() => this.isNavigating.set(false), 200);
        }
      });
    }
  }

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
