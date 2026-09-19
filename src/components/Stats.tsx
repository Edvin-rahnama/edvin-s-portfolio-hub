import { Briefcase, Code2, Languages as LanguagesIcon, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * Credibility band between the hero and the experience timeline.
 *
 * Every figure is derived from the CV rather than invented:
 *   6+  — Ratin (Jan 2017) through to today
 *   6   — Ratin, EMU, Satrap, 80s80s, t2consult, Hereon
 *   4   — English (C1), German (B2), Turkish, Persian
 *   2026 — M.Sc. Data Science, Kiel UAS
 */
const stats = [
  { icon: Briefcase, value: '6+', labelEn: 'Years in industry', labelDe: 'Jahre Berufserfahrung' },
  { icon: Code2, value: '6', labelEn: 'Engineering roles', labelDe: 'Technische Rollen' },
  { icon: LanguagesIcon, value: '4', labelEn: 'Languages spoken', labelDe: 'Sprachen' },
  { icon: GraduationCap, value: '2026', labelEn: 'M.Sc. Data Science', labelDe: 'M.Sc. Data Science' },
];

export function Stats() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  // The lift into the hero only applies from lg up. On mobile the hero runs
  // right down to the profile photo, so a negative margin clipped its lower edge.
  return (
    <section aria-label="Career at a glance" className="relative pb-4 pt-10 lg:-mt-4 lg:pt-0">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`scroll-reveal mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft lg:grid-cols-4 ${
            isVisible ? 'visible' : ''
          }`}
        >
          {stats.map(({ icon: Icon, value, labelEn, labelDe }) => (
            <div
              key={labelEn}
              className="group flex flex-col items-center gap-1.5 bg-card px-4 py-7 transition-colors duration-300 hover:bg-accent/40"
            >
              <Icon
                className="mb-1 h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <span className="font-display text-3xl font-bold tabular-nums text-foreground md:text-4xl">
                {value}
              </span>
              <span className="text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {language === 'de' ? labelDe : labelEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
