import { Mail, Linkedin, Github, ExternalLink, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const EMAIL = 'amirhossein.rahnama@outlook.com';

const secondaryLinks = [
  {
    key: 'contact.linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/edvin-rahnama-908b1b179/',
  },
  {
    key: 'contact.github',
    icon: Github,
    href: 'https://github.com/amirhossein-rahnama',
  },
];

export function Contact() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`max-w-3xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            {/* Eyebrow used to repeat contact.title verbatim, so the words
                "Get in Touch" appeared twice, stacked. */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6 border border-primary/20">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>{t('contact.eyebrow')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-balance">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-9 max-w-xl mx-auto leading-relaxed text-pretty">
              {t('contact.subtitle')}
            </p>

            {/* One primary action. Previously all three links were identical
                outline pills, which wrapped 2 + 1 and orphaned GitHub on its
                own row with nothing to signal the preferred route. */}
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground shadow-glow transition-[transform,box-shadow,background-color] duration-300 hover:scale-[1.02] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <span className="truncate font-mono text-sm">{EMAIL}</span>
            </a>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {secondaryLinks.map(({ key, icon: Icon, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-card px-6 py-3.5 font-medium transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <span className="text-sm">{t(key)}</span>
                  <ExternalLink
                    className="h-3.5 w-3.5 opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>

            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-pretty">{t('contact.availability')}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
