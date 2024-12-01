import { useState } from "react";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-[#0e0d12] lg:hidden sticky top-0 py-3 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700/50 z-50 flex w-full justify-between items-baseline px-4">
        <h1 className="text-slate-300 font-oswald text-3xl leading-snug tracking-tighter">
          OF
        </h1>
        <div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Full screen menu */}
      <nav
        className={`fixed lg:hidden w-full bg-[#0e0d12] transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 top-[60px] h-[calc(100vh-60px)]"
            : "opacity-0 top-[-100%] h-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#section1"
            className="text-xl px-4 py-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#section2"
            className="text-xl px-4 py-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            href="#section3"
            className="text-xl px-4 py-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
        </div>
      </nav>
    </>
  );
}
