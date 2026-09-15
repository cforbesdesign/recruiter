import { useEffect } from "react";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import {
  ProjectEmbed,
  ProjectImage,
  ProjectImageRow,
  ProjectNote,
  ProjectVideo,
} from "./ProjectSection";
import { UpNext } from "./UpNext";
import { HighlightsCarousel } from "./HighlightsCarousel";
import type { HighlightSlide } from "./HighlightsCarousel";
import bmagHero from "../assets/images/work/bmag-hero.png";
import bmagTemplates1 from "../assets/images/work/bmag-templates-1.jpg";
import bmagTemplates2 from "../assets/images/work/bmag-templates-2.jpg";
import bmagArticle from "../assets/images/work/bmag-article.jpg";
import bmagArticleVideo from "../assets/videos/work/bmag-article.mp4";
import bmagFaultStars from "../assets/images/work/bmag-fault-stars.png";
import bmagFaultStarsVideo from "../assets/videos/work/bmag-fault-stars.mp4";
import bmagShellgame from "../assets/images/work/bmag-shellgame.png";
import bmagSeafoodApp from "../assets/images/work/bmag-seafood-app.png";
import bmagSeafoodAppVideo from "../assets/videos/work/bmag-seafood-app.mp4";
import bmagCarousel1 from "../assets/images/work/bmag-carousel-1.jpg";
import bmagCarousel2 from "../assets/images/work/bmag-carousel-2.jpg";
import bmagCarousel3 from "../assets/images/work/bmag-carousel-3.jpg";
import bmagCarousel4 from "../assets/images/work/bmag-carousel-4.jpg";
import bmagCarousel5 from "../assets/images/work/bmag-carousel-5.jpg";

const bmagCarouselSlides: HighlightSlide[] = [
  {
    image: bmagCarousel1,
    alt: "Artscape Roundup guide page with a blue and yellow geometric header graphic",
  },
  {
    image: bmagCarousel2,
    alt: "Draft King review of Taps Fill Station with a row of beer glasses",
  },
  {
    image: bmagCarousel3,
    alt: "Baltimore magazine shown across three mobile screens: a category page, featured doctors listing, and a market guide",
  },
  {
    image: bmagCarousel4,
    alt: "Sponsored crab-picking guide article with recipe content and sidebar ads",
  },
  {
    image: bmagCarousel5,
    alt: "Article on how Baltimore magazine inspired Hairspray, featuring John Waters",
  },
];

const reveal = (inView: boolean) =>
  `transition-all duration-700 ease-out ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

function SectionIntro({ heading, body }: { heading: string; body: ReactNode }) {
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

export function Baltimore() {
  useEffect(() => {
    document.title = "Baltimore Magazine — Craig Forbes";
  }, []);

  return (
    <>
      <Hero poster={bmagHero} alt="Baltimore magazine website shown across desktop and mobile screens" lowered>
        <span className="text-accent">Baltimore magazine</span>: Designing the
        guide to everything Baltimore
      </Hero>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
            <SectionIntro
              heading="Overview"
              body={
                <>
                  <a
                    href="https://www.baltimoremagazine.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-1 underline-offset-2 transition-colors duration-300 hover:text-accent"
                  >
                    Baltimore Magazine
                  </a>
                  &rsquo;s digital audience was growing rapidly, but the site was struggling to keep up. It still featured some non-responsive pages and had limited space for paid advertising and sponsorships, a good problem to have, but one that needed solving. My role was to help modernize the experience. I focused on enhancing immersive visuals, leveraging rich photography and illustration, while increasing ad space in a way that felt natural and unobtrusive. The site was designed in Sketch and built using Zurb Foundation and Craft CMS. I contributed to both the design and front-end development.
                </>
              }
            />

            <div className="flex flex-col gap-6 md:gap-26">
              <ProjectImage image={bmagTemplates1} alt="Baltimore magazine template design shown across three mobile screens" />
              <ProjectImage image={bmagTemplates2} alt="Baltimore magazine template design, alternate long-form layout" />

              <ProjectEmbed
                src="https://player.vimeo.com/video/163015718?h=2376b8fa64"
                title="Baltimore magazine video feature"
              />
            </div>
          </div>
        </div>
      </section>

      <HighlightsCarousel slides={bmagCarouselSlides} />

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
            <ProjectNote heading="Do your thing">
              We developed a flexible system of templates: some were
              blog-style layouts the editorial team could use right away,
              while others supported handcrafted, long-form storytelling by
              our art directors and developers.
            </ProjectNote>

            <ProjectVideo
              video={bmagArticleVideo}
              poster={bmagArticle}
              aspect="2160/1350"
              caption="Photography by Mike Morgan."
            />

            <ProjectNote heading="The critics are raving">
              The revamped site has been recognized for its excellence,
              earning multiple Folio awards, including for features like
              &ldquo;A Fault in His Stars,&rdquo; illustrated by the
              award-winning Rory Kurtz. We&rsquo;ve also received over a
              dozen City and Regional Magazine Association awards, including
              a coveted Multiplatform Storytelling Finalist nod for our iOS
              Seafood Guide, which we designed and published in-house.
            </ProjectNote>

            <div className="flex flex-col gap-6 md:gap-26">
              <ProjectVideo
                video={bmagFaultStarsVideo}
                poster={bmagFaultStars}
                aspect="2160/1350"
                caption="Lettering by Amanda White-Iseli and illustration by Rory Kurtz."
              />

              <ProjectImageRow
                images={[
                  { src: bmagShellgame, alt: "Shell Game local oyster primer feature layout" },
                  {
                    src: bmagSeafoodApp,
                    video: bmagSeafoodAppVideo,
                    alt: "Baltimore magazine iOS Seafood Fieldguide app",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <UpNext current="/work/baltimore-magazine" />

      <Footer />
    </>
  );
}
