import {
  ProjectSection,
  ProjectImage,
  ProjectImageRow,
  ProjectNote,
  ProjectVideo,
} from "./ProjectSection";
import fitbitHero from "../assets/images/work/fitbit-hero.png";
import fitbitHeroVideo from "../assets/videos/work/fitbit-hero.mp4";
import fitbitHomepage from "../assets/images/work/fitbit-homepage.png";
import fitbitHomepageVideo from "../assets/videos/work/fitbit-homepage.mp4";
import fitbitMarquee from "../assets/images/work/fitbit-marquee.gif";
import fitbitMarquee2 from "../assets/images/work/fitbit-marquee-2.gif";
import fitbitMarquee3 from "../assets/images/work/fitbit-marquee-3.png";
import fitbitModules from "../assets/images/work/fitbit-modules.png";
import fitbit4 from "../assets/images/work/fitbit-4.png";
import fitbitBom1 from "../assets/images/work/fitbit-bom-1.png";
import fitbitBom2 from "../assets/images/work/fitbit-bom-2.png";
import fitbitEmail1 from "../assets/images/work/fitbit-email-1-cropped.png";
import fitbitEmail2 from "../assets/images/work/fitbit-email-2-cropped.png";
import fitbitEmail3 from "../assets/images/work/fitbit-email-3.png";
import bertolliRecipe from "../assets/images/work/bertolli-recipe.png";
import bertolliRecipeVideo from "../assets/videos/work/bertolli-recipe.mp4";
import bertolliPage1 from "../assets/images/work/bertolli-page-1.png";
import bertolliPage2 from "../assets/images/work/bertolli-page-2.png";
import bmagHero from "../assets/images/work/bmag-hero.png";
import bmagArticle from "../assets/images/work/bmag-article.jpg";
import bmagArticleVideo from "../assets/videos/work/bmag-article.mp4";
import bmagTemplates1 from "../assets/images/work/bmag-templates-1.png";
import bmagTemplates2 from "../assets/images/work/bmag-templates-2.png";
import bmagFaultStars from "../assets/images/work/bmag-fault-stars.png";
import bmagFaultStarsVideo from "../assets/videos/work/bmag-fault-stars.mp4";
import bmagShellgame from "../assets/images/work/bmag-shellgame.png";
import bmagSeafoodApp from "../assets/images/work/bmag-seafood-app.png";
import bmagSeafoodAppVideo from "../assets/videos/work/bmag-seafood-app.mp4";
import xfinityMobile from "../assets/images/work/xfinity-mobile.png";
import xfinityMobileVideo from "../assets/videos/work/xfinity-mobile.mp4";
import xfinityLegacy from "../assets/images/work/xfinity-legacy.jpg";
import xfinityRefresh from "../assets/images/work/xfinity-refresh.jpg";
import googleorgDashboard from "../assets/images/work/googleorg-dashboard.gif";
import googleorgWorkspace from "../assets/images/work/googleorg-workspace.jpg";

const linkClass = "underline decoration-1 underline-offset-2 hover:text-accent";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-almost-white">
      <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
        <div className="flex flex-col gap-[27px] py-12 md:pt-0 md:pb-[136px]">
          <h2 className="text-[30px] leading-[1.05] text-ink sm:text-[45px]">
            Featured Work
          </h2>
          <div className="h-px w-full bg-ink" />
        </div>

        <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
          <ProjectSection
            image={fitbitHero}
            video={fitbitHeroVideo}
            alt="Fitbit Luxe introduction screen shown on a phone held in one hand"
            name="Fitbit"
            headline="Crafting cohesive cross-channel experiences for the fitness-forward brand"
            body="As part of the team at Havas, I worked with Fitbit to elevate their digital presence across e-commerce, app experiences, and CRM. On the web store, we updated navigation tiles and reduced cognitive load in the site hierarchy, while crafting animated marquee heroes for the homepage. We also created visual assets for the Fitbit Premium app and designed a modular email design system for Fitbit’s Premium subscriber marketing. Built to streamline the creative process while maintaining a consistent, high-quality visual language, this email framework allowed for rapid ideation, design, and deployment—giving cross-functional teams a shared system to efficiently launch consumer campaigns."
          />

          <div className="flex flex-col gap-6 md:gap-26">
            <ProjectVideo
              video={fitbitHomepageVideo}
              poster={fitbitHomepage}
              aspect="1352/862"
            />
            <ProjectImage
              image={fitbitMarquee}
              alt="Fitbit animated marquee hero design"
            />
            <ProjectImage
              image={fitbitBom1}
              alt="Fitbit campaign visual design"
              aspect="1352/761"
            />
            <ProjectImage
              image={fitbitBom2}
              alt="Fitbit campaign visual design, alternate layout"
              aspect="1352/761"
            />
            <ProjectImage
              image={fitbitMarquee2}
              alt="Fitbit marquee hero variation"
            />
            <ProjectImage
              image={fitbitModules}
              alt="Fitbit modular email design system components"
            />
            <ProjectImage
              image={fitbitMarquee3}
              alt="Fitbit marquee hero variation"
            />
            <ProjectImage image={fitbit4} alt="Fitbit product design detail" />
          </div>

          <ProjectNote heading="Lightspeed">
            The email design system emphasized accessibility and innovation,
            ensuring full ADA compliance while incorporating modern features like
            dark mode and kinetic (interactive) email elements. By standardizing
            components and optimizing workflows, we reduced production time by
            more than half. The result was a scalable, future-ready solution that
            elevated both the brand&rsquo;s communication and internal creative
            processes.
          </ProjectNote>

          <ProjectImageRow
            images={[
              { src: fitbitEmail1, alt: "Fitbit email design, light theme" },
              { src: fitbitEmail2, alt: "Fitbit email design, warm theme" },
              { src: fitbitEmail3, alt: "Fitbit email design, dark mode" },
            ]}
          />

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

          <div className="h-px w-full bg-ink" />

          <ProjectSection
            image={bertolliRecipe}
            video={bertolliRecipeVideo}
            alt="Bertolli recipe page shown in a browser window"
            name="Bertolli"
            headline="A feast for the eyes: Redesigning the Bertolli recipe experience"
            body="As part of the team at Havas, I helped develop an appetite-inducing recipe hub designed to bring Bertolli’s culinary heritage to life. By pairing mouthwatering food photography with a dynamic parallax scrolling effect, we created a layered visual experience that elevates recipe browsing, sparks mealtime inspiration, and connects pasta lovers directly with the brand."
          />

          <ProjectImageRow
            images={[
              {
                src: bertolliPage1,
                alt: "Bertolli Shrimp Arrabbiata recipe page, full layout",
                aspect: "1920/2569",
              },
              {
                src: bertolliPage2,
                alt: "Bertolli Shrimp Arrabbiata recipe page with food photography",
                aspect: "652/872",
                bordered: true,
              },
            ]}
          />

          <div className="h-px w-full bg-ink" />

          <ProjectSection
            image={bmagHero}
            alt="Baltimore magazine website designs shown across multiple screens"
            name="Baltimore magazine"
            headline="Designing the guide to everything Baltimore"
            body="Baltimore Magazine’s digital audience was growing rapidly, but the site was struggling to keep up. It still featured some non-responsive pages and had limited space for paid advertising and sponsorships, a good problem to have, but one that needed solving. My role was to help modernize the experience. I focused on enhancing immersive visuals, leveraging rich photography and illustration, while increasing ad space in a way that felt natural and unobtrusive. The site was designed in Sketch and built using Zurb Foundation and Craft CMS. I contributed to both the design and front-end development."
          />

          <div className="flex flex-col gap-6 md:gap-26">
            <ProjectImage
              image={bmagTemplates1}
              alt="Baltimore magazine template design"
            />
            <ProjectImage
              image={bmagTemplates2}
              alt="Baltimore magazine template design, alternate layout"
            />
          </div>

          <ProjectNote heading="Do your thing">
            We developed a flexible system of templates: some were blog-style
            layouts the editorial team could use right away, while others
            supported handcrafted, long-form storytelling by our art directors and
            developers.
          </ProjectNote>

          <ProjectVideo
            video={bmagArticleVideo}
            poster={bmagArticle}
            aspect="2160/1350"
          />

          <ProjectNote heading="The critics are raving">
            The revamped site has been recognized for its excellence, earning
            multiple Folio awards—including for features like &ldquo;A Fault in
            His Stars,&rdquo; illustrated by the award-winning Rory Kurtz.
            We&rsquo;ve also received over a dozen City and Regional Magazine
            Association awards, including a 2016 Multiplatform Storytelling
            Finalist nod for our iOS Seafood Guide, which we designed and
            published in-house.
          </ProjectNote>

          <ProjectVideo
            video={bmagFaultStarsVideo}
            poster={bmagFaultStars}
            aspect="2160/1350"
          />

          <ProjectImageRow
            images={[
              {
                src: bmagShellgame,
                alt: "Shell Game local oyster primer feature layout",
                bordered: true,
              },
              {
                src: bmagSeafoodApp,
                video: bmagSeafoodAppVideo,
                alt: "Baltimore magazine iOS Seafood Fieldguide app",
              },
            ]}
          />

          <div className="h-px w-full bg-ink" />

          <ProjectSection
            image={xfinityMobile}
            video={xfinityMobileVideo}
            alt="Xfinity Mobile device purchase flow shown in a browser window"
            name="Xfinity Mobile"
            headline="Evolving the Xfinity Mobile design system and expanding product trade-ins"
            body="As part of the team at Huge, I worked with Xfinity Mobile to transition their digital experience from a legacy framework to a modern, scalable design system. I helped expand Xfinity’s trade-in platform, introducing support for smartwatches and tablets alongside smartphones, while streamlining the reactivation and data plan adjustment process."
          />

          <ProjectImageRow
            images={[
              {
                src: xfinityLegacy,
                alt: "Xfinity Mobile legacy design system screens",
                caption: "legacy design system",
                padded: true,
                background: "#dedeea",
              },
              {
                src: xfinityRefresh,
                alt: "Xfinity Mobile 2026 refreshed design system screens",
                caption: "2026 refresh",
                padded: true,
                background: "#dedeea",
              },
            ]}
          />

          <div className="h-px w-full bg-ink" />

          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <h3 className="flex-1 text-[30px] leading-[1.05] text-ink md:text-[48px]">
              Google.org
            </h3>
            <div className="flex-1">
              <p className="text-[20px] leading-[1.15] text-ink md:text-[30px]">
                Unifying resources and support across Google&rsquo;s philanthropic
                network
              </p>
              <p className="mt-6 text-[16px] leading-[1.31] text-ink md:text-[20px]">
                During my time at Huge, we were tasked with designing a{" "}
                <a
                  href="https://www.figma.com/design/FrWnPIqmwWcv3nMAsYu067/Google-dot-org-Resource-Platform--O.N.-Walkthrough-?node-id=4025-268084&t=nPBTRiFIScp5QKvx-1"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  personalized dashboard
                </a>{" "}
                for Google.org, Google&rsquo;s philanthropic wing dedicated to
                advancing digital skills and technology access. Serving grantees,
                non-profits, and hybrid organizations, the platform needed to
                streamline communication and operations across distinct user
                bases. Drawing design inspiration from Google for Education and
                Google Chrome marketing sites, we created a unified, intuitive
                interface that surfaced key milestones, key contacts, and relevant
                Google tools to help organizations amplify their impact while
                significantly reducing support overhead for the Google.org team.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-26">
            <ProjectImage
              image={googleorgWorkspace}
              alt="Google Workspace for Nonprofits account management dashboard"
              aspect="1352/833"
            />
            <figure>
              <ProjectImage
                image={googleorgDashboard}
                alt="Google.org personalized dashboard interface"
                aspect="1352/846"
              />
              <figcaption className="mt-4 text-center text-[16px] font-semibold text-[#b7b3b3] md:text-[20px]">
                Wireframe stages
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
