export default function SendButton() {
  return (
    /* From Uiverse.io by adamgiebl */
    <a
      href="mailto:oceansfuaga@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      <button className="sendButton mt-10 font-semibold bg-blue-500 dark:bg-blue-600 hover:bg-blue-400 dark:hover:bg-blue-500 text-slate-50 py-2.5 px-5 flex items-center border-none rounded-lg overflow-hidden transition-all duration-200 cursor-pointer shadow-lg shadow-blue-500/50 dark:shadow-blue-600/50 text-slate-50">
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span className="drop-shadow">Let's connect</span>
      </button>
    </a>
  );
}
