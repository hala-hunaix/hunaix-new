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
  MethodologyStep,
  WhyUsPillar,
  ProjectDetail,
  ProjectModule,
  ClientLogo,
  TeamMember
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
    { id: 'home', label: { en: 'Home', ar: 'الرئيسية' }, href: '/' },
    { id: 'about', label: { en: 'Who We Are', ar: 'من نحن' }, href: '/about' },
    { id: 'services', label: { en: 'Our Services', ar: 'خدماتنا' }, href: '/services' },
    { id: 'projects', label: { en: 'Our Projects', ar: 'مشاريعنا ومنتجاتنا' }, href: '/projects' },
    { id: 'contact', label: { en: 'Contact Us', ar: 'تواصل معنا' }, href: '/contact' }
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

  // Comprehensive Projects & Products Catalog (Dedicated Product Pages)
  readonly projectsCatalog: ProjectDetail[] = [
    {
      id: 'erp',
      name: 'HUNAIX ERP',
      badge: { en: 'ENTERPRISE RESOURCE PLANNING', ar: 'إدارة الموارد والمالية الشاملة' },
      title: { en: 'HUNAIX ERP Suite', ar: 'نظام HUNAIX ERP السحابي المتكامل' },
      subtitle: {
        en: 'One Platform. Infinite Possibilities. HUNAIX ERP unifies your business processes, financials, data, and teams in a single intelligent cloud platform built for growth and agility.',
        ar: 'منصة موحدة وإمكانيات لا محدودة؛ تجمع إدارة الموارد والعمليات المالية والمحاسبية، شؤون الموظفين، وسلاسل الإمداد مع الامتثال الكامل لمتطلبات الفوترة الإلكترونية (ZATCA Phase 2).'
      },
      tagline: { en: 'One Platform. Infinite Possibilities.', ar: 'منصة موحدة.. إمكانيات لا محدودة' },
      category: 'erp',
      categoryName: { en: 'ERP & Finance', ar: 'الأنظمة المالية والإدارية' },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      previewImage: 'images/erp-dashboard.png',
      color: '#0F4FCD',
      gradient: 'linear-gradient(135deg, #0F4FCD 0%, #156FFF 100%)',
      overview: {
        en: 'HUNAIX ERP is an enterprise-grade cloud system engineered specifically for modern businesses in the Kingdom of Saudi Arabia. It unifies general accounting, multi-currency ledgers, inventory management, point of sale, supply chain, and human resources with seamless ZATCA Phase 2 compliance.',
        ar: 'نظام HUNAIX ERP هو نظام سحابي متطور مخصص للمنشآت والشركات في المملكة العربية السعودية. يدمج المحاسبة العامة، شؤون الموظفين والرواتب عبر منصة مدد، إدارة المستودعات والمشتريات، نقاط البيع المتصلة، مع الربط المباشر المعتمد لهيئة الزكاة والضريبة والجمارك.'
      },
      keyFeatures: [
        { en: '100% ZATCA Phase 2 E-Invoicing Certified', ar: 'ربط مباشر ومعتمد مع منظومة الفوترة الإلكترونية المرحلة الثانية (ZATCA)' },
        { en: 'Multi-Branch & Multi-Company Consolidated Ledgers', ar: 'إدارة متكاملة لتعدد الفروع والشركات بدفاتر أستاذ موحدة' },
        { en: 'HR, Automated Payroll & Mudad Platform Sync', ar: 'شؤون الموظفين ومسيرات الرواتب المتوافقة مع منصة مدد والتأمينات' },
        { en: 'Smart Warehouse & Supply Chain Tracking', ar: 'إدارة المستودعات وسلاسل الإمداد ومراقبة حركات الأصناف لحظياً' },
        { en: 'Comprehensive Executive Financial Statements & P&L', ar: 'قوائم مالية وموازين مراجعة وتقارير أرباح وخسائر تفصيلية' }
      ],
      modules: [
        {
          title: { en: 'Financials & General Ledger', ar: 'الإدارة المالية ودفاتر الأستاذ' },
          description: { en: 'Automated journal entries, charts of accounts, VAT returns, and multi-cost center accounting.', ar: 'شجرة حسابات مرنة، قيود يومية آلية، مراكز تكلفة متعددة، وإقرارات ضريبة القيمة المضافة.' },
          icon: 'finance'
        },
        {
          title: { en: 'ZATCA Phase 2 Integration', ar: 'الفوترة الإلكترونية المعتمدة (فاتورة 2)' },
          description: { en: 'Instant XML generation, cryptographic stamps, QR codes, and real-time clearance/reporting.', ar: 'توليد فوري للأختام الرقمية ورموز الاستجابة السريعة (QR) والربط المباشر مع بوابة فاتورة.' },
          icon: 'shield'
        },
        {
          title: { en: 'HR & Payroll Automation', ar: 'الموارد البشرية والرواتب' },
          description: { en: 'Employee records, attendance, automated WPS payroll calculation, and Saudi labor law rules.', ar: 'سجلات الموظفين، حساب الإجازات ومكافأة نهاية الخدمة، ومسيرات رواتب متوافقة مع حماية الأجور.' },
          icon: 'people'
        },
        {
          title: { en: 'Inventory & Procurement', ar: 'المستودعات والمشتريات' },
          description: { en: 'Batch numbers, barcode scanning, purchase orders, vendor evaluation, and minimum reorder triggers.', ar: 'تتبع الأصناف، أوامر الشراء وعروض الموردين، وإشعارات تلقائية للحدود الدنيا للمخزون.' },
          icon: 'inventory'
        },
        {
          title: { en: 'Connected Multi-Branch POS', ar: 'نقاط البيع والفروع' },
          description: { en: 'Fast checkout, offline capability, shift management, and instant cloud data synchronization.', ar: 'واجهة بيع سريعة، دعم العمل دون اتصال، تقفيل الورديات، ومزامنة فورية مع المركز الرئيسي.' },
          icon: 'pos'
        },
        {
          title: { en: 'Executive Dashboards', ar: 'لوحات القيادة والتقارير' },
          description: { en: 'Instant drill-down into revenue, profit margins, operational cash flow, and branch performance.', ar: 'تقارير تفاعلية فورية للإيرادات، هوامش الربحية، ومؤشرات التدفق النقدي وكفاءة التشغيل.' },
          icon: 'chart'
        }
      ],
      impactStats: [
        { label: { en: 'Faster Accounting Cycle', ar: 'تسريع إغلاق العمليات المحاسبية' }, value: '85%' },
        { label: { en: 'ZATCA & Saudi Compliance', ar: 'مطابقة للأنظمة واللوائح السعودية' }, value: '100%' },
        { label: { en: 'Operational Cost Reduction', ar: 'خفض التكاليف الإدارية والتشغيلية' }, value: '40%' }
      ],
      complianceBadge: { en: 'ZATCA Phase 2 Approved & KSA Cloud Hosted', ar: 'معتمد من هيئة الزكاة والضريبة والجمارك ومستضاف سحابياً بالمملكة' }
    },
    {
      id: 'analyzer',
      name: 'HUNAIX ANALYZER',
      badge: { en: 'BI & ADVANCED ANALYTICS', ar: 'ذكاء الأعمال ولوحات القيادة' },
      title: { en: 'HUNAIX ANALYZER Platform', ar: 'منصة HUNAIX ANALYZER لذكاء الأعمال' },
      subtitle: {
        en: 'Transform raw enterprise data into actionable visual intelligence, real-time KPI dashboards, and automated forecasts.',
        ar: 'تحويل بيانات منشأتك إلى لوحات تحكم تفاعلية ومؤشرات أداء استراتيجية تمنح الإدارة وضوحاً كاملاً في اتخاذ القرارات.'
      },
      tagline: { en: 'Data-Driven Clarity for Leadership', ar: 'وضوح استراتيجي مبني على البيانات' },
      category: 'analytics',
      categoryName: { en: 'Data & Analytics', ar: 'التحليلات والبيانات' },
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      color: '#0F4FCD',
      gradient: 'linear-gradient(135deg, #156FFF 0%, #0F4FCD 100%)',
      overview: {
        en: 'HUNAIX ANALYZER centralizes data streams across finance, sales, branch performance, and operations. It provides customizable visualization widgets, automated anomaly alerts, and forecasting models.',
        ar: 'منصة متقدمة تجمع مصادر البيانات من مختلف الأنظمة، لتقديم لوحات قيادة لحظية، وتنبيهات استباقية عند وجود انحرافات في المبيعات أو التكاليف، مع تقارير تنبؤية للنمو.'
      },
      keyFeatures: [
        { en: 'Real-time multi-dimensional visual dashboards', ar: 'لوحات قيادة بيانية تفاعلية لحظية' },
        { en: 'Automated executive PDF/Excel report delivery', ar: 'إرسال مجدول لتقارير الإدارة التنفيذية آلياً' },
        { en: 'Predictive revenue and cash-flow modeling', ar: 'نماذج تنبؤية للإيرادات والتدفق النقدي' },
        { en: 'Branch and team performance comparisons', ar: 'مقارنات دقيقة لأداء الفروع والفرق التشغيلية' }
      ],
      modules: [
        {
          title: { en: 'Executive Overview Dashboard', ar: 'لوحة التحكم التنفيذية الشاملة' },
          description: { en: 'Real-time visibility over enterprise health, net profit, burn rate, and strategic KPIs.', ar: 'نظرة شاملة ولحظية على مؤشرات الصحة المالية، الأرباح، ومعدلات النمو التشغيلي.' },
          icon: 'chart'
        },
        {
          title: { en: 'Sales & Revenue Analysis', ar: 'تحليلات المبيعات والإيرادات' },
          description: { en: 'Deep dive into top selling products, customer retention, sales reps performance, and seasonal trends.', ar: 'تحليل الأصناف الأكثر مبيعاً، سلوك العملاء، وأداء مسؤولي المبيعات حسب المواسم.' },
          icon: 'revenue'
        },
        {
          title: { en: 'Automated Alerts & Anomaly AI', ar: 'التنبيهات الذكية والانحرافات' },
          description: { en: 'Instant notifications when expenses surge or performance dips below targets.', ar: 'إشعارات فورية عند ارتفاع المصروفات أو انخفاض مؤشرات الأداء عن المستهدفات المحددة.' },
          icon: 'alert'
        }
      ],
      impactStats: [
        { label: { en: 'Faster Decision-Making Time', ar: 'سرعة اتخاذ القرارات التنفيذية' }, value: '3x' },
        { label: { en: 'Data Accuracy & Consistency', ar: 'دقة وتناسق التقارير والبيانات' }, value: '99.9%' },
        { label: { en: 'Saved Reporting Hours Monthly', ar: 'ساعات عمل موفرة في إعداد التقارير' }, value: '+120h' }
      ],
      complianceBadge: { en: 'Enterprise-Grade Security & Role-Based Access', ar: 'تشفير عالي وصلاحيات وصول متقدمة للمدراء والتنفيذيين' }
    },
    {
      id: 'automation',
      name: 'HUNAIX AUTOMATION',
      badge: { en: 'INTELLIGENT WORKFLOW & RPA', ar: 'أتمتة العمليات وسير العمل' },
      title: { en: 'HUNAIX AUTOMATION Platform', ar: 'منظومة HUNAIX AUTOMATION لأتمتة الإجراءات' },
      subtitle: {
        en: 'Eliminate repetitive manual bottlenecks and automate approvals, system integrations, and task dispatches seamlessly.',
        ar: 'أتمتة شاملة للإجراءات والمهام المتكررة والاعتمادات وسير العمل بين الأقسام، لرفع الإنتاجية ومنع الأخطاء البشرية.'
      },
      tagline: { en: 'Smart Workflows Without Delays', ar: 'سير عمل ذكي بلا توقف أو تأخير' },
      category: 'automation',
      categoryName: { en: 'Workflow & RPA', ar: 'الأتمتة وسير العمل' },
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      color: '#0F4FCD',
      gradient: 'linear-gradient(135deg, #156FFF 0%, #0F4FCD 100%)',
      overview: {
        en: 'HUNAIX AUTOMATION connects enterprise systems and orchestrates end-to-end business workflows. From auto-approving purchase orders to triggering employee onboarding tasks, operations run seamlessly 24/7.',
        ar: 'منظومة مبتكرة لربط التطبيقات والأنظمة المختلفة وإدارة مسارات الموافقات الذكية، تضمن استمرار العمليات بدقة عالية على مدار الساعة.'
      },
      keyFeatures: [
        { en: 'Multi-level conditional approval chains', ar: 'مسارات موافقات واعتمادات متعددة المستويات وشروط مخصصة' },
        { en: 'Zero data entry errors with automated data pipelines', ar: 'معالجة آلية للبيانات والقضاء التام على أخطاء الإدخال' },
        { en: 'Automated notification hooks via WhatsApp, SMS, & Email', ar: 'تنبيهات تلقائية عبر واتساب والرسائل والبريد الإلكتروني' },
        { en: 'Open REST API integration for third-party tools', ar: 'ربط مباشر عبر واجهات برمجة التطبيقات (API) مع كافة الأنظمة' }
      ],
      modules: [
        {
          title: { en: 'Smart Approval Engine', ar: 'محرك الاعتمادات الذكي' },
          description: { en: 'Route financial and administrative requests based on amounts, departments, and delegation rules.', ar: 'توجيه طلبات الصرف والإجازات والمشتريات آلياً وفق الصلاحيات والمبالغ المعتمدة.' },
          icon: 'check'
        },
        {
          title: { en: 'System Integration Connector', ar: 'موصل ربط وتكامل الأنظمة' },
          description: { en: 'Synchronize data between CRM, ERP, e-commerce, and government portals instantly.', ar: 'مزامنة فورية للبيانات بين المتجر الإلكتروني ونظام ERP وبوابات الجهات الحكومية.' },
          icon: 'api'
        }
      ],
      impactStats: [
        { label: { en: 'Reduction in Processing Delays', ar: 'تسريع إنجاز المعاملات والموافقات' }, value: '70%' },
        { label: { en: 'Manual Error Elimination', ar: 'تقليل الأخطاء البشرية والتكرار' }, value: '95%' },
        { label: { en: 'Team Productivity Gain', ar: 'زيادة إنتاجية فرق العمل' }, value: '2.5x' }
      ],
      complianceBadge: { en: 'Compliant with Saudi Digital Transformation Guidelines', ar: 'متوافق مع معايير التحول الرقمي والحوكمة المؤسسية بالمملكة' }
    },
    {
      id: 'auditor',
      name: 'HUNAIX AUDITOR',
      badge: { en: 'AUDIT, GOVERNANCE & COMPLIANCE', ar: 'التدقيق والحوكمة والامتثال' },
      title: { en: 'HUNAIX AUDITOR Suite', ar: 'نظام HUNAIX AUDITOR للحوكمة والامتثال' },
      subtitle: {
        en: 'Comprehensive tools for internal audit checklists, risk matrices, and continuous regulatory compliance across KSA.',
        ar: 'منظومة متخصصة لإدارة عمليات التدقيق الداخلي، مصفوفات المخاطر، وضمان الامتثال التام للأنظمة واللوائح السعودية.'
      },
      tagline: { en: 'Complete Compliance & Risk Governance', ar: 'حوكمة وامتثال شامل لأعمالك' },
      category: 'governance',
      categoryName: { en: 'Audit & Governance', ar: 'التدقيق والحوكمة' },
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      color: '#0F4FCD',
      gradient: 'linear-gradient(135deg, #156FFF 0%, #0F4FCD 100%)',
      overview: {
        en: 'HUNAIX AUDITOR empowers compliance officers and internal auditors to track procedural conformity, log corporate risks, verify statutory filings, and generate audit-ready documentation.',
        ar: 'حلول متقدمة لمسؤولي الامتثال والمدققين الداخليين لمتابعة سلامة الإجراءات ومطابقتها للأنظمة واللوائح والتحقق من الالتزامات الرسمية.'
      },
      keyFeatures: [
        { en: 'Pre-loaded Saudi regulatory compliance frameworks', ar: 'أطر وقوائم مراجعة مسبقة الإعداد للأنظمة والمعايير السعودية' },
        { en: 'Comprehensive immutable audit log trail', ar: 'سجل تدقيق وحركات غير قابل للتعديل لكافة العمليات' },
        { en: 'Dynamic risk matrix and corrective action plans', ar: 'مصفوفة مخاطر ديناميكية وخطط إجراءات تصحيحية موثقة' },
        { en: 'Automated executive compliance scorecards', ar: 'بطاقات قياس ومؤشرات امتثال دورية للإدارة ومجلس الإدارة' }
      ],
      modules: [
        {
          title: { en: 'Regulatory Checklist Hub', ar: 'مركز قوائم المراجعة والامتثال' },
          description: { en: 'Periodic verification of licenses, tax filings, labor ratios, and corporate governance.', ar: 'فحص دوري لسريان الرخص، الإقرارات الضريبية، نسب التوطين، ومتطلبات الحوكمة.' },
          icon: 'checklist'
        },
        {
          title: { en: 'Risk & Incident Registry', ar: 'سجل المخاطر والحوادث التشغيلية' },
          description: { en: 'Document operational vulnerabilities with severity rankings and assign owners to mitigations.', ar: 'توثيق المخاطر التشغيلية والمالية مع تصنيف درجات الخطورة وإسناد المعالجات.' },
          icon: 'risk'
        }
      ],
      impactStats: [
        { label: { en: 'Audit Readiness Level', ar: 'جاهزية المنشأة لعمليات التدقيق' }, value: '100%' },
        { label: { en: 'Regulatory Penalty Risk', ar: 'تجنب الغرامات والمخالفات النظامية' }, value: '0%' },
        { label: { en: 'Governance Efficiency', ar: 'رفع كفاءة الحوكمة والمتابعة' }, value: '4x' }
      ],
      complianceBadge: { en: 'Full Alignment with Saudi Corporate Law & PDPL', ar: 'مطابقة تامة لنظام الشركات السعودي ونظام حماية البيانات الشخصية' }
    },
    {
      id: 'social',
      name: 'HUNAIX SOCIAL',
      badge: { en: 'UNIFIED DIGITAL MARKETING', ar: 'إدارة التواصل والتسويق' },
      title: { en: 'HUNAIX SOCIAL Suite', ar: 'منصة HUNAIX SOCIAL لإدارة الحضور الرقمي' },
      subtitle: {
        en: 'All-in-one social media publishing, community inbox, ad performance analytics, and brand listening.',
        ar: 'منصة موحدة لجدولة المحتوى، إدارة محادثات العملاء، تحليل أداء الحملات الإعلانية وتنمية التفاعل الرقمي.'
      },
      tagline: { en: 'Supercharge Your Digital Growth', ar: 'مضاعفة وصول وتفاعل علامتك التجارية' },
      category: 'marketing',
      categoryName: { en: 'Social & Marketing', ar: 'التسويق والتواصل' },
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
      color: '#0F4FCD',
      gradient: 'linear-gradient(135deg, #156FFF 0%, #0F4FCD 100%)',
      overview: {
        en: 'HUNAIX SOCIAL helps enterprise marketing teams schedule and distribute content across X (Twitter), LinkedIn, Instagram, TikTok, and Snapchat, while managing incoming messages from a single shared inbox.',
        ar: 'منصة متكاملة تمكن فرق التسويق من جدولة ونشر المحتوى على منصات إكس، لينكد إن، إنستغرام، تيك توك، وسناب شات، مع الرد السريع على الرسائل من صندوق وارد موحد.'
      },
      keyFeatures: [
        { en: 'Multi-account visual calendar publishing', ar: 'تقويم بصري ذكي لجدولة النشر عبر كافة الحسابات والمنصات' },
        { en: 'Unified social inbox and CRM lead capture', ar: 'صندوق وارد موحد لاستقبال والرد على المحادثات وجمع بيانات العملاء' },
        { en: 'Real-time campaign ROI and engagement tracking', ar: 'تتبع لحظي لتفاعل الجمهور والعائد على الإنفاق الإعلاني (ROAS)' },
        { en: 'Audience demographics and sentiment analysis', ar: 'تحليل دقيق لخصائص المتابعين وانطباعات الجمهور عن العلامة' }
      ],
      modules: [
        {
          title: { en: 'Publishing & Content Scheduler', ar: 'جدولة ونشر المحتوى الذكي' },
          description: { en: 'Visual media calendar with approval queues and best-time-to-post algorithms.', ar: 'تقويم مرئي لإدارة المحتوى مع مسار اعتماد المواد وأفضل أوقات النشر.' },
          icon: 'calendar'
        },
        {
          title: { en: 'Unified Social Inbox', ar: 'صندوق المحادثات والرد السريع' },
          description: { en: 'Consolidated customer messages, automated greetings, and ticket assignment.', ar: 'تجميع رسائل وتعليقات كافة المنصات مع قوالب ردود جاهزة وتعيين المحادثات للفريق.' },
          icon: 'inbox'
        }
      ],
      impactStats: [
        { label: { en: 'Growth in Social Reach', ar: 'مضاعفة الوصول والتفاعل الرقمي' }, value: '250%' },
        { label: { en: 'Faster Response Time', ar: 'تسريع زمن الرد على استفسارات العملاء' }, value: '<5min' },
        { label: { en: 'Marketing Time Saved', ar: 'توفير وقت إدارة حسابات التواصل' }, value: '60%' }
      ],
      complianceBadge: { en: 'Official API Partner Integrations', ar: 'ربط رسمي ومعتمد عبر واجهات برمجة التطبيقات للمنصات العالمية' }
    },
    {
      id: 'crm',
      name: 'HUNAIX CRM',
      badge: { en: 'SALES PIPELINE & CLIENTS', ar: 'إدارة علاقات العملاء والمبيعات' },
      title: { en: 'HUNAIX CRM Platform', ar: 'نظام HUNAIX CRM لإدارة المبيعات والعملاء' },
      subtitle: {
        en: 'Capture leads, track pipeline stages, generate instant digital quotes, and nurture long-term client relationships.',
        ar: 'إدارة متكاملة لفرص المبيعات والعملاء المحتملين، وإصدار عروض الأسعار والعقود الرقمية ومتابعة تحصيل الدفعات.'
      },
      tagline: { en: 'Accelerate Sales & Retain Clients', ar: 'تسريع دورة المبيعات وتنمية ولاء العملاء' },
      category: 'crm',
      categoryName: { en: 'CRM & Sales', ar: 'المبيعات والعملاء' },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      color: '#0F4FCD',
      gradient: 'linear-gradient(135deg, #156FFF 0%, #0F4FCD 100%)',
      overview: {
        en: 'HUNAIX CRM helps sales teams track deals from first touchpoint to contract signing. It provides automated follow-up reminders, quotation generators with VAT calculations, and comprehensive sales rep performance tracking.',
        ar: 'نظام صمم خصيصاً لمساعدة فرق المبيعات على تتبع الصفقات، إصدار عروض الأسعار المتوافقة مع الضريبة، وإدارة عقود العملاء وتذكيرات المتابعة الآلية.'
      },
      keyFeatures: [
        { en: 'Visual Kanban pipeline deal management', ar: 'إدارة بصرية لمراحل الصفقات بأسلوب كانبان التفاعلي' },
        { en: 'Instant VAT-compliant digital quotations', ar: 'توليد فوري لعروض الأسعار والعقود الرقمية بضريبة القيمة المضافة' },
        { en: 'Automated follow-up reminders and activity logs', ar: 'تذكيرات آلية بمواعيد المتابعة وتوثيق تاريخ التواصل مع العميل' },
        { en: 'Sales target tracking and commission calculation', ar: 'متابعة مستهدفات المبيعات الشهرية وحساب العمولات تلقائياً' }
      ],
      modules: [
        {
          title: { en: 'Deals & Opportunities Pipeline', ar: 'مسار الصفقات والفرص البيعية' },
          description: { en: 'Move deals across customizable stages from lead qualification to closed-won.', ar: 'نقل الصفقات بسلاسة عبر مراحل مخصصة من أول تواصل حتى إتمام الصفقة.' },
          icon: 'pipeline'
        },
        {
          title: { en: 'Digital Quotes & Contracts', ar: 'عروض الأسعار والعقود الرقمية' },
          description: { en: 'Create professional branded quotes with PDF export and digital signature support.', ar: 'إصدار عروض أسعار احترافية بهوية المنشأة وتصديرها بصيغة PDF قابلة للتوقيع.' },
          icon: 'contract'
        }
      ],
      impactStats: [
        { label: { en: 'Sales Deal Conversion Rate', ar: 'زيادة نسبة إغلاق الصفقات البيعية' }, value: '+35%' },
        { label: { en: 'Faster Quote Delivery', ar: 'سرعة إرسال عروض الأسعار للعملاء' }, value: '10x' },
        { label: { en: 'Customer Retention Rate', ar: 'رفع نسبة استبقاء وولاء العملاء' }, value: '92%' }
      ],
      complianceBadge: { en: 'Seamless Integration with HUNAIX ERP & Saudi VAT', ar: 'ربط مباشر مع نظام HUNAIX ERP وحسابات ضريبة القيمة المضافة' }
    }
  ];

  getProjectById(id: string): ProjectDetail | undefined {
    return this.projectsCatalog.find(p => p.id === id);
  }

  // Official Clients & Partners Logos
  readonly clientLogos: ClientLogo[] = [
    { id: 'wehotels', name: 'WeHotels', logo: 'https://res.cloudinary.com/dkbjna5nf/image/upload/v1787344124/wehotels_fr94x0.png' },
    { id: 'contact', name: 'Contact', logo: 'https://res.cloudinary.com/dkbjna5nf/image/upload/v1787344124/contact_b2lfvu.png' },
    { id: 'ecc-global', name: 'ECC Global', logo: 'https://res.cloudinary.com/dkbjna5nf/image/upload/v1787344123/ecc-global_jnzt0m.png' },
    { id: 'salfa', name: 'Salfa', logo: 'https://res.cloudinary.com/dkbjna5nf/image/upload/v1787344123/salfa_a6fo48.png' },
    { id: 'smsa', name: 'SMSA Express', logo: 'https://res.cloudinary.com/dkbjna5nf/image/upload/v1787344123/smsa_fegoat.png' },
    { id: 'taqweem', name: 'Taqweem', logo: 'https://res.cloudinary.com/dkbjna5nf/image/upload/v1787344121/taqweem_hwpu4y.png' },
    { id: 'tharwa', name: 'Tharwa', logo: 'https://res.cloudinary.com/dkbjna5nf/image/upload/v1787344121/tharwa_xxp8ui.png' }
  ];

  // Leadership & Executive Team Members (Exclusively using HUNAIX Brand Blue/Navy Palette & Studio Portraits)
  readonly teamMembers: TeamMember[] = [
    {
      id: 'ibrahim',
      name: { en: 'Eng. Ibrahim Al-Aziz', ar: 'م. إبراهيم بن عبدالعزيز' },
      designation: { en: 'Chief Executive Officer & Founder', ar: 'الرئيس التنفيذي ومستشار تطوير الأعمال' },
      department: { en: 'Executive Leadership', ar: 'القيادة التنفيذية' },
      bio: {
        en: 'Over 15 years of leadership expertise in scaling technology enterprises, corporate restructuring, and navigating public-private strategic partnerships in Saudi Arabia.',
        ar: 'خبرة تتجاوز 15 عاماً في قيادة وتأسيس المنشآت والتحول المؤسسي وإبرام الشراكات الاستراتيجية داخل السوق السعودي وفق مستهدفات رؤية 2030.'
      },
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      bgColor: '#0F4FCD',
      accentColor: '#156FFF',
      phone: '+966 11 234 5678',
      email: 'ibrahim@hunaix.com',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'abdullah',
      name: { en: 'Abdullah Al-Mansoor', ar: 'أ. عبدالله المنصور' },
      designation: { en: 'Chief Financial Officer & Partner', ar: 'شريك الإدارة المالية والامتثال الضريبي' },
      department: { en: 'Finance & ZATCA', ar: 'المالية والضرائب' },
      bio: {
        en: 'Certified financial advisor specialized in enterprise bookkeeping governance, ZATCA Phase 2 e-invoicing compliance, and statutory tax audits.',
        ar: 'مستشار مالي معتمد خبير في حوكمة الدفاتر المحاسبية وتطبيقات الفوترة الإلكترونية ومعايير هيئة الزكاة والضريبة والجمارك.'
      },
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      bgColor: '#0A2E7A',
      accentColor: '#2563EB',
      phone: '+966 11 234 5679',
      email: 'abdullah@hunaix.com',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'sarah',
      name: { en: 'Dr. Sarah Al-Qahtani', ar: 'د. سارة القحطاني' },
      designation: { en: 'Chief Technology Officer (CTO)', ar: 'رئيس قطاع الحلول البرمجية والـ ERP' },
      department: { en: 'Engineering & Cloud Systems', ar: 'التقنية والأنظمة السحابية' },
      bio: {
        en: 'Leads HUNAIX cloud architecture and engineering teams, delivering enterprise-grade secure SaaS platforms and automated workflow solutions.',
        ar: 'تقود فرق هندسة وتطوير منظومة HUNAIX السحابية، مع خبرة واسعة في بنية الأنظمة عالية الأمان والأداء وأتمتة العمليات RPA.'
      },
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      bgColor: '#156FFF',
      accentColor: '#38BDF8',
      phone: '+966 11 234 5680',
      email: 'sarah@hunaix.com',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'noura',
      name: { en: 'Noura Al-Subaie', ar: 'أ. نورة السبيعي' },
      designation: { en: 'Head of Government Relations & MISA', ar: 'مدير شؤون الاستثمار والعلاقات الحكومية' },
      department: { en: 'Corporate & MISA Setup', ar: 'الخدمات الحكومية وتأسيس الشركات' },
      bio: {
        en: 'Expert in Ministry of Investment (MISA) licenses, commercial registrations, and corporate governance for regional and foreign entities.',
        ar: 'متخصصة في تراخيص وزارة الاستثمار MISA وتأسيس الشركات الأجنبية والمحلية وحوكمة ملفات قوى ومقيم والتأمينات الاجتماعية.'
      },
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      bgColor: '#0369A1',
      accentColor: '#0EA5E9',
      phone: '+966 11 234 5681',
      email: 'noura@hunaix.com',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'haifa',
      name: { en: 'Haifa Al-Shammari', ar: 'أ. هيفاء الشمري' },
      designation: { en: 'Chief Marketing & Growth Officer', ar: 'رئيس استراتيجيات النمو والعلامة التجارية' },
      department: { en: 'Marketing & Brand Strategy', ar: 'التسويق والهوية التجارية' },
      bio: {
        en: 'Strategist driving multi-channel digital performance, brand positioning, and audience conversion optimization for client portfolios.',
        ar: 'تقود استراتيجيات التسويق الرقمي، إدارة الحملات الإعلانية متعددة القنوات، وبناء الهويات المؤسسية ورفع العائد الإعلاني ROAS.'
      },
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bgColor: '#1E40AF',
      accentColor: '#3B82F6',
      phone: '+966 11 234 5682',
      email: 'haifa@hunaix.com',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'fahad',
      name: { en: 'Fahad Al-Dosari', ar: 'م. فهد الدوسري' },
      designation: { en: 'Chief Operating Officer (COO)', ar: 'مدير العمليات التشغيلية وضبط الجودة' },
      department: { en: 'Operations & Quality', ar: 'العمليات وضبط الجودة' },
      bio: {
        en: 'Oversees operational execution excellence, SLA compliance tracking, and continuous agile process improvement across client deliveries.',
        ar: 'يشرف على ضبط جودة المخرجات، مسارات التنفيذ الرشيقة، ومتابعة مؤشرات الأداء التشغيلي لضمان سرعة ودقة الإنجاز.'
      },
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      bgColor: '#0B3CA0',
      accentColor: '#60A5FA',
      phone: '+966 11 234 5683',
      email: 'fahad@hunaix.com',
      linkedin: 'https://linkedin.com'
    }
  ];
}
