import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

export function Hero() {
  const { language, t } = useLanguage();
  const base = import.meta.env.BASE_URL;

  // Choose CV based on language (default to English for Spanish)
  const cvPath = language === 'de' 
    ? 'downloads/Edvin-Rahnama-CV-DE.pdf' 
    : 'downloads/Edvin-Rahnama-CV-EN.pdf';

  const cvFile = `${base}${cvPath}`;

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl animate-float-delayed" />

      {/* Floating Shapes with enhanced animations */}
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-primary/40 rounded-full animate-bounce-subtle hidden lg:block" />
      <div className="absolute bottom-1/3 left-32 w-3 h-3 bg-primary/30 rounded-full animate-float-delayed hidden lg:block" />
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-primary/50 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-32 w-5 h-5 bg-primary/20 rounded-full animate-bounce-subtle hidden lg:block" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1.5s' }} />

      {/* Decorative lines */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-1/3 w-8 h-8 border border-primary/20 rotate-45 hidden lg:block animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-primary/15 rounded-full hidden lg:block animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <p className="text-primary font-mono text-sm mb-4 tracking-wider">
                  {t('hero.greeting')}
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-4 leading-tight">
                  Edvin{' '}
                  <span className="text-gradient animate-gradient-shift bg-gradient-to-r from-primary via-primary-glow to-primary">Rahnama</span>
                </h1>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                  {t('hero.role')}
                </h2>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4 text-primary animate-bounce-subtle" />
                  <span className="text-sm">{t('hero.location')}</span>
                </div>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>

              <div className="animate-slide-up flex flex-wrap gap-4 justify-center lg:justify-start" style={{ animationDelay: '0.6s' }}>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105 border-glow"
                >
                  <a href="#contact">
                    <Mail className="w-4 h-4 mr-2" />
                    {t('hero.cta.contact')}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/5"
                >
                  <a href={cvFile} download>
                    <Download className="w-4 h-4 mr-2" />
                    {t('hero.cta.cv')}
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="animate-scale-in relative group" style={{ animationDelay: '0.4s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-xl animate-rotate-slow opacity-50" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_80px_hsl(var(--primary)/0.4)]">
                  <img
                    src={profileImage}
                    alt="Edvin Rahnama - Data Scientist and Software Engineer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 border-2 border-primary/10 rounded-full scale-125 animate-pulse-slow" />
                <div className="absolute inset-0 border border-primary/5 rounded-full scale-150 animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-0 border border-primary/3 rounded-full scale-[1.75] animate-pulse-slow" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors group">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">scroll</span>
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
