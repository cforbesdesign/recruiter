import { useEffect } from "react";
import { Hero } from "./Hero";
import { Work } from "./Work";
import { About } from "./About";
import { Footer } from "./Footer";
import heroAstronautVideo from "../assets/videos/hero-astronaut.mp4";
import heroAstronautPoster from "../assets/images/home-hero-poster.jpg";

/** The original homepage, preserved at its own URL once a new homepage takes over "/". */
export function Everything() {
  useEffect(() => {
    document.title = "Craig Forbes — Design Lead";
  }, []);

  return (
    <>
      <Hero video={heroAstronautVideo} poster={heroAstronautPoster}>
        <span className="text-accent">Craig Forbes</span> is an East
        Coast-based Design Lead passionate about crafting stellar brands and
        products.
      </Hero>
      <Work />
      <About />
      <Footer />
    </>
  );
}
