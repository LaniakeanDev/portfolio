import PageSection from '../section';

export default function About({ lang }: ILang) {
  const content = {
    title: {
      en: 'About Me',
      fr: 'À propos de moi',
    },
    who: {
      en: 'Who am I?',
      fr: 'Qui suis-je ?',
    },
    p1: {
      en: 'I am a FullStack web developer, capable of building both the Front-End and the Back-End of your website or web application. You can check out some of my work in the Projects section.',
      fr: 'Développeur FullStack, je crée aussi bien l’interface (Front-End) que la logique serveur (Back-End) de vos sites et applications web. Explorez mes réalisations dans la partie Projets.',
    },
    p2: {
      en: 'I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don’t hesitate to contact me.',
      fr: 'Ouvert à des missions alignées avec mes compétences, où je pourrais m’investir et évoluer. Contactez-moi pour échanger !',
    },
    stack: {
      en: 'My Stack',
      fr: 'Mon Stack technique',
    },
  };
  return (
    <PageSection title={content.title[lang]}>
      <p>{content.p1[lang]}</p>
    </PageSection>
  );
}
