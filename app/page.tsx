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
