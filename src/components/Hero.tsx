import heroAstronautVideo from "../assets/videos/hero-astronaut.mp4";

export function Hero() {
  return (
    <section className="flex bg-page md:-mt-[24px] md:min-h-[100svh] md:items-center">
      <div className="relative mx-auto w-full grid grid-cols-1 gap-x-12 gap-y-10 px-6 pt-32 pb-12 xs:grid-cols-5 xs:px-12 xs:py-16 md:grid-cols-2 md:px-20 lg:py-26 xl:max-w-[1512px] xl:py-26">
        <p className="order-1 z-10 static text-pretty text-[45px] leading-[1.05] -ml-3 text-content xs:absolute xs:left-12 xs:right-[284px] xs:top-1/2 xs:-translate-y-1/2 xs:text-[20px] sm:right-[calc(41.67%+11.75px)] sm:text-[30px] md:left-20 md:right-[calc(50%+23.5px)] lg:right-[calc(33.33%+84.33px)] lg:text-[56px] xl:right-[calc(33.33%+84px)] xl:text-[69px]">
          {/* Inline + box-decoration-clone so the backing hugs each line and
              rags with the text instead of forming one hard rectangle. The
              px-3 is cancelled by -ml-3 on the <p>, keeping the text on-grid. */}
          <span className="box-decoration-clone bg-hero-bg px-3">
            <span className="text-accent">Craig Forbes</span> is an East
            Coast-based Design Lead passionate about crafting stellar brands and
            products.
          </span>
        </p>

        <div className="order-2 aspect-square w-full overflow-hidden rounded-2xl xs:order-none xs:col-span-2 xs:col-start-4 md:col-span-1 md:col-start-2">
          <video
            src={heroAstronautVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
