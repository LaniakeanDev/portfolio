import PageSection from '../section';
import Title from '../title';
import StackItem from './stack-item';
import { content } from './content';

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

export default function Stack({ lang }: ILang) {
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
