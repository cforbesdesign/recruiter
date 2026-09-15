import googleImage from "../assets/images/selected-projects/google.png";
import fitbitImage from "../assets/images/selected-projects/fitbit.png";
import baltimoreMagazineImage from "../assets/images/selected-projects/baltimore-magazine.png";
import voteGovImage from "../assets/images/selected-projects/vote-gov-hero.jpg";
import designEyeImage from "../assets/images/selected-projects/designeye.jpg";

export type Project = {
  name: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

/** Canonical project order — drives both the homepage list and each case
 * study's "Up next" links (previous/next, wrapping around at either end). */
export const projects: Project[] = [
  {
    name: "Google",
    description: "An agentic enterprise assistant powered Google Gemini",
    image: googleImage,
    alt: "Google logo on a blue-to-purple gradient background",
    href: "/work/google-agentic-assistant",
  },
  {
    name: "Fitbit",
    description: "Crafting a cohesive cross-channel experience for the fitness-forward brand",
    image: fitbitImage,
    alt: "Fitbit Luxe introduction screen shown on a phone",
    href: "/work/fitbit",
  },
  {
    name: "Baltimore Magazine",
    description: "Designing the go-to-guide for everything Baltimore",
    image: baltimoreMagazineImage,
    alt: "Baltimore magazine website pages shown at an angle",
    href: "/work/baltimore-magazine",
  },
  {
    name: "Vote.gov",
    description: "Simplifying voter registration for millions.",
    image: voteGovImage,
    alt: "Two people looking at the vote.gov registration flow on a laptop",
    href: "/work/vote-gov",
  },
  {
    name: "DesignEye",
    description: "Converse. Claim. Create.",
    image: designEyeImage,
    alt: "Person holding up a phone to claim a building using the DesignEye AR app",
    href: "/work/design-eye",
  },
];
