import css from "./App.module.css";
import Reader from "./Components/Reader/Reader";

export default function App() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <Reader />
      </div>
    </section>
  );
}
