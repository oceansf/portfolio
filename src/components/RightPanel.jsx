import heroImg from "../assets/hero-img.png";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function RightPanel() {
  return (
    <div className="scroll-smooth scroll-pt-6 bg-[#0e0d12] flex-1 overflow-auto h-dvh px-4 lg:px-32">
      <header className="lg:hidden text-center">
        <h1 className="text-slate-300 text-2xl font-semibold leading-snug tracking-tighter pt-6">
          Ocean Fuaga
        </h1>
        <h3 className="text-slate-400 text-xl leading-snug">
          Full-stack Developer
        </h3>
        <h3 className="text-slate-400 text-xl">Austin, TX</h3>
      </header>
      <main className="w-full lg:w-3/5">
        <img
          className="rounded-full"
          src={heroImg}
          alt="ocean view from tunnel"
        />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
