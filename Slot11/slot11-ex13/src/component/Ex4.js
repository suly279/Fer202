import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setIsValid(value.length >= 5);
    setErrorMessage(value.length >= 5 ? "" : "Giá trị phải có ít nhất 5 ký tự!");
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
      <h2 className="title">Form Xác Thực</h2>
      {showAlert && <Alert variant="success">Gửi thành công!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="validatedInput">
          <Form.Label>Nhập một giá trị</Form.Label>
          <Form.Control
            type="text"
            className={`custom-input ${isValid ? "is-valid" : ""}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            isInvalid={!isValid}
          />
          <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
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
