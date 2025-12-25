import { GraduationCap, Calendar, MapPin, BookOpen, Award, Star } from 'lucide-react';
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
    current: true,
    highlights: {
      en: [
        'Advanced studies in machine learning algorithms, statistical modeling, and deep learning architectures (CNNs, RNNs, Transformers).',
        'Big data processing with Spark and Hadoop, cloud computing on AWS.',
        'Focus on real-world applications through collaboration with industry partners and practical projects addressing real business challenges.',
        'Developed expertise in data management, analytics, and ethical use of data across various domains.',
      ],
      de: [
        'Fortgeschrittene Studien in Machine-Learning-Algorithmen, statistische Modellierung und Deep-Learning-Architekturen (CNNs, RNNs, Transformers).',
        'Big-Data-Verarbeitung mit Spark und Hadoop, Cloud Computing auf AWS.',
        'Fokus auf praktische Anwendungen durch Zusammenarbeit mit Industriepartnern und Projekte zu realen Geschäftsherausforderungen.',
        'Entwicklung von Expertise in Datenmanagement, Analytics und ethischer Datennutzung in verschiedenen Bereichen.',
      ],
      es: [
        'Estudios avanzados en algoritmos de machine learning, modelado estadístico y arquitecturas de deep learning (CNNs, RNNs, Transformers).',
        'Procesamiento de big data con Spark y Hadoop, computación en la nube en AWS.',
        'Enfoque en aplicaciones del mundo real a través de colaboración con socios de la industria.',
        'Desarrollo de expertise en gestión de datos, analytics y uso ético de datos.',
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
    current: false,
    gpa: '1.6',
    accreditation: 'ASIIN Accredited • Euro-Inf Quality Label',
    highlights: {
      en: [
        'Comprehensive coursework in structured programming, database management (Oracle, MySQL, PostgreSQL), computer networks, operating systems, and software engineering.',
        'Developed strong analytical, problem-solving, and technical skills through hands-on projects and a graduation thesis.',
        'Accredited by ASIIN and awarded the Euro-Inf quality label, ensuring high international education standards.',
      ],
      de: [
        'Umfassendes Studium in strukturierter Programmierung, Datenbankmanagement (Oracle, MySQL, PostgreSQL), Computernetzwerke, Betriebssysteme und Software-Engineering.',
        'Entwicklung starker analytischer, problemlösender und technischer Fähigkeiten durch praktische Projekte und Abschlussarbeit.',
        'Von ASIIN akkreditiert und mit dem Euro-Inf Qualitätssiegel ausgezeichnet, das hohe internationale Bildungsstandards gewährleistet.',
      ],
      es: [
        'Estudios completos en programación estructurada, gestión de bases de datos (Oracle, MySQL, PostgreSQL), redes de computadoras, sistemas operativos e ingeniería de software.',
        'Desarrollo de fuertes habilidades analíticas, de resolución de problemas y técnicas a través de proyectos prácticos y tesis de graduación.',
        'Acreditado por ASIIN y premiado con el sello de calidad Euro-Inf.',
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
    <section id="education" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-0 w-48 h-48 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-2xl" />
      
      {/* Decorative academic elements */}
      <div className="absolute top-32 right-32 w-20 h-20 border border-primary/10 rounded-full hidden lg:block animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-16 w-12 h-12 border-2 border-primary/10 rotate-45 hidden lg:block" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4 animate-fade-in border border-primary/20">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display animate-fade-in">
            {t('education.title')}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building a strong foundation in data science, machine learning, and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 animate-slide-up group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 shrink-0 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-semibold font-display group-hover:text-primary transition-colors duration-300">
                        {edu.degree[language]}
                      </h3>
                      {edu.current && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-mono">
                          <Star className="w-3 h-3" />
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium text-lg">{edu.institution}</p>
                    {edu.accreditation && (
                      <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-500" />
                        {edu.accreditation}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-sm text-muted-foreground shrink-0">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-mono">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{edu.location[language]}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-mono">
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* What I Learned */}
              <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-muted/70 to-muted/30 border border-border/50 group-hover:border-primary/20 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{t('education.learned')}</span>
                </div>
                <ul className="space-y-3">
                  {edu.highlights[language].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground group/item">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-primary-glow mt-1.5 shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                      <span className="group-hover/item:text-foreground transition-colors duration-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3 font-medium">{t('education.focus')}:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.focus[language].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm bg-accent/50 text-accent-foreground rounded-full font-mono hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 hover:shadow-md border border-border/50 hover:border-primary"
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
