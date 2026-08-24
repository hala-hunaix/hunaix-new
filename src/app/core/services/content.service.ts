import { Injectable } from '@angular/core';
import {
  ServiceItem,
  TestimonialItem,
  CaseStudyItem,
  ExpertiseTag,
  OfficeLocation,
  NavMenuItem,
  FaqItem,
  RoiModuleOption,
  MethodologyStep
} from '../models/hunaix.models';

/**
 * Single Responsibility: Manages structured bilingual content data for all site modules,
 * accurately derived from the official HUNAIX Business Solutions Profile.
 */
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  readonly navMenu: NavMenuItem[] = [
    { id: 'about', label: { en: 'Who We Are', ar: 'من نحن' }, href: '#about' },
    { id: 'services', label: { en: 'Our Services', ar: 'خدماتنا' }, href: '#services' },
    { id: 'methodology', label: { en: 'How We Work', ar: 'كيف نعمل' }, href: '#methodology' },
    { id: 'solutions', label: { en: 'Digital Solutions', ar: 'حلولنا الرقمية' }, href: '#solutions' },
    { id: 'calculator', label: { en: 'ROI Calculator', ar: 'حاسبة التوفير' }, href: '#calculator' },
    { id: 'faqs', label: { en: 'FAQs', ar: 'الأسئلة الشائعة' }, href: '#faqs' },
    { id: 'contact', label: { en: 'Contact Us', ar: 'تواصل معنا' }, href: '#contact' }
  ];

  // 4 Main ROI Operational Modules
  readonly roiModules: RoiModuleOption[] = [
    {
      id: 'gov',
      title: { en: 'MISA & Government Licenses', ar: 'رخص MISA والحكومية' },
      subtitle: { en: 'Governance & Setup', ar: 'حوكمة وتأسيس' },
      icon: 'gov',
      factor: 0.10
    },
    {
      id: 'finance',
      title: { en: 'Finance & ZATCA', ar: 'المحاسبة و ZATCA' },
      subtitle: { en: 'Ledgers & Phase 2', ar: 'دفاتر وفوترة 2' },
      icon: 'finance',
      factor: 0.12
    },
    {
      id: 'marketing',
      title: { en: 'Marketing & Growth', ar: 'التسويق وإدارة النمو' },
      subtitle: { en: 'Campaigns & Acquisition', ar: 'حملات واكتساب' },
      icon: 'marketing',
      factor: 0.08
    },
    {
      id: 'erp',
      title: { en: 'HUNAIX ERP Suite', ar: 'نظام HUNAIX ERP' },
      subtitle: { en: 'Systems & Automation', ar: 'أنظمة وأتمتة' },
      icon: 'erp',
      factor: 0.10
    }
  ];

  // 4 Main Pillars & Focus Domains from the Profile
  readonly expertiseTags: ExpertiseTag[] = [
    { id: 'gov', name: { en: 'Government Services & MISA', ar: 'الخدمات الحكومية والاستثمار' } },
    { id: 'finance', name: { en: 'Finance, Tax & Accounting', ar: 'المحاسبة والإدارة المالية' } },
    { id: 'software', name: { en: 'Software & Mobile Apps', ar: 'تطوير البرمجيات والتطبيقات' } },
    { id: 'transformation', name: { en: 'Digital Transformation & Automation', ar: 'التحول الرقمي وأتمتة العمليات' } },
    { id: 'erp', name: { en: 'Custom ERP & CRM Systems', ar: 'أنظمة ERP و CRM المخصصة' } },
    { id: 'marketing', name: { en: 'Digital Marketing & Growth', ar: 'التسويق الرقمي وإدارة الحملات' } },
    { id: 'branding', name: { en: 'Brand Identity & UX/UI', ar: 'الهوية التجارية وتجربة المستخدم' } },
    { id: 'compliance', name: { en: 'ZATCA & PDPL Compliance', ar: 'الامتثال للأنظمة والفوترة' } },
    { id: 'saas', name: { en: 'SaaS & Enterprise Products', ar: 'استشارات المنتجات الرقمية' } }
  ];

  // 4 Methodology Steps from Official Profile (Our Methodology / منهجية العمل)
  readonly methodologySteps: MethodologyStep[] = [
    {
      id: 1,
      stepNumber: '01',
      title: { en: 'Discovery ', ar: 'الاكتشاف' },
      enSubTitle: 'DISCOVERY',
      description: {
        en: 'Understanding client needs and analyzing the current state.',
        ar: 'فهم احتياجات العميل وتحليل الوضع الحالي.'
      },
      icon: 'discovery',
      color: '#0F4FCD',
      bgPill: '#0F4FCD'
    },
    {
      id: 2,
      stepNumber: '02',
      title: { en: 'Planning', ar: 'التخطيط' },
      enSubTitle: 'PLANNING',
      description: {
        en: 'Developing a clear execution plan and timeline.',
        ar: 'وضع خطة تنفيذ واضحة وجدول زمني.'
      },
      icon: 'planning',
      color: '#156FFF',
      bgPill: '#156FFF'
    },
    {
      id: 3,
      stepNumber: '03',
      title: { en: 'Execution', ar: 'التنفيذ' },
      enSubTitle: 'EXECUTION',
      description: {
        en: 'Executing solutions according to industry best practices.',
        ar: 'تنفيذ الحلول وفق أفضل الممارسات.'
      },
      icon: 'execution',
      color: '#059669',
      bgPill: '#0F1B3B'
    },
    {
      id: 4,
      stepNumber: '04',
      title: { en: 'Growth & Support', ar: 'المتابعة والتطوير' },
      enSubTitle: 'GROWTH & SUPPORT',
      description: {
        en: 'Continuous support and performance enhancement as your business grows.',
        ar: 'الدعم المستمر وتحسين الأداء مع نمو أعمالك.'
      },
      icon: 'growth',
      color: '#691BCE',
      bgPill: '#0F1B3B'
    }
  ];

  // 6 Core Services from Pages 5 to 13 of the Profile
  readonly services: ServiceItem[] = [
    {
      id: 1,
      title: {
        en: 'Government Services & Compliance',
        ar: 'الخدمات الحكومية والامتثال'
      },
      description: {
        en: 'Managing all government procedures and compliance with Saudi regulations: foreign investment licenses (MISA), company incorporation, commercial registration, Qiwa, Muqeem, Absher Business, GOSI, and ZATCA electronic invoicing.',
        ar: 'ندير جميع الإجراءات الحكومية الخاصة بمنشأتك لضمان الامتثال للأنظمة السعودية واستمرار أعمالك: رخص الاستثمار الأجنبي (MISA)، تأسيس الشركات، السجل التجاري، منصات قوى، مقيم، GOSI، والفوترة الإلكترونية (ZATCA).'
      },
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      icon: 'gov',
      tag: { en: 'Foundation', ar: 'الأساس والامتثال' }
    },
    {
      id: 2,
      title: {
        en: 'Finance & Accounting',
        ar: 'المحاسبة والإدارة المالية'
      },
      description: {
        en: 'Comprehensive accounting and financial solutions: bookkeeping, journal entries, bank reconciliations, financial statements, tax returns, payroll, inventory oversight, internal controls, and precise executive reports.',
        ar: 'حلول محاسبية ومالية متكاملة تساعدك على تنظيم أعمالك، وتحسين الرقابة المالية: مسك الدفاتر، القيود اليومية، التسويات البنكية، القوائم المالية، الإقرارات الضريبية، الفوترة الإلكترونية، وإدارة الرواتب والموازنات.'
      },
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
      icon: 'finance',
      tag: { en: 'Operations', ar: 'التشغيل والمالية' }
    },
    {
      id: 3,
      title: {
        en: 'Software & Platform Development',
        ar: 'تطوير البرمجيات والأنظمة'
      },
      description: {
        en: 'Custom digital solutions engineered for your business needs: iOS & Android mobile applications, web platforms, customized enterprise systems (ERP - CRM - HR), e-commerce portals, and business requirements analysis (BRD).',
        ar: 'حلول تقنية مخصصة لاحتياجات أعمالك تساعد على أتمتة العمليات وتحسين الأداء: تطبيقات الهواتف الذكية، المواقع الإلكترونية، أنظمة إدارة الأعمال المخصصة (ERP - CRM - HR)، والمتاجر الإلكترونية مع تحليل متكامل للمتطلبات.'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      icon: 'software',
      tag: { en: 'Technology', ar: 'التطوير البرمجي' }
    },
    {
      id: 4,
      title: {
        en: 'Digital Transformation & Automation',
        ar: 'التحول الرقمي وأتمتة العمليات'
      },
      description: {
        en: 'Upgrading enterprise workflows to higher efficiency through workflow automation, system integrations, cloud infrastructure, business model & lean canvas design, and SaaS/Fintech product consulting.',
        ar: 'نساعد الشركات على تطوير عملياتها وتحويلها إلى بيئة رقمية أكثر كفاءة من خلال أتمتة الإجراءات، ربط وتكامل الأنظمة، الحلول السحابية، إعداد Lean Canvas، واستشارات منتجات الـ SaaS والـ Fintech المتطورة.'
      },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      icon: 'transformation',
      tag: { en: 'Innovation', ar: 'التحول والأتمتة' }
    },
    {
      id: 5,
      title: {
        en: 'Digital Marketing & Growth',
        ar: 'التسويق الرقمي وإدارة النمو'
      },
      description: {
        en: 'Data-backed marketing strategies engineered to reach your target audience and enhance your digital presence: social media management, content creation, targeted ad campaigns, search engine optimization (SEO), and performance analytics.',
        ar: 'نبني استراتيجيات تسويقية تساعد الشركات على الوصول إلى جمهورها المستهدف، وتعزيز حضورها الرقمي، وتحقيق نتائج قابلة للقياس: إدارة حسابات التواصل، صناعة المحتوى، الحملات الإعلانية، وتحسين محركات البحث (SEO).'
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      icon: 'marketing',
      tag: { en: 'Growth', ar: 'التسويق والنمو' }
    },
    {
      id: 6,
      title: {
        en: 'Brand Identity & UX/UI Design',
        ar: 'الهوية التجارية وتجربة المستخدم'
      },
      description: {
        en: 'Crafting memorable brand identities reflecting your company character: brand strategy, logo design, visual identity guidelines, print collaterals, social media templates, and intuitive UX/UI design.',
        ar: 'نبني هويات تجارية تعكس شخصية نشاطك وتمنح علامتك حضوراً احترافياً وتزيد من ثقة العملاء: استراتيجية العلامة، تصميم الشعار، الهوية البصرية، Brand Guidelines، المطبوعات، وتصميم واجهات وتجربة المستخدم (UX/UI).'
      },
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      icon: 'branding',
      tag: { en: 'Identity', ar: 'الهوية والواجهات' }
    }
  ];

  // Why Work With Us & Client Testimonials (Page 15 of Profile)
  readonly testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote: {
        en: 'HUNAIX provides all operational services under one roof with deep understanding of Saudi regulations and exceptional execution speed.',
        ar: 'جمعت HUNAIX كل ما نحتاجه من تأسيس وخدمات حكومية وإدارة مالية وتقنية تحت سقف واحد بسرعة تنفيذ مبهرة وجودة عالية.'
      },
      name: { en: 'Abdulrahman Al-Subaie', ar: 'عبدالرحمن السبيعي' },
      role: { en: 'Managing Director', ar: 'المدير التنفيذي' },
      company: { en: 'Riyadh Commercial Group', ar: 'مجموعة الرياض التجارية' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      id: 2,
      quote: {
        en: 'The digital transformation and custom ERP developed by HUNAIX streamlined our accounting and compliance across all branches in KSA.',
        ar: 'التحول الرقمي وتطبيق الأنظمة المحاسبية مع HUNAIX منحنا وضوحاً كاملاً في الإدارة المالية وسرعة في اتخاذ القرارات.'
      },
      name: { en: 'Nouf Al-Mansour', ar: 'نوف المنصور' },
      role: { en: 'Head of Operations', ar: 'رئيسة قطاع العمليات' },
      company: { en: 'Vanguard Enterprise', ar: 'شركة فانغارد لحلول الأعمال' },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      id: 3,
      quote: {
        en: 'A true long-term strategic partner. Their marketing and branding elevated our market position significantly.',
        ar: 'شريك حقيقي ومستمر؛ ساعدتنا استراتيجياتهم في التسويق وبناء الهوية التجارية على مضاعفة نمونا والوصول لعملائنا المستهدفين.'
      },
      name: { en: 'Fahad Al-Qathani', ar: 'فهد القحطاني' },
      role: { en: 'Co-Founder & CEO', ar: 'المؤسس والرئيس التنفيذي' },
      company: { en: 'Apex Tech Solutions', ar: 'شركة آفاق التقنية' },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5
    }
  ];

  // Digital Solutions Products Suite from Page 14 of the Profile (High-End SaaS Showcase)
  readonly caseStudies: CaseStudyItem[] = [
    {
      id: 'erp',
      title: { en: 'HUNAIX ERP', ar: 'HUNAIX ERP' },
      subtitle: {
        en: 'An integrated enterprise platform connecting all financial, administrative, HR, and supply chain operations.',
        ar: 'نظام متكامل لإدارة الموارد والعمليات المالية والإدارية، يربط جميع أقسام المنشأة داخل منصة واحدة.'
      },
      category: 'erp',
      badge: { en: 'ENTERPRISE ERP', ar: 'إدارة الموارد والمالية' },
      badgeBg: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
      badgeColor: '#FFFFFF',
      color: '#DC2626',
      glowColor: 'rgba(220, 38, 38, 0.25)',
      icon: 'erp',
      features: [
        { en: 'Financials & Ledgers', ar: 'إدارة مالية وقيود محاسبية شاملة' },
        { en: 'ZATCA E-Invoicing Phase 2', ar: 'ربط الفوترة الإلكترونية المعتمدة' },
        { en: 'HR & Payroll Management', ar: 'شؤون الموظفين ومسيرات الرواتب' },
        { en: 'Inventory & Operations', ar: 'إدارة المخزون وسلاسل الإمداد' }
      ]
    },
    {
      id: 'analyzer',
      title: { en: 'HUNAIX ANALYZER', ar: 'HUNAIX ANALYZER' },
      subtitle: {
        en: 'Interactive analytics dashboards and executive reports helping leadership monitor real-time KPIs and take data-driven decisions.',
        ar: 'لوحات تحكم وتقارير تحليلية تساعد الإدارة على متابعة الأداء واتخاذ قرارات مبنية على البيانات.'
      },
      category: 'analyzer',
      badge: { en: 'BI & ANALYTICS', ar: 'لوحات القيادة والبيانات' },
      badgeBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      badgeColor: '#0F172A',
      color: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.25)',
      icon: 'analyzer',
      features: [
        { en: 'Real-Time KPI Dashboards', ar: 'مؤشرات أداء لحظية للأقسام والفروع' },
        { en: 'Executive Financial Summaries', ar: 'تقارير مالية وتشغيلية تنفيذية' },
        { en: 'Forecasting & Growth Trends', ar: 'تحليلات تنبؤية للنمو والإيرادات' },
        { en: 'Custom Metric Tracking', ar: 'تخصيص كامل لمعايير القياس' }
      ]
    },
    {
      id: 'automation',
      title: { en: 'HUNAIX AUTOMATION', ar: 'HUNAIX AUTOMATION' },
      subtitle: {
        en: 'Automating business procedures and repetitive tasks to boost operational efficiency and eliminate human errors.',
        ar: 'أتمتة الإجراءات والمهام المتكررة لزيادة الإنتاجية وتقليل الأخطاء.'
      },
      category: 'automation',
      badge: { en: 'WORKFLOW RPA', ar: 'أتمتة الإجراءات وسير العمل' },
      badgeBg: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
      badgeColor: '#FFFFFF',
      color: '#7C3AED',
      glowColor: 'rgba(124, 58, 237, 0.25)',
      icon: 'automation',
      features: [
        { en: 'Automated Approvals & Triggers', ar: 'اعتمادات وموافقات آلية ذكية' },
        { en: 'Cross-System Integrations', ar: 'ربط وتكامل الأنظمة والتطبيقات' },
        { en: 'Smart Notifications & Tasks', ar: 'تنبيهات ومتابعة المهام المعلقة' },
        { en: 'Zero Data Entry Errors', ar: 'تقليل التدخل اليدوي والقضاء على الأخطاء' }
      ]
    },
    {
      id: 'auditor',
      title: { en: 'HUNAIX AUDITOR', ar: 'HUNAIX AUDITOR' },
      subtitle: {
        en: 'Solutions for managing audit operations, corporate governance, risk monitoring, and regulatory compliance.',
        ar: 'حلول لإدارة عمليات التدقيق والحوكمة ومتابعة الامتثال داخل المنشأة.'
      },
      category: 'auditor',
      badge: { en: 'AUDIT & GOVERNANCE', ar: 'التدقيق والحوكمة والامتثال' },
      badgeBg: 'linear-gradient(135deg, #334155 0%, #1E293B 100%)',
      badgeColor: '#FFFFFF',
      color: '#334155',
      glowColor: 'rgba(51, 65, 85, 0.25)',
      icon: 'auditor',
      features: [
        { en: 'Saudi Regulations Compliance', ar: 'مطابقة للأنظمة والمعايير السعودية' },
        { en: 'Internal Audit Checklists', ar: 'قوائم وسجلات التدقيق الداخلي' },
        { en: 'Risk Logs & Mitigation', ar: 'سجل المخاطر وخطة المعالجة' },
        { en: 'Governance Audit Trail', ar: 'تتبع شامل للعمليات والاعتمادات' }
      ]
    },
    {
      id: 'social',
      title: { en: 'HUNAIX SOCIAL', ar: 'HUNAIX SOCIAL' },
      subtitle: {
        en: 'A unified social media management platform for automated scheduling, audience engagement tracking, and performance analytics.',
        ar: 'منصة لإدارة حسابات التواصل الاجتماعي وجدولة المحتوى وتحليل الأداء.'
      },
      category: 'social',
      badge: { en: 'SOCIAL SUITE', ar: 'إدارة التواصل والمحتوى' },
      badgeBg: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
      badgeColor: '#FFFFFF',
      color: '#2563EB',
      glowColor: 'rgba(37, 99, 235, 0.25)',
      icon: 'social',
      features: [
        { en: 'Multi-Channel Auto Publishing', ar: 'نشر وجدولة متعددة القنوات' },
        { en: 'Engagement & Reach Analytics', ar: 'تحليل التفاعل ومعدل الوصول' },
        { en: 'Campaign ROI Tracking', ar: 'قياس عائد الحملات الإعلانية' },
        { en: 'Unified Inbox & Response', ar: 'صندوق رسائل موحد للردود' }
      ]
    }
  ];

  // Head Office & Regional Contacts
  readonly offices: OfficeLocation[] = [
    {
      id: 'ksa',
      title: { en: 'Head Office - Saudi Arabia', ar: 'المقر الرئيسي - المملكة العربية السعودية' },
      phone: '+966 11 234 5678',
      email: 'info@hunaix.com',
      address: {
        en: 'Riyadh, Kingdom of Saudi Arabia',
        ar: 'الرياض، المملكة العربية السعودية'
      }
    },
    {
      id: 'regional',
      title: { en: 'Regional Operations Hub', ar: 'مركز العمليات الإقليمي' },
      phone: '+966 50 123 4567',
      email: 'support@hunaix.com',
      address: {
        en: 'Kingdom of Saudi Arabia (All Regions)',
        ar: 'المملكة العربية السعودية (كافة المناطق)'
      }
    }
  ];

  // Frequently Asked Questions (from FAQ Screen)
  readonly faqs: FaqItem[] = [
    {
      id: 1,
      question: {
        en: 'How does HUNAIX differ from traditional consultancy offices or ordinary software companies?',
        ar: 'كيف تختلف HUNAIX عن مكاتب الاستشارات التقليدية أو شركات البرمجيات العادية؟'
      },
      answer: {
        en: 'In HUNAIX, we do not provide isolated theoretical consultations; rather, we operate as an integrated operational and strategic partner combining under one roof: company setup & government compliance, accounting & financial management, custom software & mobile app development, digital transformation, and marketing — ensuring seamless operations, faster execution, and reduced operational costs.',
        ar: 'في HUNAIX لا نقدم خدمة منفصلة أو استشارة نظرية تنتهي بتسليم تقرير، بل نعمل كشريك تشغيلي واستراتيجي متكامل يجمع تحت سقف واحد: تأسيس الشركات والخدمات الحكومية، الإدارة المحاسبية والمالية، بناء الأنظمة البرمجية وتطبيقات الهواتف، والتحول الرقمي والتسويق، مما يضمن تناغم العمليات وسرعة التنفيذ وخفض التكاليف التشغيلية.'
      }
    },
    {
      id: 2,
      question: {
        en: 'Are all your systems and software certified and compliant with the Zakat, Tax and Customs Authority (ZATCA)?',
        ar: 'هل جميع أنظمتكم وبرمجياتكم معتمدة ومتوافقة مع هيئة الزكاة والضريبة والجمارك (ZATCA)؟'
      },
      answer: {
        en: 'Yes, all our accounting systems and the HUNAIX ERP suite are 100% compliant with the Phase 1 and Phase 2 (Integration) e-invoicing standards mandated by ZATCA, as well as full compliance with the Saudi Personal Data Protection Law (PDPL).',
        ar: 'نعم، كافة أنظمتنا المحاسبية ومنظومة HUNAIX ERP متوافقة تماماً بنسبة 100% مع متطلبات الفوترة الإلكترونية للمرحلتين الأولى (فاتورة) والثانية (الربط والتكامل) المعتمدة من هيئة الزكاة والضريبة والجمارك (ZATCA)، بالإضافة إلى الامتثال الكامل لنظام حماية البيانات الشخصية السعودي (PDPL).'
      }
    },
    {
      id: 3,
      question: {
        en: 'How long does it take to establish a foreign company and issue a MISA investment license with you?',
        ar: 'كم يستغرق تأسيس شركة أجنبية وإصدار رخصة MISA الاستثمارية معكم؟'
      },
      answer: {
        en: 'Thanks to our dedicated team and direct workflows with the Ministry of Investment (MISA) and relevant Saudi authorities, we issue foreign investment licenses, complete company incorporation, and issue commercial registrations within a few business days with maximum regulatory compliance.',
        ar: 'بفضل فريقنا المتخصص وعلاقاتنا المباشرة مع وزارة الاستثمار والجهات المعنية، يتم إصدار رخصة الاستثمار الأجنبي (MISA) وتأسيس الشركة وإصدار السجل التجاري وعقد التأسيس خلال أيام عمل معدودة وبأعلى مستويات الدقة والامتثال للأنظمة السعودية.'
      }
    },
    {
      id: 4,
      question: {
        en: 'Can we contract for only one service or must we subscribe to the entire ecosystem?',
        ar: 'هل يمكننا التعاقد على خدمة واحدة فقط أم يجب الاشتراك في كامل المنظومة؟'
      },
      answer: {
        en: 'We offer complete operational flexibility; you can contract for any service independently based on your current enterprise needs (such as Government Services only, Accounting & Finance, or Custom Software Development), or leverage our full integrated business management ecosystem.',
        ar: 'نوفر مرونة تشغيلية تامة؛ يمكنك الاستفادة من أي خدمة بشكل مستقل وفق احتياج منشأتك الحالي (مثل الخدمات الحكومية فقط، أو الإدارة المالية والمحاسبية، أو تطوير نظام مخصص)، أو الانضمام إلى منظومتنا المتكاملة لإدارة وتشغيل الأعمال بشكل شامل.'
      }
    }
  ];
}
