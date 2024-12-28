import ContentParagraph from "./ContentParagraph";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="mt-16">
      <ContentParagraph
        topic="Projects"
        content="Shown below are projects I am currently working on or have worked on in the past. Click on a project to learn more about how I built it."
      />
      <div className="mt-6">
        <ProjectCard
          imgSrc="https://picsum.photos/400"
          projectTitle="Groovehunt"
          projectDesc="A C2C marketplace for buying and selling physical music formats. Made with Vue, Laravel and Inertia."
        />
        <ProjectCard
          imgSrc="https://picsum.photos/400"
          projectTitle="Project 2"
          projectDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel! Eveniet iure vel corporis nobis."
        />
        <ProjectCard
          imgSrc="https://picsum.photos/400"
          projectTitle="Project 3"
          projectDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel! Eveniet iure vel corporis nobis."
        />
      </div>
    </section>
  );
}
