import React, { useState } from "react";

const LightDarkTheme = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="light-dark-mode">
      <div className="container">
        <p>Hello World</p>
        <button>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkTheme;
