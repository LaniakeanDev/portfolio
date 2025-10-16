type supportedLanguages = 'fr' | 'en';

interface ILang {
  lang: supportedLanguages;
}

interface Img {
  src: string;
  alt: LocalizedText;
  sizes?: string;
  priority?: boolean;
}

type LocalizedText = { en: string; fr: string };

// interface IProject {
//   title: string;
//   description: {
//     en: string;
//     fr: string;
//   };
//   pictures: string[];
//   link?: string;
//   githubLink?: string;
//   year: string;
// }

interface ILink {
  href: string;
  label?: string;
  icon?: SVGComponent;
  iconClassName?: string;
  alt?: string;
  children?: React.ReactElement;
  className?: string;
  opensInNewTab?: boolean;
  inline?: boolean;
}
