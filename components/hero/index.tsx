import PageSection from '../section';
import Title from '../title';
import Button from '../Button_old';
import Image from 'next/image';
import IconComponent from '../icon/IconComponent';

export default function Hero({ lang }: ILang) {
  const content = {
    name: {
      en: 'Remy Zins',
      fr: 'Rémy Zins',
    },
    tagline: {
      en: 'FullStack developer specializing in modern web applications',
      fr: 'Développeur FullStack spécialisé dans les applications web modernes',
    },
    projectBtn: {
      en: 'View My Work',
      fr: 'Voir Mon Travail',
    },
    contactBtn: {
      en: 'Get In Touch',
      fr: 'Me Contacter',
    },
    findMe: {
      en: 'Find me on',
      fr: 'Retrouvez-moi sur',
    },
    selfAlt: {
      en: 'Picture of Myself',
      fr: 'Photo de moi-même',
    },
  };
  return (
    <PageSection id="hero" className="min-h-[80vh] pt-32!">
      <div className="flex flex-row gap-8 items-center mb-16">
        <Title level="h1" titleClassName="text-5xl font-semibold font-[poppins]">
          {content.name[lang]}
        </Title>
        <div className="w-32 h-32 relative rounded-full">
          <Image src="/self.png" fill alt={content.selfAlt[lang]} className="object-cover rounded-full" />
        </div>
      </div>
      <p className="text-3xl mb-16">{content.tagline[lang]}</p>
      <div className="flex gap-8 mb-16">
        <Button
          type="button"
          title={content.projectBtn[lang]}
          target="projects"
          className="text-lg font-semibold bg-(--gold) text-black"
        />
        <Button
          type="button"
          title={content.contactBtn[lang]}
          target="contact"
          className="text-lg font-semibold hover:bg-(--gold) hover:text-black transition duration-300"
        />
      </div>
      <div className="w-full grid place-items-center">
        <div className="flex flex-row gap-8 items-center">
          <p className="text-xl">{content.findMe[lang]}</p>
          <IconComponent name="GitHub" className="w-10 h-10" />
          <IconComponent name="LinkedIn" className="w-10 h-10" />
        </div>
      </div>
    </PageSection>
  );
}
