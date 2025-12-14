import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
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
    highlights: {
      en: [
        'Coursework includes Machine Learning, Data Visualization, Big Data Technologies, Deep Learning, and Cloud Computing.',
        'Focus on real-world applications through collaboration with industry partners and practical projects addressing real business challenges.',
        'Developed expertise in data management, analytics, and ethical use of data across various domains.',
      ],
      de: [
        'Kurse umfassen Machine Learning, Datenvisualisierung, Big-Data-Technologien, Deep Learning und Cloud Computing.',
        'Fokus auf praktische Anwendungen durch Zusammenarbeit mit Industriepartnern und Projekte zu realen Geschäftsherausforderungen.',
        'Entwicklung von Expertise in Datenmanagement, Analytics und ethischer Datennutzung in verschiedenen Bereichen.',
      ],
      es: [
        'Cursos incluyen Machine Learning, Visualización de Datos, Tecnologías Big Data, Deep Learning y Cloud Computing.',
        'Enfoque en aplicaciones del mundo real a través de colaboración con socios de la industria y proyectos prácticos.',
        'Desarrollo de expertise en gestión de datos, analytics y uso ético de datos en varios dominios.',
      ],
    },
    focus: {
      en: ['Machine Learning', 'Data Visualization', 'Big Data', 'Deep Learning', 'Cloud Computing'],
      de: ['Machine Learning', 'Datenvisualisierung', 'Big Data', 'Deep Learning', 'Cloud Computing'],
      es: ['Machine Learning', 'Visualización de Datos', 'Big Data', 'Deep Learning', 'Cloud Computing'],
    },
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
    highlights: {
      en: [
        'Comprehensive coursework in programming, database management, computer networks, operating systems, and software engineering.',
        'Developed strong analytical, problem-solving, and technical skills through hands-on projects and a graduation thesis.',
        'Accredited by ASIIN and awarded the Euro-Inf quality label, ensuring high international education standards.',
        'Graduated with GPA: 1.6',
      ],
      de: [
        'Umfassende Kurse in Programmierung, Datenbankmanagement, Computernetzwerke, Betriebssysteme und Software-Engineering.',
        'Entwicklung starker analytischer, problemlösender und technischer Fähigkeiten durch praktische Projekte und Abschlussarbeit.',
        'Von ASIIN akkreditiert und mit dem Euro-Inf Qualitätssiegel ausgezeichnet, das hohe internationale Bildungsstandards gewährleistet.',
        'Abschluss mit GPA: 1.6',
      ],
      es: [
        'Cursos completos en programación, gestión de bases de datos, redes de computadoras, sistemas operativos e ingeniería de software.',
        'Desarrollo de fuertes habilidades analíticas, de resolución de problemas y técnicas a través de proyectos prácticos y tesis de graduación.',
        'Acreditado por ASIIN y premiado con el sello de calidad Euro-Inf, asegurando altos estándares de educación internacional.',
        'Graduado con GPA: 1.6',
      ],
    },
    focus: {
      en: ['Programming', 'Databases', 'Networks', 'Operating Systems', 'Software Engineering'],
      de: ['Programmierung', 'Datenbanken', 'Netzwerke', 'Betriebssysteme', 'Software Engineering'],
      es: ['Programación', 'Bases de Datos', 'Redes', 'Sistemas Operativos', 'Ingeniería de Software'],
    },
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
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{t('education.learned')}</span>
                </div>
                <ul className="space-y-2">
                  {edu.highlights[language].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
