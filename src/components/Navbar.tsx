import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.education', href: '#education' },
  { key: 'nav.certifications', href: '#certifications' },
  { key: 'nav.downloads', href: '#downloads' },
  { key: 'nav.contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, colorTheme, toggleTheme, setColorTheme } = useTheme();

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
            className="text-xl font-bold font-display text-gradient hover:scale-105 transition-transform duration-300"
          >
            ER
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Color Theme Picker */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform duration-300">
                  <Palette className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="animate-scale-in">
                <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setColorTheme('default')} className="cursor-pointer hover:bg-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[hsl(174,70%,40%)]" />
                    Teal {colorTheme === 'default' && '✓'}
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme('blue')} className="cursor-pointer hover:bg-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[hsl(217,91%,60%)]" />
                    Blue {colorTheme === 'blue' && '✓'}
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
              className="rounded-full hover:scale-110 transition-transform duration-300"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12" />
              )}
            </Button>

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-4 w-4" />
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
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
