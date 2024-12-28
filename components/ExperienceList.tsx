import ContentParagraph from "./ContentParagraph";

const experienceArr = [
  {
    title: "Freelance Developer",
    timeSpan: "2023 - Present",
    employer: "",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
  {
    title: "Fullstack Developer",
    timeSpan: "2021 - 2022",
    employer: "Votive Health",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
  {
    title: "Volunteer Social Media Manager",
    timeSpan: "2022 - Present",
    employer: "NAMI Multnomah",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
  {
    title: "Ophthalmology Technician",
    timeSpan: "April - Aug 2024",
    employer: "Austin Eye",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
  {
    title: "Advanced Clinical Associate",
    timeSpan: "2023 - 2024",
    employer: "Legacy GoHealth",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
  {
    title: "Medical Scribe",
    timeSpan: "2022 - 2023",
    employer: "ScribeAmerica",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
];

export default function ExperienceList() {
  return (
    <section className="mt-16">
      <ContentParagraph topic="Experience" content="I have extensive experience in both fields of web development and healthcare."/>
      <ul className="sm:list-disc sm:pl-4 mt-6">
        {experienceArr.map((exp, index) => (
          <li className="mb-8" key={index}>
            <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <span className="text-sm text-slate-400 dark:text-slate-500 font-bold">{exp.timeSpan}</span>
            </div>
            <h4 className="text-slate-400 dark:text-slate-500 font-semibold">{exp.employer ? `@ ${exp.employer}` : ''}</h4>
            <p className="pt-1">
              {exp.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
