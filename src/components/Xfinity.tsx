import { useEffect } from "react";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ProjectImageRow } from "./ProjectSection";
import { UpNext } from "./UpNext";
import xfinityHero from "../assets/images/work/xfinity-hero.jpg";
import xfinityOld from "../assets/images/work/xfinity-old.jpg";
import xfinityNew from "../assets/images/work/xfinity-new.jpg";
import xfinityFlow1 from "../assets/images/work/xfinity-flow-1.jpg";
import xfinityFlow2 from "../assets/images/work/xfinity-flow-2.jpg";
import xfinityFlow3 from "../assets/images/work/xfinity-flow-3.jpg";

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

export function Xfinity() {
  useEffect(() => {
    document.title = "Xfinity — Craig Forbes";
  }, []);

  return (
    <>
      <Hero
        poster={xfinityHero}
        alt="Xfinity wordmark on a purple gradient background"
        lowered
      >
        <span className="text-accent">Xfinity</span>: Evolving the design
        system and expanding product trade-ins
      </Hero>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-6 pb-12 md:gap-26 md:pb-26">
            <SectionIntro
              heading="Overview"
              body={
                <>
                  <p>
                    As part of the team at Huge, I worked with Xfinity
                    Mobile to transition their digital experience from a
                    legacy framework to a modern, scalable design system.
                    I contributed to the architecture of new UI
                    components and helped build out design guidelines to
                    ensure visual consistency across the customer
                    journey.
                  </p>
                  <p>
                    Additionally, we helped expand Xfinity&rsquo;s
                    trade-in platform, introducing support for
                    smartwatches and tablets alongside smartphones, while
                    streamlining the reactivation and data plan
                    adjustment process.
                  </p>
                </>
              }
            />

            <BeforeAfterSlider
              before={xfinityOld}
              beforeAlt="Xfinity Mobile legacy device purchase flow for the iPhone 17 Pro"
              beforeLabel="Legacy"
              after={xfinityNew}
              afterAlt="Xfinity Mobile refreshed device purchase flow for the iPhone 17 Pro"
              afterLabel="New"
              aspect="2000/1168"
            />

            <ProjectImageRow
              images={[
                { src: xfinityFlow1, alt: "Xfinity Mobile refreshed iPhone 17 Pro product page", aspect: "1/1" },
                { src: xfinityFlow2, alt: "Xfinity Mobile refreshed color and storage selection", aspect: "1/1" },
                { src: xfinityFlow3, alt: "Xfinity Mobile refreshed trade-in device details screen", aspect: "1/1" },
              ]}
            />
          </div>
        </div>
      </section>

      <UpNext current="/work/xfinity" />

      <Footer />
    </>
  );
}
