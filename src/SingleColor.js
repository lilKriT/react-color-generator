import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState("");
  const bcg = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const alertTimeout = setTimeout(() => setAlert(false), 3000);

    return () => {
      clearTimeout(alertTimeout);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
