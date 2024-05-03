import clsx from "clsx";
import css from "./UpdateVisibilityButton.module.css";

export default function UpdateVisibilityButton({
  isVisible,
  onUpdateVisibility,
}) {
  return (
    <button
      className={clsx(
        css["update-visibility-button"],
        isVisible ? css["make-visible-button"] : css["make-invisible-button"]
      )}
      onClick={onUpdateVisibility}
    >
      {isVisible ? "Close article" : "Open article"}
    </button>
  );
}
