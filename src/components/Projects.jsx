export default function Projects() {
  return (
    <div className="mt-20">
      <h1 className="text-slate-300 font-medium text-5xl">Projects</h1>
      <ul className="text-slate-400 mt-10">
        <li className="flex flex-col md:flex-row p-4 mb-20 border rounded-lg border-slate-700">
          <div className="bg-slate-600 h-48 md:h-48 w-full md:w-2/6 rounded-md order-first md:order-none"></div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <h2 className="text-2xl leading-relaxed">Discpo.com</h2>
            <p>
              A full-scale peer-2-peer marketplace for buying and selling
              vinyls. Utilizes Discogs API for in-depth data on specific vinyls.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
