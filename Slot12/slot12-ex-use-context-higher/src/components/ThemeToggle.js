import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button, Container } from "react-bootstrap";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Container className="d-flex justify-content-center my-3">
      <Button onClick={toggleTheme} className="gradient-button">
        {isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </Button>
    </Container>
  );
}

export default ThemeToggle;
