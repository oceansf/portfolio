import "./App.css";
import heroImg from "./assets/hero-img.png";
import SideNav from "./components/SideNav";
import MobileHeader from "./components/MobileHeader";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0e0d12]">
      <MobileHeader />
      <div className="mx-auto">
        <div className="flex">
          <SideNav />
          <main className="px-4 mx-auto flex-2 scroll-smooth scroll-pt-6 bg-[#0e0d12] flex-col justify-center md:pl-10 md:pr-96">
            <img
              className="rounded-full mx-auto w-[700px]"
              src={heroImg}
              alt="ocean view from tunnel"
            />
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
