import { useEffect } from "react";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { ProjectImage, ProjectImageRow } from "./ProjectSection";
import { PeekSlider } from "./PeekSlider";
import { UpNext } from "./UpNext";
import flameBroilerHero from "../assets/images/work/flame-broiler-hero.jpg";
import flameBroilerTrio from "../assets/images/work/flame-broiler-trio.jpg";
import flameBroilerBrandColors from "../assets/images/work/flame-broiler-brand-colors.jpg";
import flameBroilerBrandFonts from "../assets/images/work/flame-broiler-brand-fonts.jpg";
import flameBroilerScreen01 from "../assets/images/work/flame-broiler-screen-01.jpg";
import flameBroilerScreen02 from "../assets/images/work/flame-broiler-screen-02.jpg";
import flameBroilerScreen03 from "../assets/images/work/flame-broiler-screen-03.jpg";
import flameBroilerScreen04 from "../assets/images/work/flame-broiler-screen-04.jpg";
import flameBroilerScreen05 from "../assets/images/work/flame-broiler-screen-05.jpg";
import flameBroilerScreen06 from "../assets/images/work/flame-broiler-screen-06.jpg";
import flameBroilerScreen07 from "../assets/images/work/flame-broiler-screen-07.jpg";
import flameBroilerScreen08 from "../assets/images/work/flame-broiler-screen-08.jpg";
import flameBroilerScreen09 from "../assets/images/work/flame-broiler-screen-09.jpg";
import flameBroilerScreen10 from "../assets/images/work/flame-broiler-screen-10.jpg";
import flameBroilerScreen11 from "../assets/images/work/flame-broiler-screen-11.jpg";
import flameBroilerScreen12 from "../assets/images/work/flame-broiler-screen-12.jpg";
import flameBroilerScreen13 from "../assets/images/work/flame-broiler-screen-13.jpg";
import flameBroilerScreen14 from "../assets/images/work/flame-broiler-screen-14.jpg";
import flameBroilerScreen15 from "../assets/images/work/flame-broiler-screen-15.jpg";

const flameBroilerScreens = [
  { src: flameBroilerScreen01, alt: "Splash screen with the Flame Broiler flame mark on a red background" },
  { src: flameBroilerScreen02, alt: "Welcome screen with the Flame Broiler wordmark over a spread of food and a Sign In button" },
  { src: flameBroilerScreen03, alt: "Signed-in home screen showing rewards points and an Order Again carousel" },
  { src: flameBroilerScreen04, alt: "Order method modal for choosing delivery or pickup" },
  { src: flameBroilerScreen05, alt: "Pickup method modal for choosing curbside or in-store" },
  { src: flameBroilerScreen06, alt: "Location search screen with an empty search field" },
  { src: flameBroilerScreen07, alt: "Location search results list" },
  { src: flameBroilerScreen08, alt: "Order menu screen with Signature Creations and Sundaes categories" },
  { src: flameBroilerScreen09, alt: "Featured Flavors grid showing all bowl options" },
  { src: flameBroilerScreen10, alt: "Organic Tofu Bowl product detail screen" },
  { src: flameBroilerScreen11, alt: "Organic Tofu Bowl product detail screen with the item added to the cart" },
  { src: flameBroilerScreen12, alt: "Review order screen with delivery details and item summary" },
  { src: flameBroilerScreen13, alt: "Checkout screen for selecting a payment method" },
  { src: flameBroilerScreen14, alt: "Checkout screen with Flame Broiler Rewards applied" },
  { src: flameBroilerScreen15, alt: "Order confirmation screen with pickup details and a delivery tracking map" },
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

export function FlameBroiler() {
  useEffect(() => {
    document.title = "Flame Broiler — Craig Forbes";
  }, []);

  return (
    <>
      <Hero
        poster={flameBroilerHero}
        alt="Flame Broiler meal bowls and sauce bottle on a table"
        lowered
      >
        <span className="text-accent">Flame Broiler</span>: Designing the
        mobile ordering experience
      </Hero>

      <section className="bg-almost-white">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-6 pb-12 md:gap-26 md:pb-26">
            <SectionIntro
              heading="Overview"
              body={
                <>
                  <p>
                    Flame Broiler is a fast-casual restaurant chain built
                    around grilled rice bowls, a healthier, Korean-inspired
                    take on the classic drive-through meal.
                  </p>
                  <p>
                    I served as UI designer on the project and contributed
                    to art direction as well. We built the app using Figma
                    and Brevo Studio for iOS and Android.
                  </p>
                </>
              }
            />

            <ProjectImage
              image={flameBroilerTrio}
              alt="Three Flame Broiler app screens: home, Organic Tofu Bowl detail, and order review"
              aspect="2704/1814"
            />

            <ProjectImageRow
              images={[
                { src: flameBroilerBrandColors, alt: "Flame Broiler brand color palette: red, dark red, black, and grey with white and green accents", aspect: "5/3" },
                { src: flameBroilerBrandFonts, alt: "Flame Broiler brand typefaces: Ministry for body copy and Good Headline Pro for headlines", aspect: "5/3" },
              ]}
            />

            <PeekSlider slides={flameBroilerScreens} aspect="2484/5496" />
          </div>
        </div>
      </section>

      <UpNext current="/work/flame-broiler" />

      <Footer />
    </>
  );
}
