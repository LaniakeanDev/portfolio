import ThemedIcon from '@/components/themed-icon';
import AgileScrumIcon from '../icons/Agile.svg';
import GitIcon from '../icons/Git.svg';
import JavaIcon from '../icons/Java.svg';
import JiraIcon from '../icons/Jira.svg';
import NextIcon from '../icons/Next.svg';
import NextDarkIcon from '../icons/Next-dark.svg';
import NotionDarkIcon from '../icons/Notion-Dark.svg';
import NotionIcon from '../icons/Notion.svg';
import FigmaIcon from '../icons/Figma.svg';
import PHPIcon from '../icons/PHP.svg';
import ReactIcon from '../icons/React.svg';
import SymfonyIcon from '../icons/Symfony.svg';
import SymfonyDarkIcon from '../icons/Symfony-dark.svg';
import TailwindIcon from '../icons/Tailwind.svg';
import TypescriptIcon from '../icons/Typescript.svg';
import WordpressIcon from '../icons/Wordpress.svg';
import SpringIcon from '../icons/Spring.svg';

const iconMap: Record<TStackIcon, SVGComponent> = {
  Agile: AgileScrumIcon,
  Git: GitIcon,
  Java: JavaIcon,
  Jira: JiraIcon,
  Next: NextIcon,
  'Next-dark': NextDarkIcon,
  'Notion-dark': NotionDarkIcon,
  Notion: NotionIcon,
  Figma: FigmaIcon,
  PHP: PHPIcon,
  React: ReactIcon,
  Symfony: SymfonyIcon,
  'Symfony-dark': SymfonyDarkIcon,
  Tailwind: TailwindIcon,
  Typescript: TypescriptIcon,
  Wordpress: WordpressIcon,
  Spring: SpringIcon,
};

interface StackItemProps {
  id: TStackIcon;
  hasDarkVersion?: boolean;
}

export default function StackItem({ id, hasDarkVersion }: StackItemProps) {
  return (
    <li className="flex flex-col gap-2 justify-between items-center dark:bg-white/10 p-4 pt-5 w-28 h-28 rounded-xl hover:scale-105 transition-all duration-300 select-none">
      {hasDarkVersion ? (
        <ThemedIcon icon={iconMap[id]} darkIcon={iconMap[`${id}-dark` as TStackIcon]} alt={id} className="w-10 h-10" />
      ) : (
        <ThemedIcon icon={iconMap[id]} alt={id} className="w-10 h-10" />
      )}
      <p>{id}</p>
    </li>
  );
}
