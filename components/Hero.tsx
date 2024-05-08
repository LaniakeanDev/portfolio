import Image from "next/image"

const Hero = () => {
  return (
    <div
      className="full h-screen"
    >
      <Image
        src="/hero.png" 
        alt="Fractal Background Image"
        layout="fill" 
        objectFit="cover"
        className="z-0 heroGradient"
      />
      <div className="z-10 relative px-14 py-14">
        <h1 className="h1">
          Hi, I&apos;m Remy Zins
        </h1>
      </div>
    </div>
  )
}

export default Hero