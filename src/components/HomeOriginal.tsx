import { useEffect } from "react";
import { Hero } from "./Hero";
import { SelectedProjectsOriginal } from "./SelectedProjectsOriginal";
import { About } from "./About";
import { Footer } from "./Footer";
import heroAstronautVideo from "../assets/videos/hero-astronaut.mp4";
import heroAstronautPoster from "../assets/images/home-hero-poster.jpg";

export function HomeOriginal() {
  useEffect(() => {
    document.title = "Craig Forbes — Design Lead (Original)";
  }, []);

  return (
    <>
      <Hero video={heroAstronautVideo} poster={heroAstronautPoster} lowered>
        <span className="text-accent">Craig Forbes</span> is an East
        Coast-based Design Lead passionate about crafting stellar brands and
        products
      </Hero>
      <SelectedProjectsOriginal />
      <About />
      <Footer />
    </>
  );
}
