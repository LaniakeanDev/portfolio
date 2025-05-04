export const NAV_LINKS = [
  { target: 'home', label: 'Home'},
  { target: 'about', label: 'About'},
  { target: 'projects', label: 'Projects'},
  { target: 'contact', label: 'Contact'},
];

interface project {
  title: string;
  description: string;
  pictures: string[];
  link?: string;
  githubLink?: string;
}

 const PROJECTS:project[] = [
  {
    title: 'Ensemble Vocal d’Avignon',
    description: 'As part of Inkkube, I worked as a FullStack developper on modernizing Ensemble Vocal d’Avignon’s website using Next.js.',
    pictures: [ 
      '/projects/eva-1.png',
      '/projects/eva-2.png',
      '/projects/eva-3.png',
      '/projects/eva-4.png',
    ],
    link: 'https://www.evavignon.fr/',
  },  
  {
    title: 'Portfolio',
    description: 'This portfolio was made using Next.js.',
    pictures: [ 
      '/projects/portfolio-1.png',
      '/projects/portfolio-2.png',
      '/projects/portfolio-3.png',
      '/projects/portfolio-4.png',
    ],
    githubLink: 'https://github.com/LaniakeanDev/portfolio',
  },
  {
    title: 'Espace Choristes (EVA)',
    description: 'This was a quick project which I realized in 3 days using PHP. It allows members of the Ensemble Vocal d’Avignon to access internal information.',
    pictures: [ 
      '/projects/faure-1.png',
      '/projects/faure-2.png',
      '/projects/faure-3.png',
      '/projects/faure-4.png',
    ],
    link: 'https://faure-choriste.fr/',
  },
  {
    title: 'La Tresse',
    description: 'During my first training in 2023, I designed and developed this tiny social network for members of a Third Place focusing on cooperation and social interactions, in “vanilla code” with PHP.',
    pictures: [ 
      '/projects/latresse-1.jpg',
      '/projects/latresse-2.jpg',
      '/projects/latresse-3.jpg',
      '/projects/latresse-4.jpg',
      '/projects/latresse-5.jpg',
      '/projects/latresse-6.jpg',
    ],
    githubLink: 'https://github.com/GalaxyBrainWave/LaTresse',
  },
  {
    title: 'Buddha Vacana',
    description: 'This is a essentially a translation project I have worked on for a long time. The current version was made before I took my first training as a web developer.',
    pictures: [ 
      '/projects/bv-1.png',
      '/projects/bv-2.png',
      '/projects/bv-3.png',
      '/projects/bv-4.png',
    ],
    link: 'https://www.buddha-vacana.org/fr/index.html',
  },
];

export default PROJECTS;