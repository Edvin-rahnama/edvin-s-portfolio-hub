import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

const SECTION_IDS = [
  'about',
  'experience',
  'skills',
  'education',
  'certifications',
  'languages',
  'downloads',
  'contact',
];

const navItems = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.education', href: '#education' },
  { key: 'nav.certifications', href: '#certifications' },
  { key: 'nav.languages', href: '#languages' },
  { key: 'nav.downloads', href: '#downloads' },
  { key: 'nav.contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, colorTheme, toggleTheme, setColorTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3 shadow-soft' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Edvin Rahnama — back to top"
            className="rounded-md text-xl font-bold font-display text-gradient transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span aria-hidden="true" translate="no">ER</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = `#${activeSection}` === item.href;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-sm text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-right after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background ${
                    isActive
                      ? 'text-primary after:scale-x-100'
                      : 'text-muted-foreground after:scale-x-0'
                  }`}
                >
                  {t(item.key)}
                </a>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Color Theme Picker */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Change accent colour"
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <Palette className="h-4 w-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="animate-scale-in">
                <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* Swatches are hardcoded, so they must track the tokens in
                    index.css. Default moved teal -> indigo and `blue` was
                    retuned to cyan to stay distinct from it. */}
                <DropdownMenuItem onClick={() => setColorTheme('default')} className="cursor-pointer hover:bg-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[hsl(226,82%,62%)]" />
                    Indigo {colorTheme === 'default' && '✓'}
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme('blue')} className="cursor-pointer hover:bg-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[hsl(189,90%,55%)]" />
                    Cyan {colorTheme === 'blue' && '✓'}
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme('emerald')} className="cursor-pointer hover:bg-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[hsl(160,84%,39%)]" />
                    Emerald {colorTheme === 'emerald' && '✓'}
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme('orange')} className="cursor-pointer hover:bg-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[hsl(25,95%,53%)]" />
                    Orange {colorTheme === 'orange' && '✓'}
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme('red')} className="cursor-pointer hover:bg-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[hsl(0,72%,51%)]" />
                    Red {colorTheme === 'red' && '✓'}
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12" aria-hidden="true" />
              )}
            </Button>

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Change language" className="rounded-full">
                  <Globe className="h-4 w-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  🇬🇧 English {language === 'en' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('de')}>
                  🇩🇪 Deutsch {language === 'de' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="default"
              size="icon"
              className="lg:hidden rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4 py-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = `#${activeSection}` === item.href;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                      isActive
                        ? 'bg-primary/10 text-primary border-l-2 border-primary'
                        : 'text-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
