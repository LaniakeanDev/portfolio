type TStackIcon =
  | 'Agile-Scrum'
  | 'Git'
  | 'Java'
  | 'Jira'
  | 'Next'
  | 'Notion-dark'
  | 'Notion'
  | 'Figma'
  | 'PHP'
  | 'React'
  | 'Symfony'
  | 'Tailwind'
  | 'Typescript';

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
