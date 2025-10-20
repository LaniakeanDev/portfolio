import { use } from 'react';
import About from '@/components/about/index';
// import About from '@/components/About';
import BackToTop from '@/components/BackToTop';
import Contact from '@/components/Contact';
import Hero from '@/components/hero';
// import Projects from '@/components/Projects';
import Projects from '@/components/projects/index';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Stack from '@/components/stack';
import Services from '@/components/services';
import Process from '@/components/process';

type Params = Promise<{ lang: string }>;

export default function Home(props: { params: Params }) {
  const params = use(props.params);
  const { lang } = params;
  const lg: supportedLanguages = lang === 'fr' ? 'fr' : 'en';
  return (
    <>
      <Navbar lang={lg} />
      <Hero lang={lg} />
      <About lang={lg} />
      <Stack lang={lg} />
      <Services lang={lg} />
      <Projects lang={lg} />
      <Process lang={lg} /> {/* to do: add icons */}
      <Contact lang={lg} />
      <BackToTop />
      <Footer lang={lg} />
    </>
  );
}
