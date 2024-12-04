export default function Projects() {
  return (
    <div className="mt-20 scroll-mt-[60.5px]" id="section3">
      <h1 className="text-slate-300 font-medium text-2xl">Projects</h1>
      <ul className="text-slate-400 mt-10">
        <li className="flex flex-col md:flex-row p-4 my-4 rounded-lg hover:bg-slate-400/5 hover:cursor-pointer transition-colors">
          <img src="https://placehold.co/200" alt="placeholder image" className="rounded-md"/>
          <div className="mt-4 md:mt-0 md:ml-4">
            <h2 className="text-xl leading-relaxed">Groovehunt</h2>
            <p>
              A C2C marketplace for buying and selling vinyl records, CDs and other physical formats of music.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
