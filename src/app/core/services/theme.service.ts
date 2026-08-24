import { Injectable, signal, computed, effect } from '@angular/core';
import { ThemeMode } from '../models/hunaix.models';

/**
 * Single Responsibility: Manages application theme mode (Light / Dark),
 * persistence in localStorage, and DOM attribute synchronization.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_STORAGE_KEY = 'hunaix_theme_mode';

  // Core Theme Signal
  readonly themeMode = signal<ThemeMode>(this.getInitialTheme());

  // Computed signals
  readonly isDark = computed(() => this.themeMode() === 'dark');
  readonly isLight = computed(() => this.themeMode() === 'light');

  constructor() {
    // Effect to synchronize theme changes with DOM and localStorage
    effect(() => {
      const mode = this.themeMode();
      this.applyThemeToDOM(mode);
    });
  }

  // Toggle between light and dark mode
  toggleTheme(): void {
    const nextMode: ThemeMode = this.themeMode() === 'light' ? 'dark' : 'light';
    this.setTheme(nextMode);
  }

  // Set explicit theme mode
  setTheme(mode: ThemeMode): void {
    this.themeMode.set(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.THEME_STORAGE_KEY, mode);
    }
  }

  private getInitialTheme(): ThemeMode {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(this.THEME_STORAGE_KEY) as ThemeMode;
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  }

  private applyThemeToDOM(mode: ThemeMode): void {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('data-theme', mode);
      if (mode === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }
}
