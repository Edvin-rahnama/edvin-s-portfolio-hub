import { useCallback, useEffect, useRef, useState } from 'react';

/** Scroll must be quiet for this long before a jump counts as finished. */
const SETTLE_MS = 140;
/** Hard release, in case the jump moves the page barely or not at all. */
const MAX_LOCK_MS = 1200;

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
  // While a jump link is animating, scroll position describes where the page is
  // coming *from*. Measuring during that window makes a click look like it
  // selected the previous item, so measurement is suspended until scrolling
  // stops. See select() below.
  const locked = useRef(false);
  const settleTimer = useRef(0);
  const maxTimer = useRef(0);
  const recompute = useRef<() => void>(() => {});

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      if (locked.current) return;

      const els = resolve();
      const line = typeof offset === 'function' ? offset() : offset;
      let current = 0;
      let contained = -1;

      els.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        // Prefer the element the line actually falls inside. "Last top above the
        // line" alone lags by an entry whenever an element is shorter than the
        // distance from the line to the viewport top — it fills the screen but
        // its top has not yet crossed.
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

    recompute.current = compute;

    const onScroll = () => {
      if (locked.current) {
        // Still moving: push the settle deadline out.
        window.clearTimeout(settleTimer.current);
        settleTimer.current = window.setTimeout(release, SETTLE_MS);
        return;
      }
      if (!frame) frame = requestAnimationFrame(compute);
    };

    const release = () => {
      locked.current = false;
      window.clearTimeout(settleTimer.current);
      window.clearTimeout(maxTimer.current);
      compute();
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer.current);
      window.clearTimeout(maxTimer.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, ...deps]);

  /**
   * Mark an entry active immediately, then ignore scroll-derived updates until
   * the resulting animated scroll has settled. Without this the highlight trails
   * the click by the duration of the smooth scroll.
   */
  const select = useCallback((i: number) => {
    setIndex(i);
    locked.current = true;
    window.clearTimeout(settleTimer.current);
    window.clearTimeout(maxTimer.current);
    settleTimer.current = window.setTimeout(() => {
      locked.current = false;
      recompute.current();
    }, SETTLE_MS);
    maxTimer.current = window.setTimeout(() => {
      locked.current = false;
      recompute.current();
    }, MAX_LOCK_MS);
  }, []);

  return { index, select };
}

/** Tracks which `section[id]` is under the reading line. Returns the id. */
export function useActiveSection(ids: string[], offset = 120) {
  const key = ids.join('|');
  const { index, select } = useReadingLine(
    () => ids.map((id) => document.getElementById(id)),
    offset,
    [key],
  );
  const selectId = useCallback(
    (id: string) => {
      const i = ids.indexOf(id);
      if (i !== -1) select(i);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, select],
  );
  return { active: ids[index] ?? ids[0] ?? '', selectSection: selectId };
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
  const { index, select } = useReadingLine(
    () => refs.current,
    () => window.innerHeight * 0.4,
    [count],
  );

  const setRef = useCallback(
    (i: number) => (el: HTMLElement | null) => {
      refs.current[i] = el;
    },
    [],
  );

  return { index, setRef, select };
}
