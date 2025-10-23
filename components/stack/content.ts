export const content: IStackContent = {
  title: {
    en: 'My Stack',
    fr: 'Mon Stack technique',
  },
  front: {
    en: 'Frontend Development',
    fr: 'Dévelopment côté Client',
    list: [
      {
        id: 'React',
        hasDarkVersion: false,
      },
      {
        id: 'Next',
        hasDarkVersion: true,
      },
      {
        id: 'Typescript',
      },
      {
        // id: 'Tailwind',
        id: 'Wordpress',
      },
    ],
  },
  back: {
    en: 'Backend Development',
    fr: 'Dévelopment côté Serveur',
    list: [
      {
        id: 'PHP',
      },
      {
        id: 'Symfony',
        hasDarkVersion: true,
      },
      {
        id: 'Java',
      },
      {
        id: 'Spring',
      },
    ],
  },
  tools: {
    en: 'Tools & Workflows',
    fr: 'Outils & Flux de Travail',
    list: [
      {
        id: 'Git',
      },
      {
        id: 'Agile',
      },
      {
        id: 'Jira',
      },
      {
        id: 'Notion',
        hasDarkVersion: true,
      },
      {
        id: 'Figma',
      },
    ],
  },
};
