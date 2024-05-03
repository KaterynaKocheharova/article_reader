import clsx from "clsx";
import css from "./Controls.module.css";

export default function Controls({
  onNext,
  onPrev,
  isArticleFirst,
  isArticleLast,
}) {
  return (
    <div className={css["controls-container"]}>
      <button
        className={clsx(css["controls-button"], css["button-prev"])}
        onClick={onPrev}
        disabled={isArticleFirst}
      >
        Previus
      </button>
      <button
        className={clsx(css["controls-button"], css["button-next"])}
        onClick={onNext}
        disabled={isArticleLast}
      >
        Next
      </button>
    </div>
  );
}
