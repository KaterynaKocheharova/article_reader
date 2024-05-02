import { useState } from "react";
import "swiper/css";

import articles from "../articles.json";

export default function Reader() {
  const [articleIndex, setArticleIndex] = useState(0);

  const currentArticle = articles[articleIndex];
  const isLast = articleIndex === articles.length - 1;
  const isFirst = articleIndex === 0;

  function handleNext() {
    setArticleIndex(articleIndex + 1);
  }

  function handlePrev() {
    setArticleIndex(articleIndex - 1);
  }

  return (
    <div>
      <div>
        <div>
          <button onClick={handlePrev} disabled={isFirst}>
            Previus
          </button>
          <button onClick={handleNext} disabled={isLast}>
            Next
          </button>
        </div>
        <p>
          Progress: {articleIndex + 1} / {articles.length};
        </p>
      </div>

      <article>
        <h2>{currentArticle.title}</h2>
        <p>{currentArticle.text}</p>
      </article>
    </div>
  );
}
