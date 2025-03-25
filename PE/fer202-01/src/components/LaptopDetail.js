import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

function LaptopDetail() {
  const [laptop, setLaptop] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/Laptops/${id}`)
      .then((res) => setLaptop(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleGoHome = () => {
    navigate('/laptops');
  };

  if (!laptop) return <div>Loading...</div>;

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img
          variant="top"
          src={laptop.image}
          style={{ height: '300px', width: "fit-content" }}
        />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>
            <p className="mb-0 mt-3">Year: {laptop.year}</p>
            <p className="price mb-0">Price: {laptop.price}</p>
            <p>Description:</p>
          </Card.Text>
          <Button variant="primary" onClick={handleGoHome}>
            Back to Laptop List
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LaptopDetail;