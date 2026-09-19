import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently under the viewport's reading line.
 *
 * Uses a reading line rather than IntersectionObserver ratios: sections here
 * range from 430px to 2900px tall, so "most visible" would keep the tallest
 * section selected far too long. The active section is the last one whose top
 * has crossed a line just below the fixed navbar.
 */
export function useActiveSection(ids: string[], offset = 120) {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      let current = ids[0] ?? '';

      // getBoundingClientRect is viewport-relative and therefore correct
      // regardless of offsetParent. offsetTop is measured against the nearest
      // positioned ancestor, which put the reading line in the wrong coordinate
      // space here and reported the previous section as active.
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }

      // At the very bottom the last section may be too short to reach the line,
      // so nothing would ever mark it active.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = ids[ids.length - 1] ?? current;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      // Reads layout, so coalesce to one measurement per frame.
      if (!frame) frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offset]);

  return active;
}
