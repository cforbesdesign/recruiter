import { useEffect } from "react";
import { Hero } from "./Hero";
import { SelectedProjects } from "./SelectedProjects";
import { About } from "./About";
import { Footer } from "./Footer";
import heroAstronautVideo from "../assets/videos/hero-astronaut.mp4";
import heroAstronautPoster from "../assets/images/home-hero-poster.jpg";

/** The new homepage — starts as a copy of the original ("/everything.html"), to be built out from here. */
export function Home() {
  useEffect(() => {
    document.title = "Craig Forbes — Design Lead";
  }, []);

  return (
    <>
      <Hero video={heroAstronautVideo} poster={heroAstronautPoster} lowered>
        <span className="text-accent">Craig Forbes</span> is an East
        Coast-based Design Lead passionate about crafting stellar brands and
        products
      </Hero>
      <SelectedProjects />
      <About />
      <Footer />
    </>
  );
}
