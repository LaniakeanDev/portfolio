import Image from 'next/image';
import { InternalLink } from '../link';
import Navbar from './navbar';
import { navData } from './content';
import BurgerMenu from './burger';

export default function Header({ lang }: ILang) {
  return (
    <header id="top" className="w-full grid place-items-center fixed bg-(--background)">
      <div className="flex justify-between flex-row py-2 px-5 items-center w-full max-w-5xl">
        <InternalLink href="/">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 relative">
              <Image src="/logo-mini.png" alt="logo" fill sizes="32px" className="rounded-full" />
            </div>
            <p className="font-semibold">
              <span className="text-(--gold)">{lang === 'fr' ? 'Rémy ' : 'Remy '}</span>
              Zins
            </p>
          </div>
        </InternalLink>
        <Navbar menuItems={navData[lang]} className="!hidden lg:!flex" />
        <BurgerMenu menuItems={navData[lang]} className="z-20 lg:!hidden" />
      </div>
    </header>
  );
}
