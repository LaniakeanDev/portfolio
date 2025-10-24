type TStackIcon =
  | 'Agile'
  | 'Git'
  | 'Java'
  | 'Jira'
  | 'Next'
  | 'Next-dark'
  | 'Notion-dark'
  | 'Notion'
  | 'Figma'
  | 'PHP'
  | 'React'
  | 'Spring'
  | 'Symfony'
  | 'Symfony-dark'
  | 'Tailwind'
  | 'Typescript'
  | 'Wordpress';

interface IStackItem {
  id: TStackIcon;
  hasDarkVersion?: boolean;
}

interface StackSection extends LocalizedText {
  list: IStackItem[];
}

interface IStackContent {
  title: LocalizedText;
  front: StackSection;
  back: StackSection;
  tools: StackSection;
}
