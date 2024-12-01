import { useState } from "react";
import ExpItem from "./ExpItem";
import { expItemsArr } from "../expItemsArr";
import Button from "./Button";

export default function Experience() {
  const [items] = useState(expItemsArr);

  return (
    <div className="mt-20 scroll-mt-[60.5px]" id="section2">
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
      <Button />
    </div>
  );
}
