import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const valid = /\S+@\S+\.\S+/.test(value);
    setIsEmailValid(valid);
    setIsFormValid(valid && isPasswordValid); 
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const valid = value.length >= 8;
    setIsPasswordValid(valid);
    setIsFormValid(valid && isEmailValid); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <Container className="form-container">
      <h3 className="title">Đăng nhập</h3>
      {showAlert && <Alert variant="success">Đăng nhập thành công!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email"
            className={`custom-input ${isEmailValid ? "is-valid" : ""}`}
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmailTouched(true)}
            isInvalid={!isEmailValid && emailTouched}
          />
          <Form.Control.Feedback type="invalid">Email không hợp lệ!</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Email hợp lệ!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            className={`custom-input ${isPasswordValid ? "is-valid" : ""}`}
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => setPasswordTouched(true)}
            isInvalid={!isPasswordValid && passwordTouched}
          />
          <Form.Control.Feedback type="invalid">Mật khẩu phải có ít nhất 8 ký tự!</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Mật khẩu hợp lệ!</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="gradient-button mt-3" disabled={!isFormValid}>
          Đăng nhập
        </Button>
      </Form>
    </Container>
  );
}

export default AuthForm;
