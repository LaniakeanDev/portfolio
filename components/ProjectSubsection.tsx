
interface ProjectSubsectionProps {
  children: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
}

export default function ProjectSubsection({children, title, description, link, githubLink}:ProjectSubsectionProps) {
  return (
    <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-32 items-center my-16">
      {children}
      <div className="w-[90vw] max-w-[458px]">
        <h3 className="mb-4 text-left">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}