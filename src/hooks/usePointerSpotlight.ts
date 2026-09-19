import { useEffect } from 'react';

/**
 * Lets panels light up under the cursor.
 *
 * One delegated `pointermove` listener on the document rather than one per card
 * — there are ~18 panels on the page and each would otherwise install its own
 * handler. Writes the pointer position, in percent, to custom properties on the
 * hovered panel; the gradient itself lives in CSS.
 *
 * Skipped entirely for coarse pointers (no hover to track) and when the visitor
 * has asked for reduced motion.
 */
export function usePointerSpotlight(selector = '.panel, .glass-card') {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    let frame = 0;
    let pending: { el: HTMLElement; x: number; y: number } | null = null;
    let last: HTMLElement | null = null;

    const flush = () => {
      frame = 0;
      if (!pending) return;
      const { el, x, y } = pending;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
      pending = null;
    };

    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(selector) ?? null;

      if (el !== last) {
        // Leaving a panel: drop the custom properties so its spotlight fades
        // out rather than freezing wherever the cursor happened to exit.
        last?.style.removeProperty('--mx');
        last?.style.removeProperty('--my');
        last = el;
      }
      if (!el) return;

      const r = el.getBoundingClientRect();
      pending = {
        el,
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      };
      if (!frame) frame = requestAnimationFrame(flush);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onMove);
      last?.style.removeProperty('--mx');
      last?.style.removeProperty('--my');
    };
  }, [selector]);
}
