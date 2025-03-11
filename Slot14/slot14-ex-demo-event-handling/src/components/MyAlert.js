import React, { useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';

function MyAlert() {
  const [show, setShow] = useState(false);

  const handleButtonClick = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Container className="text-center mt-4">
      <h3>Alert Example</h3>
      <Button variant="success" onClick={handleButtonClick}>
        Show Alert
      </Button>

      {show && (
        <Alert className="mt-3" variant="success" dismissible onClose={() => setShow(false)}>
          <Alert.Heading>Success!</Alert.Heading>
          <p>This is a success alert—check it out!</p>
        </Alert>
      )}
    </Container>
  );
}

export default MyAlert;
