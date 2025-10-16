import PageSection from '../section';
import Title from '../title';
import { steps, content } from './content';

export default function Process({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]}>
      <ul>
        {steps.map((step, idx) => (
          <li key={`step${String(idx)}`}>
            <p>{String(idx + 1)}</p>
            <Title level="h3">{step.title[lang]}</Title>
            <p>{step.description[lang]}</p>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
