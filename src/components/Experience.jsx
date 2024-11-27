import { useState } from "react";
import ExpItem from "./ExpItem";
import { expItemsArr } from "../expItemsArr";

export default function Experience() {
  const [items] = useState(expItemsArr);

  return (
    <div className="mt-20" id="section2">
      <h1 className="text-slate-300 font-medium text-2xl leading-loose">
        Experience
      </h1>
      <br />
      <ul className="text-slate-400">
        {items.map((item) => (
          <ExpItem
            key={item.id}
            years={item.years}
            title={item.title}
            content={item.content}
          />
        ))}
      </ul>
      <button
        type="button"
        className="text-slate-300 border-slate-300 rounded-full transition-colors hover:text-slate-900 hover:bg-slate-300 border-2 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
          className="relative top-[1px]"
        >
          <path
            fill="currentColor"
            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          />
        </svg>
        Resume.pdf
      </button>
    </div>
  );
}
