import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Container, Button } from "react-bootstrap";

function ThemeComponent() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Container
      className={`theme-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <h3>Chế độ hiện tại: {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h3>
      <div className="d-flex justify-content-center">
        <Button className="gradient-button mt-4" onClick={toggleTheme}>
          Chuyển đổi Theme
        </Button>
      </div>

    </Container>
  );
}

export default ThemeComponent;
