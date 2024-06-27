import Image from "next/image"

const Projects = () => {
  return (
    <section className="full relative flex flex-col justify-center items-center p-10">
      <Image
        src="/projects-bg.png" 
        alt="Interface utilisateur pour La Tresse"
        className="bgImg"
        fill
      />
      <h2 className="mb-10">Projects</h2>
      <p className="text-2xl text-center mb-10 lg:mb-40">An overview of a few projects I have worked on</p>
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-32 items-center">
        <div className="h-80 w-[435px] relative">      
          <Image
            src="/latresse.jpg" 
            alt="Fractal Background Image"
            fill
          />
        </div>
        <div className="max-w-[458px]">
          <h3>La Tresse</h3>
          <p>I designed and developed this tiny social network for members of a Third Place focusing on cooperation and social interactions.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects