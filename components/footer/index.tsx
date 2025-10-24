import Title from '../title';
import { content } from './content';
import { ExternalLink } from '../link';
import Image from 'next/image';

export default function Footer({ lang }: ILang) {
  return (
    <footer className="w-full flex flex-col items-center gap-8 bg-black/50 pt-24">
      <div className="flex flex-col items-center gap-8 mb-12">
        <div className="h-24 w-24 relative rounded-full">
          <Image src="/self.png" fill sizes="96px" alt="Remy Zins" className="rounded-full" />
        </div>
        <Title level="h3" titleClassName="text-5xl font-semibold">
          <span className="text-(--gold)">{content.name[lang]}</span> Zins
        </Title>
      </div>
      <p className="text-xl 2xl:text-2xl max-w-sm text-center">
        {content.designation[lang]} {/*•*/} Avignon / Marseille, France
      </p>
      <div className="flex flex-row gap-4">
        <ExternalLink href="https://www.linkedin.com/in/remyzins/" label="LinkedIn" />
        <ExternalLink href="https://github.com/LaniakeanDev" label="GitHub" />
        <ExternalLink href="mailto:laniakean.dev@gmail.com" label="Email" />
      </div>
      <div className="h-px w-[80vw] max-w-3xl bg-slate-400/50 my-8" />
      <p className="mb-4 text-xs 2xs:text-sm">
        © {new Date().getFullYear()} {content.name[lang]} Zins • {content.built[lang]} Next.js
      </p>
    </footer>
  );
}
