import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LangLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export default async function LangLayout({children, params}:LangLayoutProps) {
  const {lang} = await params;
  const lg:supportedLanguages = lang === 'fr' ? 'fr' : 'en';
  return (
    <>
      <Navbar lang={lg} />
      <main>
        {children}
      </main>
      <Footer lang={lg} />
    </>
  )
}