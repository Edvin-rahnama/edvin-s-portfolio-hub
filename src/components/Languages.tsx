import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';

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
    <section id="languages" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* This section was the only one without a heading, which left a gap at
            05 in the running section index. */}
        <SectionHeading
          index="05"
          label={t('languages.eyebrow')}
          title={t('languages.title')}
          className="max-w-4xl mx-auto"
        />
        <div ref={ref} className={`max-w-4xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`}>
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
