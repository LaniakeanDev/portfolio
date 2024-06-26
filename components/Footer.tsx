
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="bg-pfBlue px-24 pt-12 pb-8 flex flex-col items-center">
      <div className="flex justify-between w-full">
        <div className="flex-1">
          <p className="font-bold text-lg mb-4">Remy Zins</p>
          <p className="max-w-64 text-sm">A FullStack developper crafting fully personalized web solutions with precision and passion</p>
        </div>
        <nav className="flex-1 grid place-items-center">
          <ul className="gap-8 flex">
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
        <div className="flex-1 grid place-items-end">
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
      <p className="text-sm">© Copyright 2024. Made by Remy Zins</p>
    </footer>
  )
}

export default Footer