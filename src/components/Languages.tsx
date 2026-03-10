import { Languages as LanguagesIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const languages = [
  { key: 'languages.english', level: 85 },
  { key: 'languages.german', level: 70 },
  { key: 'languages.turkish', level: 80 },
  { key: 'languages.persian', level: 100 },
];

export function Languages() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="languages" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-2xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
              <LanguagesIcon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display">{t('languages.title')}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div
                key={lang.key}
                className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Circular Progress Ring */}
                <div className="relative w-28 h-28 mb-4">
                  <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.3)]">
                    {/* Track */}
                    <circle
                      cx="56"
                      cy="56"
                      r="46"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-secondary/50"
                    />
                    {/* Animated Progress Circle */}
                    <circle
                      cx="56"
                      cy="56"
                      r="46"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 46}
                      strokeDashoffset={isVisible ? (2 * Math.PI * 46) * (1 - lang.level / 100) : 2 * Math.PI * 46}
                      className="text-primary transition-all ease-out"
                      style={{ transitionDuration: '1.5s', transitionDelay: `${index * 0.15}s` }}
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Inner Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold font-mono text-gradient group-hover:scale-110 transition-transform duration-300">
                      {lang.level}%
                    </span>
                  </div>
                </div>

                {/* Language Name */}
                <span className="font-semibold text-lg group-hover:text-primary transition-colors duration-300 relative z-10">
                  {t(lang.key)}
                </span>
                
                {/* Decorative floating dot */}
                <div className="absolute top-4 outline-none right-4 w-1.5 h-1.5 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
