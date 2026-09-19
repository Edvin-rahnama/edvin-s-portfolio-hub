import { ArrowDownToLine, FileText, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';

/**
 * Sizes are taken from the committed files in public/downloads. They are shown
 * because file size is the thing a reader actually wants before clicking, and
 * the previous cards told them nothing — each repeated the word "Download"
 * three times over and ended in an identical heavy accent button.
 *
 * If a PDF is replaced, update its size here.
 */
const downloads = [
  {
    key: 'cv_en',
    icon: FileText,
    path: 'downloads/Edvin-Rahnama-CV-EN.pdf',
    filename: 'Edvin-Rahnama-CV-EN.pdf',
    size: '143 KB',
    primary: true,
  },
  {
    key: 'cv_de',
    icon: FileText,
    path: 'downloads/Edvin-Rahnama-CV-DE.pdf',
    filename: 'Edvin-Rahnama-CV-DE.pdf',
    size: '129 KB',
    primary: true,
  },
  {
    key: 'certifications',
    icon: Award,
    path: 'downloads/Certifications.pdf',
    filename: 'Certifications.pdf',
    size: '3.3 MB',
  },
  {
    key: 'recommendations',
    icon: Users,
    path: 'downloads/Letter-of-Recommendation.pdf',
    filename: 'Letter-of-Recommendation.pdf',
    size: '1.3 MB',
  },
];

export function Downloads() {
  const { t } = useLanguage();
  const base = import.meta.env.BASE_URL;
  const { ref, isVisible } = useScrollReveal<HTMLUListElement>();

  return (
    <section id="downloads" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          className="max-w-4xl mx-auto"
          index="06"
          label={t('downloads.eyebrow')}
          title={t('downloads.title')}
          description={t('downloads.subtitle')}
        />

        <ul
          ref={ref}
          className={`scroll-reveal mx-auto max-w-4xl divide-y divide-border border-y border-border ${
            isVisible ? 'visible' : ''
          }`}
        >
          {downloads.map(({ key, icon: Icon, path, filename, size, primary }) => (
            <li key={key}>
              <a
                href={`${base}${path}`}
                download={filename}
                className="group flex items-center gap-4 py-4 transition-colors duration-200 hover:bg-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon
                  className={`h-5 w-5 shrink-0 ${primary ? 'text-primary' : 'text-muted-foreground'}`}
                  aria-hidden="true"
                />

                <span className="min-w-0 flex-1">
                  <span className="block font-medium leading-snug group-hover:text-primary">
                    {t(`downloads.${key}`)}
                  </span>
                  <span className="mt-0.5 block truncate font-mono text-xs text-muted-foreground">
                    {filename}
                  </span>
                </span>

                <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                  PDF · {size}
                </span>

                <ArrowDownToLine
                  className="h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
