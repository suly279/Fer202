import React from "react";
import { Col, Button, Form } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <Col md={6}>
      <div style={{ borderColor: "gray", borderRadius: "5px" }} className="border p-3">
        <img src={student.avatar} className="w-100" alt="Student" />
        <div className="text-center mt-3">{student.id}</div>
        <div className="d-flex justify-content-between align-items-center mt-3 px-3">
          <div>{student.name}</div>
          <div>{student.location}</div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Form.Check type="radio" label="Present" name={`attendance${student.id}`} className="me-5" />
          <Form.Check type="radio" label="Absent" name={`attendance${student.id}`} className="ms-5" />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Button style={{ backgroundColor: "#F38F31", borderColor: "gray", borderRadius: "5px" }} variant="warning" className="text-white">Submit</Button>
        </div>
      </div>
    </Col>
  );
};

export default StudentCard;