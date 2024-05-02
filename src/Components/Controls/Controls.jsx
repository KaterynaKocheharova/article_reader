export default function Controls({
  onNext,
  onPrev,
  isArticleFirst,
  isArticleLast,
}) {
  return (
    <div>
      <button onClick={onPrev} disabled={isArticleFirst}>
        Previus
      </button>
      <button onClick={onNext} disabled={isArticleLast}>
        Next
      </button>
    </div>
  );
}
