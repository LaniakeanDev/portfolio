
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="bg-pfBlue max-w-[100vw] px-8 md:px-12 lg:px-24 pt-4 md:pt-12 pb-8 flex flex-col items-center">
      <div className="flex flex-col gap-8 md:gap-4 md:flex-row justify-between w-full">
        <div className="w-full grid place-items-center md:place-items-start md:flex-1">
            <p className="font-bold text-lg mb-4">Remy Zins</p>
            <p className="max-w-72 min-[400px]:max-w-80 md:max-w-64 text-sm">A FullStack developper crafting fully personalized web solutions with precision and passion</p>
        </div>
        <nav className="md:flex-1 grid place-items-center">
          <ul className="gap-8 flex flex-col items-center sm:flex-row">
            { NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={`footer-${link.key}`}
                className="text-regular"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="md:flex-1 grid place-items-center md:place-items-end">
          <div>
            <p className="w-full text-center mb-4 font-bold">Social</p>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/remyzins/" target="blank">
                <Image
                  src="/LinkedIn-bright.svg" 
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://github.com/LaniakeanDev" target="blank">
                <Image
                  src="/GitHub-bright.svg" 
                  alt="GitHub"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm mt-8 md:mt-0">© Copyright 2024. Made by Remy Zins</p>
    </footer>
  )
}

export default Footer