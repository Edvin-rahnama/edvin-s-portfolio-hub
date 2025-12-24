import { Code2, Cloud, Globe, BarChart3, Users, CheckCircle2, Cpu, Database, Server, Terminal, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const skillCategories = [
  {
    key: 'skills.data',
    icon: Code2,
    gradient: 'from-blue-500/20 to-cyan-500/20',
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
    gradient: 'from-purple-500/20 to-pink-500/20',
    skills: [
      'Docker',
      'Kubernetes',
      'Terraform',
      'Linux',
      'Git',
      'AWS Cloud',
      'Grafana',
      'ELK Stack',
      'Nginx',
      'Zabbix',
      'GitHub Actions',
      'Airflow',
    ],
  },
  {
    key: 'skills.web',
    icon: Globe,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    skills: ['HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'Vue.js', 'Node.js', 'Django', 'Flask'],
  },
  {
    key: 'skills.bi',
    icon: BarChart3,
    gradient: 'from-amber-500/20 to-orange-500/20',
    skills: ['Power BI', 'Data Visualization', 'Statistics', 'Data Pipelines', 'ETL', 'GDPR Basics'],
  },
  {
    key: 'skills.soft',
    icon: Users,
    gradient: 'from-rose-500/20 to-red-500/20',
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
      {/* Enhanced background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4 animate-fade-in">
            <Cpu className="w-4 h-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display animate-fade-in">
            {t('skills.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const skills = Array.isArray(category.skills)
              ? category.skills
              : category.skills[language];

            return (
              <div
                key={category.key}
                className="glass-card rounded-2xl p-6 animate-scale-in group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-display group-hover:text-primary transition-colors duration-300">{t(category.key)}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm bg-secondary/80 text-secondary-foreground rounded-full font-mono transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-md flex items-center gap-1.5 cursor-default border border-border/50 hover:border-primary"
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                        <CheckCircle2 className="w-3 h-3 text-primary group-hover:text-current transition-colors duration-300" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
