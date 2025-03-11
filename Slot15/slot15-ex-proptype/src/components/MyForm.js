import React, { useState, useReducer } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const initialState = { name: "", email: "", password: "", isSubmitted: false };

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

const MyForm = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });

  const handleValidation = () => {
    const newErrors = {};
    if (!state.name) newErrors.name = "Tên không được để trống!";
    if (!state.email) newErrors.email = "Email không được để trống!";
    if (!state.password) newErrors.password = "Mật khẩu không được để trống!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setAlertMessage("Lỗi: Vui lòng kiểm tra các trường hợp lỗi.");
      return false;
    }

    setAlertMessage("Gửi thành công");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container>
      <h3>{title}</h3>
      {alertMessage && <Alert variant={alertMessage.includes("Lỗi") ? "danger" : "success"}>{alertMessage}</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control type="text" name="name" value={state.name} onChange={handleChange} isInvalid={!!errors.name} />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={state.email} onChange={handleChange} isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" name="password" value={state.password} onChange={handleChange} isInvalid={!!errors.password} />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">Gửi</Button>
      </Form>
    </Container>
  );
};

MyForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm;
