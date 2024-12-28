import ContentParagraph from "./ContentParagraph";

const experienceArr = [
  {
    title: "Freelance Developer",
    timeSpan: "2023 - Present",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
  {
    title: "Fullstack Developer",
    timeSpan: "2021 - 2022",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
  {
    title: "Ophthalmology Technician",
    timeSpan: "2024",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
  {
    title: "Advanced Clinical Associate",
    timeSpan: "2023 - 2024",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
  {
    title: "Medical Scribe",
    timeSpan: "2022 - 2023",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum similique possimus nihil vero molestias sint velit, esse
            fugit eveniet consequuntur saepe enim illo nam!`,
  },
];

export default function ExperienceList() {
  return (
    <section className="mt-16">
      <ContentParagraph topic="Experience" content="I have extensive experience in web development and healthcare."/>
      <ul className="list-disc ml-10 mt-6">
        {experienceArr.map((exp, index) => (
          <li className="mb-6" key={index}>
            <h3>{exp.title}</h3>
            <span>{exp.timeSpan}</span>
            <p>
              {exp.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
