import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    key: 'contact.email',
    icon: Mail,
    label: 'amirhossein.rahnama@outlook.com',
    href: 'mailto:amirhossein.rahnama@outlook.com',
  },
  {
    key: 'contact.linkedin',
    icon: Linkedin,
    label: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/edvin-rahnama-908b1b179/',
    external: true,
  },
  {
    key: 'contact.github',
    icon: Github,
    label: 'GitHub Profile',
    href: 'https://github.com/amirhossein-rahnama',
    external: true,
  },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 animate-fade-in">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.key}
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full h-auto py-4 px-6 animate-scale-in hover:scale-105 hover:shadow-glow hover:border-primary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">{link.label}</span>
                    {link.external && <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
