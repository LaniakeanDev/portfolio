import PageSection from '../section';
import { content } from './content';
import { projects } from './content';
import Title from '../title';
import MiniSlider from '../mini-slider';
import Button from '../button';

export default function Projects({ lang }: ILang) {
  const btnStyle =
    'py-2 px-4 bg-linear-to-tr from-(--gold)/40 hover:from-(--gold)/50 to-(--gold)/80 hover:to-(--gold) rounded-xl text-black font-semibold cursor-pointer transition duration-300 border border-white/50';
  return (
    <PageSection title={content.title[lang]}>
      <ul className="flex flex-row flex-wrap gap-8">
        {projects.map((project, idx) => (
          <li key={`prj${String(idx)}`} className="h-[528px] w-[95vw] max-w-sm rounded-2xl card">
            <div className="w-full h-48 relative">
              <MiniSlider lang={lang} slides={project.slides} />
            </div>
            <div className="px-6 py-4">
              <Title level="h3" titleClassName="text-xl text-(--gold) font-semibold mb-4">
                {project.title[lang]}
              </Title>
              <p className="text-sm mb-4">{project.description[lang]}</p>
              <ul className="flex flex-row items-center gap-2 my-2">
                {project.tech.map((tech, idx) => (
                  <li key={`${project.title[lang]}-tech-${String(idx)}`} className="px-2 dark:bg-white/10 rounded-md">
                    <p>{tech}</p>
                  </li>
                ))}
              </ul>
              <p className="text-sm my-4">
                <span className="font-semibold text-(--gold)">{lang == 'en' ? 'Role: ' : 'Rôle: '}</span>
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
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
