import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { projects } from "@/_mock";
import { CardProject } from "../_components/card-project";
import { Heading } from "../_components/heading";

const Projects = () => {
  return (
    <section
      data-section
      id="projects"
      className="text-white p-6 bg-grid-white/5 h-full w-full relative bg-background"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <Heading title="Projects" className="mb-20" />

      <div className="grid md:grid-cols-3 grid-cols-1 items-stretch justify-center gap-y-12 gap-x-4 p-6">
        {projects.map((project, idx) => (
          <CardProject key={`project-${idx}`} {...project} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-16 relative">
        <Link
          href="#"
          className={buttonVariants({
            size: "lg",
            className:
              "mx-auto text-black w-1/4 hover:bg-white hover:border-2 border-background",
          })}
        >
          All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
