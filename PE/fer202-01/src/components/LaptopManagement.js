import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function LaptopManagement() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:4000/Laptops')
      .then((res) => setLaptops(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredlaptops = laptops.filter((p) =>
    p.brand.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewDetail = (id) => {
    navigate(`/laptops/${id}`);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Laptop List</h2>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by branch or model"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>
      <Row>
        {filteredlaptops.map((laptop) => (
          <Col key={laptop.id} md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={laptop.image}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  <p className="mb-0">Year: {laptop.year}</p>
                  <p className="price">Price: {laptop.price}</p>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleViewDetail(laptop.id)}
                  className="me-2"  
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LaptopManagement;