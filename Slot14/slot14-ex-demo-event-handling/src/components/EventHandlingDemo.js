import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function EventHandlingDemo() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <Container className="text-center mt-4">
      <h3>Event Handling Demo</h3>
      <p>Bạn vừa click {count} lần rồi đấy ạ!</p>
      <Button variant="primary" onClick={handleButtonClick}>
        Click me
      </Button>
    </Container>
  );
}

export default EventHandlingDemo;
