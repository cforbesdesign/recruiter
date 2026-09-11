import { useEffect } from "react";
import { handleNavClick } from "../hooks/useRoute";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { ProjectImage, ProjectVideo } from "./ProjectSection";
import { HighlightsCarousel } from "./HighlightsCarousel";
import type { HighlightSlide } from "./HighlightsCarousel";
import heroVideo from "../assets/videos/work/google-spark-hero.mp4";
import heroPoster from "../assets/images/work/google-spark-hero-poster.jpg";
import homeScreen from "../assets/images/work/google-spark-home-screen.jpg";
import personalization from "../assets/images/work/google-spark-personalization.gif";
import moodboardAsana from "../assets/images/work/google-spark-moodboard-asana.jpg";
import moodboardTeams from "../assets/images/work/google-spark-moodboard-teams.jpg";
import moodboardGpt from "../assets/images/work/google-spark-moodboard-gpt.jpg";
import carousel1 from "../assets/images/work/google-spark-carousel-1.jpg";
import carousel2 from "../assets/images/work/google-spark-carousel-2.jpg";
import carousel3Poster from "../assets/images/work/google-spark-carousel-3-poster.jpg";
import carousel3Video from "../assets/videos/work/google-spark-carousel-3.mp4";
import carousel4 from "../assets/images/work/google-spark-carousel-4.jpg";
import carousel5 from "../assets/images/work/google-spark-carousel-5.jpg";
import carousel6 from "../assets/images/work/google-spark-carousel-6.jpg";
import carousel7 from "../assets/images/work/google-spark-carousel-7.jpg";
import brand1 from "../assets/images/work/google-spark-brand-1.jpg";
import brand2 from "../assets/images/work/google-spark-brand-2.jpg";
import brand3 from "../assets/images/work/google-spark-brand-3.jpg";
import brand4 from "../assets/images/work/google-spark-brand-4.jpg";
import connectors from "../assets/images/work/google-spark-connectors.jpg";
import uiCustomization from "../assets/images/work/google-spark-ui-customization.jpg";
import micrositeDesktop from "../assets/images/work/google-spark-microsite-desktop.jpg";
import micrositeVideo from "../assets/videos/work/google-spark-microsite.mp4";
import micrositeMobile from "../assets/images/work/google-spark-microsite-mobile.jpg";
import baltimoreMagazineImage from "../assets/images/selected-projects/baltimore-magazine.png";
import fitbitImage from "../assets/images/selected-projects/fitbit.png";

const OVERVIEW_BODY =
  "Google approached Huge with an open brief: imagine what a Gemini-powered enterprise product could be, unconstrained by an existing feature set or technical roadmap. Rather than another AI chatbot layered onto existing tools, the opportunity was a bigger question: what would work look like if software understood the person using it, the organization around them, and the work happening across both? The result is Spark, a concept spanning the employee home, enterprise search, agentic workflows, admin tools, personalization, and a companion marketing microsite.";

const RESEARCH_BODY =
  "We studied the tools enterprise employees already live in, from AI assistants like ChatGPT and Claude to traditional intranets, Slack, Jira, and Google Workspace, then ran internal interviews with Google employees to see where those tools broke down. The insight that shaped everything: people didn't want Spark to replace their tools, they wanted something that understood context, surfaced what mattered, and got out of the way once a specialized app was the better place to continue. Spark became an intelligent connective layer, not one more destination to check.";

const DESIGN_LANGUAGE_BODY =
  "Spark was designed to feel nothing like the dense, utilitarian software most enterprise employees are stuck with. The visual language leans on whitespace, large type, soft surfaces, and a palette built from the Gemini gradient, Google Blue and Grey, and a lighter Spark Magic Purple reserved specifically to signal AI at work: a suggestion, a loading state, an assistive prompt. A flexible card system, small to large, lets the home screen behave like a living canvas instead of a fixed dashboard.";

const PRODUCT_FEATURES_BODY =
  'Ask Spark to plan a trip and it does more than answer: it checks your approved travel dates and budget, pulls relevant flights and hotels, and turns the request into a workflow you can act on. The same intelligence powers search that resolves to an answer instead of a results page, employee profiles that read more like a knowledge graph than a directory, and an admin experience where a prompt like "make this feel like our company" generates a working brand theme. Complexity lives underneath the interface, never inside it.';

const MICROSITE_BODY =
  "A second deliverable translated the product into a story an enterprise buyer could understand without touching the UI: a marketing microsite positioning Spark as an enterprise search and assistant powered by Gemini, built around grounded results, zero-code AI, organizational knowledge graphs, and over a hundred connectors. We also explored how the same system could adapt beyond Google entirely, proof that Spark's intelligence doesn't have to look like the company that built it.";

function SectionIntro({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-12">
      <h3 className="flex-1 text-[30px] leading-[1.05] text-ink md:text-[48px]">
        {heading}
      </h3>
      <p className="flex-1 text-[20px] leading-[1.31] text-ink">{body}</p>
    </div>
  );
}

function PlaceholderShot({ image, caption }: { image: string; caption: string }) {
  return (
    <figure>
      <ProjectImage image={image} alt={caption} aspect="1920/1080" />
      <figcaption className="mt-4 text-[16px] text-ink">{caption}</figcaption>
    </figure>
  );
}

const employeeProfileSlides: HighlightSlide[] = [
  {
    image: carousel1,
    alt: "Cymbal home screen with the Gemini prompt bar and a personalized feed",
    caption: "A personalized home screen built around what's happening right now, not a static dashboard.",
  },
  {
    image: carousel2,
    alt: "Search autocomplete suggestions beginning to appear",
    caption: "Search starts suggesting before you've finished typing.",
  },
  {
    image: carousel3Poster,
    video: carousel3Video,
    alt: "Employee profile card animating open",
    caption: "Employee profiles read more like a knowledge graph than a directory listing.",
  },
  {
    image: carousel4,
    alt: "Cymbal shown across three mobile screens",
    caption: "The same context-to-action flow, carried through to mobile.",
  },
  {
    image: carousel5,
    alt: "Search results with a sources panel open",
    caption: "Spark shows its sources and lets employees control which ones are active.",
  },
  {
    image: carousel6,
    alt: "Finished search autocomplete with an AI answer",
    caption: "A travel request resolves to an approved budget, a suggested flight, and a next step.",
  },
  {
    image: carousel7,
    alt: "Cymbal home screen shown in dark mode on a laptop",
    caption: "Dark mode, built into the system from the start.",
  },
];

export function GoogleAgenticAssistant() {
  useEffect(() => {
    document.title = "Google Agentic Enterprise Assistant — Craig Forbes";
  }, []);

  return (
    <>
      <Hero video={heroVideo} poster={heroPoster} frameColor="#E6DBF9" lowered>
        An agentic enterprise collaboration and productivity platform powered
        by <span className="text-accent">Google Gemini</span>.
      </Hero>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
            <SectionIntro heading="Overview" body={OVERVIEW_BODY} />

            <ProjectImage
              image={homeScreen}
              alt="Cymbal home screen with the Gemini prompt bar and a personalized feed"
              aspect="1920/1080"
            />

            <SectionIntro heading="Research & strategy" body={RESEARCH_BODY} />

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="aspect-[434/244] w-full overflow-hidden rounded-2xl">
                  <img src={moodboardAsana} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-[434/244] w-full overflow-hidden rounded-2xl">
                  <img src={moodboardTeams} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-[434/244] w-full overflow-hidden rounded-2xl">
                  <img src={moodboardGpt} alt="" className="h-full w-full object-cover" />
                </div>
              </div>
              <p className="text-[16px] text-[#4e4e4e]">
                We spent a lot of time looking at the current project
                management, collaboration and AI tools to see where Spark
                could bring true innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
            <SectionIntro heading="The design language" body={DESIGN_LANGUAGE_BODY} />

            <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
              <img
                src={brand1}
                alt="Spark mood board"
                className="h-auto w-full rounded-2xl"
              />

              <img
                src={brand2}
                alt="Spark color system"
                className="h-auto w-full rounded-2xl"
              />

              <img
                src={brand3}
                alt="Spark card component patterns"
                className="h-auto w-full rounded-2xl"
              />

              <img
                src={brand4}
                alt="Spark gradient usage across product and microsite"
                className="h-auto w-full rounded-2xl"
              />
            </div>

            <SectionIntro heading="Product Features" body={PRODUCT_FEATURES_BODY} />
          </div>
        </div>
      </section>

      <HighlightsCarousel slides={employeeProfileSlides} />

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
            <div className="flex flex-col gap-12 md:gap-26">
              <SectionIntro
                heading="Designed for personalization"
                body={'Search that answers instead of linking. Typing "Help me plan my travel to the New York office" doesn\'t return a list of intranet pages; it returns an AI Answer confirming the employee\'s approved travel window and budget, a "Plan my trip" action, and a short list of the people and documents actually relevant to the task: a travel coordinator, the company travel policy, a past trip record. Search resolves to an answer with a next step attached, not a results page to sort through.'}
              />

              <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
                <figure>
                  <img
                    src={connectors}
                    alt="Connector data"
                    className="h-auto w-full rounded-2xl"
                  />
                  <figcaption className="mt-4 text-[16px] text-ink">
                    Connector data
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src={uiCustomization}
                    alt="Intelligent UI customization"
                    className="h-auto w-full rounded-2xl"
                  />
                  <figcaption className="mt-4 text-[16px] text-ink">
                    Intelligent UI customization
                  </figcaption>
                </figure>
              </div>

              <PlaceholderShot
                image={personalization}
                caption="The same underlying system, restyled for a different organization entirely."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
            <SectionIntro heading="The microsite" body={MICROSITE_BODY} />

            <ProjectVideo
              video={micrositeVideo}
              poster={micrositeDesktop}
              aspect="1352/761"
            />

            <ProjectImage
              image={micrositeMobile}
              alt="Spark marketing microsite shown across mobile screens"
              aspect="1352/761"
            />
          </div>
        </div>
      </section>

      <section className="bg-white pt-12 md:pt-26">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 pb-12 sm:grid-cols-2 md:pb-26">
            <a
              href="/work/baltimore-magazine"
              onClick={handleNavClick("/work/baltimore-magazine")}
              className="group flex flex-col gap-6"
            >
              <div className="aspect-[623/419] w-full overflow-hidden rounded-3xl border border-grey-1">
                <img
                  src={baltimoreMagazineImage}
                  alt="Baltimore magazine website"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <div className="transition-opacity duration-300 ease-out group-hover:opacity-75">
                <p className="text-[16px] text-[#4e4e4e]">Previous Project</p>
                <p className="mt-2 text-[20px] text-ink">
                  <span className="font-semibold text-accent">
                    Baltimore Magazine
                  </span>
                  <br />
                  Designing the go-to-guide for everything Baltimore.
                </p>
              </div>
            </a>

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
                <p className="text-[16px] text-[#4e4e4e]">Up Next</p>
                <p className="mt-2 text-[20px] text-ink">
                  <span className="font-semibold text-accent">Fitbit</span>
                  <br />
                  Crafting cohesive experiences for the fitness-forward brand.
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
