import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState("");
  const bcg = rgb.join(",");
  const hexValue = `#${hex}`;

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
};

export default SingleColor;
