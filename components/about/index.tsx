import PageSection from '../section';
import { content /*whyList */ } from './content';
import Title from '../title';

export default function About({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]}>
      <div className="max-w-4xl">
        {/* <Title level="h3" titleClassName="text-3xl my-4">
          {content.who[lang]}
        </Title> */}

        {/* <div className="bg-white/10 rounded-lg mb-16 p-12"> */}
        <p className="mb-4 xl:text-xl">{content.iam[lang]}</p>
        <p className="mb-16 xl:text-xl">{content.iam2[lang]}</p>
        <Title level="h4" titleClassName="text-2xl xl:text-3xl my-4">
          {content.journeyH4[lang]}
        </Title>
        <p className="mb-4 xl:text-xl">{content.journeyContent.p1[lang]}</p>
        <p className="xl:text-xl">{content.journeyContent.p2[lang]}</p>
        {/* </div> */}

        {/* <Title level="h3" titleClassName="text-3xl my-4">
          {content.whyH3[lang]}
        </Title>

        <div className="bg-white/10 rounded-lg mb-8 p-12">
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
        </div> */}
      </div>
    </PageSection>
  );
}
