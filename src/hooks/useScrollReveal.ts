import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

// Generic in the element type so the ref can attach to a <ul>, <section> or
// anything else, not just a <div>.
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
