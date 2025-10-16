interface IProject {
  slides: Img[];
  title: LocalizedText;
  tech: string[];
  description: LocalizedText;
  dates: string;
  role: LocalizedText;
  caseStudy: ILink;
  liveLink?: ILink;
  githubLink?: ILink;
}
