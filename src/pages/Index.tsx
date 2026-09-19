import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Downloads } from '@/components/Downloads';
import { Languages } from '@/components/Languages';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';

const Index = () => {
  usePointerSpotlight();

  return (
    <div className="grain min-h-screen bg-background">
      {/* Keyboard users would otherwise tab through all eight nav links, three
          control menus and the menu toggle before reaching any content. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Languages />
        <div className="section-divider" />
        <Downloads />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
