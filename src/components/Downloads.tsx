import { Download, FileText, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const downloads = [
  {
    key: 'cv',
    icon: FileText,
    file: '/downloads/Edvin-Rahnama-CV.pdf',
    filename: 'Edvin-Rahnama-CV.pdf',
  },
];

export function Downloads() {
  const { t } = useLanguage();

  return (
    <section id="downloads" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          {t('downloads.title')}
        </h2>

        <div className="max-w-2xl mx-auto">
          {downloads.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-primary/10 shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold font-display mb-2">
                      {t(`downloads.${item.key}`)}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t(`downloads.${item.key}.desc`)}
                    </p>
                    <Button asChild className="rounded-full">
                      <a href={item.file} download={item.filename}>
                        <Download className="w-4 h-4 mr-2" />
                        {t('downloads.button')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
