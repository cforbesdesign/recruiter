import { useEffect } from "react";
import { Hero } from "./Hero";
import { SelectedProjects } from "./SelectedProjects";
import { About } from "./About";
import { Footer } from "./Footer";
import heroAstronautVideo from "../assets/videos/hero-astronaut.mp4";
import heroAstronautPoster from "../assets/images/home-hero-poster.jpg";

export function Home() {
  useEffect(() => {
    document.title = "Craig Forbes — Design Lead";
  }, []);

  return (
    <>
      <Hero
        video={heroAstronautVideo}
        poster={heroAstronautPoster}
        imageRadius="rounded-3xl"
        lowered
      >
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
