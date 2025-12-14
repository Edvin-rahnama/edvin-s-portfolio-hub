import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const education = [
  {
    degree: { 
      en: 'Master of Science in Data Science', 
      de: 'Master of Science in Data Science',
      es: 'Maestría en Ciencia de Datos'
    },
    institution: 'Kiel University of Applied Sciences',
    location: { en: 'Kiel, Germany', de: 'Kiel, Deutschland', es: 'Kiel, Alemania' },
    period: '09/2022 – 12/2025',
    focus: {
      en: ['Machine Learning', 'Data Visualization', 'Big Data', 'Deep Learning', 'Cloud Computing'],
      de: ['Machine Learning', 'Datenvisualisierung', 'Big Data', 'Deep Learning', 'Cloud Computing'],
      es: ['Machine Learning', 'Visualización de Datos', 'Big Data', 'Deep Learning', 'Cloud Computing'],
    },
    descriptionKey: 'education.master.desc',
  },
  {
    degree: {
      en: 'Bachelor of Science in Information Technologies',
      de: 'Bachelor of Science in Informationstechnologie',
      es: 'Licenciatura en Tecnologías de la Información',
    },
    institution: 'Eastern Mediterranean University',
    location: { en: 'Famagusta, Cyprus', de: 'Famagusta, Zypern', es: 'Famagusta, Chipre' },
    period: '02/2018 – 07/2021',
    focus: {
      en: ['Programming', 'Databases', 'Networks', 'Operating Systems', 'Software Engineering'],
      de: ['Programmierung', 'Datenbanken', 'Netzwerke', 'Betriebssysteme', 'Software Engineering'],
      es: ['Programación', 'Bases de Datos', 'Redes', 'Sistemas Operativos', 'Ingeniería de Software'],
    },
    descriptionKey: 'education.bachelor.desc',
  },
];

export function Education() {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          {t('education.title')}
        </h2>

        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-display mb-1">
                      {edu.degree[language]}
                    </h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location[language]}</span>
                  </div>
                </div>
              </div>

              {/* What I Learned */}
              <div className="mb-6 p-4 rounded-xl bg-muted/50">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{t('education.learned')}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(edu.descriptionKey)}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">{t('education.focus')}:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.focus[language].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-sm bg-accent text-accent-foreground rounded-full font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
