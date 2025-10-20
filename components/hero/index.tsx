import PageSection from '../section';
import Title from '../title';
import Button from '../Button_old';

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
  };
  return (
    <PageSection id="hero" className="h-[80vh]">
      <Title level="h1" titleClassName="text-6xl font-semibold mb-8">
        {content.name[lang]}
      </Title>
      <p className="text-xl mb-8">{content.tagline[lang]}</p>
      <p>socials</p>
      <div className="flex gap-8">
        <Button type="button" title={content.projectBtn[lang]} target="projects" className="text-lg" />
        <Button type="button" title={content.contactBtn[lang]} target="contact" className="text-lg" />
      </div>
    </PageSection>
  );
}
