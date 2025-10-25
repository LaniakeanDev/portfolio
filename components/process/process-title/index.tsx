'use client';

import Title from '../../title';
// import { motion, useInView } from 'motion/react';
// import { useRef } from 'react';
// import { slideLeftwardsVariants } from '@/lib/motion-variants';

interface ProcessTitleProps {
  label: string;
}

export default function ProcessTitle({ label }: ProcessTitleProps) {
  // const ref = useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref, { once: true, margin: '-30%' });
  return (
    // <motion.div
    //   initial="initial"
    //   animate={isInView ? 'animate' : 'initial'}
    //   variants={slideLeftwardsVariants}
    //   ref={ref}
    //   transition={{
    //     duration: 1.5,
    //   }}
    // >
    <Title level="h3" titleClassName="text-center text-xl xs:text-2xl font-semibold mb-4 title-color">
      {label}
    </Title>
    // </motion.div>
  );
}
