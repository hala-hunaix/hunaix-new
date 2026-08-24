import { Routes } from '@angular/router';

// Page Components
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HUNAIX | Enterprise Intelligence Platform'
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: 'HUNAIX | من نحن - About Us'
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    title: 'HUNAIX | خدماتنا - Our Services'
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    title: 'HUNAIX | مشاريعنا ومنتجاتنا - Our Products'
  },
  {
    path: 'projects/:id',
    component: ProjectDetailPageComponent,
    title: 'HUNAIX | تفاصيل النظام - System Details'
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    title: 'HUNAIX | تواصل معنا - Contact Us'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
