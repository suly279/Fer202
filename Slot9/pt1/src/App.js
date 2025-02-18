import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import tuiii from "./image/tuiii.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";

const students = [
  { id: "DS180213", name: "Do Thi Thu Ngan", location: "Da Nang", avatar: tuiii },
  { id: "DS180214", name: "Do Thi SulySuly", location: "Ha Noi", avatar: tuiii },
  { id: "DS180215", name: "Do Thi NganNgan", location: "Ho Chi Minh", avatar: tuiii },
  { id: "DS180216", name: "Do Thi Minh", location: "Can Tho", avatar: tuiii }
];

const App = () => {
  return (
    <div>
      <Header />

      <Container className="text-center mt-5">
        <h1 className="fw-bold">Student Detail</h1>
      </Container>

      <Container className="mb-5">
        <Row className="ps-5 ms-5 me-5 pe-5">
          {students.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
