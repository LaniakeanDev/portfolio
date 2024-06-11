import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <div
      className="w-full relative hero-container"
    >
      <Image
        src="/hero.png" 
        alt="Fractal Background Image"
        // layout="fill" 
        // objectFit="cover"
        className="z-0 bgImg"
        fill={true}
      />
      <div className="z-10 relative px-14 py-14">
        <h1 className="text-5xl">
          Hi, I&apos;m Remy Zins
        </h1>
        <p className="text-2xl max-w-[550px]">A FullStack developper crafting fully personalized web solutions with precision and passion</p>
      </div>
      <div className="z-10 absolute left-0 top-0 grid place-items-center h-full w-full">        
        <Button 
          type="button"
          title="PROJECTS"
        />
      </div>
      <div className="h-full flex items-center z-10 absolute top-0 left-0">
        <div className="flex flex-col gap-2 bg-white p-2 rounded">
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
      <div className="mouseContainer py-4">
        <div className="mouse"></div>
      </div>
    </div>
  )
}

export default Hero