"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="flex justify-between flex-row py-5 px-14 items-center bg-pfBlue z-10 relative">
        <Link href="/">
          <div className="flex gap-4 items-center">
          <div className="w-12 h-12 relative">
            <Image 
              src="/logo.png"
              alt="logo"
              fill
              sizes="48px"
              className="rounded-full"
            />
          </div>
          <p>Remy Zins</p>
          </div>
        </Link>
        <div className={isOpen ? 'absolute top-0 right-0 w-40 bg-pfBlue z-20 border-l-2 border-b-2 border-white' : ''}>
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
              <Link
                href={link.href}
                key={link.key}
              >
                {link.label}
              </Link>
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
      </nav>
    </header>
  )
}

export default Navbar