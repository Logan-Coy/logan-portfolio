import { ProjectCard } from "@components";
import { projectData } from "@constants";
import { Fragment } from "react";

function Projects() {
  return (
    <section id="projects" className="bg-stone-100 py-10">
      <div className="flex justify-center mb-10">
        <h2 className="font-montserrat font-bold text-slate-800 text-5xl text-center">
          PROJECTS
          <div className="border-b-8 border w-[60%] mx-auto border-emerald-300 mt-3 rounded-md"></div>
        </h2>
      </div>
      {projectData.map((data) => (
        <Fragment key={data.title}>
          <ProjectCard
            title={data.title}
            imgSrc={data.imgSrc}
            imgAlt={data.imgAlt}
            skills={data.skills}
            description={data.description}
            imgHeight={data.imgHeight}
            imgWidth={data.imgWidth}
            scrollPercent={data.scrollPercent}
          />
        </Fragment>
      ))}
    </section>
  );
}

export default Projects;
