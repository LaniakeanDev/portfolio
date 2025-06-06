"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import MenuItem from "./MenuItem"
import ThemeToggle from "./ThemeToggle"
import ThemedIcon from "./ThemedIcon"

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
              src="/logo-mini.png"
              alt="logo"
              fill
              sizes="32px"
              className="rounded-full"
            />
          </div>
          <p>{ lang === 'fr' ? 'Rémy Zins' : 'Remy Zins'}</p>
          </div>
        </Link>
        <div className="flex flex-row-reverse sm:flex-row justify-between">
          <div className={`${isOpen ? 'fixed top-0 left-0 w-full h-[100vh] z-10 card opacity-100' : 'opacity-0 sm:opacity-100'}  transition-opacity duration-700 ease-in-out`}>
            <ul className={`${isOpen ? 'flex flex-col items-center mt-16 py-6' : 'hidden'} h-full gap-6 sm:gap-12 sm:flex sm:flex-row`}>
              { NAV_LINKS.map((link) => (
                <li key={link.target}>
                  <MenuItem
                    label={link.label[lang]}
                    target={link.target}
                    menuCloser={isOpen ? setIsOpen : undefined}
                  />
                </li>
                  
              ))}
            </ul>
          </div>
          <ThemedIcon 
            src={isOpen ? "close-btn.svg" : "burger.svg"}
            darkSrc={isOpen ? "close-btn.svg" : "burger-dark.svg"}
            alt="burger menu icon"
            width={32}
            height={32}
            className="inline-block cursor-pointer sm:!hidden z-20"
            onClick={toggleMenu}
          />
          <ThemeToggle className="mr-8 sm:mr-0 sm:ml-8 md:ml-16" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar