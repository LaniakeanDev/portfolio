import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between flex-row py-5 px-14 items-center bg-pfBlue z-10 relative">
        <Link href="/">
          <div className="flex gap-4 items-center">
          <Image 
            src="/logo.png"
            alt="logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <p>Remy Zins</p>
          </div>
        </Link>
        <ul className="hidden h-full gap-12 sm:flex">
          { NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Image 
          src="burger.svg"
          alt="burger menu icon"
          width={32}
          height={32}
          className="inline-block cursor-pointer sm:hidden"
        />
      </nav>
    </header>
  )
}

export default Navbar