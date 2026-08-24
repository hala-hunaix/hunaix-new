import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
  readonly translationService = inject(TranslationService);

  readonly roiTeamSize = signal<number>(130);
  readonly roiMonthlyBudget = signal<number>(310000);
  readonly roiSelectedModules = signal<string[]>(['gov', 'finance', 'marketing', 'erp']);

  readonly roiSavingsPercentage = computed<number>(() => {
    const modulesCount = this.roiSelectedModules().length;
    if (modulesCount === 0) return 0;
    return Math.min(45, Math.round(10 + modulesCount * 7.5));
  });

  readonly roiAnnualFinancialSavings = computed<number>(() => {
    const budget = this.roiMonthlyBudget();
    const modulesCount = this.roiSelectedModules().length;
    if (modulesCount === 0) return 0;
    const factor = (modulesCount / 4) * 0.10677419;
    return Math.round((budget * 12) * factor / 100) * 100;
  });

  readonly roiAnnualHoursSaved = computed<number>(() => {
    const team = this.roiTeamSize();
    const modulesCount = this.roiSelectedModules().length;
    if (modulesCount === 0) return 0;
    const hoursPerEmployee = 23.846;
    return Math.round(team * hoursPerEmployee * (modulesCount / 4) / 10) * 10;
  });

  readonly roiWeeklyHoursSaved = computed<number>(() => {
    return Math.round(this.roiAnnualHoursSaved() / 52);
  });

  updateRoiTeamSize(event: Event): void {
    const value = +(event.target as HTMLInputElement).value;
    this.roiTeamSize.set(value);
  }

  updateRoiMonthlyBudget(event: Event): void {
    const value = +(event.target as HTMLInputElement).value;
    this.roiMonthlyBudget.set(value);
  }

  toggleRoiModule(moduleId: string): void {
    const current = this.roiSelectedModules();
    if (current.includes(moduleId)) {
      if (current.length > 1) {
        this.roiSelectedModules.set(current.filter(m => m !== moduleId));
      }
    } else {
      this.roiSelectedModules.set([...current, moduleId]);
    }
  }

  isRoiModuleSelected(moduleId: string): boolean {
    return this.roiSelectedModules().includes(moduleId);
  }

  formatNumber(val: number): string {
    return val.toLocaleString('en-US');
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }
}
