import PageSection from '../section';
import { content } from './content';
import { projects } from './content';
import Title from '../title';
import MiniSlider from '../mini-slider';
import Button from '../button';

export default function Projects({ lang }: ILang) {
  const btnStyle = 'py-2 px-4 bg-pfYellow rounded-xl text-black';
  return (
    <PageSection title={content.title[lang]}>
      <ul className="flex flex-row flex-wrap gap-8">
        {projects.map((project, idx) => (
          <li key={`prj${String(idx)}`} className="h-[518px] w-[95vw] max-w-sm dark:bg-white/10 rounded-2xl">
            <div className="w-full h-48 relative">
              <MiniSlider lang={lang} slides={project.slides} />
            </div>
            <div className="px-6 py-4">
              <Title level="h3" titleClassName="text-xl font-semibold mb-2">
                {project.title[lang]}
              </Title>
              <p className="text-sm mb-4">{project.description[lang]}</p>
              <ul className="flex flex-row flex-wrap items-center gap-4 my-2">
                {project.tech.map((tech, idx) => (
                  <li key={`${project.title[lang]}-tech-${String(idx)}`} className="px-2 dark:bg-white/10 rounded-md">
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="text-sm my-4">
                <span className="font-semibold">{lang == 'en' ? 'Role: ' : 'Rôle: '}</span>
                <span>{project.role[lang]}</span>
              </p>
              <ul className="flex flex-row justify-around gap-4 mt-8">
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
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
