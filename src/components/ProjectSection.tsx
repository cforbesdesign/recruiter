import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

const reveal = (inView: boolean) =>
  `transition-all duration-700 ease-out ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

type ProjectSectionProps = {
  image: string;
  video?: string;
  alt: string;
  name: string;
  headline: string;
  body: string;
};

/** Project intro: full-width hero image (or video), then project name beside headline + body. */
export function ProjectSection({ image, video, alt, name, headline, body }: ProjectSectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { ref: textRef, inView: textInView } = useInView<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (inView) videoRef.current?.play();
  }, [inView]);

  return (
    <div className="flex flex-col gap-12 md:gap-26">
      <div
        ref={ref}
        className={`aspect-[1352/708] w-full overflow-hidden rounded-2xl ${reveal(inView)}`}
      >
        {video ? (
          <video
            ref={videoRef}
            src={video}
            poster={image}
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img src={image} alt={alt} className="h-full w-full object-cover" />
        )}
      </div>

      <div ref={textRef} className={`flex flex-col gap-6 md:flex-row md:gap-12 ${reveal(textInView)}`}>
        <h3 className="flex-1 text-[30px] leading-[1.05] text-ink md:text-[48px]">
          {name}
        </h3>
        <div className="flex-1">
          <p className="text-[20px] leading-[1.15] text-ink md:text-[30px]">
            {headline}
          </p>
          <p className="mt-6 text-[16px] leading-[1.31] text-ink md:text-[20px]">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Full-bleed supporting image within a project. */
export function ProjectImage({
  image,
  alt,
  aspect = "1352/845",
  rounded = true,
}: {
  image: string;
  alt: string;
  aspect?: string;
  rounded?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden ${rounded ? "rounded-2xl" : ""} ${reveal(inView)}`}
      style={{ aspectRatio: aspect }}
    >
      <img src={image} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

/** Full-bleed autoplaying video within a project. */
export function ProjectVideo({
  video,
  poster,
  aspect = "1352/845",
  rounded = true,
  caption,
  frameColor,
  scale,
}: {
  video: string;
  poster?: string;
  aspect?: string;
  rounded?: boolean;
  caption?: string;
  /** Inset 4px border, e.g. to mask black letterboxing baked into the video. */
  frameColor?: string;
  /** Zoom factor (e.g. 1.06) to crop out letterboxing baked into the source video. */
  scale?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (inView) videoRef.current?.play();
  }, [inView]);

  return (
    <figure>
      <div
        ref={ref}
        className={`w-full overflow-hidden ${rounded ? "rounded-2xl" : ""} ${reveal(inView)}`}
        style={{
          aspectRatio: aspect,
          boxShadow: frameColor ? `inset 0 0 0 4px ${frameColor}` : undefined,
        }}
      >
        <video
          ref={videoRef}
          src={video}
          poster={poster}
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={scale ? { transform: `scale(${scale})` } : undefined}
        />
      </div>
      {caption && (
        <figcaption className="mt-4 font-mono text-[14px] leading-[normal] tracking-tight text-[#555555]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Full-bleed third-party video embed (e.g. Vimeo) within a project. */
export function ProjectEmbed({
  src,
  title,
  aspect = "16/9",
  rounded = true,
}: {
  src: string;
  title: string;
  aspect?: string;
  rounded?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden ${rounded ? "rounded-2xl" : ""} ${reveal(inView)}`}
      style={{ aspectRatio: aspect }}
    >
      <iframe
        src={src}
        title={title}
        className="h-full w-full"
        frameBorder={0}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      />
    </div>
  );
}

/** Half-width text block: heading over body copy. */
export function ProjectNote({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`md:w-1/2 ${reveal(inView)}`}>
      <p className="text-[20px] font-semibold leading-[1.15] text-ink md:text-[30px]">{heading}</p>
      <p className="mt-6 text-[16px] font-medium leading-[1.31] text-ink md:text-[20px] md:font-normal">
        {children}
      </p>
    </div>
  );
}

type RowImageItem = {
  src: string;
  video?: string;
  alt: string;
  aspect?: string;
  bordered?: boolean;
  caption?: string;
  /** Letterbox the media with top/bottom padding instead of edge-to-edge cover. */
  padded?: boolean;
  /** Fill color shown in the padding when `padded` is set. */
  background?: string;
};

/** One media block within a ProjectImageRow; animates in on its own once visible. */
function RowMedia({ img }: { img: RowImageItem }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (inView) videoRef.current?.play();
  }, [inView]);

  return (
    <figure className="flex-1">
      <div
        ref={ref}
        className={`w-full overflow-hidden rounded-2xl ${
          img.bordered ? "border border-[#d3d3d3]" : ""
        } ${img.padded ? "flex items-center justify-center" : ""} ${reveal(inView)}`}
        style={{ aspectRatio: img.aspect ?? "1/1", backgroundColor: img.padded ? img.background : undefined }}
      >
        {img.video ? (
          <video
            ref={videoRef}
            src={img.video}
            poster={img.src}
            loop
            muted
            playsInline
            className={img.padded ? "w-full object-cover" : "h-full w-full object-cover"}
            style={img.padded ? { height: "calc(100% - 80px)" } : undefined}
          />
        ) : (
          <img
            src={img.src}
            alt={img.alt}
            className={img.padded ? "w-full object-cover" : "h-full w-full object-cover"}
            style={img.padded ? { height: "calc(100% - 80px)" } : undefined}
          />
        )}
      </div>
      {img.caption && (
        <figcaption className="mt-4 text-center font-mono text-[14px] font-bold leading-[normal] tracking-tight text-[#555555]">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Row of equal-width images (or videos); each defaults to a square crop. */
export function ProjectImageRow({ images }: { images: RowImageItem[] }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      {images.map((img) => (
        <RowMedia key={img.src} img={img} />
      ))}
    </div>
  );
}
