export default function TitleCard() {
  return (
    <div className="mb-24">
      <header className="text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-300">
        Ocean Fuaga
      </header>
      <h2 className="text-2xl font-semibold text-slate-500">
        Frontend Developer
      </h2>
      <h3 className="text-xl font-medium text-slate-500">Austin, TX</h3>
      <div className="flex space-x-3 mt-3 text-slate-500">
        {/* <!-- Linkedin --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 hover:cursor-pointer hover:text-blue-500 dark:hover:text-slate-50 transition"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
        {/* <!-- Github --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 hover:cursor-pointer hover:text-blue-500 dark:hover:text-slate-50 transition"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </div>
      {/* Contact button */}
      <button className="flex gap-2 py-3 px-5 bg-blue-500 hover:bg-blue-400 shadow-lg shadow-blue-500/50 dark:shadow-blue-600/50 dark:hover:shadow-blue-500/50 dark:bg-blue-600 text-slate-50 rounded-lg font-semibold dark:hover:bg-blue-500 transition mt-12">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
        Email me
      </button>
    </div>
  );
}
