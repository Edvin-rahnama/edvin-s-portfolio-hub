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
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
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
                className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-display">{t(category.key)}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full font-mono transition-colors hover:bg-primary/10 hover:text-primary flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary" />
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
