import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

export type HighlightSlide = {
  /** Poster/still image. Required even for a video slide (used as the video's poster). */
  image: string;
  /** Optional autoplaying video — when set, it plays muted/looped over `image` as its poster. */
  video?: string;
  alt: string;
  caption?: string;
};

type HighlightsCarouselProps = {
  heading?: string;
  slides: HighlightSlide[];
  /** How long each slide stays active before auto-advancing, in ms. */
  slideDurationMs?: number;
};

/** Frosted-glass pill background, matching the nav's blur treatment. */
const PILL_STYLE: React.CSSProperties = {
  backdropFilter: "blur(48px)",
  WebkitBackdropFilter: "blur(48px)",
  backgroundColor: "rgba(237, 237, 237, 0.64)",
};

export function HighlightsCarousel({
  heading,
  slides,
  slideDurationMs = 6000,
}: HighlightsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.5 });
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Don't start auto-advancing or playing embedded videos until the
  // carousel has actually scrolled into view.
  useEffect(() => {
    if (!inView) return;
    setPlaying(true);
    videoRefs.current.forEach((v) => v?.play());
  }, [inView]);

  const goTo = (index: number) => {
    // Set state directly rather than waiting on the IntersectionObserver below —
    // autoplay and dot clicks should never depend on scroll-snap timing to advance.
    setActiveIndex(index);
    // Scroll the track's own scrollLeft directly instead of scrollIntoView —
    // scrollIntoView walks every scrollable ancestor, including the page
    // itself, and was yanking the whole page down to the carousel on autoplay.
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;
    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    track.scrollTo({
      left: track.scrollLeft + (slideRect.left - trackRect.left),
      behavior: "smooth",
    });
  };

  // Keep activeIndex in sync with whichever slide is actually centered in
  // view, whether the scroll came from autoplay, a dot click, or a manual swipe.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!mostVisible) return;
        const index = slideRefs.current.indexOf(mostVisible.target as HTMLDivElement);
        if (index !== -1) setActiveIndex(index);
      },
      { root: track, threshold: [0.6] },
    );

    slideRefs.current.forEach((slide) => slide && observer.observe(slide));
    return () => observer.disconnect();
  }, [slides.length]);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section ref={sectionRef} className="bg-almost-white pb-16 md:pb-26">
      {heading && (
        <div className="mx-auto mb-8 max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <h2 className="text-[30px] leading-[1.05] text-ink sm:text-[45px]">
            {heading}
          </h2>
        </div>
      )}

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-[10px] overflow-x-auto scroll-smooth pl-[max(1.5rem,calc((100vw-1512px)/2+1.5rem))] pr-[max(1.5rem,calc((100vw-1512px)/2+1.5rem))] sm:pl-[max(3rem,calc((100vw-1512px)/2+3rem))] sm:pr-[max(3rem,calc((100vw-1512px)/2+3rem))] xl:pl-[max(5rem,calc((100vw-1512px)/2+5rem))] xl:pr-[max(5rem,calc((100vw-1512px)/2+5rem))] xs:gap-6"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className="flex w-[calc(min(100vw,1512px)-48px)] shrink-0 snap-center flex-col sm:w-[calc(min(100vw,1512px)-96px)] xl:w-[calc(min(100vw,1512px)-160px)]"
          >
            <div className="w-full overflow-hidden rounded-[16px] bg-white">
              {slide.video ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.video}
                  poster={slide.image}
                  loop
                  muted
                  playsInline
                  className="h-auto w-full"
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-auto w-full"
                />
              )}
            </div>
            {slide.caption && (
              <p className="mt-6 font-mono text-[14px] leading-[normal] tracking-tight text-[#555555]">
                {slide.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <div
          style={PILL_STYLE}
          className="flex h-12 items-center gap-2 rounded-full px-4"
        >
          {slides.map((_, index) =>
            index === activeIndex ? (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Slide ${index + 1} of ${slides.length}, showing`}
                aria-current="true"
                className="h-[6px] w-10 overflow-hidden rounded-full bg-ink/15"
              >
                <span
                  key={activeIndex}
                  className="block h-full origin-left rounded-full bg-ink"
                  style={{
                    animation: reducedMotion
                      ? "none"
                      : `carousel-progress ${slideDurationMs}ms linear forwards`,
                    animationPlayState: playing ? "running" : "paused",
                    transform: reducedMotion ? "scaleX(1)" : undefined,
                  }}
                  onAnimationEnd={() => {
                    if (playing) goTo((activeIndex + 1) % slides.length);
                  }}
                />
              </button>
            ) : (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1} of ${slides.length}`}
                className="size-2 rounded-full bg-ink/25 transition-colors hover:bg-ink/50"
              />
            ),
          )}
        </div>

        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? "Pause highlights" : "Play highlights"}
          aria-pressed={!playing}
          style={PILL_STYLE}
          className="flex size-12 shrink-0 items-center justify-center rounded-full text-ink"
        >
          {playing ? (
            <span className="flex gap-1">
              <span className="h-[14px] w-[3px] rounded-full bg-ink" />
              <span className="h-[14px] w-[3px] rounded-full bg-ink" />
            </span>
          ) : (
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className="ml-[2px]">
              <path
                d="M2.5 2.3V15.7L13.5 9L2.5 2.3Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
