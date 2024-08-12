export default function LeftPanel() {
  return (
    <div className="bg-[#0e0d12] flex-1">
      {/* <div className="absolute inset-x-32 inset-y-1/3"> */}
      <div className="absolute inset-y-1/3 pl-64">
        <div>
          <h1 className="text-slate-300 text-7xl font-semibold leading-snug tracking-tighter">
            Ocean Fuaga
          </h1>
          <h3 className="text-slate-400 text-3xl leading-snug">
            Full-stack Developer
          </h3>
          <h3 className="text-slate-400 text-3xl">Austin, TX</h3>
        </div>
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
