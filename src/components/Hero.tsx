import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from '@/assets/profile.jpg';

export function Hero() {
  const { language, t } = useLanguage();
  const base = import.meta.env.BASE_URL;

  const cvPath =
    language === 'de' ? 'downloads/Edvin-Rahnama-CV-DE.pdf' : 'downloads/Edvin-Rahnama-CV-EN.pdf';
  const cvFile = `${base}${cvPath}`;

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background: a fine technical grid and a single directional wash.
          The previous hero carried fifteen decorative divs — blurred orbs,
          floating dots, rotated squares — which is the visual signature of a
          generated template rather than a considered design. */}
      <div className="absolute inset-0 bg-grid-fade" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_0%,hsl(var(--primary)/0.16),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              {t('hero.role')}
            </p>

            {/* Name set as the dominant element rather than one line among many.
                clamp lets it scale with the viewport instead of stepping. */}
            <h1 className="font-display font-extrabold leading-[0.88] tracking-[-0.03em]">
              <span className="block text-[clamp(3rem,9vw,6.5rem)]">Edvin</span>
              <span className="block text-[clamp(3rem,9vw,6.5rem)] text-primary">Rahnama</span>
            </h1>

            <div className="mt-9 flex max-w-xl items-start gap-5">
              <span className="mt-2 h-16 w-px shrink-0 bg-border" aria-hidden="true" />
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                {t('hero.description')}
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-[transform,background-color] duration-300 hover:scale-[1.02] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t('hero.cta.contact')}
              </a>
              <a
                href={cvFile}
                download
                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-4 w-4 text-primary" aria-hidden="true" />
                {t('hero.cta.cv')}
              </a>
              <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {t('hero.location')}
              </span>
            </div>
          </div>

          {/* Portrait framed as a plate rather than a circle ringed with glows. */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0">
              <div
                className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-primary/50"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-primary/50"
                aria-hidden="true"
              />
              <img
                src={profileImage}
                alt="Edvin Rahnama, Data Scientist and Software Engineer"
                width={384}
                height={460}
                decoding="async"
                className="relative aspect-[4/5] w-full rounded-lg object-cover shadow-card"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <a
          href="#experience"
          aria-label="Scroll to Experience"
          className="group flex flex-col items-center gap-2 rounded-full p-2 text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Scroll
          </span>
          <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
