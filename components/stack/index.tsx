import PageSection from '../section';
import Title from '../title';
import StackItem from './stack-item';
import { TStackIcon } from './stack-item';

interface IStackItem {
  id: TStackIcon;
  hasDarkVersion?: boolean;
}

interface StackSectionProps {
  items: IStackItem[];
  title: string;
}

function StackSection({ items, title }: StackSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <Title level="h3">{title}</Title>
      <ul className="flex gap-4">
        {items.map((item, idx) => (
          <StackItem id={item.id} hasDarkVersion={item.hasDarkVersion} key={`stack-item-${title}-${String(idx)}`} />
        ))}
      </ul>
    </div>
  );
}

type LocalizedText = { en: string; fr: string };
type StackSection = LocalizedText & { list: IStackItem[] };

interface IStackContent {
  title: LocalizedText;
  front: StackSection;
  back: StackSection;
  tools: StackSection;
}

export default function Stack({ lang }: ILang) {
  const content: IStackContent = {
    title: {
      en: 'My Stack',
      fr: 'Mon Stack technique',
    },
    front: {
      en: 'Frontend Development',
      fr: 'Dévelopment Frontend',
      list: [
        {
          id: 'React',
          hasDarkVersion: false,
        },
        {
          id: 'Next',
        },
        {
          id: 'Typescript',
        },
        {
          id: 'Tailwind',
        },
      ],
    },
    back: {
      en: 'Backend Development',
      fr: 'Dévelopment Backend',
      list: [
        {
          id: 'PHP',
        },
        {
          id: 'Symfony',
        },
        {
          id: 'Java',
        },
      ],
    },
    tools: {
      en: 'Tools & Workflows',
      fr: 'Outils & Flux de Travail',
      list: [
        {
          id: 'Git',
        },
        {
          id: 'Agile-Scrum',
        },
        {
          id: 'Jira',
        },
        {
          id: 'Notion',
          hasDarkVersion: true,
        },
        {
          id: 'Figma',
        },
      ],
    },
  };
  return (
    <PageSection title={content.title[lang]}>
      <div>
        <StackSection title={content.front[lang]} items={content.front.list} />
        <StackSection title={content.back[lang]} items={content.back.list} />
        <StackSection title={content.tools[lang]} items={content.tools.list} />
      </div>
      {/* <Title level="h3">
				{content.front[lang]}
			</Title>
			<ul className="flex gap-4">
				{content.front.list.map((item, idx) => (
					<StackItem 
						id={item.id} 
						hasDarkVersion={item.hasDarkVersion} 
						key={`stack-item-${String(idx)}`} 
					/>
				))}
			</ul> */}
    </PageSection>
  );
}
