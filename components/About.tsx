import Image from "next/image"
import StackIcon from "./StackIcon"
import Button from "./Button"


const About = () => {
  return (
    <section className="full relative pt-4 pb-16">
      <Image
        src="/about-bg.png" 
        alt="Fractal Background Image"
        className="bgImg"
        fill
      />
      <div className="grid place-items-center py-10">
        <h2>About Me</h2>
        <Image 
          src="/about.png"
          alt="Profile Picture"
          width={120}
          height={120}
          className="py-4 sm:pt-8"
        />
      </div>
      <div className="flex flex-col items-center md:flex-row gap-10 justify-around w-full mb-32">
        <div className="max-w-[500px] flex flex-1 flex-col items-center mx-[8vw] sm:mx-10">
          <h3 className="mb-8">Who am I?</h3>
          <p className="text-lg text-justify">
            I am a FullStack web developer, capable of building both the Front-End and the Back-End of your website or web application. You can check out some of my work in the Projects section.
          </p>
          <br />
          <p className="text-lg text-justify">
            I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don&#39;t hesitate to contact me.
          </p>
        </div>
        <div className="max-w-[500px] flex flex-1 flex-col items-center mx-4">
          <h3 className="mb-8">My Stack</h3>
          <div className="max-w-[470px] flex justify-center gap-8 flex-wrap">
            <StackIcon id="Symfony" />
            <StackIcon id="Next" />
            <StackIcon id="React" />
            <StackIcon id="Node" />
            <StackIcon id="MySQL" />
            <StackIcon id="Postgres" />
            <StackIcon id="MongoDB" />
            <StackIcon id="Figma" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button 
          type="button"
          title="CONTACT ME"
        />
      </div>
    </section>
  )
}

export default About