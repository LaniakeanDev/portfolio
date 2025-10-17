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
    <div className="w-full">
      <Title level="h3" titleClassName="text-2xl mb-8">
        {title}
      </Title>
      <ul className="flex flex-wrap justify-between ml-16 gap-6">
        {items.map((item, idx) => (
          <StackItem id={item.id} hasDarkVersion={item.hasDarkVersion} key={`stack-item-${title}-${String(idx)}`} />
        ))}
      </ul>
    </div>
  );
}

export default function Stack({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]} className="min-h-[80vh]">
      <div className="flex flex-col gap-32 my-16 w-full max-w-4xl">
        <StackSection title={content.front[lang]} items={content.front.list} />
        <StackSection title={content.back[lang]} items={content.back.list} />
        <StackSection title={content.tools[lang]} items={content.tools.list} />
      </div>
    </PageSection>
  );
}
