import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.certifications': 'Certifications',
    'nav.downloads': 'Downloads',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Data Scientist & Software Developer',
    'hero.description': 'Experienced Data Scientist and Software Developer with a strong foundation in Machine Learning, data-driven automation, and scalable software systems. Skilled in building ML models, optimizing data pipelines, and developing workflow automations in cloud and on-premise environments.',
    'hero.cta.contact': 'Get in Touch',
    'hero.cta.cv': 'Download CV',
    'hero.location': 'Kiel, Germany',

    // Experience
    'experience.title': 'Professional Experience',
    'experience.present': 'Present',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.data': 'Data & Programming',
    'skills.devops': 'DevOps & Cloud',
    'skills.web': 'Web & Frontend',
    'skills.bi': 'BI & Analytics',
    'skills.soft': 'Soft Skills',

    // Education
    'education.title': 'Education',
    'education.focus': 'Focus Areas',

    // Certifications
    'certifications.title': 'Certifications',

    // Downloads
    'downloads.title': 'Downloads',
    'downloads.cv': 'Curriculum Vitae',
    'downloads.cv.desc': 'Download my complete CV with detailed work history and qualifications.',
    'downloads.button': 'Download',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': "I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and technology.",
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    // Languages
    'languages.title': 'Languages',
    'languages.english': 'English — C1',
    'languages.german': 'German — B2',
    'languages.turkish': 'Turkish',
    'languages.persian': 'Persian (Native)',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Theme
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.experience': 'Erfahrung',
    'nav.skills': 'Fähigkeiten',
    'nav.education': 'Ausbildung',
    'nav.certifications': 'Zertifikate',
    'nav.downloads': 'Downloads',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.greeting': 'Hallo, ich bin',
    'hero.role': 'Data Scientist & Softwareentwickler',
    'hero.description': 'Erfahrener Data Scientist und Softwareentwickler mit einer starken Grundlage in Machine Learning, datengetriebener Automatisierung und skalierbaren Softwaresystemen. Versiert im Aufbau von ML-Modellen, der Optimierung von Datenpipelines und der Entwicklung von Workflow-Automatisierungen.',
    'hero.cta.contact': 'Kontaktieren',
    'hero.cta.cv': 'Lebenslauf herunterladen',
    'hero.location': 'Kiel, Deutschland',

    // Experience
    'experience.title': 'Berufliche Erfahrung',
    'experience.present': 'Heute',

    // Skills
    'skills.title': 'Technische Fähigkeiten',
    'skills.data': 'Daten & Programmierung',
    'skills.devops': 'DevOps & Cloud',
    'skills.web': 'Web & Frontend',
    'skills.bi': 'BI & Analytics',
    'skills.soft': 'Soft Skills',

    // Education
    'education.title': 'Ausbildung',
    'education.focus': 'Schwerpunkte',

    // Certifications
    'certifications.title': 'Zertifikate',

    // Downloads
    'downloads.title': 'Downloads',
    'downloads.cv': 'Lebenslauf',
    'downloads.cv.desc': 'Laden Sie meinen vollständigen Lebenslauf mit detailliertem Werdegang und Qualifikationen herunter.',
    'downloads.button': 'Herunterladen',

    // Contact
    'contact.title': 'Kontakt aufnehmen',
    'contact.subtitle': 'Ich bin immer offen für Gespräche über neue Möglichkeiten, Kooperationen oder einfach einen Austausch über Data Science und Technologie.',
    'contact.email': 'E-Mail',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    // Languages
    'languages.title': 'Sprachen',
    'languages.english': 'Englisch — C1',
    'languages.german': 'Deutsch — B2',
    'languages.turkish': 'Türkisch',
    'languages.persian': 'Persisch (Muttersprache)',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',

    // Theme
    'theme.light': 'Hell',
    'theme.dark': 'Dunkel',
    'theme.system': 'System',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
