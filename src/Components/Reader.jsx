import { useState } from "react";
import articles from "../articles.json";

export default function Reader() {
  const [index, setIndex] = useState(0);

  function addIndex() {
    setIndex(index + 1);
  }

  function subtractIndex() {
    setIndex(index - 1);
  }

  return (
    <div>
      <button onClick={subtractIndex}>Previus</button>
      <button onClick={addIndex}>Next</button>
      <p>Progress:{index + 1}/10</p>
      <div>
        <p>{articles[index] && articles[index].text}</p>
      </div>
    </div>
  );
}
