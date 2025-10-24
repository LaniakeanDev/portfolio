import eva1 from './assets/eva1.png';
import eva2 from './assets/eva2.png';
import eva3 from './assets/eva3.png';
import eva4 from './assets/eva4.png';
import bv1 from './assets/bv1.png';
import bv2 from './assets/bv2.png';
import bv3 from './assets/bv3.png';
import bv4 from './assets/bv4.png';
import pf1 from './assets/pf1.png';
import pf2 from './assets/pf2.png';
import pf3 from './assets/pf3.png';
import pf4 from './assets/pf4.png';

export const content = {
  title: {
    en: 'Projects',
    fr: 'Projets',
  },
};

export const projects: IProject[] = [
  {
    slides: [
      {
        src: eva1,
        alt: {
          fr: 'Haut de page d’Accueil sur le site de l’EVA',
          en: 'Homepage Header on the EVA Website',
        },
      },
      {
        src: eva2,
        alt: {
          fr: 'Section Localisation des Répétitions sur le site de l’EVA',
          en: 'Rehearsals Location Section on the EVA Website',
        },
      },
      {
        src: eva3,
        alt: {
          fr: 'Pied de page du site de l’EVA',
          en: 'EVA Website Footer',
        },
      },
      {
        src: eva4,
        alt: {
          fr: 'Frise temporelle sur le site de l’EVA',
          en: 'Historical Timeline on the EVA Website',
        },
      },
    ],
    title: {
      en: 'Ensemble Vocal d’Avignon',
      fr: 'Ensemble Vocal d’Avignon',
    },
    tech: ['React', 'Next.js', 'Tailwind'],
    description: {
      en: 'I rebuilt the Ensemble Vocal d’Avignon’s website with a modern, user-friendly features. The refreshed platform improved audience engagement and helped drive ticket sales, leading to sold-out performances.',
      fr: 'J’ai reconstruit le site web de l’Ensemble Vocal d’Avignon avec un design moderne et convivial . Cette plateforme rénovée a amélioré l’engagement du public et a contribué à augmenter les ventes de billets.',
    },
    dates: '2024-2025',
    role: {
      en: 'FullStack Developer',
      fr: 'Développeur FullStack',
    },
    // caseStudy: {
    //   href: '/eva',
    // },
    liveLink: {
      href: 'https://www.evavignon.fr/',
    },
  },

  {
    slides: [
      {
        src: pf1,
        alt: {
          fr: 'Haut de page d’Accueil de ce site portfolio',
          en: 'Homepage Header of this portfolio Website',
        },
      },
      {
        src: pf2,
        alt: {
          fr: 'Section Mon Stack de ce site portfolio',
          en: 'My Stack Section of this portfolio Website',
        },
      },
      {
        src: pf3,
        alt: {
          fr: 'Section Services de ce site portfolio',
          en: 'Services Section of this portfolio Website',
        },
      },
      {
        src: pf4,
        alt: {
          fr: 'Section Projets de ce site portfolio',
          en: 'Projects Section of this portfolio Website',
        },
      },
    ],
    title: {
      en: 'This Portfolio Website',
      fr: 'Ce site portfolio',
    },
    tech: ['React', 'Next.js', 'Tailwind'],
    description: {
      en: 'My personal portfolio website, designed and developed from the ground up with modern web technologies to showcase my projects and technical expertise, with a strong focus on performance and user experience.',
      fr: 'Mon site web portfolio personnel, conçu et développé avec des technologies web modernes pour présenter mes projets et mon expertise technique, en mettant l’accent sur la performance, l’accessibilité et l’expérience utilisateur.',
    },
    dates: '2024-2025',
    role: {
      en: 'FullStack Developer',
      fr: 'Développeur FullStack',
    },
    githubLink: {
      href: '/eva',
    },
  },

  {
    slides: [
      {
        src: bv1,
        alt: {
          fr: 'Haut de page d’Accueil sur le site La Parole du Bouddha',
          en: 'Homepage Header on The Words of the Buddha Website',
        },
      },
      {
        src: bv2,
        alt: {
          fr: 'Liens sur la page d’Accueil du site La Parole du Bouddha',
          en: 'Links on The Words of the Buddha Website Homepage',
        },
      },
      {
        src: bv3,
        alt: {
          fr: 'Page de Collection des Textes sur le site La Parole du Bouddha',
          en: 'Text Collection page on The Words of the Buddha Website',
        },
      },
      {
        src: bv4,
        alt: {
          fr: 'Page de texte sur le site La Parole du Bouddha',
          en: 'Text page on The Words of the Buddha Website',
        },
      },
    ],
    title: {
      en: 'Buddha Vacana',
      fr: 'Buddha Vacana',
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: {
      en: 'A resource website for Buddhist texts that I have developed and maintained as a hobby since 2009. Over the years, this long-term project has served thousands of users seeking authentic Buddhist teachings.',
      fr: 'Un site web de ressources consacré aux textes bouddhistes, que je développe et maintiens comme un projet personnel depuis 2009. Au fil des ans, il a servi des milliers d’utilisateurs en quête d’enseignements bouddhistes authentiques.',
    },
    dates: '2009-2025',
    role: {
      en: 'FullStack Developer',
      fr: 'Développeur FullStack',
    },
    liveLink: {
      href: 'https://www.buddha-vacana.org/fr/index.html',
    },
    githubLink: {
      href: '/eva',
    },
  },
];
