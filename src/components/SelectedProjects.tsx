import { handleNavClick } from "../hooks/useRoute";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const reveal = (inView: boolean) =>
  `transition-all duration-700 ease-out ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

const DELAY_CLASSES = ["", "sm:delay-75", "sm:delay-150"];

const STICKY_TOP = "sm:top-0";

const ROW_CLASS = "group block sm:grid sm:grid-cols-12 sm:items-stretch sm:gap-x-12";

function ProjectRow({ project, column }: { project: Project; column: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { ref: textRef, inView: textInView } = useInView<HTMLDivElement>();
  const delayClass = DELAY_CLASSES[column % DELAY_CLASSES.length];

  const card = (
    <>
      <div
        ref={ref}
        className={`aspect-[623/419] w-full overflow-hidden rounded-3xl sm:col-span-8 sm:col-start-5 sm:row-start-1 ${reveal(inView)} ${delayClass}`}
      >
        <div
          role="img"
          aria-label={project.alt}
          style={{ backgroundImage: `url(${project.image})` }}
          className="h-full w-full bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      <div className="mt-6 sm:col-span-4 sm:col-start-1 sm:row-start-1 sm:mt-0">
        <div className="sm:flex sm:h-full sm:items-center">
          <div
            ref={textRef}
            className={`sm:sticky ${STICKY_TOP} sm:w-full sm:py-10 ${reveal(textInView)} ${delayClass}`}
          >
            <p className="text-[20px] font-medium leading-[1.31] text-ink transition-opacity duration-300 ease-out group-hover:opacity-75 md:font-normal">
              <span className="font-bold">{project.name}</span>
              <br />
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  if (project.href) {
    return (
      <a href={project.href} onClick={handleNavClick(project.href)} className={ROW_CLASS}>
        {card}
      </a>
    );
  }
  return <div className={ROW_CLASS}>{card}</div>;
}

export function SelectedProjects() {
  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-almost-white">
      <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
        <div
          ref={headingRef}
          className={`flex flex-col gap-[27px] py-12 md:pt-0 md:pb-[136px] ${reveal(headingInView)}`}
        >
          <h2 className="text-[30px] font-semibold leading-[1.05] text-ink">
            Selected Projects
          </h2>
          <div className="h-px w-full bg-grey-1" />
        </div>

        <div className="grid grid-cols-1 gap-y-12 pb-12 sm:gap-y-24 md:pb-26">
          {projects.map((project, index) => (
            <ProjectRow key={project.name} project={project} column={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
