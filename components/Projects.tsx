import ContentParagraph from "./SectionHeader";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="mt-16">
      <div className="px-4">
        <ContentParagraph
          topic="Projects"
          content="Personal projects and client work I've done."
        />
      </div>
      <div className="mt-6">
        <ProjectCard
          imgSrc="/groovehunt.png"
          projectTitle="Groovehunt"
          projectDesc="A C2C marketplace for buying and selling physical music formats. Made with Vue, Laravel and Inertia."
          projectLink="https://groovehunt.com"
          hasRepo
        />
        <ProjectCard
          imgSrc="/nwvirtualtherapy.png"
          projectTitle="NW Virtual Therapy"
          projectDesc="Client website for a private practice. Made with GeneratePress in WordPress."
          projectLink="https://nwvirtualtherapy.com"
        />
        <h1 className="text-slate-400 my-20 dark:text-slate-500 text-2xl font-mono text-center">{`// MORE COMING SOON..`}</h1>
      </div>
    </section>
  );
}
