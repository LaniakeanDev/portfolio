import PageSection from '../section';
import { content } from './content';
import { ExternalLink } from '../link';

export default function Contact({ lang }: ILang) {
  return (
    <PageSection id="contact" title="Contact">
      <p className="text-xl text-center max-w-xs">{content.message[lang]}</p>
      <ExternalLink
        label="laniakean.dev@gmail.com"
        href="mailto:laniakean.dev@gmail.com"
        className="golden-gradient hover:bg-(--gold) transition duration-300 my-16 py-4 xs:py-8 px-6 2xs:px-8 xs:px-12 sm:px-16 rounded-full text-lg 2xs:text-xl text-(--dark-blue) xs:text-2xl font-semibold hover-scale"
      />
      {/* <div className="h-px w-[80vw] max-w-xl bg-slate-400/50 mt-16" /> */}
    </PageSection>
  );
}
