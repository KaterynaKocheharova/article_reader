export default function Artcile({ articleData: { title, text } }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
