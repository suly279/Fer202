import React, { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={handleToggle}>{isVisible ? "Hide" : "Show"}</button>

      {isVisible && <p>Hello! I'm hidden text!</p>}
    </div>
  );
}

export default ToggleVisibility;