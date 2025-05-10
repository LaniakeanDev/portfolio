
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import MenuItem from "./MenuItem"


const Footer = ({lang}:{lang: supportedLanguages}) => {
  const content = {
    tagline: {
      en: 'A FullStack developper crafting fully personalized web solutions with precision and passion',
      fr: 'Développeur FullStack concevant des solutions web sur mesure avec précision et passion.'
    },
    social: {
      en: 'Socials',
      fr: 'Plateformes'
    },
    copyright: {
      en: '© Copyright 2025. Made by Remy Zins',
      fr: '© Copyright 2025. Réalisé par Rémy Zins'
    }
  }
  return (
    <footer className="max-w-[100vw] px-8 md:px-12 lg:px-24 pt-4 md:pt-12 pb-8 flex flex-col items-center">
      <div className="flex flex-col gap-8 md:gap-4 md:flex-row justify-between w-full">
        <div className="w-full grid place-items-center md:place-items-start md:flex-1">
            <p className="font-bold text-lg mb-4">Remy Zins</p>
            <p className="max-w-72 min-[400px]:max-w-80 md:max-w-64 text-sm">{content.tagline[lang]}</p>
        </div>
        <nav className="md:flex-1 grid place-items-center">
          <ul className="gap-8 flex flex-col items-center sm:flex-row">
            { NAV_LINKS.map((link) => (
              <li key={link.target}>
                <MenuItem
                  label={link.label[lang]}
                  target={link.target}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:flex-1 grid place-items-center md:place-items-end">
          <div>
            <p className="w-full text-center mb-4 font-bold">{content.social[lang]}</p>
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
      <p className="text-sm mt-8 md:mt-0">{content.copyright[lang]}</p>
    </footer>
  )
}

export default Footer