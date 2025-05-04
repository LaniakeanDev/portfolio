import PROJECTS from "@/constants";
import ProjectSlideShow from "./ProjectSlideShow";
import Image from "next/image";

interface ProjectSubsectionProps {
  projectId: number;
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
}

export default function ProjectSubsection({projectId, title, description, link, githubLink}:ProjectSubsectionProps) {
  return (
    <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-32 items-center mb-16">
      <ProjectSlideShow
          picSrcs={PROJECTS[projectId].pictures}
          alt={PROJECTS[projectId].title}
          className="w-[300px] h-[220px] sm:h-80 sm:w-[435px] relative rounded-md"
        />
      <div className="w-[90vw] max-w-[458px]">
        <h3 className="mb-4 text-left">{title}</h3>
        <p>{description}</p>
        <div className="w-full grid place-items-center mt-4">
          <div className="flex flex-row items-center gap-8">
            <a href={link} rel="noopener noreferrer" className={link ? 'block' : 'hidden'}>
              <div className="flex flex-row items-center gap-2">
                <p>Link to project</p>
                <Image
                  src="/icons/external-link.svg"
                  alt="external-link"
                  width={24}
                  height={24}
                />
              </div>
            </a>
            <a href={githubLink} rel="noopener noreferrer" className={githubLink ? 'block' : 'hidden'}>
              <div className="flex flex-row items-center gap-2">
                <p>see on GitHub</p>
                <Image
                  src="/GitHub-bright.svg" 
                  alt="GitHub"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}