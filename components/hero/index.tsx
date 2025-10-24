'use client';

import PageSection from '../section';
import Title from '../title';
import Image from 'next/image';
import IconComponent from '../icon/IconComponent';
import { ExternalLink } from '../link';
import { content } from './content';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { opacityVariants, slideUpwardsVariants } from '@/lib/motion-variants';

export default function Hero({ lang }: ILang) {
  const nameRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nameRef, { once: true, margin: '-40%' });
  return (
    <PageSection id="top" className="min-h-[80vh] pt-24! lg:pt-32!">
      <motion.div
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={opacityVariants}
        ref={nameRef}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col gap-4 xs:gap-8 items-center mb-16"
      >
        <div className="w-20 h-20 xs:w-24 xs:h-24 relative z-0 rounded-full">
          <Image src="/self.png" fill alt={content.selfAlt[lang]} className="object-cover rounded-full" />
        </div>
        <Title level="h1" titleClassName="text-4xl xs:text-5xl font-semibold font-[poppins]">
          {content.name[lang]} <span className="orange-to-gold">Zins</span>
        </Title>
      </motion.div>
      <motion.div
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={slideUpwardsVariants}
        ref={nameRef}
        transition={{
          duration: 1.5,
        }}
      >
        <p className="text-xl xs:text-2xl sm:text-3xl mb-16 text-center w-[90vw] max-w-xl!">{content.tagline[lang]}</p>
        <div className="flex flex-col sm:flex-row gap-8 mb-16">
          <a
            href="#projects"
            className="text-lg font-semibold golden-gradient hover:bg-(--gold) transition duration-300 text-black rounded-md border-2 border-white px-16 py-2 cursor-pointer"
          >
            {content.projectBtn[lang]}
          </a>
          <a
            href="mailto:laniakean.dev@gmail.com"
            className="text-lg font-semibold hover:bg-(--gold) hover:text-black transition duration-300 rounded-md border-2 border-(--gold) hover:border-white px-16 py-2 cursor-pointer"
          >
            {content.contactBtn[lang]}
          </a>
        </div>
        <div className="w-full grid place-items-center">
          <div className="flex flex-col xs:flex-row gap-8 items-center">
            <p className="text-xl">{content.findMe[lang]}</p>
            <div className="flex flex-row gap-8 items-center">
              <ExternalLink href="https://github.com/LaniakeanDev">
                <IconComponent name="GitHub" className="w-10 h-10" />
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/remyzins/">
                <IconComponent name="LinkedIn" className="w-10 h-10" />
              </ExternalLink>
            </div>
          </div>
        </div>
      </motion.div>
    </PageSection>
  );
}
