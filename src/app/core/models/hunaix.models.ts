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

export interface ProjectModule {
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
}

export interface ProjectDetail {
  id: string;
  name: string;
  badge: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  tagline: LocalizedString;
  category: string;
  categoryName: LocalizedString;
  image: string;
  previewImage?: string;
  color: string;
  gradient: string;
  overview: LocalizedString;
  keyFeatures: LocalizedString[];
  modules: ProjectModule[];
  impactStats: { label: LocalizedString; value: string }[];
  complianceBadge: LocalizedString;
}

export interface WhyUsPillar {
  id: number;
  badge: LocalizedString;
  title: LocalizedString;
  enSubTitle: string;
  description: LocalizedString;
  points: LocalizedString[];
  icon: string;
  color: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

export interface TeamMember {
  id: string;
  name: LocalizedString;
  designation: LocalizedString;
  department: LocalizedString;
  bio: LocalizedString;
  image: string;
  bgColor: string;
  accentColor: string;
  phone?: string;
  email?: string;
  linkedin?: string;
}

