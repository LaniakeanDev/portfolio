'use client';

import Title from '@/components/title';
import IconComponent from '../../icon/IconComponent';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { slideLeftwardsVariants } from '@/lib/motion-variants';

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
  list: string[];
  // lang: TSupportedLanguages;
}

export default function ServiceCard({ icon, title, description, list /* lang */ }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40%' });
  return (
    <li className="rounded-2xl px-4 py-8 xs:p-8 w-[90vw] max-w-md min-h-[500px] select-none hover-scale card hover-border">
      <IconComponent name={icon} className="w-12 h-12 mb-4" />
      <motion.div
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={slideLeftwardsVariants}
        ref={ref}
        transition={{
          duration: 1.5,
        }}
      >
        <Title level="h3" titleClassName="text-2xl mt-4 mb-6 font-semibold title-color">
          {title}
        </Title>
      </motion.div>
      <p className="mb-8 mx-4">{description}</p>
      <ul className="list-disc mx-8">
        {list.map((item, idx) => (
          <li key={`${title}-list-${String(idx)}`}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}
