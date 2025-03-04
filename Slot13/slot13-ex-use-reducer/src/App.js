import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Counter from "./components/Counter";
import NameAgeForm from "./components/NameAgeForm";
import EditableList from "./components/EditableList";
import AdvancedQuiz from "./components/AdvancedQuiz";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">🌟 Suly Exercise App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
                <Nav.Link as={Link} to="/form">Form</Nav.Link>
                <Nav.Link as={Link} to="/list">List item</Nav.Link>
                <Nav.Link as={Link} to="/quiz">Quizz</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<NameAgeForm />} />
          <Route path="/list" element={<EditableList />} />
          <Route path="/quiz" element={<AdvancedQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
