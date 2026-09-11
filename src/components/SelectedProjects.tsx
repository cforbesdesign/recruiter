import { handleNavClick } from "../hooks/useRoute";
import { useInView } from "../hooks/useInView";
import googleImage from "../assets/images/selected-projects/google.png";
import fitbitImage from "../assets/images/selected-projects/fitbit.png";
import baltimoreMagazineImage from "../assets/images/selected-projects/baltimore-magazine.png";
// import voteGovImage from "../assets/images/selected-projects/vote-gov.png";

type Project = {
  number: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
  /** Spans both grid columns, sitting alone in its own row. */
  fullWidth?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Google",
    description: "An agentic enterprise assistant powered Google Gemini",
    image: googleImage,
    alt: "Google logo on a blue-to-purple gradient background",
    href: "/work/google-agentic-assistant",
  },
  {
    number: "02",
    name: "Fitbit",
    description: "Crafting a cohesive cross-channel experience for the fitness-forward brand",
    image: fitbitImage,
    alt: "Fitbit Luxe introduction screen shown on a phone",
    href: "/work/fitbit",
  },
  {
    number: "03",
    name: "Baltimore Magazine",
    description: "Designing the go-to-guide for everything Baltimore",
    image: baltimoreMagazineImage,
    alt: "Baltimore magazine website pages shown at an angle",
    href: "/work/baltimore-magazine",
  },
  // Commented out for now — re-enable when ready to show Vote.gov again.
  // {
  //   number: "03",
  //   name: "Vote.gov",
  //   description: "Simplifying voter registration for missions accross the U.S.",
  //   image: voteGovImage,
  //   alt: "Person using a laptop showing the Vote.gov registration flow",
  // },
];

const reveal = (inView: boolean) =>
  `transition-all duration-700 ease-out ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

const DELAY_CLASSES = ["", "sm:delay-75", "sm:delay-150"];

function ProjectCard({
  project,
  column,
}: {
  project: Project;
  column: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const card = (
    <>
      <div
        ref={ref}
        className={`aspect-[623/419] w-full overflow-hidden rounded-3xl ${reveal(inView)} ${
          DELAY_CLASSES[column % DELAY_CLASSES.length]
        }`}
      >
        <div
          role="img"
          aria-label={project.alt}
          style={{ backgroundImage: `url(${project.image})` }}
          className="h-full w-full bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <p className="mt-6 text-[20px] font-medium leading-[1.31] text-ink transition-opacity duration-300 ease-out group-hover:opacity-75 md:font-normal">
        <span className="font-bold">
          {/* {project.number} */}
          {project.name}
        </span>
        <br />
        {project.description}
      </p>
    </>
  );

  const spanClass = project.fullWidth ? "sm:col-span-2" : "";

  if (project.href) {
    return (
      <a
        href={project.href}
        onClick={handleNavClick(project.href)}
        className={`group block ${spanClass}`}
      >
        {card}
      </a>
    );
  }

  return <div className={`group ${spanClass}`}>{card}</div>;
}

export function SelectedProjects() {
  let columnIndex = 0;

  return (
    <section className="bg-almost-white">
      <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
        <div className="flex flex-col gap-[27px] py-12 md:pt-0 md:pb-[136px]">
          <h2 className="text-[30px] font-semibold leading-[1.05] text-ink">
            Selected Projects
          </h2>
          <div className="h-px w-full bg-grey-1" />
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-3 md:gap-x-12 pb-12 md:pb-26">
          {projects.map((project) => {
            const column = columnIndex;
            columnIndex++;
            return (
              <ProjectCard key={project.name} project={project} column={column} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
