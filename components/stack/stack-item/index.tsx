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
    <li className="flex flex-col gap-4 justify-center items-center p-4 pt-5 w-32 h-32 xs:w-40 xs:h-40 rounded-xl hover-scale select-none card hover-border">
      {hasDarkVersion ? (
        <ThemedIcon icon={iconMap[id]} darkIcon={iconMap[`${id}-dark` as TStackIcon]} alt={id} className="w-16 h-16" />
      ) : (
        <ThemedIcon icon={iconMap[id]} alt={id} className="w-16 h-16" />
      )}
      <p className="text-lg">{id}</p>
    </li>
  );
}
