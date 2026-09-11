import { useEffect } from "react";
import { handleNavClick } from "../hooks/useRoute";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import {
  ProjectEmbed,
  ProjectImage,
  ProjectImageRow,
  ProjectNote,
  ProjectVideo,
} from "./ProjectSection";
import bmagHero from "../assets/images/work/bmag-hero.png";
import bmagTemplates1 from "../assets/images/work/bmag-templates-1.png";
import bmagTemplates2 from "../assets/images/work/bmag-templates-2.png";
import bmagArticle from "../assets/images/work/bmag-article.jpg";
import bmagArticleVideo from "../assets/videos/work/bmag-article.mp4";
import bmagFaultStars from "../assets/images/work/bmag-fault-stars.png";
import bmagFaultStarsVideo from "../assets/videos/work/bmag-fault-stars.mp4";
import bmagShellgame from "../assets/images/work/bmag-shellgame.png";
import bmagSeafoodApp from "../assets/images/work/bmag-seafood-app.png";
import bmagSeafoodAppVideo from "../assets/videos/work/bmag-seafood-app.mp4";
import fitbitImage from "../assets/images/selected-projects/fitbit.png";
import googleImage from "../assets/images/selected-projects/google.png";

function SectionIntro({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-12">
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
              body="Baltimore Magazine's digital audience was growing rapidly, but the site was struggling to keep up. It still featured some non-responsive pages and had limited space for paid advertising and sponsorships, a good problem to have, but one that needed solving. My role was to help modernize the experience. I focused on enhancing immersive visuals, leveraging rich photography and illustration, while increasing ad space in a way that felt natural and unobtrusive. The site was designed in Sketch and built using Zurb Foundation and Craft CMS. I contributed to both the design and front-end development."
            />

            <div className="flex flex-col gap-6 md:gap-26">
              <ProjectImage image={bmagTemplates1} alt="Baltimore magazine template design shown across three mobile screens" />
              <ProjectImage image={bmagTemplates2} alt="Baltimore magazine template design, alternate long-form layout" />

              <ProjectEmbed
                src="https://player.vimeo.com/video/163015718?h=2376b8fa64"
                title="Baltimore magazine video feature"
              />
            </div>

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
              a 2016 Multiplatform Storytelling Finalist nod for our iOS
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

      <section className="bg-white pt-12 md:pt-26">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <h2 className="mb-12 text-[30px] font-semibold leading-[1.05] text-ink md:mb-26">
            Up next
          </h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 pb-12 sm:grid-cols-2 md:pb-26">
            <a
              href="/work/fitbit"
              onClick={handleNavClick("/work/fitbit")}
              className="group flex flex-col gap-6"
            >
              <div className="aspect-[623/419] w-full overflow-hidden rounded-3xl border border-grey-1">
                <img
                  src={fitbitImage}
                  alt="Fitbit Luxe introduction screen shown on a phone"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <div className="transition-opacity duration-300 ease-out group-hover:opacity-75">
                <p className="text-[20px] font-medium text-ink md:font-normal">
                  <span className="font-semibold text-accent">Fitbit</span>
                  <br />
                  Crafting cohesive experiences for the fitness-forward brand.
                </p>
              </div>
            </a>

            <a
              href="/work/google-agentic-assistant"
              onClick={handleNavClick("/work/google-agentic-assistant")}
              className="group flex flex-col gap-6"
            >
              <div className="aspect-[623/419] w-full overflow-hidden rounded-3xl border border-grey-1">
                <img
                  src={googleImage}
                  alt="Google logo on a blue-to-purple gradient background"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <div className="transition-opacity duration-300 ease-out group-hover:opacity-75">
                <p className="text-[20px] font-medium text-ink md:font-normal">
                  <span className="font-semibold text-accent">Google</span>
                  <br />
                  An agentic enterprise assistant powered by Google Gemini.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
