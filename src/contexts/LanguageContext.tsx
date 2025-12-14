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
    'skills.soft.collaboration': 'Collaboration and Teamwork',
    'skills.soft.time': 'Time Management',
    'skills.soft.attention': 'Attention to Detail',
    'skills.soft.patience': 'Patience',
    'skills.soft.flexibility': 'Flexibility',
    'skills.soft.problem': 'Problem-solving',
    'skills.soft.eager': 'Eager to Learn',

    // Education
    'education.title': 'Education',
    'education.focus': 'Focus Areas',
    'education.learned': 'What I Learned',
    'education.master.desc': 'Advanced studies in machine learning algorithms, statistical modeling, big data processing with Spark and Hadoop, deep learning architectures (CNNs, RNNs, Transformers), cloud computing on AWS, and data visualization techniques.',
    'education.bachelor.desc': 'Comprehensive coursework in structured programming, database management (Oracle, MySQL, PostgreSQL), computer networks, operating systems, and software engineering. Developed strong analytical and problem-solving skills through hands-on projects. Accredited by ASIIN with Euro-Inf quality label. GPA: 1.6',

    // Certifications
    'certifications.title': 'Certifications',

    // Downloads
    'downloads.title': 'Downloads',
    'downloads.cv_en': 'CV (English)',
    'downloads.cv_en.desc': 'Download my complete CV in English with detailed work history and qualifications.',
    'downloads.cv_de': 'CV (German)',
    'downloads.cv_de.desc': 'Download my complete CV in German with detailed work history and qualifications.',
    'downloads.certifications': 'Certifications',
    'downloads.certifications.desc': 'Download all my professional certifications from DataCamp, SAP, and more.',
    'downloads.recommendations': 'Letters of Recommendation',
    'downloads.recommendations.desc': 'Download recommendation letters from previous employers and academic institutions.',
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
    'skills.soft.collaboration': 'Zusammenarbeit und Teamarbeit',
    'skills.soft.time': 'Zeitmanagement',
    'skills.soft.attention': 'Detailgenauigkeit',
    'skills.soft.patience': 'Geduld',
    'skills.soft.flexibility': 'Flexibilität',
    'skills.soft.problem': 'Problemlösung',
    'skills.soft.eager': 'Lernbereitschaft',

    // Education
    'education.title': 'Ausbildung',
    'education.focus': 'Schwerpunkte',
    'education.learned': 'Was ich gelernt habe',
    'education.master.desc': 'Fortgeschrittene Studien in Machine-Learning-Algorithmen, statistische Modellierung, Big-Data-Verarbeitung mit Spark und Hadoop, Deep-Learning-Architekturen (CNNs, RNNs, Transformers), Cloud Computing auf AWS und Datenvisualisierungstechniken.',
    'education.bachelor.desc': 'Umfassendes Studium in strukturierter Programmierung, Datenbankmanagement (Oracle, MySQL, PostgreSQL), Computernetzwerke, Betriebssysteme und Software-Engineering. Entwicklung starker analytischer und problemlösender Fähigkeiten durch praktische Projekte. Von ASIIN akkreditiert mit Euro-Inf Qualitätssiegel. GPA: 1.6',

    // Certifications
    'certifications.title': 'Zertifikate',

    // Downloads
    'downloads.title': 'Downloads',
    'downloads.cv_en': 'Lebenslauf (Englisch)',
    'downloads.cv_en.desc': 'Laden Sie meinen vollständigen Lebenslauf auf Englisch mit detailliertem Werdegang und Qualifikationen herunter.',
    'downloads.cv_de': 'Lebenslauf (Deutsch)',
    'downloads.cv_de.desc': 'Laden Sie meinen vollständigen Lebenslauf auf Deutsch mit detailliertem Werdegang und Qualifikationen herunter.',
    'downloads.certifications': 'Zertifikate',
    'downloads.certifications.desc': 'Laden Sie alle meine beruflichen Zertifikate von DataCamp, SAP und mehr herunter.',
    'downloads.recommendations': 'Empfehlungsschreiben',
    'downloads.recommendations.desc': 'Laden Sie Empfehlungsschreiben von früheren Arbeitgebern und akademischen Institutionen herunter.',
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
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.education': 'Educación',
    'nav.certifications': 'Certificaciones',
    'nav.downloads': 'Descargas',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Científico de Datos y Desarrollador de Software',
    'hero.description': 'Científico de datos y desarrollador de software experimentado con una sólida base en Machine Learning, automatización basada en datos y sistemas de software escalables. Experto en construir modelos ML, optimizar pipelines de datos y desarrollar automatizaciones de flujos de trabajo.',
    'hero.cta.contact': 'Contactar',
    'hero.cta.cv': 'Descargar CV',
    'hero.location': 'Kiel, Alemania',

    // Experience
    'experience.title': 'Experiencia Profesional',
    'experience.present': 'Presente',

    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.data': 'Datos y Programación',
    'skills.devops': 'DevOps y Cloud',
    'skills.web': 'Web y Frontend',
    'skills.bi': 'BI y Analítica',
    'skills.soft': 'Habilidades Blandas',
    'skills.soft.collaboration': 'Colaboración y Trabajo en Equipo',
    'skills.soft.time': 'Gestión del Tiempo',
    'skills.soft.attention': 'Atención al Detalle',
    'skills.soft.patience': 'Paciencia',
    'skills.soft.flexibility': 'Flexibilidad',
    'skills.soft.problem': 'Resolución de Problemas',
    'skills.soft.eager': 'Ganas de Aprender',

    // Education
    'education.title': 'Educación',
    'education.focus': 'Áreas de Enfoque',
    'education.learned': 'Lo que Aprendí',
    'education.master.desc': 'Estudios avanzados en algoritmos de machine learning, modelado estadístico, procesamiento de big data con Spark y Hadoop, arquitecturas de deep learning (CNNs, RNNs, Transformers), computación en la nube en AWS y técnicas de visualización de datos.',
    'education.bachelor.desc': 'Estudios completos en programación estructurada, gestión de bases de datos (Oracle, MySQL, PostgreSQL), redes de computadoras, sistemas operativos e ingeniería de software. Desarrollo de fuertes habilidades analíticas y de resolución de problemas a través de proyectos prácticos. Acreditado por ASIIN con sello de calidad Euro-Inf. GPA: 1.6',

    // Certifications
    'certifications.title': 'Certificaciones',

    // Downloads
    'downloads.title': 'Descargas',
    'downloads.cv_en': 'CV (Inglés)',
    'downloads.cv_en.desc': 'Descarga mi CV completo en inglés con historial laboral detallado y cualificaciones.',
    'downloads.cv_de': 'CV (Alemán)',
    'downloads.cv_de.desc': 'Descarga mi CV completo en alemán con historial laboral detallado y cualificaciones.',
    'downloads.certifications': 'Certificaciones',
    'downloads.certifications.desc': 'Descarga todas mis certificaciones profesionales de DataCamp, SAP y más.',
    'downloads.recommendations': 'Cartas de Recomendación',
    'downloads.recommendations.desc': 'Descarga cartas de recomendación de empleadores anteriores e instituciones académicas.',
    'downloads.button': 'Descargar',

    // Contact
    'contact.title': 'Contáctame',
    'contact.subtitle': 'Siempre estoy abierto a discutir nuevas oportunidades, colaboraciones o simplemente charlar sobre ciencia de datos y tecnología.',
    'contact.email': 'Correo',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    // Languages
    'languages.title': 'Idiomas',
    'languages.english': 'Inglés — C1',
    'languages.german': 'Alemán — B2',
    'languages.turkish': 'Turco',
    'languages.persian': 'Persa (Nativo)',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',

    // Theme
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.system': 'Sistema',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language | null;
    return saved === 'de' ? 'de' : 'en';
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
