'use client';

import PageSection from '../section';
import Title from '../title';
import StackItem from './stack-item';
import { content } from './content';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { slideLeftwardsVariants } from '@/lib/motion-variants';

interface StackSectionProps {
  items: IStackItem[];
  title: string;
}

function StackSection({ items, title }: StackSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40%' });
  return (
    <motion.div
      className="w-full"
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={slideLeftwardsVariants}
      ref={ref}
      transition={{
        duration: 1.5,
      }}
    >
      <Title level="h3" titleClassName="text-2xl mb-12 text-center md:text-left">
        {title}
      </Title>
      <ul className="flex flex-wrap justify-center md:justify-start md:ml-16 gap-8 ">
        {items.map((item, idx) => (
          <StackItem id={item.id} hasDarkVersion={item.hasDarkVersion} key={`stack-item-${title}-${String(idx)}`} />
        ))}
      </ul>
    </motion.div>
  );
}

export default function Stack({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]} className="min-h-[80vh]">
      <div className="flex flex-col gap-32 w-full max-w-4xl mt-8">
        <StackSection title={content.front[lang]} items={content.front.list} />
        <StackSection title={content.back[lang]} items={content.back.list} />
        <StackSection title={content.tools[lang]} items={content.tools.list} />
      </div>
    </PageSection>
  );
}
