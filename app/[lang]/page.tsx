import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";




export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const lg:supportedLanguages = lang === 'fr' ? 'fr' : 'en';
  return (
    <>
      <Hero lang={lg} />
      <About lang={lg} />
      <Projects lang={lg} />
      <Contact lang={lg} />
      <BackToTop />
    </>
  );
}


