import { useEffect } from "react";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { ProjectImageRow, ProjectEmbed } from "./ProjectSection";
import { PeekSlider } from "./PeekSlider";
import { UpNext } from "./UpNext";
import designEyeHeroVideo from "../assets/videos/work/designeye-hero.mp4";
import designEyeHeroPoster from "../assets/images/work/designeye-hero-poster.jpg";
// import designEyeSketches from "../assets/images/work/designeye-sketches.jpg"; // commented out with its row usage below, may bring back later
import designEyeBeardedMan from "../assets/images/work/designeye-bearded-man.jpg";
import designEyeAmorette from "../assets/videos/work/designeye-amorette.mp4";
import designEyeAmorettePoster from "../assets/images/work/designeye-amorette-poster.jpg";
import designEyeMural from "../assets/videos/work/designeye-mural.mp4";
import designEyeMuralPoster from "../assets/images/work/designeye-mural-poster.jpg";
import designEyeMaxs from "../assets/videos/work/designeye-maxs.mp4";
import designEyeMaxsPoster from "../assets/images/work/designeye-maxs-poster.jpg";
import designEyeStreet from "../assets/videos/work/designeye-street.mp4";
import designEyeStreetPoster from "../assets/images/work/designeye-street-poster.jpg";

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

export function DesignEye() {
  useEffect(() => {
    document.title = "DesignEye — Craig Forbes";
  }, []);

  return (
    <>
      <Hero
        video={designEyeHeroVideo}
        poster={designEyeHeroPoster}
        alt="Phone mockup cycling through the DesignEye app"
        lowered
      >
        <span className="text-accent">DesignEye</span>: Converse. Claim.
        Create.
      </Hero>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-6 pb-12 md:gap-26 md:pb-26">
            <SectionIntro
              heading="Overview"
              body="A 2021 self-initiated project exploring how an Augmented Reality enabled iOS app could index and annotate the work of creators in and around Lancaster, Pennsylvania. DesignEye users can converse with other designers, claim their publicly visible works, and create new works visible through the lens of AR. Featured design artifacts are user-contributed and curated, and users are encouraged to engage with the DesignEye community to cultivate design literacy. The app lets users plant &ldquo;virtual&rdquo; flags to take credit for their publicly visible work, and annotate displayed projects with process, inspiration, typefaces used, and more."
            />

            <ProjectEmbed
              src="https://player.vimeo.com/video/365426637?fl=pl&fe=vl&autoplay=1&muted=1&loop=1"
              title="DesignEye overview reel"
              aspect="16/9"
            />

            <div className="sm:hidden">
              <PeekSlider
                aspect="408/800"
                slides={[
                  { src: designEyeAmorettePoster, video: designEyeAmorette, alt: "AR view claiming the Amorette storefront plaque" },
                  { src: designEyeMuralPoster, video: designEyeMural, alt: "AR view of a colorful mural claimed as a design artifact" },
                  { src: designEyeMaxsPoster, video: designEyeMaxs, alt: "AR view claiming the Max's Eatery sign" },
                ]}
              />
            </div>

            <div className="hidden sm:block">
              <ProjectImageRow
                images={[
                  { src: designEyeAmorettePoster, video: designEyeAmorette, alt: "AR view claiming the Amorette storefront plaque", aspect: "408/800" },
                  { src: designEyeMuralPoster, video: designEyeMural, alt: "AR view of a colorful mural claimed as a design artifact", aspect: "408/800" },
                  { src: designEyeMaxsPoster, video: designEyeMaxs, alt: "AR view claiming the Max's Eatery sign", aspect: "408/800" },
                ]}
              />
            </div>

            <ProjectEmbed
              src="https://player.vimeo.com/video/1077329869?autoplay=1&muted=1&loop=1&controls=0"
              title="DesignEye process"
              aspect="16/9"
            />

            <ProjectImageRow
              images={[
                // Hard to read cropped to 1/1 — commented out for now, may bring back later.
                // { src: designEyeSketches, alt: "Hand-drawn profile creation flow and wireframe sketches", aspect: "1/1" },
                { src: designEyeBeardedMan, alt: "Person testing the DesignEye app on their phone at a table", aspect: "1/1" },
                { src: designEyeStreetPoster, video: designEyeStreet, alt: "Person using the DesignEye app on a Lancaster street", aspect: "1/1" },
              ]}
            />

            <SectionIntro
              heading="See for yourself"
              body="While I can't bring Lancaster to you, I can bring you to Lancaster — explore the guided demo below."
            />

            <div className="mx-auto w-full max-w-[380px]">
              <ProjectEmbed
                src="https://marvelapp.com/ci5bic7?emb=1&iosapp=false&frameless=false"
                title="DesignEye prototype"
                aspect="1/2"
              />
            </div>

            <SectionIntro
              heading="Reflections"
              body={
                <>
                  <p>
                    It&rsquo;s been a few years since I&rsquo;ve touched the
                    DesignEye project. With the advent of AI tools like
                    Claude, Gemini, and GPT, I think there&rsquo;s a lot
                    less of a hurdle to developing this idea further. I
                    plan on experimenting with computer vision models and
                    exploring how we could execute the AR functionality
                    using USDZ files.
                  </p>
                  <p>
                    Looking back, I can also see some typography and iOS
                    UX pattern issues I was blind to when I first
                    designed the project. All that being said, I still
                    believe the concept is strong.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </section>

      <UpNext current="/work/design-eye" />

      <Footer />
    </>
  );
}
