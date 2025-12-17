import { Code2, Cloud, Globe, BarChart3, Users, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const skillCategories = [
  {
    key: 'skills.data',
    icon: Code2,
    skills: [
      'Python (ML/AI, NLP, Scikit-learn, TensorFlow)',
      'SQL (MySQL, Oracle, PostgreSQL)',
      'NoSQL (MongoDB)',
      'JavaScript',
      'Java',
      'PHP',
      'C/C++',
      'R',
    ],
  },
  {
    key: 'skills.devops',
    icon: Cloud,
    skills: [
      'Docker',
      'Linux',
      'Git',
      'AWS Cloud',
      'Grafana',
      'ELK Stack',
      'Nginx',
      'Zabbix',
      'GitHub Actions',
    ],
  },
  {
    key: 'skills.web',
    icon: Globe,
    skills: ['HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'WordPress', 'Django', 'Flask'],
  },
  {
    key: 'skills.bi',
    icon: BarChart3,
    skills: ['Power BI', 'Data Visualization', 'Statistics', 'Data Pipelines', 'ETL'],
  },
  {
    key: 'skills.soft',
    icon: Users,
    skills: {
      en: [
        'Collaboration & Teamwork',
        'Flexibility',
        'Time Management',
        'Problem Solving',
        'Attention to Detail',
        'Willingness to Learn',
        'Patience',
      ],
      de: [
        'Zusammenarbeit & Teamarbeit',
        'Flexibilität',
        'Zeitmanagement',
        'Problemlösung',
        'Aufmerksamkeit für Details',
        'Lernbereitschaft',
        'Geduld',
      ],
    },
  },
];

export function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16 animate-fade-in">
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const skills = Array.isArray(category.skills)
              ? category.skills
              : category.skills[language];

            return (
              <div
                key={category.key}
                className="glass-card rounded-2xl p-6 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-display group-hover:text-primary transition-colors duration-300">{t(category.key)}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full font-mono transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-md flex items-center gap-1.5 cursor-default"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary group-hover:text-current transition-colors duration-300" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
