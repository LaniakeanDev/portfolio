import PageSection from '../section';
import { content } from './content';
import { projects } from './content';
import ProjectCard from './project-card';
// import Title from '../title';
// import MiniSlider from '../mini-slider';
// import Button from '../button';
// import ProjectCard from './project-card';

export default function Projects({ lang }: ILang) {
  // const btnStyle =
  //   'py-2 px-1.5 2xs:px-3 xs:px-4 text-sm 2xs:text-base bg-linear-to-tr from-(--gold)/40 hover:from-(--gold)/50 to-(--gold)/80 hover:to-(--gold) rounded-xl text-black font-semibold cursor-pointer transition duration-300 border border-white/50';
  return (
    <PageSection id="projects" title={content.title[lang]}>
      <ul className="flex flex-row flex-wrap justify-center gap-16">
        {projects.map((project, idx) => (
          <li key={`prj${String(idx)}`} className="min-h-[528px] w-[95vw] max-w-sm rounded-2xl card hover-border">
            <ProjectCard project={project} lang={lang} />
            {/* <div className="w-full h-48 relative">
              <MiniSlider lang={lang} slides={project.slides} />
            </div>
            <div className="px-6 pt-6 pb-8">
              <Title level="h3" titleClassName="text-xl title-color font-semibold mb-4">
                {project.title[lang]}
              </Title>
              <p className="text-sm mb-4">{project.description[lang]}</p>
              <ul className="flex flex-row items-center justify-between gap-2 my-2">
                {project.tech.map((tech, idx) => (
                  <li key={`${project.title[lang]}-tech-${String(idx)}`} className="px-3 xs:px-4 py-1 bg-highlight rounded-md">
                    <p>{tech}</p>
                  </li>
                ))}
              </ul>
              <p className="text-sm mt-6 mb-8">
                <span className="font-semibold title-color">{lang == 'en' ? 'Role: ' : 'Rôle: '}</span>
                <span>{project.role[lang]}</span>
              </p>
              <ul className="flex flex-row justify-around gap-4 mt-4">
                {project.caseStudy && (
                  <li>
                    <Button className={btnStyle} label={lang == 'en' ? 'Case Study' : 'Etude de Cas'} />
                  </li>
                )}
                {project.githubLink && (
                  <li>
                    <Button className={btnStyle} label={lang == 'en' ? 'See on GitHub' : 'Voir sur GitHub'} />
                  </li>
                )}
                {project.liveLink && (
                  <li>
                    <Button className={btnStyle} label={lang == 'en' ? 'See Project' : 'Voir le Projet'} />
                  </li>
                )}
              </ul>
            </div> */}
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
