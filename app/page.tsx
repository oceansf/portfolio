import Contact from "@/components/Contact";
import ContentParagraph from "@/components/ContentParagraph";
import ExperienceList from "@/components/ExperienceList";
import Projects from "@/components/Projects";
import TitleCard from "@/components/TitleCard";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="px-4">
      <main className="max-w-xl pt-20 lg:pt-32 mx-auto">
        <TitleCard />
        <ContentParagraph
          topic="About"
          content={`Hello, my name is Ocean Fuaga and I'm a frontend developer from Portland, OR now residing in Austin, TX as of 2024. I have an extensive background in designing UIs and integrating backend logic into client-facing web applications. 
            
Although I speacialize in frontend development, I also have experience implementing back-end logic using technologies such as Laravel and AWS. I am looking to grow as a developer and work with others to bring projects together. Feel free to browse the rest of my site I hope that we can work together soon!
          `}
        />
        <ExperienceList />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
