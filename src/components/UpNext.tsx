import { handleNavClick } from "../hooks/useRoute";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      onClick={handleNavClick(project.href)}
      className="group flex flex-col gap-6"
    >
      <div className="aspect-[623/419] w-full overflow-hidden rounded-3xl border border-grey-1">
        <img
          src={project.image}
          alt={project.alt}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="transition-opacity duration-300 ease-out group-hover:opacity-75">
        <p className="text-[20px] font-medium text-ink md:font-normal">
          <span className="font-semibold text-ink">{project.name}</span>
          <br />
          {project.description}
        </p>
      </div>
    </a>
  );
}

/** Links to the previous and next project relative to `current`, wrapping
 * around at either end of the canonical project order. */
export function UpNext({ current }: { current: string }) {
  const index = projects.findIndex((p) => p.href === current);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <section className="bg-white pt-12 md:pt-26">
      <div className="mx-auto max-w-[1512px] px-6 sm:px-12 xl:px-20">
        <h2 className="mb-12 text-[30px] font-semibold leading-[1.05] text-ink md:mb-26">
          Up next
        </h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 pb-12 sm:grid-cols-2 md:pb-26">
          <div className="hidden sm:block">
            <ProjectCard project={prev} />
          </div>
          <ProjectCard project={next} />
        </div>
      </div>
    </section>
  );
}
