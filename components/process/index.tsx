import PageSection from '../section';
import Title from '../title';
import { steps, content, whyList } from './content';

export default function Process({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]}>
      <ul className="flex flex-row flex-wrap gap-8">
        {steps.map((step, idx) => (
          <li key={`step${String(idx)}`} className="card w-[95vw] max-w-sm p-8 rounded-2xl hover-scale select-none">
            <div className="w-full grid place-items-center mb-4">
              <div className="golden-gradient rounded-full w-10 h-10 grid place-items-center">
                <p className="text-2xl font-bold text-black">{String(idx + 1)}</p>
              </div>
            </div>
            <Title level="h3" titleClassName="text-center text-2xl font-semibold mb-4 text-(--gold)">
              {step.title[lang]}
            </Title>
            <p>{step.description[lang]}</p>
          </li>
        ))}
      </ul>
      <div className=" mt-16">
        <p className="mb-8">{content.whyIntro[lang]}</p>
        <Title level="h4" titleClassName="text-2xl my-4">
          {content.whyH4[lang]}
        </Title>
        <ul className="list-disc">
          {whyList.map((item, idx) => (
            <li key={`why${String(idx)}`}>
              <p className="py-1">
                <span className="font-semibold">{item.title[lang]}</span>: <span>{item.content[lang]}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
}
