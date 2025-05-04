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
    ],
    link: 'https://www.evavignon.fr/',
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
];

export default PROJECTS;