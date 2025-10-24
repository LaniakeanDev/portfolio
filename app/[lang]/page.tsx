import { use } from 'react';
import Header from '@/components/header';
import About from '@/components/about/index';
// import About from '@/components/About';
import BackToTop from '@/components/BackToTop';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
// import Projects from '@/components/Projects';
import Projects from '@/components/projects/index';
// import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import Stack from '@/components/stack';
import Services from '@/components/services';
import Process from '@/components/process';
// import Testimonials from '@/components/testimonials';

type Params = Promise<{ lang: string }>;

export default function Home(props: { params: Params }) {
  const params = use(props.params);
  const { lang } = params;
  const lg: TSupportedLanguages = lang === 'fr' ? 'fr' : 'en';
  return (
    <>
      <Header lang={lg} />
      <Hero lang={lg} />
      <About lang={lg} />
      <Stack lang={lg} />
      <Services lang={lg} />
      <Projects lang={lg} />
      <Process lang={lg} /> {/* to do: add icons */}
      {/* <Testimonials lang={lg} /> */}
      <Contact lang={lg} />
      <BackToTop />
      <Footer lang={lg} />
    </>
  );
}
