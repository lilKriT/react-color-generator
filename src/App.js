import { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#f85b1a");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f85b1a").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let shades = new Values(color).all(10);
      setList(shades);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f85b1a"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} hex={color.hex} />
        ))}
      </section>
    </>
  );
}

export default App;
