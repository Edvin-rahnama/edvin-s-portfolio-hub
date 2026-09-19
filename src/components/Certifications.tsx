import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';

type Cert = { name: string; category: string; issuer: string; href?: string };

const certifications: Cert[] = [
  {
    name: 'AWS Cloud Technology and Services',
    category: 'Cloud',
    issuer: 'DataCamp',
    href: 'https://www.credly.com/badges/e8e343de-cc55-4b5e-9023-ffc90c538028',
  },
  { name: 'Developing AI Models with ML Clients for SAP HANA', category: 'AI/ML', issuer: 'SAP' },
  { name: 'Introduction to LLMs in Python', category: 'AI/ML', issuer: 'DataCamp' },
  { name: 'Introduction to MLflow', category: 'MLOps', issuer: 'DataCamp' },
  { name: 'Introduction to Kafka', category: 'Data Engineering', issuer: 'DataCamp' },
  { name: 'Data Driven Decision Making for Business', category: 'Analytics', issuer: 'DataCamp' },
  { name: 'Power BI for End Users', category: 'BI', issuer: 'DataCamp' },
  { name: 'Intermediate Python for Finance', category: 'Finance', issuer: 'DataCamp' },
];

export function Certifications() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLUListElement>();

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          className="max-w-4xl mx-auto"
          index="04"
          label={t('section.development')}
          title={t('certifications.title')}
          description={t('section.development.desc')}
        />

        {/* Eight cards on a four-column grid produced two rows of near-identical
            boxes, each with its own tinted corner, for what is really a list.
            A ruled list is slightly taller but reads in one vertical pass and
            lets the category column line up, which the grid could not do. */}
        <ul
          ref={ref}
          className={`scroll-reveal mx-auto max-w-4xl divide-y divide-border border-y border-border ${
            isVisible ? 'visible' : ''
          }`}
        >
          {certifications.map((cert) => {
            const Row = cert.href ? 'a' : 'div';
            return (
              <li key={cert.name}>
                <Row
                  {...(cert.href
                    ? { href: cert.href, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={`group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 py-4 transition-colors duration-200 sm:grid-cols-[7.5rem_1fr_auto] ${
                    cert.href
                      ? 'cursor-pointer hover:bg-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                      : ''
                  }`}
                >
                  <span className="hidden font-mono text-[11px] uppercase tracking-wider text-primary/80 sm:block">
                    {cert.category}
                  </span>
                  <span className="font-medium leading-snug text-pretty group-hover:text-primary">
                    {cert.name}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    {cert.issuer}
                    {cert.href && (
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </Row>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-4 max-w-4xl font-mono text-xs text-muted-foreground">
          {certifications.length} certificates · full PDFs in Downloads
        </p>
      </div>
    </section>
  );
}
