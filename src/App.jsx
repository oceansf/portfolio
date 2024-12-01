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
      <SideNav />
      <main className="md:w-1/2 mx-auto scroll-smooth scroll-pt-6 bg-[#0e0d12] flex-col justify-center px-4 md:px-14">
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
  );
}

export default App;
