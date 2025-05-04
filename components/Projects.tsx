import Image from "next/image";
import ProjectSubsection from "./ProjectSubsection";
import PROJECTS from "@/constants";

const Projects = () => {
  return (
    <section className="w-full relative flex flex-col justify-center items-center px-4 py-10 sm:p-10 md:pt-16" id="projects">
      <Image
        src="/projects-bg.png" 
        alt="Interface utilisateur pour La Tresse"
        className="bgImg"
        fill
      />
      <h2 className="mb-10">Projects</h2>
      <p className="text-lg sm:text-2xl text-center mb-16 lg:mb-24">An overview of a few projects I have worked on</p>
      <ul>
        {PROJECTS.map((project, idx) => (
          <li key={`project-${String(idx)}`}>
            <ProjectSubsection
              title={project.title}
              description={project.description}
              projectId={idx}
              link={project.link}
              githubLink={project.githubLink}
            />
          </li>
        ))}
      </ul>
      {/* <ProjectSubsection
        title="La Tresse"
        description="During my first training in 2023, I designed and developed in “vanilla code” this tiny social network for members of a Third Place focusing on cooperation and social interactions."
        projectId={0}
      /> */}
    </section>
  )
}

export default Projects