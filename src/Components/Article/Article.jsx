import css from "./Article.module.css";

export default function Article({ articleData: { topic, text } }) {
  return (
    <article>
      <h2 className={css["article-title"]}>{topic}</h2>
      <p className={css["article-text"]}>{text}</p>
    </article>
  );
}
