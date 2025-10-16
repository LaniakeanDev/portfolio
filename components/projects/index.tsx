import PageSection from '../section';
import { content } from './content';
import { projects } from './content';
import Title from '../title';
import MiniSlider from '../mini-slider';

export default function Projects({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]}>
      <ul>
        {projects.map((project, idx) => (
          <li key={`prj${String(idx)}`}>
            <div>
              <MiniSlider lang={lang} slides={project.slides} />
            </div>
            <div>tech</div>
            <Title level="h3">{project.title[lang]}</Title>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
