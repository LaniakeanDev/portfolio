import PROJECTS from "@/constants";
import ProjectSlideShow from "./ProjectSlideShow";
import Image from "next/image";

interface ProjectSubsectionProps {
  projectId: number;
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  year: string;
  lang: supportedLanguages;
}

export default function ProjectSubsection({projectId, title, description, link, githubLink, year, lang}:ProjectSubsectionProps) {
  const content = {
    link: {
      en: 'Link to project',
      fr: 'Lien vers le projet'
    },
    github: {
      en: 'See on GitHub',
      fr: 'Voir sur GitHub'
    }
  }
  return (
    <div className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-16 items-center px-4 2xs:px-8 py-8 rounded-lg">
      <ProjectSlideShow
          picSrcs={PROJECTS[projectId].pictures}
          alt={PROJECTS[projectId].title}
          className="w-[272px] h-[200px] xs:w-[300px] xs:h-[220px] sm:h-80 sm:w-[435px] relative rounded-md"
        />
      <div className="w-full max-w-[458px]">
        <h3 className="mb-6 text-left font-semibold text-xl xs:text-2xl">{title}</h3> 
        <p>{description}</p>
        <div className="w-full mt-6">
          <div className="flex flex-row items-center gap-8">
            <a href={link} rel="noopener noreferrer" target="_blank" className={link ? 'block' : 'hidden'}>
              <div className="flex flex-row items-center gap-2">
                <p className="text-pfLightGrey">{content.link[lang]}</p>
                <Image
                  src="/icons/external-link.svg"
                  alt="external-link"
                  width={24}
                  height={24}
                />
              </div>
            </a>
            <a href={githubLink} rel="noopener noreferrer" target="_blank" className={githubLink ? 'block' : 'hidden'}>
              <div className="flex flex-row items-center gap-2">
                <p className="text-pfLightGrey">{content.github[lang]}</p>
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
        <p className="mb-2 text-right text-gray-400">{year}</p>
      </div>
    </div>
  )
}