export default function LeftPanel() {
  return (
    // Hide component when on mobile screens
    <div className="bg-[#0e0d12] flex-none flex-col w-1/3 items-end justify-center hidden lg:flex">
      <div>
        <h1 className="text-slate-300 text-5xl font-semibold leading-snug tracking-tighter">
          Ocean Fuaga
        </h1>
        <h3 className="text-slate-400 text-2xl leading-snug">
          Full-stack Developer
        </h3>
        <h3 className="text-slate-400 text-2xl">Austin, TX</h3>

        <nav className="mt-20">
          <ul className="text-slate-400 text-2xl inline-block leading-loose">
            <li className="hover:text-slate-300 transition ease-in-out duration-150 cursor-pointer">
              <a href="#section1">About</a>
            </li>
            <li className="hover:text-slate-300 transition ease-in-out duration-150 cursor-pointer">
              <a href="#section2">Experience</a>
            </li>
            <li className="hover:text-slate-300 transition ease-in-out duration-150 cursor-pointer">
              <a href="#section3">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
