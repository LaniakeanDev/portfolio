import Image from 'next/image';
import { InternalLink } from '../link';
import Navbar from './navbar';
import { navData } from './content';
import BurgerMenu from './burger';
import ThemeToggle from '../ThemeToggle';

export default function Header({ lang }: ILang) {
  return (
    <header className="w-full grid place-items-center fixed bg-background z-10">
      <div className="flex justify-between flex-row py-2 px-5 items-center w-full max-w-5xl">
        <InternalLink href="/">
          <div className="flex gap-2 2xs:gap-4 items-center">
            <div className="w-10 h-10 relative">
              <Image src="/logo-mini.png" alt="logo" fill sizes="32px" className="rounded-full" />
            </div>
            <p className="font-semibold">
              <span className="text-(--gold)">{lang === 'fr' ? 'Rémy ' : 'Remy '}</span>
              Zins
            </p>
          </div>
        </InternalLink>
        <Navbar menuItems={navData[lang]} className="hidden! lg:flex!" />
        <div className="flex flex-row items-center xs:gap-[10vw]">
          <ThemeToggle className="mr-8 sm:mr-0 sm:ml-8 md:ml-16" />
          <BurgerMenu menuItems={navData[lang]} className="z-20 lg:hidden!" />
        </div>
      </div>
    </header>
  );
}
