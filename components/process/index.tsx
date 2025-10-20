import PageSection from '../section';
import Title from '../title';
import { steps, content } from './content';

export default function Process({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]}>
      <ul className="flex flex-row flex-wrap gap-8">
        {steps.map((step, idx) => (
          <li key={`step${String(idx)}`} className="dark:bg-white/10 w-[95vw] max-w-sm p-8 rounded-2xl">
            <div className="w-full grid place-items-center mb-4">
              <div className="bg-black/50 rounded-full w-12 h-12 grid place-items-center">
                <p className="text-2xl font-bold">{String(idx + 1)}</p>
              </div>
            </div>
            <Title level="h3" titleClassName="text-center text-2xl font-semibold mb-4">
              {step.title[lang]}
            </Title>
            <p>{step.description[lang]}</p>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
