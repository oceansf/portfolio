import ContentParagraph from "./ContentParagraph";

const experienceArr = [
  {
    title: "Freelance Developer",
    timeSpan: "2023 — Present",
    employer: "",
    text: `Designed and developed websites for small businesses, focusing on increasing traffic and conversion rates while implementing custom web features using PHP and WordPress.`,
  },
  {
    title: "Fullstack Developer",
    timeSpan: "2021 — 2022",
    employer: "Votive Health",
    text: `Built a business-facing dashboard for a palliative care startup using React.js and AWS. I integrated client-requested features through agile development, learned new technologies, designed user interfaces, and implemented a NoSQL database solution using DynamoDB and GraphQL API.`,
  },
  {
    title: "Volunteer Social Media Manager",
    timeSpan: "2022 — Present",
    employer: "NAMI Multnomah",
    text: `Designed and published social media content for a national mental health nonprofit, creating materials for live group therapy sessions, fundraiser events, and mental health education using Canva and Buffer.`,
  },
  {
    title: "Ophthalmology Technician",
    timeSpan: "March — Aug 2024",
    employer: "Austin Eye",
    text: `Worked as an Ophthalmic Technician, rooming patients, performing diagnostic measurements, educating patients about cataract surgery and premium lens options, and transcribing patient documentation alongside providers.`,
  },
  {
    title: "Advanced Clinical Associate",
    timeSpan: "2023 — 2024",
    employer: "Legacy GoHealth",
    text: `Served as an Advanced Clinical Associate in an urgent care setting, performing duties such as point-of-care lab testing, patient rooming, documentation, medication administration, and minor procedures including suture removals, EKGs, and vaccine administration.`,
  },
  {
    title: "Medical Scribe",
    timeSpan: "2022 — 2023",
    employer: "ScribeAmerica",
    text: `Managed clinical documentation for two Kaiser Permanente ophthalmologists, which involved pre-charting medical notes, documenting patient visits, interpreting OCT images and fundus photography, coordinating clinic flow, and training new scribes.`,
  },
];

export default function ExperienceList() {
  return (
    <section className="mt-16">
      <ContentParagraph
        topic="Experience"
        content="I have extensive experience in both fields of web development and healthcare."
      />
      <ul className="sm:list-disc sm:pl-4 mt-6">
        {experienceArr.map((exp, index) => (
          <li className="mb-8" key={index}>
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <span className="whitespace-nowrap text-sm text-slate-400 dark:text-slate-500 font-bold">
                {exp.timeSpan}
              </span>
            </div>
            <h4 className="text-slate-400 dark:text-slate-500 font-semibold">
              {exp.employer ? `@ ${exp.employer}` : ""}
            </h4>
            <p className="pt-1">{exp.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
