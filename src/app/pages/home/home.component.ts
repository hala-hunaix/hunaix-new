import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Feature Components for Landing Flow
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { ServicesComponent } from '../../features/services/services.component';
import { MethodologyComponent } from '../../features/methodology/methodology.component';
import { SolutionsComponent } from '../../features/solutions/solutions.component';
import { CalculatorComponent } from '../../features/calculator/calculator.component';
import { FaqsComponent } from '../../features/faqs/faqs.component';
import { MapSectionComponent } from '../../features/map-section/map-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    MethodologyComponent,
    SolutionsComponent,
    CalculatorComponent,
    FaqsComponent,
    MapSectionComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
