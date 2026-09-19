import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';

/**
 * CEFR levels rather than invented percentages. The previous version drew four
 * 112px progress rings at 85/70/80/100%, which implied a precision that does
 * not exist — "Persian 100%" and "English 85%" are not measurements. The CV
 * states English C1 and German B2; the other two are native/fluent.
 */
const languages = [
  { key: 'languages.english', level: 'C1', note: 'Fluent', fill: 5 },
  { key: 'languages.german', level: 'B2', note: 'Working toward C1', fill: 4 },
  { key: 'languages.turkish', level: '—', note: 'Fluent', fill: 5 },
  { key: 'languages.persian', level: '—', note: 'Native', fill: 6 },
];

const STEPS = 6;

export function Languages() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLUListElement>();

  return (
    <section id="languages" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="05"
          label={t('languages.eyebrow')}
          title={t('languages.title')}
          className="max-w-4xl mx-auto"
        />

        <ul
          ref={ref}
          className={`scroll-reveal mx-auto grid max-w-4xl gap-x-12 gap-y-6 sm:grid-cols-2 ${
            isVisible ? 'visible' : ''
          }`}
        >
          {languages.map((lang) => (
            <li key={lang.key} className="flex items-baseline gap-4 border-b border-border pb-4">
              <span className="min-w-0 flex-1 font-medium">{t(lang.key)}</span>

              <span className="flex shrink-0 gap-1" aria-hidden="true">
                {Array.from({ length: STEPS }, (_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-4 rounded-full ${
                      i < lang.fill ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </span>

              <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                {lang.level !== '—' ? lang.level : lang.note}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-5 max-w-4xl font-mono text-xs text-muted-foreground">
          CEFR levels where assessed · German B2, actively working toward C1
        </p>
      </div>
    </section>
  );
}
