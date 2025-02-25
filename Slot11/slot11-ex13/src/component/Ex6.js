import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setIsFormValid(name.length >= 3 && gender && country && agreed);
  }, [name, gender, country, agreed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <Container className="form-container">
      <h3 className="title">Đăng ký</h3>
      {showAlert && <Alert variant="success">Đăng ký thành công!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Họ và Tên</Form.Label>
          <Form.Control
            type="text"
            className={`custom-input ${name.length >= 3 ? "is-valid" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={name.length < 3}
          />
          <Form.Control.Feedback type="invalid">Tên phải có ít nhất 3 ký tự!</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Tên hợp lệ!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGender" className="mt-3">
          <Form.Label>Giới tính</Form.Label>
          <br></br>
          <Form.Check inline type="radio" label="Male" name="gender" onChange={() => setGender("Male")} />
          <Form.Check inline type="radio" label="Female" name="gender" onChange={() => setGender("Female")} />
          <Form.Check inline type="radio" label="Other" name="gender" onChange={() => setGender("Other")} />
        </Form.Group>

        <Form.Group controlId="formCountry" className="mt-3">
          <Form.Label>Quốc gia</Form.Label>
          <Form.Control as="select" onChange={(e) => setCountry(e.target.value)}>
            <option value="">-- Chọn quốc gia --</option>
            <option value="VietNam">Việt Nam</option>
            <option value="US">Mỹ</option>
            <option value="Japan">Nhật Bản</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formAgreement" className="mt-3">
          <Form.Check type="checkbox" label="Tôi đồng ý với điều khoản" onChange={(e) => setAgreed(e.target.checked)} />
        </Form.Group>

        <Button type="submit" className="gradient-button mt-3" disabled={!isFormValid}>
          Đăng ký
        </Button>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
