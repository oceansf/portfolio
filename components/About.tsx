import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section>
      <SectionHeader topic="About"/>
      <p className="whitespace-pre-wrap">
        I'm a{" "}
        <span className="font-semibold dark:text-slate-300">
          frontend developer
        </span>{" "}
        based in Austin, TX. My unique background spans both healthcare and
        software development, giving me a unique approach to crafting digital
        solutions. With experience in patient care and medical documentation, I
        bring a detail-oriented mindset and deep understanding of user needs to
        every project I undertake.
        <br />
        <br />
        As a developer, I'm passionate about building comprehensive web
        applications that seamlessly blend functionality with user experience. I
        specialize in helping clients optimize their digital presence, focusing
        on both technical excellence and measurable outcomes. By combining my
        healthcare background with technical expertise, I create solutions that
        drive traffic growth and improve customer conversions while maintaining
        a strong focus on accessibility and user needs.
      </p>
    </section>
  );
}
