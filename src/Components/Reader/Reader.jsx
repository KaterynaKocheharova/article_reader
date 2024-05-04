import { useState, useEffect } from "react";
import Progress from "../Progress/Porogress";
import Controls from "../Controls/Controls";
import Article from "../Article/Article";
import UpdateVisibilityButton from "../UpdateVisibilityButton/UpdateVisibilityButton";

import articles from "../../articles.json";

function getInitialIndexFromLS() {
  const currentData = localStorage.getItem("currentIndex");
  if (currentData !== null) {
    return JSON.parse(currentData);
  } else {
    return 0;
  }
}

function setIndexToLS(index) {
  localStorage.setItem("currentIndex", JSON.stringify(index));
}

export default function Reader() {
  const [articleIndex, setArticleIndex] = useState(getInitialIndexFromLS);
  const [isVisible, setIsVisible] = useState(true);

  function handleNext() {
    setArticleIndex(articleIndex + 1);
  }

  function handlePrev() {
    setArticleIndex(articleIndex - 1);
  }

  useEffect(() => {
    setIndexToLS(articleIndex);
  }, [articleIndex]);

  function updateVisibility() {
    setIsVisible(!isVisible);
  }

  const currentArticle = articles[articleIndex];
  const isLast = articleIndex === articles.length - 1;
  const isFirst = articleIndex === 0;

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
