import { useEffect } from "react";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { ProjectImage, ProjectImageRow, ProjectEmbed } from "./ProjectSection";
import { UpNext } from "./UpNext";
import designEyeHero from "../assets/images/work/designeye-hero.gif";
import designEyeLifestyle1 from "../assets/images/work/designeye-lifestyle-1.jpg";
import designEyeLifestyle2 from "../assets/images/work/designeye-lifestyle-2.jpg";
import designEyeAmorette from "../assets/videos/work/designeye-amorette.mp4";
import designEyeAmorettePoster from "../assets/images/work/designeye-amorette-poster.jpg";
import designEyeMural from "../assets/videos/work/designeye-mural.mp4";
import designEyeMuralPoster from "../assets/images/work/designeye-mural-poster.jpg";
import designEyeMaxs from "../assets/videos/work/designeye-maxs.mp4";
import designEyeMaxsPoster from "../assets/images/work/designeye-maxs-poster.jpg";

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

export function DesignEye() {
  useEffect(() => {
    document.title = "DesignEye — Craig Forbes";
  }, []);

  return (
    <>
      <Hero poster={designEyeHero} alt="Phone mockup cycling through the DesignEye app" lowered>
        <span className="text-accent">DesignEye</span>: Converse. Claim.
        Create.
      </Hero>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-12 pb-12 md:gap-26 md:pb-26">
            <SectionIntro
              heading="Overview"
              body="A self-initiated project exploring how an Augmented Reality enabled iOS app could index and annotate the work of creators in and around Lancaster, Pennsylvania. DesignEye users can converse with other designers, claim their publicly visible works, and create new works visible through the lens of AR. Featured design artifacts are user-contributed and curated, and users are encouraged to engage with the DesignEye community to cultivate design literacy. The app lets users plant &ldquo;virtual&rdquo; flags to take credit for their publicly visible work, and annotate displayed projects with process, inspiration, typefaces used, and more."
            />

            <ProjectEmbed
              src="https://player.vimeo.com/video/365426637?fl=pl&fe=vl&autoplay=1&muted=1&loop=1"
              title="DesignEye overview reel"
              aspect="16/9"
            />

            <ProjectImageRow
              images={[
                { src: designEyeAmorettePoster, video: designEyeAmorette, alt: "AR view claiming the Amorette storefront plaque", aspect: "408/800" },
                { src: designEyeMuralPoster, video: designEyeMural, alt: "AR view of a colorful mural claimed as a design artifact", aspect: "408/800" },
                { src: designEyeMaxsPoster, video: designEyeMaxs, alt: "AR view claiming the Max's Eatery sign", aspect: "408/800" },
              ]}
            />

            <ProjectImage
              image={designEyeLifestyle1}
              alt="Person seated at a table trying the DesignEye app on their phone"
              aspect="3840/2160"
            />
            <ProjectImage
              image={designEyeLifestyle2}
              alt="Person standing on a Lancaster street, holding up their phone to use DesignEye"
              aspect="1/1"
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
          </div>
        </div>
      </section>

      <UpNext current="/work/design-eye" />

      <Footer />
    </>
  );
}
