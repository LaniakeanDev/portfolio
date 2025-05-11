// import Image from "next/image"
import StackIcon from "./StackIcon"
import Button from "./Button"
import LSection from "./LSection"


const About = ({lang}:{lang: supportedLanguages}) => {
  const content = {
    title: {
      en: 'About Me',
      fr: 'À propos de moi'
    },
    text: {
      who: {
        en: 'Who am I?',
        fr: 'Qui suis-je ?'
      },
      p1: {
        en: 'I am a FullStack web developer, capable of building both the Front-End and the Back-End of your website or web application. You can check out some of my work in the Projects section.',
        fr: 'Développeur FullStack, je crée aussi bien l’interface (Front-End) que la logique serveur (Back-End) de vos sites et applications web. Explorez mes réalisations dans la partie Projets.'
      },
      p2: {
        en: 'I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don’t hesitate to contact me.',
        fr: 'Ouvert à des missions alignées avec mes compétences, où je pourrais m’investir et évoluer. Contactez-moi pour échanger !'
      }
    },
    stack: {
      en: 'My Stack',
      fr: 'Mon Stack technique'
    }
  }
  return (
    <LSection id="about" title={content.title[lang]}>
    {/* <section className="full relative pt-16 sm:pt-24 pb-16" id="about"> */}
      {/* <Image
        src="/about-bg.png" 
        alt="Fractal Background Image"
        className="bgImg"
        fill
      /> */}
      {/* <div className="grid place-items-center py-10">
        <h2 className="my-8">{content.title[lang]}</h2>
      </div> */}
      <div className="flex flex-col items-center md:flex-row gap-24 sm:gap-8 justify-around w-full mb-24">
        <div className="max-w-[500px] flex flex-1 flex-col items-center mx-[8vw] sm:mx-10">
          <h3 className="mb-8 sm:text-[32px] text-center text-2xl">{content.text.who[lang]}</h3>
          <p className="text-lg text-justify">
            {content.text.p1[lang]}
          </p>
          <br />
          <p className="text-lg text-justify">
            {content.text.p2[lang]}
          </p>
        </div>
        <div className="max-w-[500px] flex flex-1 flex-col items-center mx-4">
          <h3 className="mb-8 sm:text-[32px] text-center text-2xl">{content.stack[lang]}</h3>
          <div className="max-w-[470px] flex justify-center gap-8 flex-wrap">
            <StackIcon id="Symfony" />
            <StackIcon id="Next" />
            <StackIcon id="React" />
            <StackIcon id="Node" />
            <StackIcon id="MySQL" />
            <StackIcon id="PostgreSQL" />
            <StackIcon id="MongoDB" />
            <StackIcon id="Figma" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button 
          type="button"
          title={ lang === 'fr' ? 'Contactez-Moi' : 'Contact Me'}
          target="contact"
          className="text-lg"
        />
      </div>
    {/* </section> */}
    </LSection>
  )
}

export default About