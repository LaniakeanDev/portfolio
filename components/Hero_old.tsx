import Image from 'next/image';
import Button from './Button_old';
import LSection from './LSection';
import ThemedIcon from './ThemedIcon';

const Hero = ({ lang }: { lang: supportedLanguages }) => {
  const content = {
    name: {
      en: 'Remy Zins',
      fr: 'Rémy Zins',
    },
    tagline: {
      en: ', a FullStack developer specializing in modern web applications',
      fr: ', un développeur FullStack spécialisé dans les applications web modernes',
    },
    iAm: {
      en: 'I’m',
      fr: 'Je suis',
    },
    findMe: {
      en: 'Find me on',
      fr: 'Trouvez-moi sur',
    },
  };
  return (
    <LSection id="hero">
      {/* <section
      className="w-full"
      id="hero"
    > */}
      <div className="w-full grid place-items-center">
        <div className="relative w-[95%] max-w-screen-lg h-[25vh] rounded-3xl">
          <Image
            src="/hero.png"
            alt="Fractal Background Image"
            className="object-cover rounded-2xl"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>
      <div className="w-full grid place-items-center">
        <div className="h-32 w-32 rounded-full translate-y-[-64px]">
          <Image src="/about.png" alt="Profile Picture" className="object-cover" fill />
        </div>
      </div>
      <div className="w-full grid place-items-center translate-y-[-64px]">
        <div className="w-fit p-4 rounded-xl flex flex-col items-center">
          <h1 className="text-3xl mb-4 font-semibold sm:text-5xl">
            {/* {content.mainTitle[lang]} */}
            Laniakean
          </h1>
          <div>
            <p className="text-lg sm:text-xl my-4">Hello World 👋</p>
            <p className="text-lg sm:text-xl max-w-[550px]">
              {content.iAm[lang]} <span className="font-semibold">{content.name[lang]}</span>
              {content.tagline[lang]}
            </p>
          </div>
        </div>
      </div>
      <div className="grid place-items-center w-full">
        <Button
          type="button"
          title={lang === 'fr' ? 'PROJETS' : 'See My Projects'}
          target="projects"
          className="text-lg"
        />
      </div>
      <div className="grid place-items-center w-full pt-16">
        <div className="flex flex-row max-w-fit gap-4 items-center">
          <p className="text-base sm:text-lg">{content.findMe[lang]}</p>
          <a href="https://www.linkedin.com/in/remyzins/" target="blank">
            <ThemedIcon
              src="/LinkedIn-dark.svg"
              darkSrc="/LinkedIn-bright.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              // className="bg-white rounded"
            />
          </a>
          <a href="https://github.com/LaniakeanDev" target="blank">
            <ThemedIcon src="/GitHub-dark.svg" darkSrc="/GitHub-bright.svg" alt="GitHub" width={30} height={30} />
            {/* <Image
              src="/GitHub-dark.svg" 
              alt="GitHub"
              width={30}
              height={30}
              className="bg-white rounded"
            /> */}
          </a>
        </div>
      </div>
      {/* <div className="mouseContainer py-4 hidden sm:grid">
        <div className="mouse"></div>
      </div> */}
      {/* </section> */}
    </LSection>
  );
};

export default Hero;
