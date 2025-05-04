import Image from "next/image";
import ProjectSlideShow from "./ProjectSlideShow";
import PROJECTS from '@/constants';
import ProjectSubsection from "./ProjectSubsection";

const Projects = () => {
  return (
    <section className="w-full relative flex flex-col justify-center items-center px-4 py-10 sm:p-10" id="projects">
      <Image
        src="/projects-bg.png" 
        alt="Interface utilisateur pour La Tresse"
        className="bgImg"
        fill
      />
      <h2 className="mb-10">Projects</h2>
      <p className="text-lg sm:text-2xl text-center mb-12 lg:mb-24">An overview of a few projects I have worked on</p>
      
      <ProjectSubsection
        title="La Tresse"
        description="During my first training in 2023, I designed and developed in “vanilla code” this tiny social network for members of a Third Place focusing on cooperation and social interactions."
      >
        <ProjectSlideShow
          picSrcs={PROJECTS[0].pictures}
          alt={PROJECTS[0].title}
          className="w-[300px] h-[220px] sm:h-80 sm:w-[435px] relative rounded-md"
        />
      </ProjectSubsection>

    </section>
  )
}

export default Projects