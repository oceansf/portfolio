import ContentParagraph from "./SectionHeader";

const experienceArr = [
  {
    title: "Freelance Developer",
    timeSpan: "2023 — Present",
    employer: "",
    text: `Design and implement custom web solutions focusing on conversion optimization and traffic growth. Develop responsive websites using modern JavaScript frameworks, PHP, and WordPress. Collaborate directly with clients to translate business requirements into technical solutions while maintaining focus on performance metrics and user engagement.`,
  },
  {
    title: "Fullstack Developer",
    timeSpan: "2021 — 2022",
    employer: "Votive Health",
    text: `Architected and developed a comprehensive business dashboard for palliative care management using React.js and AWS infrastructure. Implemented complex data visualization features and real-time updates through GraphQL API integration. Led the design and implementation of scalable NoSQL database solutions using DynamoDB, while maintaining agile development practices and cross-team collaboration.`,
  },
  {
    title: "Volunteer Social Media Manager",
    timeSpan: "2022 — Present",
    employer: "NAMI Multnomah",
    text: `Spearhead digital content strategy and creation for mental health nonprofit campaigns and educational initiatives. Design and implement social media content calendar using Canva and Buffer, focusing on engagement metrics and community outreach. Coordinate with mental health professionals to ensure accurate representation of therapeutic content and resources.`,
  },
  {
    title: "Ophthalmology Technician",
    timeSpan: "March — Aug 2024",
    employer: "Austin Eye",
    text: `Managed clinical workflow and performed comprehensive diagnostic measurements for multiple ophthalmologists. Developed and implemented patient education protocols for premium lens options and surgical procedures. Collaborated with providers to optimize documentation efficiency while maintaining accuracy in electronic health records.`,
  },
  {
    title: "Advanced Clinical Associate",
    timeSpan: "2023 — 2024",
    employer: "Legacy GoHealth",
    text: `Led patient care initiatives in high-volume urgent care setting, performing complex clinical procedures and point-of-care testing. Coordinated with medical staff to optimize patient flow and documentation processes. Executed various medical procedures including EKGs, suture removals, and vaccine administration while maintaining strict protocol adherence.`,
  },
  {
    title: "Medical Scribe",
    timeSpan: "2022 — 2023",
    employer: "ScribeAmerica",
    text: `Orchestrated clinical documentation systems for multiple ophthalmologists. Developed and implemented efficient pre-charting workflows while managing real-time visit documentation. Trained and mentored new scribes while interpreting complex diagnostic imaging and maintaining detailed electronic health records.`,
  },
];

export default function ExperienceList() {
  return (
    <section className="mt-16">
      <ContentParagraph topic="Experience" content="" />
      <ul className=" mt-6">
        {experienceArr.map((exp, index) => (
          <li className="mb-8" key={index}>
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold dark:text-slate-300">{exp.title}</h3>
              <span className="whitespace-nowrap text-sm text-slate-400 dark:text-slate-500 font-bold">
                {exp.timeSpan}
              </span>
            </div>
            <h4 className="text-slate-400 text-sm dark:text-slate-500 font-semibold">
              {exp.employer ? exp.employer : ""}
            </h4>
            <p className="pt-1">{exp.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
