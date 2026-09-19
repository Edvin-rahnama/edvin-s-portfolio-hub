import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ColorTheme = 'default' | 'blue' | 'emerald' | 'orange' | 'red';

interface ThemeContextType {
  theme: Theme;
  colorTheme: ColorTheme;
  setTheme: (theme: Theme) => void;
  setColorTheme: (colorTheme: ColorTheme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved as Theme;
    // Dark unconditionally on a first visit. Keying off prefers-color-scheme
    // does not work here: the media query resolves to `light` when the visitor
    // has expressed no preference at all, so almost everyone landed on the pale
    // variant. Dark is the treatment this page is designed for; the navbar
    // toggle remains and the choice is remembered.
    return 'dark';
  });

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const saved = localStorage.getItem('colorTheme');
    return (saved as ColorTheme) || 'default';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('colorTheme', colorTheme);
    const root = document.documentElement;
    
    // Remove all color theme classes
    root.classList.remove('theme-blue', 'theme-emerald', 'theme-orange', 'theme-red');
    
    // Add the current color theme class
    if (colorTheme !== 'default') {
      root.classList.add(`theme-${colorTheme}`);
    }
  }, [colorTheme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, setTheme, setColorTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
