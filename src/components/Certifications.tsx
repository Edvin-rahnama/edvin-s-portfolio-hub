import { Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const certifications = [
  { name: 'AI Fundamentals', category: 'AI/ML', issuer: 'DataCamp' },
  { name: 'Data Literacy', category: 'Analytics', issuer: 'DataCamp' },
  { name: 'AWS Cloud Technology and Services', category: 'Cloud', issuer: 'DataCamp' },
  { name: 'Data-Driven Decision Making for Business', category: 'Analytics', issuer: 'DataCamp' },
  { name: 'Introduction to LLMs in Python', category: 'AI/ML', issuer: 'DataCamp' },
  { name: 'Introduction to MLflow', category: 'MLOps', issuer: 'DataCamp' },
  { name: 'Introduction to Kafka', category: 'Data Engineering', issuer: 'DataCamp' },
  { name: 'Introduction to Docker', category: 'DevOps', issuer: 'DataCamp' },
  { name: 'Financial Forecasting in Python', category: 'Finance', issuer: 'DataCamp' },
  { name: 'Intermediate Python for Finance', category: 'Finance', issuer: 'DataCamp' },
  { name: 'Power BI for End Users', category: 'BI', issuer: 'DataCamp' },
  { name: 'Developing AI Models with ML Clients for SAP HANA', category: 'AI/ML', issuer: 'SAP' },
  { name: 'Use SAP Integration Suite to design, develop and operate integrations', category: 'Cloud', issuer: 'SAP' },
  { name: 'B.Sc. Information Technology (ASIIN Accredited, Euro-Inf)', category: 'Degree', issuer: 'EMU' },
];

const categoryColors: Record<string, string> = {
  'AI/ML': 'bg-primary/10 text-primary',
  Cloud: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Analytics: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  MLOps: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  'Data Engineering': 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  BI: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Finance: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  DevOps: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  Degree: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
};

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          {t('certifications.title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-5 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1 leading-tight">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <span
                    className={`inline-block px-2 py-0.5 text-xs rounded-full font-mono ${
                      categoryColors[cert.category] || 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {cert.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
