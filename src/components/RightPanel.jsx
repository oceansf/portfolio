import heroImg from "../assets/hero-img.png";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function RightPanel() {
  return (
    <div className="scroll-smooth scroll-pt-6 bg-[#0e0d12] flex-1 flex-col justify-center overflow-auto h-dvh">
      <header className="bg-[#0e0d12] lg:hidden sticky top-0 text-center py-4 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700/50">
        <h1 className="text-slate-300 text-xl font-semibold leading-snug tracking-tighter">
          Ocean Fuaga
        </h1>
      </header>
      <main className="w-full px-4 lg:px-14 lg:w-4/5">
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
