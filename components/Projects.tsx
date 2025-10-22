// import Image from "next/image";
// import ProjectSubsection from "./ProjectSubsection";
// import PROJECTS from "@/constants";
// import LSection from "./LSection";

// const Projects = ({lang}:{lang: TSupportedLanguages}) => {
//   const content = {
//     title: {
//       en: 'Projects',
//       fr: 'Projets'
//     },
//     tagline: {
//       en: 'An overview of a few projects I have worked on',
//       fr: 'Quelques projets sur lesquels j’ai travaillé'
//     },
//   };
//   return (
//     <LSection
//       title={content.title[lang]}
//       id="projects"
//       className="flex flex-col justify-center items-center px-4"
//     >
//     {/* <section className="w-full relative flex flex-col justify-center items-center px-4 py-10 sm:p-10 md:pt-64" id="projects"> */}
//       {/* <Image
//         src="/projects-bg.png"
//         alt="Interface utilisateur pour La Tresse"
//         className="bgImg"
//         fill
//       /> */}
//       {/* <h2 className="mb-10">{content.title[lang]}</h2> */}
//       <p className="text-lg sm:text-2xl text-center mb-12 lg:mb-24">{content.tagline[lang]}</p>
//       <ul className="flex flex-col gap-24">
//         {PROJECTS.map((project, idx) => (
//           <li key={`project-${String(idx)}`}>
//             <ProjectSubsection
//               title={project.title}
//               description={project.description[lang]}
//               projectId={idx}
//               link={project.link}
//               githubLink={project.githubLink}
//               year={project.year}
//               lang={lang}
//             />
//           </li>
//         ))}
//       </ul>
//     {/* </section> */}
//     </LSection>
//   )
// }

// export default Projects
