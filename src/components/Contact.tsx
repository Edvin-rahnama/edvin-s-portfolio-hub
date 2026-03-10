import { Mail, Linkedin, Github, ExternalLink, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary/30 rounded-full hidden lg:block animate-float" />
      <div className="absolute bottom-20 right-32 w-4 h-4 bg-primary/20 rounded-full hidden lg:block animate-bounce-subtle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`max-w-3xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`}>
          {/* Glass card wrapper for depth */}
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6 border border-primary/20">
              <MessageCircle className="w-4 h-4" />
              <span>{t('contact.title')}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
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
                    className="rounded-full h-auto py-4 px-6 hover:scale-105 hover:shadow-glow hover:border-primary/50 transition-all duration-300 group"
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
      </div>
    </section>
  );
}
