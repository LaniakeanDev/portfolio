import PageSection from '../section';
import Title from '../title';
import Image from 'next/image';
import IconComponent from '../icon/IconComponent';
import { ExternalLink } from '../link';

export default function Hero({ lang }: ILang) {
  const content = {
    name: {
      en: 'Remy',
      fr: 'Rémy',
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
    <PageSection id="top" className="min-h-[80vh] pt-32!">
      <div className="flex flex-row gap-8 items-center mb-16">
        <Title level="h1" titleClassName="text-5xl font-semibold font-[poppins]">
          {content.name[lang]} <span className="text-(--gold)">Zins</span>
        </Title>
        <div className="w-32 h-32 relative -z-10 rounded-full">
          <Image src="/self.png" fill alt={content.selfAlt[lang]} className="object-cover rounded-full" />
        </div>
      </div>
      <p className="text-3xl mb-16">{content.tagline[lang]}</p>
      <div className="flex gap-8 mb-16">
        <a
          href="#projects"
          className="text-lg font-semibold golden-gradient hover:bg-(--gold) transition duration-300 text-black rounded-md border-2 border-white px-16 py-2 cursor-pointer"
        >
          {content.projectBtn[lang]}
        </a>
        <a
          href="mailto:laniakean.dev@gmail.com"
          className="text-lg font-semibold hover:bg-(--gold) hover:text-black transition duration-300 rounded-md border-2 border-white px-16 py-2 cursor-pointer"
        >
          {content.contactBtn[lang]}
        </a>
      </div>
      <div className="w-full grid place-items-center">
        <div className="flex flex-row gap-8 items-center">
          <p className="text-xl">{content.findMe[lang]}</p>
          <ExternalLink href="https://github.com/LaniakeanDev">
            <IconComponent name="GitHub" className="w-10 h-10" />
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/remyzins/">
            <IconComponent name="LinkedIn" className="w-10 h-10" />
          </ExternalLink>
        </div>
      </div>
    </PageSection>
  );
}
