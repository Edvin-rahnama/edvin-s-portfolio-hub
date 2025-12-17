import { Languages as LanguagesIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
  { key: 'languages.english', level: 85 },
  { key: 'languages.german', level: 70 },
  { key: 'languages.turkish', level: 80 },
  { key: 'languages.persian', level: 100 },
];

export function Languages() {
  const { t } = useLanguage();

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center animate-fade-in">
            <div className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
              <LanguagesIcon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display">{t('languages.title')}</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {languages.map((lang, index) => (
              <div
                key={lang.key}
                className="glass-card rounded-xl p-4 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium group-hover:text-primary transition-colors duration-300">{t(lang.key)}</span>
                  <span className="text-sm text-muted-foreground font-mono">{lang.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 animate-glow-pulse"
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
