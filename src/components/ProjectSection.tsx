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

  return (
    <div className="flex flex-col gap-12 md:gap-26">
      <div
        ref={ref}
        className={`aspect-[1352/708] w-full overflow-hidden rounded-2xl ${reveal(inView)}`}
      >
        {video ? (
          <video
            src={video}
            poster={image}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img src={image} alt={alt} className="h-full w-full object-cover" />
        )}
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        <h3 className="flex-1 text-[30px] leading-[1.05] text-content md:text-[48px]">
          {name}
        </h3>
        <div className="flex-1">
          <p className="text-[20px] leading-[1.15] text-content md:text-[30px]">
            {headline}
          </p>
          <p className="mt-6 text-[16px] leading-[1.31] text-content md:text-[20px]">
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
}: {
  video: string;
  poster?: string;
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
      <video
        src={video}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
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
  return (
    <div className="md:w-1/2">
      <p className="text-[20px] leading-[1.15] text-content md:text-[30px]">{heading}</p>
      <p className="mt-6 text-[16px] leading-[1.31] text-content md:text-[20px]">
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

  return (
    <figure className="flex-1">
      <div
        ref={ref}
        className={`w-full overflow-hidden rounded-2xl ${
          img.bordered ? "border border-line" : ""
        } ${img.padded ? "flex items-center justify-center" : ""} ${reveal(inView)}`}
        style={{ aspectRatio: img.aspect ?? "1/1", backgroundColor: img.padded ? img.background : undefined }}
      >
        {img.video ? (
          <video
            src={img.video}
            poster={img.src}
            autoPlay
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
        <figcaption className="mt-4 text-center text-[16px] font-bold text-content-subtle">
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
