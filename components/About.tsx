import Image from "next/image"
import StackIcon from "./StackIcon"
import Button from "./Button"


const About = () => {
  return (
    <div className="full relative h-screen">
      <Image
        src="/about-bg.png" 
        alt="Fractal Background Image"
        // layout="fill" 
        // objectFit="cover"
        className="z-0 bgImg"
        fill={true}
      />
      <div className="grid place-items-center py-10">
        <h2>About Me</h2>
        <Image 
          src="/about.png"
          alt="Profile Picture"
          width={120}
          height={120}
          className="py-4"
        />
      </div>
      <div className="aboutContent px-10 gap-10">
        <div className="max-w-96">
          <h3>Who am I?</h3>
          <p>
            I am a FullStack web developer, capable of building both the Front-End and the Back-End of your website or web application. You can check out some of my work in the Projects section.
          </p>
          <p>
            I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don&#39;t hesitate to contact me.
          </p>
        </div>
        <div>
          <h3>My Stack</h3>
          <div className="stack flex gap-8 flex-wrap">
            <StackIcon 
              id="Symfony"
            />
            <StackIcon 
              id="Next"
            />
            <StackIcon 
              id="React"
            />
            <StackIcon 
              id="Node"
            />
            <StackIcon 
              id="MySQL"
            />
            <StackIcon 
              id="Postgres"
            />
            <StackIcon 
              id="MongoDB"
            />
            <StackIcon 
              id="Figma"
            />
          </div>
        </div>
      </div>
      <Button 
          type="button"
          title="CONTACT ME"
        />
    </div>
  )
}

export default About