import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

function ValidatedInput({ validationFunction, placeholder, successMessage }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <Container className="form-container">
      <h3 className="title">Kiểm Tra Đầu Vào</h3>
      {showAlert && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nhập giá trị</Form.Label>
          <Form.Control
            type="text"
            placeholder={placeholder}
            className={`custom-input ${isValid ? "is-valid" : ""}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            isInvalid={!isValid}
          />
          <Form.Control.Feedback type="invalid">Dữ liệu không hợp lệ!</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Dữ liệu hợp lệ!</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="gradient-button mt-3" disabled={!isValid}>
          Gửi
        </Button>
      </Form>
    </Container>
  );
}

export default ValidatedInput;
