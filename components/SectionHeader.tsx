type SectionHeaderProps = {
  topic: string;
  content?: string;
};

export default function SectionHeader({
  topic,
  content,
}: SectionHeaderProps) {
  return (
    <section>
      <h2 className="font-header text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-300 mb-3 font-mono">
        <span className="text-blue-500 dark:text-blue-400">#</span> {topic}
      </h2>
      <p className="whitespace-pre-wrap">{content}</p>
    </section>
  );
}
