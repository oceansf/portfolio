import heroImg from "../assets/hero-img.png";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function RightPanel() {
  return (
    <div className="bg-[#0e0d12] flex-1 overflow-auto h-dvh px-52">
      <img
        className="rounded-full"
        src={heroImg}
        alt="ocean view from tunnel"
      />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
