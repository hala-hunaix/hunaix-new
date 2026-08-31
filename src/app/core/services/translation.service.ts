import { Injectable, signal, computed, effect } from '@angular/core';
import { Language, Direction, LocalizedString } from '../models/hunaix.models';

/**
 * Single Responsibility: Manages multi-language state (Arabic & English),
 * RTL/LTR document direction, translation dictionary, and reactive localized strings.
 */
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly LANG_STORAGE_KEY = 'hunaix_app_language';

  // Language Signal (default to Arabic since the profile is for KSA enterprise market)
  readonly language = signal<Language>(this.getInitialLanguage());

  // Computed signals
  readonly direction = computed<Direction>(() => (this.language() === 'ar' ? 'rtl' : 'ltr'));
  readonly isArabic = computed<boolean>(() => this.language() === 'ar');
  readonly isEnglish = computed<boolean>(() => this.language() === 'en');

  // Translation dictionary for static UI strings
  private readonly translations: Record<string, LocalizedString> = {
    // Brand & Header
    'brand.name': { en: 'HUNAIX', ar: 'هونيكس' },
    'brand.tagline': { en: 'Enterprise Intelligence Platform', ar: 'شريك أعمالك المتكامل لإدارة وتشغيل وتنمية الأعمال' },
    'nav.about': { en: 'Who We Are', ar: 'من نحن' },
    'nav.services': { en: 'Our Services', ar: 'خدماتنا' },
    'nav.methodology': { en: 'How We Work', ar: 'منهجية العمل' },
    'nav.solutions': { en: 'Digital Solutions', ar: 'حلولنا الرقمية' },
    'nav.calculator': { en: 'ROI Calculator', ar: 'حاسبة التوفير' },
    'nav.faqs': { en: 'FAQs', ar: 'الأسئلة الشائعة' },
    'nav.whyUs': { en: 'Why HUNAIX', ar: 'لماذا HUNAIX' },
    'nav.contact': { en: 'Contact Us', ar: 'تواصل معنا' },
    'header.getStarted': { en: 'Get Started', ar: 'ابدأ رحلتك معنا' },

    // Hero Section
    'hero.badge': { en: 'Integrated Business Solutions in Saudi Arabia', ar: 'شريك أعمالك المتكامل في المملكة العربية السعودية' },
    'hero.titleLine1': { en: 'Your Business.', ar: 'شريكك المتكامل' },
    'hero.titleLine2': { en: 'Fully Managed.', ar: 'لإدارة وتشغيل وتنمية الأعمال' },
    'hero.description': {
      en: 'In HUNAIX, we help modern enterprises manage and scale their operations through integrated solutions combining Government Services, Finance & Accounting, Technology Solutions, Digital Marketing, and Brand Identity.',
      ar: 'في HUNAIX نساعد الشركات على إدارة وتشغيل أعمالها من خلال حلول متكاملة تجمع بين الخدمات الحكومية، والإدارة المالية، والحلول التقنية، والتسويق، وبناء الهوية التجارية.'
    },
    'hero.btnInvite': { en: 'START YOUR JOURNEY', ar: 'تواصل معنا الآن' },
    'hero.btnExplore': { en: 'Explore All Services', ar: 'استكشف كافة الخدمات' },
    'hero.badgeOperations': { en: 'Enterprise Operations', ar: 'تشغيل متكامل للمنشآت' },
    'hero.badgeUptime': { en: '100% KSA Regulatory Compliance', ar: 'امتثال كامل للأنظمة السعودية' },
    'hero.badgeSync': { en: 'Active Hub', ar: 'شراكة مستمرة' },

    // About Us Section (Who We Are / Vision & Mission)
    'about.badge': { en: 'Who We Are', ar: 'من نحن' },
    'about.title': {
      en: 'We Believe Business Success Starts with a True Operational Partner',
      ar: 'نؤمن بأن نجاح الأعمال يبدأ بوجود شريك يفهم جميع جوانب التشغيل'
    },
    'about.description': {
      en: 'HUNAIX offers connected, synchronized services that boost efficiency, ensure compliance with Saudi regulations (ZATCA, GOSI, MISA, PDPL), and drive sustainable business growth.',
      ar: 'نقدم خدمات مترابطة تساعد على رفع الكفاءة، وتحقيق الامتثال الكامل، ودعم النمو المستدام لمنشأتك عبر باقة حلول تشغيلية وتنفيذية شاملة.'
    },
    'about.visionTitle': { en: 'Our Vision', ar: 'رؤيتنا' },
    'about.visionText': { en: 'To be the first-choice partner for business management, operations, and enterprise intelligence in KSA.', ar: 'أن نكون الشريك الأول لإدارة وتشغيل الأعمال في المملكة العربية السعودية.' },
    'about.missionTitle': { en: 'Our Mission', ar: 'رسالتنا' },
    'about.missionText': { en: 'Empowering enterprises to scale and thrive through integrated and smart operational solutions.', ar: 'تمكين الشركات من النمو عبر حلول تشغيل متكاملة وذكية.' },
    'about.valuesTitle': { en: 'Core Values', ar: 'قيمنا الجوهرية' },
    'about.valuesText': { en: 'Innovation • Quality • Transparency • Commitment', ar: 'الابتكار • الجودة • الشفافية • الالتزام' },

    'about.stat1Label': { en: 'Integrated Services', ar: 'خدمات متكاملة' },
    'about.stat2Label': { en: 'KSA Regulations Compliant', ar: 'امتثال للأنظمة' },
    'about.stat3Label': { en: 'Partner Enterprises', ar: 'شركة شريكة' },
    'about.subtext': {
      en: 'One single partner for all your enterprise needs, built to scale as your business grows.',
      ar: 'شريك واحد لجميع احتياجات أعمالك، حلول مترابطة تعمل بتناغم وتدعم توسعك المستمر.'
    },

    // Services Section
    'services.badge': { en: 'Our Services', ar: 'خدماتنا' },
    'services.subtitle': {
      en: 'A comprehensive suite of business services designed to cover all enterprise requirements, available independently or as an integrated operational ecosystem.',
      ar: 'نقدم مجموعة متكاملة من الخدمات المصممة لتغطية جميع احتياجات الشركات، مع إمكانية الحصول على كل خدمة بشكل مستقل أو ضمن منظومة تشغيل متكاملة.'
    },
    'services.readMore': { en: 'EXPLORE SERVICE', ar: 'تفاصيل الخدمة' },

    // How We Work / Methodology Section (From Official Profile)
    'expertise.badge': { en: 'OUR METHODOLOGY', ar: 'منهجية العمل' },
    'expertise.title': {
      en: 'OUR METHODOLOGY',
      ar: 'منهجية العمل'
    },
    'expertise.description': {
      en: 'We adopt a clear methodology that ensures efficient project execution, with continuous follow-up across all stages.',
      ar: 'نعتمد منهجية واضحة تضمن تنفيذ المشاريع بكفاءة، مع متابعة مستمرة في جميع المراحل.'
    },

    // Digital Solutions (Products from Page 14 of Profile)
    'cases.badge': { en: 'DIGITAL ENTERPRISE SUITE', ar: 'حلولنا الرقمية ' },
    'cases.title': { en: 'OUR DIGITAL SOLUTIONS', ar: 'حلولنا الرقمية' },
    'cases.mainTitle': { en: 'Advanced Digital Products Powering Enterprise Efficiency & Growth', ar: 'منتجات رقمية متقدمة تدعم كفاءة وتوسع أعمالك' },
    'cases.subtitle': {
      en: 'We developed a suite of digital products to help companies manage their operations, analyze their data, and automate their workflows efficiently, with the ability to customize each system according to the needs of each enterprise.',
      ar: 'طورنا مجموعة من المنتجات الرقمية لمساعدة الشركات على إدارة عملياتها، وتحليل بياناتها، وأتمتة أعمالها بكفاءة، مع إمكانية تخصيص كل نظام وفق احتياجات كل منشأة.'
    },
    'cases.all': { en: 'All Products', ar: 'جميع المنتجات' },
    'cases.erp': { en: 'HUNAIX ERP', ar: 'HUNAIX ERP' },
    'cases.analyzer': { en: 'HUNAIX ANALYZER', ar: 'HUNAIX ANALYZER' },
    'cases.automation': { en: 'HUNAIX AUTOMATION', ar: 'HUNAIX AUTOMATION' },
    'cases.auditor': { en: 'HUNAIX AUDITOR', ar: 'HUNAIX AUDITOR' },
    'cases.social': { en: 'HUNAIX SOCIAL', ar: 'HUNAIX SOCIAL' },
    'cases.exploreSuite': { en: 'DISCOVER SYSTEM', ar: 'استكشف النظام' },
    'cases.requestDemo': { en: 'Request Live Demo', ar: 'طلب تجربة النظام' },
    'cases.whyTitle': { en: 'Why Choose Our Solutions?', ar: 'لماذا حلولنا؟' },
    'cases.whyText': {
      en: 'Flexible, scalable systems that integrate seamlessly with your present and future business needs.',
      ar: 'أنظمة مرنة، قابلة للتطوير، وتتكامل مع احتياجات أعمالك الحالية والمستقبلية.'
    },
    'cases.whyPillar1': { en: 'Modular & Highly Scalable', ar: 'أنظمة مرنة وقابلة للتطوير المستمر' },
    'cases.whyPillar2': { en: 'Saudi Regulatory & ZATCA Compliant', ar: 'توافق كامل مع الأنظمة والفوترة السعودية' },
    'cases.whyPillar3': { en: 'Instant Cloud-Native Integration', ar: 'ربط وتكامل فوري مع أنشطة أعمالك' },

    // Testimonials / Why Work With Us
    'testimonials.title': { en: 'Why Work With Us?', ar: 'لماذا العمل مع HUNAIX؟' },
    'testimonials.subtitle': {
      en: 'What sets HUNAIX apart is our speed of execution, quality of deliverables, clear communication, and enduring long-term partnerships.',
      ar: 'ما يميزنا هو جمع جميع الخدمات تحت سقف واحد، وحلول تناسب جميع أحجام الشركات مع المتابعة المستمرة والالتزام بالأنظمة السعودية.'
    },

    // CTA Banner
    'cta.title': { en: "Let's Start Your Business Success Journey!", ar: 'لنبدأ معاً رحلة نجاح أعمالك!' },
    'cta.subtext': {
      en: 'At HUNAIX, our partnership does not end with project delivery; we build long-term alliances that empower your sustainable growth.',
      ar: 'في HUNAIX لا نقدم خدمة تنتهي بتسليم المشروع، بل نبني شراكات طويلة الأمد تساعد على النمو المستمر وتحقيق الأهداف بثقة.'
    },
    'cta.btn': { en: 'CONNECT WITH US', ar: 'تواصل معنا الآن' },

    // ROI & Cost Savings Calculator Section
    'roi.badge': { en: 'ROI & SAVINGS CALCULATOR', ar: 'محاكي توفير التكاليف وساعات العمل ' },
    'roi.title': { en: 'Calculate How Many SAR & Work Hours Your Enterprise Saves Annually', ar: 'احسب كم ريالاً وكم ساعة عمل ستوفرها منشأتك سنوياً' },
    'roi.subtitle': {
      en: 'Use the interactive sliders to set your team size and operational budget to calculate real-time financial savings and saved working hours.',
      ar: 'استخدم المزالق التفاعلية لتحديد حجم فريقك وميزانيتك التشغيلية لحساب الوفر المالي وساعات العمل الموفرة لحظياً.'
    },
    'roi.slider1Label': { en: '1. Team Size / Number of Employees:', ar: '1. حجم فريق العمل / عدد الموظفين:' },
    'roi.employees': { en: 'Employees', ar: 'موظف' },
    'roi.slider1Min': { en: '5 Employees', ar: '5 موظفين' },
    'roi.slider1Mid': { en: '75 Employees', ar: '75 موظف' },
    'roi.slider1Max': { en: '150+ Employees', ar: '+150 موظف' },

    'roi.slider2Label': { en: '2. Estimated Monthly Operational Budget:', ar: '2. الميزانية التشغيلية الشهرية التقديرية:' },
    'roi.sar': { en: 'SAR', ar: 'ر.س' },
    'roi.slider2Min': { en: '30,000 SAR', ar: '30,000 ر.س' },
    'roi.slider2Mid': { en: '300,000 SAR', ar: '300,000 ر.س' },
    'roi.slider2Max': { en: '+600,000 SAR', ar: '+600,000 ر.س' },

    'roi.step3Label': { en: '3. Select Required Operational Pillars for Your Enterprise:', ar: '3. اختر الأركان التشغيلية المطلوبة لمنشأتك:' },
    'roi.module1Title': { en: 'MISA & Government Licenses', ar: 'رخص MISA والحكومية' },
    'roi.module1Sub': { en: 'Governance & Setup', ar: 'حوكمة وتأسيس' },
    'roi.module2Title': { en: 'Finance & ZATCA', ar: 'المحاسبة و ZATCA' },
    'roi.module2Sub': { en: 'Ledgers & Phase 2', ar: 'دفاتر وفوترة 2' },
    'roi.module3Title': { en: 'Marketing & Growth', ar: 'التسويق وإدارة النمو' },
    'roi.module3Sub': { en: 'Campaigns & Acquisition', ar: 'حملات واكتساب' },
    'roi.module4Title': { en: 'HUNAIX ERP Suite', ar: 'نظام HUNAIX ERP' },
    'roi.module4Sub': { en: 'Systems & Automation', ar: 'أنظمة وأتمتة' },

    'roi.resultsBadge': { en: 'REAL-TIME CALCULATED', ar: 'REAL-TIME CALCULATED' },
    'roi.resultsTitle': { en: 'Estimated Annual Savings', ar: 'النتائج التقديرية الموفرة سنوياً' },
    'roi.savingsBox1Title': { en: 'Estimated Annual Financial Savings:', ar: 'التوفير المالي السنوي التقديري:' },
    'roi.savingsBox1Unit': { en: 'SAR / Annually', ar: 'ريال سعودي / سنوياً' },
    'roi.savingsBox1Note': { en: '* Compared to hiring multiple individual consultants and separate external agencies.', ar: '* مقارنة بتكاليف توظيف استشاريين متعددين ورواتب مكاتب خارجية منفصلة.' },
    'roi.savingsBox2Title': { en: 'Saved Executive Management Time:', ar: 'الوقت الموفر للإدارة التنفيذية:' },
    'roi.savingsBox2Unit': { en: 'Working Hours / Annually', ar: 'ساعة عمل / سنوياً' },
    'roi.ctaBtn': { en: 'Get Your Detailed Enterprise Savings Study for Free', ar: 'احصل على دراسة التوفير المفصلة لمنشأتك مجاناً' },

    // FAQ Section (Frequently Asked Questions)
    'faq.badge': { en: 'FAQS', ar: 'الأسئلة الشائعة (FAQS)' },
    'faq.title': { en: 'Answers to the Most Important Questions of Business Owners', ar: 'إجابات على أهم تساؤلات أصحاب الأعمال' },
    'faq.subtitle': {
      en: 'Clear, transparent answers to help you understand our services, compliance guarantees, and operational engagement models.',
      ar: 'إجابات واضحة وشفافة تساعدك على فهم خدماتنا، ضمانات الامتثال، ونموذج العمل المشترك لإدارة وتنمية أعمالك.'
    },

    // Footer
    'footer.description': {
      en: 'HUNAIX — Your integrated strategic partner for business management, operations, and enterprise development in the Kingdom of Saudi Arabia.',
      ar: 'HUNAIX — شريك أعمالك المتكامل لإدارة وتشغيل وتنمية الأعمال في المملكة العربية السعودية.'
    },
    'footer.servicesTitle': { en: 'Our Services', ar: 'خدماتنا' },
    'footer.officesTitle': { en: 'Contact', ar: 'تواصل معنا' },
    'footer.quickLinksTitle': { en: 'Quick Links', ar: 'روابط سريعة' },
    'footer.rights': { en: '© 2026 HUNAIX Business Solutions. All Rights Reserved.', ar: '© 2026 شركة HUNAIX لحلول وإدارة الأعمال. جميع الحقوق محفوظة.' },
    'footer.langSwitch': { en: 'العربية', ar: 'English' }
  };

  constructor() {
    // Synchronize language and text direction to HTML document
    effect(() => {
      const lang = this.language();
      const dir = this.direction();
      this.applyLanguageToDOM(lang, dir);
    });
  }

  // Toggle Language between English and Arabic
  toggleLanguage(): void {
    const nextLang: Language = this.language() === 'en' ? 'ar' : 'en';
    this.setLanguage(nextLang);
  }

  // Set explicit language
  setLanguage(lang: Language): void {
    this.language.set(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.LANG_STORAGE_KEY, lang);
    }
  }

  // Translate string key
  t(key: string): string {
    const entry = this.translations[key];
    if (!entry) return key;
    return entry[this.language()] || entry.ar || entry.en;
  }

  translate(key: string): string {
    return this.t(key);
  }

  // Localize dynamic object with en/ar fields
  localize(obj: LocalizedString): string {
    if (!obj) return '';
    return obj[this.language()] || obj.ar || obj.en;
  }

  private getInitialLanguage(): Language {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(this.LANG_STORAGE_KEY) as Language;
      if (saved === 'ar' || saved === 'en') {
        return saved;
      }
      if (navigator.language && navigator.language.startsWith('en')) {
        return 'en';
      }
    }
    return 'ar'; // Default to Arabic for Saudi enterprise profile
  }

  private applyLanguageToDOM(lang: Language, dir: Direction): void {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('lang', lang);
      root.setAttribute('dir', dir);
      if (dir === 'rtl') {
        root.classList.add('rtl');
      } else {
        root.classList.remove('rtl');
      }
    }
  }
}
