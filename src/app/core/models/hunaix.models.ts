/**
 * ==========================================================================
 * HUNAIX CORE DATA MODELS & TYPES (Interface Segregation Principle)
 * ==========================================================================
 */

export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';
export type ThemeMode = 'light' | 'dark';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface NavMenuItem {
  id: string;
  label: LocalizedString;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  icon: string;
  tag: LocalizedString;
}

export interface TestimonialItem {
  id: number;
  quote: LocalizedString;
  name: LocalizedString;
  role: LocalizedString;
  company: LocalizedString;
  avatar: string;
  rating: number;
}

export interface CaseStudyItem {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  category: string;
  badge: LocalizedString;
  badgeBg: string;
  badgeColor: string;
  color: string;
  glowColor: string;
  icon: string;
  features: LocalizedString[];
}

export interface ExpertiseTag {
  id: string;
  name: LocalizedString;
}

export interface OfficeLocation {
  id: string;
  title: LocalizedString;
  phone: string;
  email: string;
  address: LocalizedString;
}

export interface StatItem {
  value: string;
  label: LocalizedString;
}

export interface FaqItem {
  id: number;
  question: LocalizedString;
  answer: LocalizedString;
}

export interface RoiModuleOption {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  icon: string;
  factor: number;
}

export interface MethodologyStep {
  id: number;
  stepNumber: string;
  title: LocalizedString;
  enSubTitle: string;
  description: LocalizedString;
  icon: string;
  color: string;
  bgPill: string;
}
