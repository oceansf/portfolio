export default function LeftPanel() {
  return (
    <div className="bg-[#0e0d12] flex-1">
      <div className="absolute inset-x-32 inset-y-1/3">
        <h1 className="text-slate-300 text-7xl font-semibold leading-normal tracking-tighter">
          Ocean Fuaga
        </h1>
        <h3 className="text-slate-400 text-3xl font-normal leading-snug">
          Full-stack Developer
        </h3>
        <h3 className="text-slate-400 text-3xl">Austin, TX</h3>
        <nav className="inline-block">
          <ul className="text-slate-400 text-3xl mt-32 leading-loose">
            <li className="hover:font-semibold cursor-pointer">About</li>
            <li className="hover:font-semibold cursor-pointer">Experience</li>
            <li className="hover:font-semibold cursor-pointer">Projects</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
