import { useEffect, useRef, useState } from 'react';

/**
 * Shared "which of these elements is under the reading line" measurement.
 *
 * Uses a reading line rather than IntersectionObserver ratios: the elements this
 * tracks range from ~300px to 2900px tall, so "most visible" would keep the
 * tallest one selected far past where the reader actually is.
 *
 * getBoundingClientRect is viewport-relative and therefore correct regardless of
 * offsetParent — offsetTop is measured against the nearest positioned ancestor,
 * which put the reading line in the wrong coordinate space and reported the
 * previous element as active.
 *
 * Layout reads are coalesced to one per animation frame.
 */
function useReadingLine(
  resolve: () => (HTMLElement | null)[],
  offset: number | (() => number),
  deps: unknown[],
) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const els = resolve();
      const line = typeof offset === 'function' ? offset() : offset;
      let current = 0;
      let contained = -1;

      els.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        // Prefer the element the line actually falls inside. Using "last top
        // above the line" alone lags by an entry whenever an element is shorter
        // than the distance from the line to the viewport top — the element
        // fills the screen but its top has not yet crossed.
        if (r.top <= line && r.bottom > line) contained = i;
        if (r.top <= line) current = i;
      });

      if (contained !== -1) current = contained;

      // At the very bottom the last element may be too short to reach the line,
      // so nothing would ever mark it active.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = els.length - 1;
      }

      setIndex((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, ...deps]);

  return index;
}

/** Tracks which `section[id]` is under the reading line. Returns the id. */
export function useActiveSection(ids: string[], offset = 120) {
  const key = ids.join('|');
  const idx = useReadingLine(() => ids.map((id) => document.getElementById(id)), offset, [key]);
  return ids[idx] ?? ids[0] ?? '';
}

/**
 * Same measurement over a list of refs rather than DOM ids, for the Experience
 * year rail. Returns the index of the entry currently being read.
 */
export function useActiveIndex(count: number) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  refs.current.length = count;

  // A fraction of the viewport rather than a fixed pixel offset: the entry a
  // reader is looking at sits around the upper-middle of the screen, and that
  // point moves with viewport height.
  const index = useReadingLine(() => refs.current, () => window.innerHeight * 0.4, [count]);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    refs.current[i] = el;
  };

  return { index, setRef };
}
