import Contact from "@/components/Contact";
import About from "@/components/About";
import ExperienceList from "@/components/ExperienceList";
import Projects from "@/components/Projects";
import TitleCard from "@/components/TitleCard";
import Footer from "@/components/Footer";
import { JetBrains_Mono } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function page() {
  return (
    <div>
      <main className={`max-w-xl pt-20 lg:pt-32 mx-auto ${jetbrains_mono.variable}`}>
        <TitleCard />
        <About />
        <ExperienceList />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
