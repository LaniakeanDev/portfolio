

type supportedLanguages = 'fr' | 'en';


interface IProject {
  title: string;
  description: {
    en: string;
    fr: string;
  };
  pictures: string[];
  link?: string;
  githubLink?: string;
  year: string;
}