'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { slideUpwardsVariants, slideLeftwardsVariants } from '@/lib/motion-variants';
import Title from '../../title';
import MiniSlider from '../../mini-slider';
import { ExternalLink } from '@/components/link';

interface ProjectCardProps {
  project: IProject;
  lang: TSupportedLanguages;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project, lang } = props;
  const { slides, title, description, tech, role, caseStudy, liveLink, githubLink } = project;
  const ref = useRef<HTMLDivElement>(null);
  // const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40%' });
  const btnStyle =
    'py-2 px-1.5 2xs:px-3 xs:px-4 text-sm 2xs:text-base bg-linear-to-tr from-(--gold)/40 hover:from-(--gold)/50 to-(--gold)/80 hover:to-(--gold) rounded-xl text-black font-semibold cursor-pointer transition duration-300 border border-white/50';
  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={slideUpwardsVariants}
      ref={ref}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="w-full h-48 relative">
        <MiniSlider lang={lang} slides={slides} />
      </div>
      <div className="px-6 pt-6 pb-8">
        <motion.div
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={slideLeftwardsVariants}
          ref={ref}
          transition={{
            duration: 1.5,
          }}
        >
          <Title level="h3" titleClassName="text-xl title-color font-semibold mb-4">
            {title[lang]}
          </Title>
        </motion.div>
        <p className="text-sm mb-4">{description[lang]}</p>
        <ul className="flex flex-row items-center justify-between gap-2 my-2">
          {tech.map((tech, idx) => (
            <li key={`${title[lang]}-tech-${String(idx)}`} className="px-3 xs:px-4 py-1 bg-highlight rounded-md">
              <p>{tech}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm mt-6 mb-8">
          <span className="font-semibold title-color">{lang == 'en' ? 'Role: ' : 'Rôle: '}</span>
          <span>{role[lang]}</span>
        </p>
        <ul className="flex flex-row justify-around gap-4 mt-4">
          {caseStudy && (
            <li className="hover-scale">
              <ExternalLink
                inline
                href={caseStudy.href}
                className={btnStyle}
                label={lang == 'en' ? 'Case Study' : 'Etude de Cas'}
              />
            </li>
          )}
          {githubLink && (
            <li className="hover-scale">
              <ExternalLink
                inline
                href={githubLink.href}
                className={btnStyle}
                label={lang == 'en' ? 'See on GitHub' : 'Voir sur GitHub'}
              />
            </li>
          )}
          {liveLink && (
            <li className="hover-scale">
              <ExternalLink
                inline
                href={liveLink.href}
                className={btnStyle}
                label={lang == 'en' ? 'See Project' : 'Voir le Projet'}
              />
            </li>
          )}
        </ul>
      </div>
    </motion.div>
  );
}
