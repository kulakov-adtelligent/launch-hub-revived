import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ru' | 'ua';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_prep: 'Prep Center',
    nav_stories: 'Success Stories',
    nav_contact: 'Contact',
    hero_title: 'Launch Hub',
    hero_subtitle: 'End-to-end operations: research, sourcing, prep, listings, PPC',
    hero_description: 'Launch Hub is a U.S.-based operations team with real infrastructure: China sourcing & quality control, DDP logistics to the U.S., our own prep center in Orlando, and in-house listing and PPC specialists.',
    hero_cta: 'Get pricing & availability',
    hero_multilingual: 'Multilingual support: English | Ukrainian | Russian',
    badge_trademarks: '10+ U.S. Trademarks',
    badge_prep: 'Own Prep Center',
    badge_qc: 'China QC Agent',
    badge_logistics: 'DDP Logistics',
    services_title: 'What we do',
    service1_title: 'Private Label & Wholesale Research',
    service1_item1: 'product validation',
    service1_item2: 'unit economics',
    service1_item3: 'competitor analysis',
    service2_title: 'Supplier Sourcing & Negotiation',
    service2_item1: 'factories & distributors',
    service2_item2: 'QC agent in China',
    service2_item3: 'price optimization',
    service3_title: 'Logistics to U.S. (DDP)',
    service3_item1: 'import handling',
    service3_item2: 'timeline control',
    service3_item3: 'preferred partners',
    service4_title: 'Listing Creation',
    service4_item1: 'photo + studio + 3D',
    service4_item2: 'A+ content',
    service4_item3: 'SEO & conversion copy',
    service5_title: 'PPC & Launch',
    service5_item1: 'campaign setup',
    service5_item2: 'scaling with profit guards',
    service6_title: 'Analytics & Reporting',
    service6_item1: 'dashboards',
    service6_item2: 'margins & inventory control',
    prep_title: 'Orlando Prep Center',
    prep_subtitle: 'Our own warehouse facility in Orlando, Florida',
    prep_feature1: 'Video receiving reports',
    prep_feature2: 'Bundling & labeling',
    prep_feature3: 'Quality control inspection',
    prep_feature4: 'FBA prep services',
    prep_feature5: 'Inventory management',
    prep_feature6: 'Fast turnaround times',
    infrastructure_title: 'Real infrastructure, not just promises',
    infrastructure1: '10+ registered U.S. trademarks',
    infrastructure2: 'Exclusive supplier contracts',
    infrastructure3: 'Own prep center in Orlando',
    stories_title: 'Success Stories',
    stories_subtitle: 'Real results from real clients who trusted us to transform their Amazon business',
  },
  ru: {
    nav_home: 'Главная',
    nav_services: 'Услуги',
    nav_prep: 'Prep-центр',
    nav_stories: 'Истории успеха',
    nav_contact: 'Контакты',
    hero_title: 'Launch Hub',
    hero_subtitle: 'Полный цикл операций: исследование, поиск поставщиков, подготовка, листинги, PPC',
    hero_description: 'Launch Hub — это команда операторов из США с реальной инфраструктурой: поиск поставщиков и контроль качества в Китае, DDP логистика в США, собственный prep-центр в Орландо и специалисты по листингам и PPC.',
    hero_cta: 'Узнать цены и доступность',
    hero_multilingual: 'Многоязычная поддержка: Английский | Украинский | Русский',
    badge_trademarks: '10+ торговых марок США',
    badge_prep: 'Собственный Prep-центр',
    badge_qc: 'QC агент в Китае',
    badge_logistics: 'DDP Логистика',
    services_title: 'Что мы делаем',
    service1_title: 'Исследование Private Label и Wholesale',
    service1_item1: 'валидация продукта',
    service1_item2: 'юнит-экономика',
    service1_item3: 'анализ конкурентов',
    service2_title: 'Поиск и переговоры с поставщиками',
    service2_item1: 'фабрики и дистрибьюторы',
    service2_item2: 'QC агент в Китае',
    service2_item3: 'оптимизация цен',
    service3_title: 'Логистика в США (DDP)',
    service3_item1: 'таможенное оформление',
    service3_item2: 'контроль сроков',
    service3_item3: 'проверенные партнеры',
    service4_title: 'Создание листингов',
    service4_item1: 'фото + студия + 3D',
    service4_item2: 'A+ контент',
    service4_item3: 'SEO и конверсионные тексты',
    service5_title: 'PPC и запуск',
    service5_item1: 'настройка кампаний',
    service5_item2: 'масштабирование с защитой прибыли',
    service6_title: 'Аналитика и отчетность',
    service6_item1: 'дашборды',
    service6_item2: 'контроль маржи и запасов',
    prep_title: 'Prep-центр в Орландо',
    prep_subtitle: 'Наш собственный склад в Орландо, Флорида',
    prep_feature1: 'Видео-отчеты о приемке',
    prep_feature2: 'Комплектация и маркировка',
    prep_feature3: 'Контроль качества',
    prep_feature4: 'FBA prep услуги',
    prep_feature5: 'Управление запасами',
    prep_feature6: 'Быстрые сроки обработки',
    infrastructure_title: 'Реальная инфраструктура, а не обещания',
    infrastructure1: '10+ зарегистрированных торговых марок США',
    infrastructure2: 'Эксклюзивные контракты с поставщиками',
    infrastructure3: 'Собственный prep-центр в Орландо',
    stories_title: 'Истории успеха',
    stories_subtitle: 'Реальные результаты реальных клиентов, которые доверили нам развитие своего Amazon бизнеса',
  },
  ua: {
    nav_home: 'Головна',
    nav_services: 'Послуги',
    nav_prep: 'Prep-центр',
    nav_stories: 'Історії успіху',
    nav_contact: 'Контакти',
    hero_title: 'Launch Hub',
    hero_subtitle: 'Повний цикл операцій: дослідження, пошук постачальників, підготовка, лістинги, PPC',
    hero_description: 'Launch Hub — це команда операторів зі США з реальною інфраструктурою: пошук постачальників та контроль якості в Китаї, DDP логістика до США, власний prep-центр в Орландо та фахівці з лістингів та PPC.',
    hero_cta: 'Дізнатися ціни та доступність',
    hero_multilingual: 'Багатомовна підтримка: Англійська | Українська | Російська',
    badge_trademarks: '10+ торгових марок США',
    badge_prep: 'Власний Prep-центр',
    badge_qc: 'QC агент в Китаї',
    badge_logistics: 'DDP Логістика',
    services_title: 'Що ми робимо',
    service1_title: 'Дослідження Private Label та Wholesale',
    service1_item1: 'валідація продукту',
    service1_item2: 'юніт-економіка',
    service1_item3: 'аналіз конкурентів',
    service2_title: 'Пошук та переговори з постачальниками',
    service2_item1: 'фабрики та дистриб\'ютори',
    service2_item2: 'QC агент в Китаї',
    service2_item3: 'оптимізація цін',
    service3_title: 'Логістика до США (DDP)',
    service3_item1: 'митне оформлення',
    service3_item2: 'контроль термінів',
    service3_item3: 'перевірені партнери',
    service4_title: 'Створення лістингів',
    service4_item1: 'фото + студія + 3D',
    service4_item2: 'A+ контент',
    service4_item3: 'SEO та конверсійні тексти',
    service5_title: 'PPC та запуск',
    service5_item1: 'налаштування кампаній',
    service5_item2: 'масштабування із захистом прибутку',
    service6_title: 'Аналітика та звітність',
    service6_item1: 'дашборди',
    service6_item2: 'контроль маржі та запасів',
    prep_title: 'Prep-центр в Орландо',
    prep_subtitle: 'Наш власний склад в Орландо, Флорида',
    prep_feature1: 'Відео-звіти про приймання',
    prep_feature2: 'Комплектація та маркування',
    prep_feature3: 'Контроль якості',
    prep_feature4: 'FBA prep послуги',
    prep_feature5: 'Управління запасами',
    prep_feature6: 'Швидкі терміни обробки',
    infrastructure_title: 'Реальна інфраструктура, а не обіцянки',
    infrastructure1: '10+ зареєстрованих торгових марок США',
    infrastructure2: 'Ексклюзивні контракти з постачальниками',
    infrastructure3: 'Власний prep-центр в Орландо',
    stories_title: 'Історії успіху',
    stories_subtitle: 'Реальні результати реальних клієнтів, які довірили нам розвиток свого Amazon бізнесу',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
