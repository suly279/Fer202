import React, { useState } from 'react';
import { Form, Alert, Container } from 'react-bootstrap';

function MyRadioButton() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setAlertMessage(`You selected: ${value}`);
    setShowAlert(true);
  };

  return (
    <Container className="mt-4 d-flex flex-column justify-content-center align-items-center">
      <h3>Radio Button Demo</h3>
      <Form>
        <Form.Check
          type="radio"
          label="Option 1"
          value="option1"
          checked={selectedValue === "option 1"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="Option 2"
          value="option2"
          checked={selectedValue === "option 2"}
          onChange={handleChange}
        />
      </Form>

      {showAlert && (
        <Alert 
          variant="info" 
          className="mt-3" 
          onClose={() => setShowAlert(false)} 
          dismissible
        >
          You selected: {selectedValue}
        </Alert>
      )}
    </Container>
  );
}

export default MyRadioButton;
