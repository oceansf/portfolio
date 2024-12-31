import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section>
      <SectionHeader topic="About" />
      <p className="whitespace-pre-wrap">
        I&apos;m a{" "}
        <span className="font-semibold dark:text-slate-300">
          frontend developer
        </span>{" "}
        based in Austin, TX. My unique background spans both healthcare and
        software development, giving me a unique approach to crafting digital
        solutions. With experience in patient care and medical documentation, I
        bring a detail-oriented mindset and deep understanding of user needs to
        every project I undertake.
      </p>
    </section>
  );
}
