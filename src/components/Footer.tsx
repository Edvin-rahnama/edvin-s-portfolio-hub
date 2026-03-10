import { Mail, Linkedin, Github, ChevronUp, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background pt-16 pb-8 border-t border-border overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          
          <div className="text-center md:text-left">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="text-2xl font-bold font-display text-gradient mb-2 inline-block hover:scale-105 transition-transform duration-300"
            >
              Edvin Rahnama
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/amirhossein-rahnama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/edvin-rahnama-908b1b179/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:amirhossein.rahnama@outlook.com"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollToTop}
            className="rounded-full bg-background border-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-sm"
          >
            <ChevronUp className="w-5 h-5" />
            <span className="sr-only">Back to top</span>
          </Button>

        </div>

        <div className="text-center text-sm text-muted-foreground/80 pt-8 border-t border-border/50">
          <p>© {currentYear} Edvin Rahnama. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
