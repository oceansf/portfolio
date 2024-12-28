type ContentParagraphProps = {
  topic: string;
  content: string;
}

export default function ContentParagraph({ topic, content }: ContentParagraphProps) {
  return (
      <section>
        <h2 className="font-header text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-300 mb-6">
          <span className="text-blue-500 dark:text-blue-400">#</span> {topic}
        </h2>
        <p className="whitespace-pre-wrap">{content}</p>
      </section>
  );
}
