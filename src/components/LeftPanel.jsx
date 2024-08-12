export default function LeftPanel() {
  return (
    // Hide component when on mobile screens
    <div className="bg-[#0e0d12] flex-none flex-col w-1/3 flex items-center justify-center hidden lg:flex">
      <div>
        <h1 className="text-slate-300 text-7xl font-semibold leading-snug tracking-tighter">
          Ocean Fuaga
        </h1>
        <h3 className="text-slate-400 text-3xl leading-snug">
          Full-stack Developer
        </h3>
        <h3 className="text-slate-400 text-3xl">Austin, TX</h3>

        <nav className="mt-20">
          <ul className="text-slate-400 text-3xl inline-block leading-loose">
            <li className="hover:font-semibold cursor-pointer">About</li>
            <li className="hover:font-semibold cursor-pointer">Experience</li>
            <li className="hover:font-semibold cursor-pointer">Projects</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
