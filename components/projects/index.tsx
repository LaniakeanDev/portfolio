import PageSection from '../section';
import { content } from './content';
import { projects } from './content';
import Title from '../title';
import MiniSlider from '../mini-slider';
import Button from '../button';

export default function Projects({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]}>
      <ul>
        {projects.map((project, idx) => (
          <li key={`prj${String(idx)}`} className="h-96 w-[95vw] max-w-sm">
            <div className="w-full h-48 relative">
              <MiniSlider lang={lang} slides={project.slides} />
            </div>
            <ul>
              {project.tech.map((tech, idx) => (
                <li key={`${project.title[lang]}-tech-${String(idx)}`}>{tech}</li>
              ))}
            </ul>
            <Title level="h3">{project.title[lang]}</Title>
            <p>{project.description[lang]}</p>
            <p>
              <span>{lang == 'en' ? 'Role: ' : 'Rôle: '}</span>
              <span>{project.role[lang]}</span>
            </p>
            <ul>
              {project.caseStudy && (
                <li>
                  <Button label={lang == 'en' ? 'Case Study' : 'Etude de Cas'} />
                </li>
              )}
              {project.githubLink && (
                <li>
                  <Button label={lang == 'en' ? 'See on GitHub' : 'Voir sur GitHub'} />
                </li>
              )}
              {project.liveLink && (
                <li>
                  <Button label={lang == 'en' ? 'See Project' : 'Voir le Projet'} />
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
