import aboutPhoto from "../assets/images/about-photo.jpg";

const linkClass = "underline decoration-1 underline-offset-2 hover:text-accent";

export function About() {
  return (
    <section id="about" className="scroll-mt-[76px] bg-almost-white xs:scroll-mt-[104px]">
      <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
        <div className="flex flex-col gap-[27px] py-12 md:pt-10 md:pb-26">
          <h2 className="text-[30px] leading-[1.05] text-ink sm:text-[45px]">About</h2>
          <div className="h-px w-full bg-ink" />
        </div>

        <p className="text-[20px] leading-[1.15] text-ink md:text-[30px] xl:max-w-[calc(50%-24px)]">
          I most recently served as Senior Visual Designer with{" "}
          <a href="https://www.hugeinc.com/" target="_blank" rel="noreferrer" className={linkClass}>
            Huge
          </a>{" "}
          designing interfaces for Google and Xfinity. Previously, I was at{" "}
          <a href="https://havascx.com/" target="_blank" rel="noreferrer" className={linkClass}>
            Havas
          </a>{" "}
          — providing creative muscle for Fitbit and other premium brands. Before
          that, I was telling amazing stories at{" "}
          <a
            href="https://www.baltimoremagazine.com/"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Baltimore magazine
          </a>
          .
        </p>

        <div className="flex flex-col gap-12 py-12 md:grid md:grid-cols-12 md:gap-x-12 md:py-26">
          <div className="aspect-[699.5/487.82] w-full overflow-hidden rounded-lg md:col-span-6 md:col-start-1 xl:col-start-2">
            <img src={aboutPhoto} alt="Portrait" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center md:col-span-6 md:col-start-7 md:self-center xl:col-span-5 xl:col-start-8 xl:px-12">
            <p className="text-[20px] leading-[1.15] text-ink sm:text-[16px] md:text-[20px]">
              I&rsquo;m dedicated to crafting beautiful and highly functional
              products that align with my clients&rsquo; unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
