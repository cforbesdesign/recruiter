import { useCallback, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

const reveal = (inView: boolean) =>
  `transition-all duration-700 ease-out ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

/** Frosted-glass pill background, matching the nav/carousel controls. */
const PILL_STYLE: React.CSSProperties = {
  backdropFilter: "blur(48px)",
  WebkitBackdropFilter: "blur(48px)",
  backgroundColor: "rgba(237, 237, 237, 0.64)",
};

type BeforeAfterSliderProps = {
  before: string;
  beforeAlt: string;
  beforeLabel?: string;
  after: string;
  afterAlt: string;
  afterLabel?: string;
  aspect?: string;
};

/** Draggable before/after comparison — `before` sits on top, clipped to the
 * handle position, revealing `after` underneath as you drag past it. */
export function BeforeAfterSlider({
  before,
  beforeAlt,
  beforeLabel,
  after,
  afterAlt,
  afterLabel,
  aspect = "1352/845",
}: BeforeAfterSliderProps) {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const startDrag = (clientX: number) => {
    draggingRef.current = true;
    updateFromClientX(clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  const nudge = (delta: number) => {
    setPosition((p) => Math.min(100, Math.max(0, p + delta)));
  };

  // Fade a label out proportionally to how far the handle has moved toward
  // it from center, starting the instant it moves off 50 and reaching 0
  // right as the handle would sit on top of it.
  const FADE_RANGE = 50;
  const beforeLabelOpacity = Math.min(1, position / FADE_RANGE);
  const afterLabelOpacity = Math.min(1, (100 - position) / FADE_RANGE);

  return (
    <div ref={sectionRef} className={reveal(inView)}>
      <div
        ref={containerRef}
        className="relative w-full touch-none overflow-hidden rounded-2xl select-none"
        style={{ aspectRatio: aspect }}
        onPointerDown={(e) => startDrag(e.clientX)}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <img
          src={after}
          alt={afterAlt}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={before}
          alt={beforeAlt}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        {beforeLabel && (
          <span
            style={{ ...PILL_STYLE, opacity: beforeLabelOpacity }}
            className="pointer-events-none absolute top-1/2 left-6 hidden -translate-y-1/2 rounded-full px-3 py-1.5 font-mono text-[11px] leading-[normal] tracking-tight text-ink transition-opacity duration-200 sm:block"
          >
            {beforeLabel}
          </span>
        )}
        {afterLabel && (
          <span
            style={{ ...PILL_STYLE, opacity: afterLabelOpacity }}
            className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 rounded-full px-3 py-1.5 font-mono text-[11px] leading-[normal] tracking-tight text-ink transition-opacity duration-200 sm:block"
          >
            {afterLabel}
          </span>
        )}

        <div
          className="pointer-events-none absolute inset-y-0 w-[2px] -translate-x-1/2 bg-[#5A23B9] sm:w-[4px] sm:bg-[#DEDEE9]"
          style={{ left: `${position}%` }}
        />
        <div
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onPointerDown={(e) => {
            e.stopPropagation();
            startDrag(e.clientX);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") nudge(-5);
            if (e.key === "ArrowRight") nudge(5);
          }}
          style={{ left: `${position}%`, backgroundColor: "#5A23B9" }}
          className="animate-handle-breathe absolute top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full text-white"
        >
          <svg viewBox="0 0 22 16" fill="none" className="h-3 w-4 overflow-visible sm:h-4 sm:w-[22px]">
            <path d="M5.5 1.5L0 8l5.5 6.5M16.5 1.5L22 8l-5.5 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {(beforeLabel || afterLabel) && (
        <div className="mt-4 flex justify-between sm:hidden">
          {beforeLabel && (
            <span
              style={{ opacity: beforeLabelOpacity }}
              className="font-mono text-[11px] leading-[normal] tracking-tight text-ink transition-opacity duration-200"
            >
              {beforeLabel}
            </span>
          )}
          {afterLabel && (
            <span
              style={{ opacity: afterLabelOpacity }}
              className="font-mono text-[11px] leading-[normal] tracking-tight text-ink transition-opacity duration-200"
            >
              {afterLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
