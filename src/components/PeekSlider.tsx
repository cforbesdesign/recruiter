import { useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";

export type PeekSlide = {
  /** Poster/still image. Required even for a video slide (used as the video's poster). */
  src: string;
  video?: string;
  alt: string;
};

/** Frosted-glass pill background, matching the nav/carousel controls. */
const PILL_STYLE: React.CSSProperties = {
  backdropFilter: "blur(48px)",
  WebkitBackdropFilter: "blur(48px)",
  backgroundColor: "rgba(237, 237, 237, 0.64)",
};

/** Horizontally scrollable row where each slide is narrower than its
 * container so the next one visibly peeks in at the edge (Apple-style
 * product slider). Unlike HighlightsCarousel, this never auto-advances and
 * slides don't fill the container — navigation is manual, via drag/swipe
 * or the prev/next buttons. */
export function PeekSlider({
  slides,
  aspect = "9/16",
}: {
  slides: PeekSlide[];
  aspect?: string;
}) {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (inView) videoRefs.current.forEach((v) => v?.play());
  }, [inView]);

  const scrollByOne = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = slideRefs.current[0];
    const second = slideRefs.current[1];
    const step =
      first && second
        ? second.getBoundingClientRect().left - first.getBoundingClientRect().left
        : first
          ? first.getBoundingClientRect().width + 16
          : track.clientWidth * 0.66;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div ref={sectionRef}>
      {/* Bleeds to the true viewport edge (not just this narrower, centered
       * column) regardless of how much wider the viewport is than the
       * page's own 1512px cap — see the classic left-1/2 + -translate-x-1/2
       * full-bleed technique. */}
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scroll-pl-[max(1.5rem,calc((100vw-1512px)/2+1.5rem))] scroll-pr-[max(1.5rem,calc((100vw-1512px)/2+1.5rem))] sm:gap-10 sm:scroll-pl-[max(3rem,calc((100vw-1512px)/2+3rem))] sm:scroll-pr-[max(3rem,calc((100vw-1512px)/2+3rem))] xl:scroll-pl-[max(5rem,calc((100vw-1512px)/2+5rem))] xl:scroll-pr-[max(5rem,calc((100vw-1512px)/2+5rem))]"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              className="w-[66%] shrink-0 snap-start overflow-hidden rounded-2xl first:ml-[max(1.5rem,calc((100vw-1512px)/2+1.5rem))] first:sm:ml-[max(3rem,calc((100vw-1512px)/2+3rem))] first:xl:ml-[max(5rem,calc((100vw-1512px)/2+5rem))] last:mr-[max(1.5rem,calc((100vw-1512px)/2+1.5rem))] last:sm:mr-[max(3rem,calc((100vw-1512px)/2+3rem))] last:xl:mr-[max(5rem,calc((100vw-1512px)/2+5rem))] sm:w-[45%] md:w-[18.5%]"
              style={{ aspectRatio: aspect }}
            >
              {slide.video ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.video}
                  poster={slide.src}
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByOne(-1)}
          aria-label="Previous"
          style={PILL_STYLE}
          className="flex size-12 items-center justify-center rounded-full text-ink transition-[filter] duration-300 hover:brightness-95"
        >
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
            <path d="M7.5 1.5L1.5 8L7.5 14.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByOne(1)}
          aria-label="Next"
          style={PILL_STYLE}
          className="flex size-12 items-center justify-center rounded-full text-ink transition-[filter] duration-300 hover:brightness-95"
        >
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
            <path d="M1.5 1.5L7.5 8L1.5 14.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
