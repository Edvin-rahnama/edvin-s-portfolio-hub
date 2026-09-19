import { Code2, Cloud, Globe, BarChart3, Users, Cpu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';

/** `core` marks the skills worth leading with, so a recruiter's eye lands on
 *  Python and AWS rather than on "Patience". Everything else stays secondary. */
type Skill = { name: string; core?: boolean };

type Category = {
  key: string;
  icon: typeof Code2;
  accent: string;
  span?: boolean;
  skills: Skill[] | Record<string, Skill[]>;
};

const skillCategories: Category[] = [
  {
    key: 'skills.data',
    icon: Code2,
    accent: 'from-sky-500/15 to-cyan-500/10',
    skills: [
      // The original shipped one 60-character chip listing six libraries, which
      // wrapped to two lines and knocked its icon out of alignment. Split out.
      { name: 'Python', core: true },
      { name: 'SQL', core: true },
      { name: 'Scikit-learn', core: true },
      { name: 'TensorFlow', core: true },
      { name: 'NLP' },
      { name: 'Django' },
      { name: 'Flask' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Oracle' },
      { name: 'MongoDB' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'PHP' },
      { name: 'C/C++' },
      { name: 'R' },
    ],
  },
  {
    key: 'skills.devops',
    icon: Cloud,
    accent: 'from-violet-500/15 to-fuchsia-500/10',
    skills: [
      { name: 'AWS Cloud', core: true },
      { name: 'Docker', core: true },
      { name: 'Kubernetes', core: true },
      { name: 'Terraform', core: true },
      { name: 'Linux', core: true },
      { name: 'Git' },
      { name: 'GitHub Actions' },
      { name: 'Airflow' },
      { name: 'Grafana' },
      { name: 'ELK Stack' },
      { name: 'Nginx' },
      { name: 'Zabbix' },
    ],
  },
  {
    key: 'skills.web',
    icon: Globe,
    accent: 'from-emerald-500/15 to-teal-500/10',
    skills: [
      { name: 'Node.js', core: true },
      { name: 'Vue.js' },
      { name: 'TailwindCSS' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Bootstrap' },
      { name: 'Django' },
      { name: 'Flask' },
    ],
  },
  {
    key: 'skills.bi',
    icon: BarChart3,
    accent: 'from-amber-500/15 to-orange-500/10',
    skills: [
      { name: 'Power BI', core: true },
      { name: 'ETL', core: true },
      { name: 'Data Pipelines', core: true },
      { name: 'Data Visualization' },
      { name: 'Statistics' },
      { name: 'GDPR (basics)' },
    ],
  },
  {
    key: 'skills.soft',
    icon: Users,
    accent: 'from-rose-500/15 to-red-500/10',
    span: true,
    skills: {
      en: [
        { name: 'Collaboration & Teamwork' },
        { name: 'Problem Solving' },
        { name: 'Time Management' },
        { name: 'Attention to Detail' },
        { name: 'Flexibility' },
        { name: 'Willingness to Learn' },
        { name: 'Patience' },
      ],
      de: [
        { name: 'Zusammenarbeit & Teamarbeit' },
        { name: 'Problemlösung' },
        { name: 'Zeitmanagement' },
        { name: 'Aufmerksamkeit für Details' },
        { name: 'Flexibilität' },
        { name: 'Lernbereitschaft' },
        { name: 'Geduld' },
      ],
    },
  },
];

export function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          className="max-w-6xl mx-auto"
          index="02"
          label={t('section.expertise')}
          title={t('skills.title')}
          description={t('section.expertise.desc')}
        />

        {/* items-start stops short cards being stretched to the tallest in the
            row, which previously left large dead areas inside the boxes. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.key} category={category} index={index} language={language} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  category,
  index,
  language,
  t,
}: {
  category: Category;
  index: number;
  language: string;
  t: (key: string) => string;
}) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = category.icon;
  const skills: Skill[] = Array.isArray(category.skills)
    ? category.skills
    : category.skills[language] ?? category.skills.en;

  return (
    <div
      ref={ref}
      className={`panel group relative overflow-hidden p-6 scroll-reveal ${
        isVisible ? 'visible' : ''
      } ${category.span ? 'lg:col-span-2' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-primary/10 p-2.5 ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <h3 className="font-display text-lg font-semibold">{t(category.key)}</h3>
          <span className="ml-auto font-mono text-xs tabular-nums text-muted-foreground">
            {skills.length}
          </span>
        </div>

        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className={`rounded-full border px-3 py-1.5 font-mono text-[13px] leading-none transition-colors duration-200 ${
                skill.core
                  ? 'border-primary/35 bg-primary/12 font-medium text-primary'
                  : 'border-border bg-secondary text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
