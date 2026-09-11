import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type HeroProps = {
  /** Autoplaying video; when omitted, `poster` renders as a static image instead. */
  video?: string;
  poster: string;
  alt?: string;
  frameColor?: string;
  /** Skips the -24px top offset, sitting 24px lower than the default. */
  lowered?: boolean;
  children: ReactNode;
};

export function Hero({ video, poster, alt = "", frameColor, lowered, children }: HeroProps) {
  const { ref: videoRef, inView } = useInView<HTMLVideoElement>();

  useEffect(() => {
    if (inView && video) videoRef.current?.play();
  }, [inView, video]);

  return (
    <section
      className={`flex bg-almost-white md:min-h-[100svh] md:items-center ${
        lowered ? "" : "md:-mt-[24px]"
      }`}
    >
      <div className="relative mx-auto w-full grid grid-cols-1 gap-x-12 gap-y-10 px-6 pt-32 pb-12 xs:grid-cols-5 xs:px-12 xs:py-16 md:grid-cols-2 md:px-20 lg:py-26 xl:max-w-[1512px] xl:py-26">
        <p className="order-1 z-10 static text-pretty text-[45px] leading-[1.05] text-ink xs:absolute xs:left-12 xs:right-[284px] xs:top-1/2 xs:-translate-y-1/2 xs:text-[20px] sm:right-[calc(41.67%+11.75px)] sm:text-[30px] md:left-20 md:right-[calc(50%+23.5px)] lg:right-[calc(33.33%+84.33px)] lg:text-[56px] xl:right-[calc(33.33%+84px)] xl:text-[69px]">
          {children}
        </p>

        <div
          className="relative order-2 aspect-square w-full overflow-hidden rounded-2xl xs:order-none xs:col-span-2 xs:col-start-4 md:col-span-1 md:col-start-2"
          style={frameColor ? { boxShadow: `inset 0 0 0 2px ${frameColor}` } : undefined}
        >
          {video ? (
            <video
              ref={videoRef}
              src={video}
              poster={poster}
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <img
              src={poster}
              alt={alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
