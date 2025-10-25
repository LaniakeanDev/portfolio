import PageSection from '../section';
import ServiceCard from './service-card';
import { content } from './content';

export default function Services({ lang }: ILang) {
  return (
    <PageSection id="services" title={content.title[lang]}>
      <ul className="flex flex-row gap-16 flex-wrap justify-center">
        {content.services.map((card, idx) => (
          <ServiceCard
            key={`service-${String(idx)}`}
            icon={card.icon}
            title={card.title[lang]}
            description={card.description[lang]}
            list={card.list[lang]}
          />
        ))}
      </ul>
    </PageSection>
  );
}
