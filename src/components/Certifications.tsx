import { Award, ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const certifications = [
  { name: 'Introduction to LLMs in Python', category: 'AI/ML', issuer: 'DataCamp' },
  { name: 'AWS Cloud Technology and Services', category: 'Cloud', issuer: 'DataCamp' },
  { name: 'Data Driven Decision Making for Business', category: 'Analytics', issuer: 'DataCamp' },
  { name: 'Introduction to MLflow', category: 'MLOps', issuer: 'DataCamp' },
  { name: 'Introduction to Kafka', category: 'Data Engineering', issuer: 'DataCamp' },
  { name: 'Power BI for End Users', category: 'BI', issuer: 'DataCamp' },
  { name: 'Developing AI Models with ML Clients for SAP HANA', category: 'AI/ML', issuer: 'SAP' },
  { name: 'Intermediate Python for Finance', category: 'Finance', issuer: 'DataCamp' },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'AI/ML': { bg: 'bg-violet-500/10', text: 'text-violet-600 dark:text-violet-400', border: 'border-violet-500/30' },
  Cloud: { bg: 'bg-sky-500/10', text: 'text-sky-600 dark:text-sky-400', border: 'border-sky-500/30' },
  Analytics: { bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-500/30' },
  MLOps: { bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500/30' },
  'Data Engineering': { bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-500/30' },
  BI: { bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/30' },
  Finance: { bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-500/30' },
};

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4 animate-fade-in">
            <Award className="w-4 h-4" />
            <span>Professional Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display animate-fade-in">
            {t('certifications.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const colors = categoryColors[cert.category] || { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border' };
            
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-5 animate-scale-in group relative overflow-hidden hover:shadow-glow transition-all duration-500"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${colors.bg} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl ${colors.bg} shrink-0 group-hover:scale-110 transition-all duration-300`}>
                      <Award className={`w-4 h-4 ${colors.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium mb-1 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full font-mono ${colors.bg} ${colors.text} border ${colors.border} transition-all duration-300 hover:scale-105`}
                  >
                    {cert.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
