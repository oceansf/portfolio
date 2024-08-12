import heroImg from "../assets/hero-img.png";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function RightPanel() {
  return (
    <div className="bg-[#0e0d12] flex-1 overflow-auto h-dvh px-4 sm:px-8 md:px-16 lg:px-52">
      <div className="lg:hidden text-center">
        <h1 className="text-slate-300 text-5xl font-semibold leading-snug tracking-tighter pt-6">
          Ocean Fuaga
        </h1>
        <h3 className="text-slate-400 text-2xl leading-snug">
          Full-stack Developer
        </h3>
        <h3 className="text-slate-400 text-2xl">Austin, TX</h3>
      </div>
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
