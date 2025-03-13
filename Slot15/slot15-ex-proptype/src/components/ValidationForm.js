import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const ValidationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name || formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Tên phải từ 3-50 ký tự!";
    }

    const age = parseInt(formData.age, 10);
    if (!formData.age || isNaN(age) || age < 18 || age > 100) {
      newErrors.age = "Tuổi phải là số hợp lệ từ 18-100!";
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10-15 chữ số!";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Bạn phải đồng ý với điều khoản!";
    }

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
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <h3>Đăng Ký</h3>
      {alertMessage && (
        <Alert variant={alertMessage.includes("Lỗi") ? "danger" : "success"}>
          {alertMessage}
        </Alert>
      )}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control type="text" name="age" value={formData.age} onChange={handleChange} isInvalid={!!errors.age} />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formTerms" style={{textAlign: "left"}}>
          <Form.Check type="checkbox" name="termsAccepted" label="Tôi đồng ý với điều khoản" 
          checked={formData.termsAccepted} onChange={handleChange} isInvalid={!!errors.termsAccepted} />
          <Form.Control.Feedback type="invalid">{errors.termsAccepted}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">Đăng Ký</Button>
      </Form>
    </Container>
  );
};

ValidationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ValidationForm;
