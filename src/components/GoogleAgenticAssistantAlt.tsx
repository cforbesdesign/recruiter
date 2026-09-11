import { useEffect } from "react";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { HighlightsCarousel } from "./HighlightsCarousel";
import heroVideo from "../assets/videos/work/google-spark-hero.mp4";
import heroPoster from "../assets/images/work/google-spark-hero-poster.jpg";
import placeholder2 from "../assets/images/work/carousel-placeholders/placeholder-2.svg";
import placeholder3 from "../assets/images/work/carousel-placeholders/placeholder-3.svg";
import placeholder4 from "../assets/images/work/carousel-placeholders/placeholder-4.svg";
import placeholder5 from "../assets/images/work/carousel-placeholders/placeholder-5.svg";
import placeholder6 from "../assets/images/work/carousel-placeholders/placeholder-6.svg";

const slides = [
  {
    image: heroPoster,
    video: heroVideo,
    alt: "Cymbal home screen with the Gemini prompt bar and a personalized feed",
    caption: "A personalized home screen surfaces what matters today.",
  },
  {
    image: placeholder2,
    alt: "Filter panel with facets for type, source, project, and urgency",
    caption: "Granular filters narrow results by type, source, and urgency.",
  },
  {
    image: placeholder3,
    alt: "AI side panel suggesting actions for a Google Sheets expense report",
    caption: "Contextual actions turn any file into a starting point.",
  },
  {
    image: placeholder4,
    alt: "Zoomed-in card actions showing share, bookmark, archive, and file owner",
    caption: "Every card carries its own quick actions and ownership.",
  },
  {
    image: placeholder5,
    alt: "Two home screen variants greeting the user with different urgent items",
    caption: "The assistant adapts its greeting to whatever's most urgent.",
  },
  {
    image: placeholder6,
    alt: "Home screen leading with an urgent Jira ticket and one-click actions",
    caption: "Urgent work surfaces immediately, with one-click actions.",
  },
];

/** WIP staging page — prototyping the highlights carousel mid-flow before it's finalized in Figma. */
export function GoogleAgenticAssistantAlt() {
  useEffect(() => {
    document.title = "Google Agentic Enterprise Assistant (Alt) — Craig Forbes";
  }, []);

  return (
    <>
      <Hero video={heroVideo} poster={heroPoster} frameColor="#E6DBF9">
        An agentic enterprise collaboration and productivity platform powered
        by <span className="text-accent">Google Gemini</span>.
      </Hero>

      <section className="bg-almost-white py-16 md:py-26">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <h3 className="flex-1 text-[30px] leading-[1.05] font-semibold text-ink md:text-[48px]">
              Employee Search Query
            </h3>
            <div className="flex-1">
              <p className="text-[20px] leading-[1.15] text-ink md:text-[30px]">
                Search that answers instead of linking.
              </p>
              <p className="mt-6 text-[16px] leading-[1.31] text-ink md:text-[20px]">
                Typing "Help me plan my travel to the New York office" doesn't
                return an intranet wiki page to dig through or bury the answer
                three replies deep in a Teams thread; it returns an AI Answer
                confirming the employee's approved travel window and budget, a
                "Plan my trip" action, and a short list of the people and
                documents actually relevant to the task: a travel coordinator,
                the company travel policy, a past trip record. Search resolves
                to an answer with a next step attached, not a results page or
                a chat scrollback to sort through.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HighlightsCarousel heading="Get the highlights." slides={slides} />

      <section className="bg-almost-white pb-16 md:pb-26">
        <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
          <p className="text-[16px] leading-[1.31] text-ink md:text-[20px] xl:max-w-[calc(50%-24px)]">
            Every card in the feed carries its own source, timestamp, and
            quick actions, so the assistant reads as a single home base for
            the tools employees already use, not a new one to learn.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
