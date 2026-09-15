import { useEffect } from "react";
import { useInView } from "../hooks/useInView";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { HighlightsCarousel } from "./HighlightsCarousel";
import type { HighlightSlide } from "./HighlightsCarousel";
import {
  ProjectImage,
  ProjectImageRow,
  ProjectNote,
} from "./ProjectSection";
import { UpNext } from "./UpNext";
import fitbitHero from "../assets/images/work/fitbit-hero.png";
import fitbitHeroVideo from "../assets/videos/work/fitbit-hero.mp4";
import fitbitMarquee from "../assets/images/work/fitbit-marquee.gif";
// Commented out for now — re-enable when ready to show this hero again.
// import fitbitMarquee2 from "../assets/images/work/fitbit-marquee-2.gif";
import fitbitMarquee3 from "../assets/images/work/fitbit-marquee-3.png";
import fitbitModules from "../assets/images/work/fitbit-modules.png";
import fitbit4 from "../assets/images/work/fitbit-4.png";
import fitbitBom1 from "../assets/images/work/fitbit-bom-1.png";
import fitbitBom2 from "../assets/images/work/fitbit-bom-2.png";
import fitbitEmail1 from "../assets/images/work/fitbit-email-1-cropped.png";
import fitbitEmail2 from "../assets/images/work/fitbit-email-2-cropped.png";
import fitbitEmail3 from "../assets/images/work/fitbit-email-3.png";
import fitbitFbAd1 from "../assets/images/work/fitbit-fb-ad-1.gif";
import fitbitFbAd2 from "../assets/images/work/fitbit-fb-ad-2.gif";
import fitbitFbAd3 from "../assets/images/work/fitbit-fb-ad-3.gif";
import fitbitFbAd4 from "../assets/images/work/fitbit-fb-ad-4.gif";
import fitbitFbAd5 from "../assets/images/work/fitbit-fb-ad-5.gif";

const linkClass = "underline decoration-1 underline-offset-2 transition-colors duration-300 hover:text-accent";

const reveal = (inView: boolean) =>
  `transition-all duration-700 ease-out ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

const fbAdSlides: HighlightSlide[] = [
  { image: fitbitFbAd1, alt: "Facebook link ad animation for a holiday gift sale" },
  { image: fitbitFbAd2, alt: "Facebook link ad animation for a summer sale" },
  { image: fitbitFbAd3, alt: "Facebook link ad animation for a Mother's Day sale, meditation watch face" },
  { image: fitbitFbAd4, alt: "Facebook link ad animation for a Mother's Day sale, mindfulness watch face" },
  { image: fitbitFbAd5, alt: "Facebook link ad animation for a Mother's Day sale, cardio watch face" },
];

function SectionIntro({ heading, body }: { heading: string; body: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`flex flex-col gap-6 md:flex-row md:gap-12 ${reveal(inView)}`}>
      <h3 className="flex-1 text-[20px] font-semibold leading-[1.05] text-ink md:text-[30px]">
        {heading}
      </h3>
      <p className="flex-1 text-[20px] font-medium leading-[1.31] text-ink md:font-normal">{body}</p>
    </div>
  );
}

export function Fitbit() {
  useEffect(() => {
    document.title = "Fitbit — Craig Forbes";
  }, []);

  return (
    <>
      <Hero video={fitbitHeroVideo} poster={fitbitHero} lowered>
        Crafting a cohesive cross-channel experience for the{" "}
        <span className="text-accent">fitness-forward brand</span>
      </Hero>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
            <SectionIntro
              heading="Overview"
              body="As part of the team at Havas, I worked with Fitbit to elevate their digital presence across e-commerce, app experiences, and CRM. On the web store, we updated navigation tiles and reduced cognitive load in the site hierarchy, while crafting animated marquee heroes for the homepage. We also created visual assets for the Fitbit Premium app and designed a modular email design system for Fitbit's Premium subscriber marketing. Built to streamline the creative process while maintaining a consistent, high-quality visual language, this email framework allowed for rapid ideation, design, and deployment, giving cross-functional teams a shared system to efficiently launch consumer campaigns."
            />

            <div className="flex flex-col gap-6 md:gap-26">
              <ProjectImage image={fitbitBom1} alt="Fitbit campaign visual design" aspect="1352/761" />
              <ProjectImage image={fitbitBom2} alt="Fitbit campaign visual design, alternate layout" aspect="1352/761" />
              {/* <ProjectImage image={fitbitMarquee2} alt="Fitbit homepage hero promoting its most advanced fitness tracker" /> */}
            </div>
          </div>
        </div>
      </section>

      <HighlightsCarousel slides={fbAdSlides} />

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
            <ProjectNote heading="You&rsquo;ve got mail">
              Our goal was to streamline the creative process while
              maintaining a consistent, high-quality visual language across
              all consumer emails. The system we built allowed for rapid
              ideation, design, and deployment, giving cross-functional teams
              (client, copy, and design) a shared framework to efficiently
              build and launch campaigns.
            </ProjectNote>

            <ProjectImage image={fitbitMarquee} alt="Fitbit marketing email rendered in an inbox, promoting blood glucose tracking" />

            <ProjectNote heading="Lightspeed">
              The email design system emphasized accessibility and
              innovation, ensuring full ADA compliance while incorporating
              modern features like dark mode and kinetic (interactive) email
              elements. By standardizing components and optimizing
              workflows, we reduced production time by more than half. The
              result was a scalable, future-ready solution that elevated
              both the brand&rsquo;s communication and internal creative
              processes.
            </ProjectNote>

            <div className="flex flex-col gap-6 md:gap-26">
              <ProjectImage image={fitbitModules} alt="Fitbit modular email design system components" />

              <ProjectImageRow
                images={[
                  { src: fitbitEmail1, alt: "Fitbit email design, light theme" },
                  { src: fitbitEmail2, alt: "Fitbit email design, warm theme" },
                  { src: fitbitEmail3, alt: "Fitbit email design, dark mode" },
                ]}
              />

              <ProjectImage image={fitbitMarquee3} alt="Grid of Fitbit marketing email campaign designs" />
              <ProjectImage image={fitbit4} alt="Three Fitbit Versa marketing emails for a Black Friday campaign" />
            </div>

            <ProjectNote heading="Awards &amp; Accolades">
              Our work was recognized for excellence by{" "}
              <a
                href="https://reallygoodemails.com/search/emails/fitbit"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                Really Good Emails
              </a>
              ,{" "}
              <a
                href="https://medium.com/@Liramail/5-best-email-design-inspiration-from-fitbit-e7ccf5a941e8"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                Medium
              </a>{" "}
              and more.
            </ProjectNote>
          </div>
        </div>
      </section>

      <UpNext current="/work/fitbit" />

      <Footer />
    </>
  );
}
