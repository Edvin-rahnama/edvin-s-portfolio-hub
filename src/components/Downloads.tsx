import { Download, FileText, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

const rawDownloads = [
  {
    key: 'cv_en',
    icon: FileText,
    path: 'downloads/Edvin-Rahnama-CV-EN.pdf',
    filename: 'Edvin-Rahnama-CV-EN.pdf',
  },
  {
    key: 'cv_de',
    icon: FileText,
    path: 'downloads/Edvin-Rahnama-CV-DE.pdf',
    filename: 'Edvin-Rahnama-CV-DE.pdf',
  },
  {
    key: 'certifications',
    icon: Award,
    path: 'downloads/Certifications.pdf',
    filename: 'Certifications.pdf',
  },
  {
    key: 'recommendations',
    icon: Users,
    path: 'downloads/Letter-of-Recommendation.pdf',
    filename: 'Letter-of-Recommendation.pdf',
  },
];

export function Downloads() {
  const { t } = useLanguage();
  const base = import.meta.env.BASE_URL;
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="downloads" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4 border border-primary/20">
            <Download className="w-4 h-4" />
            <span>{t('downloads.title')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
            {t('downloads.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {rawDownloads.map((item, index) => (
            <DownloadCard key={item.key} item={item} index={index} base={base} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadCard({ item, index, base, t }: { item: typeof rawDownloads[0]; index: number; base: string; t: (key: string) => string }) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = item.icon;
  const fullFileUrl = `${base}${item.path}`;

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 group scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold font-display mb-2 group-hover:text-primary transition-colors duration-300">
            {t(`downloads.${item.key}`)}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {t(`downloads.${item.key}.desc`)}
          </p>
          <Button asChild size="sm" className="rounded-full hover:scale-105 transition-transform duration-300">
            <a href={fullFileUrl} download={item.filename}>
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              {t('downloads.button')}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
