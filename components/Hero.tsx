import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <section
      className="w-full relative hero-container"
    >
      <Image
        src="/hero.png" 
        alt="Fractal Background Image"
        className="bgImg"
        fill
      />
      <div className="relative sm:p-14 p-6">
        <h1 className="text-3xl sm:text-5xl">
          Hi, I&apos;m Remy Zins
        </h1>
        <p className="text-lg sm:text-2xl max-w-[550px]">A FullStack developper crafting fully personalized web solutions with precision and passion</p>
      </div>
      <div className="absolute left-0 top-0 grid place-items-center h-full w-full">        
        <Button 
          type="button"
          title="PROJECTS"
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