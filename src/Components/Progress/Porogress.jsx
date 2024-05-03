import css from "./Progress.module.css";

export default function Progress({ current, total }) {
  return (
    <p className={css["progress-text"]}>
      Progress: {current} / {total}
    </p>
  );
}
