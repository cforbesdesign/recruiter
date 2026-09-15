import { useEffect } from "react";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { HighlightsCarousel } from "./HighlightsCarousel";
import type { HighlightSlide } from "./HighlightsCarousel";
import { ProjectImage, ProjectImageRow, ProjectVideo } from "./ProjectSection";
import { UpNext } from "./UpNext";
import voteGovHero from "../assets/images/selected-projects/vote-gov-hero.jpg";
import voteGovPageMotion from "../assets/videos/work/vote-gov-page-motion.mp4";
import voteGovAccessibilityDock from "../assets/videos/work/vote-gov-accessibility-dock.mp4";
import voteGovLanguagesGif from "../assets/images/work/vote-gov-languages.gif";
import voteGov1b from "../assets/images/work/vote-gov-1b.jpg";
import voteGov3b from "../assets/images/work/vote-gov-3b.jpg";
import voteGovNvrf1 from "../assets/images/work/vote-gov-nvrf-1.jpg";
import voteGovNvrf2 from "../assets/images/work/vote-gov-nvrf-2.jpg";
import voteGovNvrf3 from "../assets/images/work/vote-gov-nvrf-3.jpg";
import voteGovNvrf4 from "../assets/images/work/vote-gov-nvrf-4.jpg";
import voteGovNvrf5 from "../assets/images/work/vote-gov-nvrf-5.jpg";
import voteGovNvrf6 from "../assets/images/work/vote-gov-nvrf-6.jpg";
import voteGovNvrf7 from "../assets/images/work/vote-gov-nvrf-7.jpg";
import voteGovNvrf8 from "../assets/images/work/vote-gov-nvrf-8.jpg";
import voteGovNvrf9 from "../assets/images/work/vote-gov-nvrf-9.jpg";

const voteGovNvrfSlides: HighlightSlide[] = [
  { image: voteGovNvrf1, alt: "National Voter Registration Form tool: landing step" },
  { image: voteGovNvrf2, alt: "National Voter Registration Form tool: eligibility step" },
  { image: voteGovNvrf3, alt: "National Voter Registration Form tool: registration type step" },
  { image: voteGovNvrf4, alt: "National Voter Registration Form tool: personal information step" },
  { image: voteGovNvrf5, alt: "National Voter Registration Form tool: address step" },
  { image: voteGovNvrf6, alt: "National Voter Registration Form tool: identification step" },
  { image: voteGovNvrf7, alt: "National Voter Registration Form tool: choice of party step" },
  { image: voteGovNvrf8, alt: "National Voter Registration Form tool: review step" },
  { image: voteGovNvrf9, alt: "National Voter Registration Form tool: completed and ready to print" },
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
      <div className="flex flex-1 flex-col gap-6 text-[20px] font-medium leading-[1.31] text-ink md:font-normal">
        {body}
      </div>
    </div>
  );
}

export function VoteGov() {
  useEffect(() => {
    document.title = "Vote.gov — Craig Forbes";
  }, []);

  return (
    <>
      <Hero
        poster={voteGovHero}
        alt="Two people looking at the vote.gov registration flow on a laptop"
        lowered
      >
        <span className="text-accent">Vote.gov</span>: Simplifying
        <br />
        voter registration
        <br />
        for millions.
      </Hero>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-6 pb-12 md:gap-26 md:pb-26">
            <SectionIntro
              heading="Overview"
              body={
                <>
                  <p>
                    Federal law requires voter registration by mail, often
                    through confusing, outdated forms. I led UI design for
                    GSA&rsquo;s vote.gov overhaul to simplify and modernize
                    this process.
                  </p>
                  <p>
                    Collaborating with UX researchers, developers, and
                    content strategists, we conducted user interviews
                    across demographics and worked with disability
                    advocacy groups to ensure accessibility for all. The
                    clearest insight from that research: people on a
                    federal website don&rsquo;t want to be wowed, they
                    want to be done. Every decision favored clarity and
                    speed over polish for its own sake.
                  </p>
                  <p>
                    We designed a &ldquo;TurboTax-like&rdquo; flow with
                    accurate federal/state guidance and built a tool to
                    help users in eligible states complete the National
                    Voter Registration Form digitally and receive
                    instructions on who and where it needs to get
                    physically to be compliant. Additionally, we added
                    support for 19 languages, covering 96% of the U.S.
                    population.
                  </p>
                  <p>
                    Deliverables included a refreshed brand identity,
                    USWDS based component system, high-contrast mode, and
                    a WCAG-compliant accessibility dock.
                  </p>
                  <p>
                    The federal side also came with real design
                    constraints, USWDS standards, plain-language rules,
                    strict accessibility requirements, that can feel like
                    aesthetic limits if you fight them. We designed around
                    those constraints instead, and used the project to
                    advocate for design&rsquo;s role as more than a
                    &ldquo;coat of paint&rdquo; applied at the end: a
                    discipline that shapes the system from the start.
                  </p>
                </>
              }
            />

            <ProjectVideo video={voteGovPageMotion} aspect="2704/1812" />

            <ProjectImageRow
              images={[
                { src: voteGov1b, alt: "Vote.gov mobile screens showing voter eligibility FAQs and the language menu", aspect: "8/5" },
                { src: voteGov3b, alt: "Stylized collage of the vote.gov homepage shown across multiple browser frames", aspect: "8/5" },
              ]}
            />
          </div>
        </div>
      </section>

      <HighlightsCarousel slides={voteGovNvrfSlides} />

      <section className="-mt-8 bg-almost-white md:-mt-16">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-6 pb-12 md:gap-26 md:pb-26">
            <ProjectImage
              image={voteGovLanguagesGif}
              alt="Vote.gov homepage cycling through several languages"
              aspect="2160/1350"
            />

            <ProjectVideo
              video={voteGovAccessibilityDock}
              aspect="1920/1078"
              scale={1.06}
              frameColor="#f5f5f5"
            />
          </div>
        </div>
      </section>

      <UpNext current="/work/vote-gov" />

      <Footer />
    </>
  );
}
