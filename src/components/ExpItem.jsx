export default function ExpItem({ years, title, content }) {
  return (
    <li className="mb-10">
      <span className="text-slate-600 text-base font-bold">{years}</span>
      <h2 className="text-lg font-medium leading-relaxed">{title}</h2>
      <p>{content}</p>
    </li>
  );
}
