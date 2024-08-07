import Image from "next/image";
import ProjectSlideShow from "./ProjectSlideShow";
import PROJECTS from '@/constants';

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
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-32 items-center">
        <ProjectSlideShow
          picSrcs={PROJECTS[0].pictures}
          alt={PROJECTS[0].title}
          className="w-[300px] h-[220px] sm:h-80 sm:w-[435px] relative rounded-md"
        />
        <div className="w-[90vw] max-w-[458px]">
          <h3 className="mb-4 text-left">La Tresse</h3>
          <p>I designed and developed this tiny social network for members of a Third Place focusing on cooperation and social interactions.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects