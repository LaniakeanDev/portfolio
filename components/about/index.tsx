'use client';

import PageSection from '../section';
import { content /*whyList */ } from './content';
import Title from '../title';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { slideUpwardsVariants } from '@/lib/motion-variants';

export default function About({ lang }: ILang) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40%' });
  return (
    <PageSection id="about" title={content.title[lang]}>
      <div className="w-[90vw] max-w-4xl">
        <p className="mb-4 xl:text-xl">{content.iam[lang]}</p>
        <p className="mb-16 xl:text-xl">{content.iam2[lang]}</p>
        <motion.div
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={slideUpwardsVariants}
          ref={ref}
          transition={{
            duration: 1.5,
          }}
        >
          <Title level="h4" titleClassName="text-2xl xl:text-3xl my-4">
            {content.journeyH4[lang]}
          </Title>
          <p className="mb-4 xl:text-xl">{content.journeyContent.p1[lang]}</p>
          <p className="xl:text-xl">{content.journeyContent.p2[lang]}</p>
        </motion.div>
      </div>
    </PageSection>
  );
}
