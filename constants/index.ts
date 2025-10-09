export const NAV_LINKS = [
  // { target: 'home', 
  //   label: { en: 'Home', fr: 'Accueil'}},
  { target: 'about', 
    label: { en :'About', fr: 'À propos'}},
  { target: 'projects', 
    label: { en: 'Projects', fr: 'Projets'}},
  { target: 'contact', 
    label: { en: 'Contact', fr: 'Contact'}},
];



 const PROJECTS:IProject[] = [
  {
    title: 'Ensemble Vocal d’Avignon',
    description: {
      en: 'As part of Inkkube, I worked as a FullStack developer on modernizing Ensemble Vocal d’Avignon’s website using Next.js.',
      fr: 'Avec Inkkube, j’ai travaillé en tant que développeur FullStack à la modernisation du site internet de l’Ensemble Vocal d’Avignon en utilisant Next.js'
    },
    pictures: [ 
      '/projects/eva-1.png',
      '/projects/eva-2.png',
      '/projects/eva-3.png',
      '/projects/eva-4.png',
    ],
    link: 'https://www.evavignon.fr/',
    year: '2024-2025'
  },  
  {
    title: 'Portfolio',
    description: {
      en: 'This portfolio was made using Next.js.',
      fr: 'Ce site portfolio a été réalisé avec Next.js'
    },
    pictures: [ 
      '/projects/portfolio-1.png',
      '/projects/portfolio-2.png',
      '/projects/portfolio-3.png',
      '/projects/portfolio-4.png',
    ],
    githubLink: 'https://github.com/LaniakeanDev/portfolio',
    year: '2024-2025'
  },
  {
    title: 'Espace Choristes (EVA)',
    description: {
      en: 'This was a quick project which I realized in 3 days using PHP. It allows members of the Ensemble Vocal d’Avignon to access internal information.',
      fr: 'Un projet rapide, réalisé en 3 jours avec PHP. Il permet aux membres de d’accéder à leurs ressources de travail.'
    },
    pictures: [ 
      '/projects/faure-1.png',
      '/projects/faure-2.png',
      '/projects/faure-3.png',
      '/projects/faure-4.png',
    ],
    link: 'https://faure-choriste.fr/',
    year: '2024'
  },
  {
    title: 'La Tresse',
    description: {
      en: 'During my first training in 2023, I designed and developed this tiny social network for members of a Third Place focusing on cooperation and social interactions, in “vanilla code” with PHP.',
      fr: 'Lors de ma première formation en 2023, j’ai conçu et développé ce mini-réseau social pour les membres d’un Tiers-Lieu axé sur la coopération et les interactions sociales, en PHP codé entièrement à la main.'
    },
    pictures: [ 
      '/projects/latresse-1.jpg',
      '/projects/latresse-2.jpg',
      '/projects/latresse-3.jpg',
      '/projects/latresse-4.jpg',
      '/projects/latresse-5.jpg',
      '/projects/latresse-6.jpg',
    ],
    githubLink: 'https://github.com/GalaxyBrainWave/LaTresse',
    year: '2023'
  },
  {
    title: 'Buddha Vacana',
    description: {
      en: 'This is a essentially a translation project I have worked on for a long time. The current version was made before I took my first training as a web developer.',
      fr: 'Il s’agit essentiellement d’un projet de traduction sur lequel je travaille depuis longtemps. La version courante a été réalisée avant que je fasse ma première formation en développement web.'
    },
    pictures: [ 
      '/projects/bv-1.png',
      '/projects/bv-2.png',
      '/projects/bv-3.png',
      '/projects/bv-4.png',
    ],
    link: 'https://www.buddha-vacana.org/fr/index.html',
    year: '2023'
  },
];

export default PROJECTS;