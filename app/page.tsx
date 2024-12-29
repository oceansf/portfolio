import Contact from "@/components/Contact";
import ContentParagraph from "@/components/ContentParagraph";
import ExperienceList from "@/components/ExperienceList";
import Projects from "@/components/Projects";
import TitleCard from "@/components/TitleCard";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="px-6">
      <main className="max-w-xl pt-20 lg:pt-32 mx-auto">
        <TitleCard />
        <ContentParagraph
          topic="About"
          content={`Hello, my name is Ocean Fuaga and I'm a frontend developer from Portland, OR. I have an extensive history of designing UIs and integrating backend logic into client-facing web applications.

During spring of 2024, I moved to Austin, TX and have loved my new home ever since. I welcome any opportunities the city has to offer and I hope to make many new connections along the way!`}
        />
        <ExperienceList />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
