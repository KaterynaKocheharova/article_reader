import { useState } from "react";
import Progress from "../Progress/Porogress";
import Controls from "../Controls/Controls";
import Article from "../Article/Article";
import UpdateVisibilityButton from "../UpdateVisibilityButton/UpdateVisibilityButton";

import articles from "../../articles.json";

export default function Reader() {
  const [articleIndex, setArticleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const currentArticle = articles[articleIndex];
  const isLast = articleIndex === articles.length - 1;
  const isFirst = articleIndex === 0;

  function handleNext() {
    setArticleIndex(articleIndex + 1);
  }

  function handlePrev() {
    setArticleIndex(articleIndex - 1);
  }

  function updateVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <div>
        <Controls
          onNext={handleNext}
          onPrev={handlePrev}
          isArticleFirst={isFirst}
          isArticleLast={isLast}
        />
        <Progress current={articleIndex + 1} total={articles.length} />
      </div>
      {isVisible && <Article articleData={currentArticle} />}
      <UpdateVisibilityButton
        onUpdateVisibility={updateVisibility}
        isVisible={isVisible}
      />
    </div>
  );
}