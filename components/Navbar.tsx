"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import MenuItem from "./MenuItem"
import ThemeToggle from "./ThemeToggle"

const Navbar = ({lang}:{lang: supportedLanguages}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full grid place-items-center">
      <nav className="flex justify-between flex-row py-2 px-5 items-center w-full max-w-screen-lg">
        <Link href="/">
          <div className="flex gap-4 items-center">
          <div className="w-8 h-8 relative">
            <Image 
              src="/about.png"
              alt="logo"
              fill
              sizes="32px"
              className="rounded-full"
            />
          </div>
          <p>{ lang === 'fr' ? 'Rémy Zins' : 'Remy Zins'}</p>
          </div>
        </Link>
        <div className={isOpen ? 'absolute top-0 right-0 w-40 z-20 border-l-2 border-b-2 border-white' : ''}>
          { 
            isOpen ? 
            <Image 
              src="close-btn.svg"
              alt="close button"
              width={28}
              height={28}
              className="inline-block cursor-pointer sm:hidden absolute top-7 right-[58px]"
              onClick={toggleMenu}
            />
            :
            null
          }
          <ul className={`hidden ${isOpen ? '!flex flex-col items-center mt-16 py-6' : ''} h-full gap-6 sm:gap-12 sm:flex sm:flex-row`}>
            { NAV_LINKS.map((link) => (
              <li key={link.target}>
                <MenuItem
                  label={link.label[lang]}
                  target={link.target}
                />
              </li>
                
            ))}
          </ul>
        </div>
        <Image 
          src="burger.svg"
          alt="burger menu icon"
          width={32}
          height={32}
          className="inline-block cursor-pointer sm:hidden"
          onClick={toggleMenu}
        />
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Navbar