import Image from "next/image"
import Button from "./Button"

const Hero = ({lang}:{lang: supportedLanguages}) => {
  const content = {
    greeting: {
      en: 'Hi, I’m Remy Zins',
      fr: 'Bienvenue, moi c’est Rémy Zins.'
    },
    tagline: {
      en: 'A FullStack developper crafting fully personalized web solutions with precision and passion',
      fr: 'Développeur FullStack concevant des solutions web sur mesure avec précision et passion.'
    }
  }
  return (
    <section
      className="w-full relative hero-container"
      id="hero"
    >
      <Image
        src="/hero.png" 
        alt="Fractal Background Image"
        className="bgImg"
        fill
      />
      <div className="relative sm:p-10 p-2">
        <div className="hero-h1 w-fit p-4 rounded-xl">
          <h1 className="text-3xl mb-4 sm:text-5xl">
            {content.greeting[lang]}
          </h1>
          <p className="text-lg sm:text-2xl max-w-[550px]">{content.tagline[lang]}</p>
        </div>
      </div>
      <div className="absolute left-0 top-0 grid place-items-center h-full w-full">        
        <Button 
          type="button"
          title={lang === 'fr' ? 'PROJETS' : 'PROJECTS'}
          target="projects"
        />
      </div>
      <div className="sm:h-full flex items-center z-10 absolute bottom-0 w-full justify-center sm:max-w-fit sm:top-0 left-0">
        <div className="flex flex-row max-w-fit sm:flex-col gap-2 bg-white p-2 rounded">
          <a href="https://www.linkedin.com/in/remyzins/" target="blank">
            <Image
              src="/LinkedIn.svg" 
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </a>
          <a href="https://github.com/LaniakeanDev" target="blank">
            <Image
              src="/GitHub.svg" 
              alt="GitHub"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
      <div className="mouseContainer py-4 hidden sm:grid">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero