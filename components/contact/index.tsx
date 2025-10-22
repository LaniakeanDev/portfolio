import PageSection from '../section';
import { content } from './content';
import { ExternalLink } from '../link';

export default function Contact({ lang }: ILang) {
  return (
    <PageSection title="Contact">
      <p className="text-xl">{content.message[lang]}</p>
      <ExternalLink
        label="laniakean.dev@gmail.com"
        href="mailto:laniakean.dev@gmail.com"
        className="golden-gradient hover:bg-(--gold) transition duration-300 my-16 py-8 px-16 rounded-full text-(--dark-blue) text-2xl font-semibold hover-scale"
      />
      {/* <div className="h-px w-[80vw] max-w-xl bg-slate-400/50 mt-16" /> */}
    </PageSection>
  );
}
