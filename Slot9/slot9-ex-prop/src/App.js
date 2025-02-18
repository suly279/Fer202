import NameList from "./component/NameList";
import UserProfile from "./component/UserProfile";
import Welcome from "./component/Welcome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import tui from "./image/tuiii.jpg";

import StudentCard from "./component/StudentCard";

function App() {
  const userData = { name: "Do Thi Thu Ngan", age: 20 };
  const namesList = ["Ngan", "Suly"];

  const students = [
    { name: "Suly", age: 18, avatar: tui },
    { name: "Suly", age: 19, avatar: tui },
    { name: "Suly", age: 20, avatar: tui },
  ];
  return (
    <>
      <Welcome name="sulycodebug" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
