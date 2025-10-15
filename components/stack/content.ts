export const content: IStackContent = {
  title: {
    en: 'My Stack',
    fr: 'Mon Stack technique',
  },
  front: {
    en: 'Frontend Development',
    fr: 'Dévelopment Frontend',
    list: [
      {
        id: 'React',
        hasDarkVersion: false,
      },
      {
        id: 'Next',
      },
      {
        id: 'Typescript',
      },
      {
        id: 'Tailwind',
      },
    ],
  },
  back: {
    en: 'Backend Development',
    fr: 'Dévelopment Backend',
    list: [
      {
        id: 'PHP',
      },
      {
        id: 'Symfony',
      },
      {
        id: 'Java',
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
        id: 'Agile-Scrum',
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
