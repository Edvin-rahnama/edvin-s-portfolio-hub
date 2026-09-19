import { useEffect, useRef } from 'react';

/**
 * An evolving scalar field rendered as a point lattice.
 *
 * This is the one piece of the page that is about Edvin specifically rather than
 * generic decoration: his thesis trains physics-informed neural networks to
 * solve PDE-governed systems, and this is a travelling-wave solution of the kind
 * those networks approximate. Superposition of three plane waves, sampled on a
 * lattice, with amplitude driving both dot radius and alpha.
 *
 * Costs are kept low deliberately: ~1.6k points, one fillRect per point, and the
 * loop is suspended whenever the canvas is offscreen or the tab is hidden.
 */
export function FieldCanvas({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const SPACING = 26;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() ||
      '174 70% 45%';
    let hsl = accent();

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      hsl = accent();
    };

    /** Superposed plane waves — the field value at (x, y) and time t. */
    const field = (x: number, y: number, t: number) =>
      Math.sin(x * 0.014 + t * 0.9) * 0.6 +
      Math.sin((x * 0.006 - y * 0.011) + t * 0.6) * 0.5 +
      Math.sin(y * 0.017 - t * 0.45) * 0.4;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let y = SPACING * 0.5; y < h; y += SPACING) {
        for (let x = SPACING * 0.5; x < w; x += SPACING) {
          const v = field(x, y, t);
          const n = (v + 1.5) / 3; // normalise roughly to 0..1
          if (n < 0.18) continue;
          const r = 0.5 + n * 2.1;
          ctx.fillStyle = `hsl(${hsl} / ${(n * 0.55).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(x, y + v * 5, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = () => {
      if (!running) return;
      draw(performance.now() / 1000);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    if (reduced) {
      // Show the field, hold it still.
      running = false;
      draw(0);
    } else {
      running = false;
      start();
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
