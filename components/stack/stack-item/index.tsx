import ThemedIcon from '@/components/themed-icon';
import AgileScrumIcon from '../icons/Agile-Scrum.svg';
import GitIcon from '../icons/Git.svg';
import JavaIcon from '../icons/Java.svg';
import JiraIcon from '../icons/Jira.svg';
import NextIcon from '../icons/Next.svg';
import NotionDarkIcon from '../icons/Notion-Dark.svg';
import NotionIcon from '../icons/Notion.svg';
import FigmaIcon from '../icons/Figma.svg';
import PHPIcon from '../icons/PHP.svg';
import ReactIcon from '../icons/React.svg';
import SymfonyIcon from '../icons/Symfony.svg';
import TailwindIcon from '../icons/Tailwind.svg';
import TypescriptIcon from '../icons/Typescript.svg';

export type TStackIcon =
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

const iconMap: Record<TStackIcon, SVGComponent> = {
  'Agile-Scrum': AgileScrumIcon,
  Git: GitIcon,
  Java: JavaIcon,
  Jira: JiraIcon,
  Next: NextIcon,
  'Notion-dark': NotionDarkIcon,
  Notion: NotionIcon,
  Figma: FigmaIcon,
  PHP: PHPIcon,
  React: ReactIcon,
  Symfony: SymfonyIcon,
  Tailwind: TailwindIcon,
  Typescript: TypescriptIcon,
};

interface StackItemProps {
  id: TStackIcon;
  hasDarkVersion?: boolean;
}

export default function StackItem({ id, hasDarkVersion }: StackItemProps) {
  return (
    <li className="flex flex-col items-center">
      {hasDarkVersion ? (
        <ThemedIcon icon={iconMap[id]} darkIcon={iconMap[`${id}-dark` as TStackIcon]} alt={id} className="w-10 h-10" />
      ) : (
        <ThemedIcon icon={iconMap[id]} alt={id} className="w-10 h-10" />
      )}
      <p>{id}</p>
    </li>
  );
}
